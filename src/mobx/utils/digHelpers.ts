import BigNumber from "bignumber.js";

const UPPER_LIMIT = 1.05 * 1e18
const LOWER_LIMIT = 0.95 * 1e18

export const getDiggExchangeRates = () => {
    return fetch("https://api.coingecko.com/api/v3/simple/price?ids=ethereum,wrapped-bitcoin&vs_currencies=usd,btc", {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    }).then(response => response.json())
}

// for dynamically calculating new supply if rebased triggered with supplied oracle rate
export const calculateNewSupply = (oracleRate: number, currentSupply: number, rebaseLag: number) => {

    if (oracleRate <= UPPER_LIMIT && oracleRate >= LOWER_LIMIT){
        return currentSupply
    }
    const rebaseAmount = currentSupply * ((oracleRate - 1) / rebaseLag)
    return currentSupply + rebaseAmount
}

// for calculating seconds until next rebase timing, used with setInterval for countdown effect
export const getRebaseCountdown = (minRebaseDurationSec: number, lastRebaseTimestampSec: number) => {
    const now = Math.floor(Date.now() / 1000);
    const diff = minRebaseDurationSec - (now - lastRebaseTimestampSec)
    return diff <= 0 ? 0 : diff
}

export const getNextRebase = (minRebaseDurationSec: number, lastRebaseTimestampSec: number) => {
    const nextRebase = minRebaseDurationSec + lastRebaseTimestampSec
    return new Date(nextRebase*1000)
}

// get percentage value of time to available rebase (for displaying in a timebar)
export const getTimeBarPercentage = (minRebaseDurationSec: number, countDown: number) => {
    return Math.max(
        ((minRebaseDurationSec - countDown) / minRebaseDurationSec) * 100, 0)
}

// convert seconds to HH:MM:SS to display countdown (can be used with getRebaseCountdown's result)
export const toHHMMSS = (secs: any) => {
    var sec_num = parseInt(secs, 10)
    var hours = Math.floor(sec_num / 3600)
    var minutes = Math.floor(sec_num / 60) % 60
    var seconds = sec_num % 60

    return [hours,minutes,seconds]
        .map(v => v < 10 ? "0" + v : v)
        .filter((v,i) => v !== "00" || i > 0)
        .join(":")
}

export const shortenNumbers = (value: BigNumber,  prefix: string, preferredDecimals: number = 5, noCommas: boolean = false): string => {
    if (!value || value.isNaN())
        return shortenNumbers(new BigNumber(0), prefix, preferredDecimals)

    let normal = value
    let decimals = preferredDecimals

    let suffix = ''

    if (!noCommas)
        if (normal.dividedBy(1e6).gt(1)) {
            normal = normal.dividedBy(1e6)
            decimals = 2
            suffix = 'm'
        } else if (normal.dividedBy(1e3).gt(1e2)) {
            normal = normal.dividedBy(1e3)
            decimals = 2
            suffix = 'k'
        } else if (normal.gt(0) && normal.lt(10 ** -preferredDecimals)) {
            normal = normal.multipliedBy(10 ** preferredDecimals)
            decimals = preferredDecimals
            suffix = `e-${preferredDecimals}`
        }

    let fixedNormal = noCommas ? normal.toFixed(decimals, BigNumber.ROUND_DOWN) : numberWithCommas(normal.toFixed(decimals, BigNumber.ROUND_DOWN))

    return `${prefix} ${fixedNormal}${suffix}`

}

export const numberWithCommas = (x: string) => {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}