
export class Logger {

  success(msg: string) {
    console.log(`${color.green(msg)}`)
  }

  info(msg: string) {
    console.log(msg)
  }

  warn(msg: string) {
    console.log(`${color.yellow(msg)}`)
  }

  error(msg: string) {
    console.log(`${color.red(msg)}`)
  }

  dim(msg: string) {
    console.log(`${color.dim(msg)}`)
  }
}

export const color = {
  red:    (s: string) => `\x1b[31m${s}\x1b[0m`,
  green:  (s: string) => `\x1b[32m${s}\x1b[0m`,
  yellow: (s: string) => `\x1b[33m${s}\x1b[0m`,
  blue:   (s: string) => `\x1b[36m${s}\x1b[0m`,
  dim:    (s: string) => `\x1b[2m${s}\x1b[0m`,
  bold:   (s: string) => `\x1b[1m${s}\x1b[0m`,
}