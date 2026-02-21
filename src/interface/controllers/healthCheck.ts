import { spawn } from 'child_process'
import util from 'util'

// const execPromise = util.promisify(exec)

export async function exec(params): Promise<{
  success: boolean
  output: Record<string, string>
}> {
  try {
    const { ip, port } = params
    let stdOut = ''
    let stdErr = ''

    const ncProcess = spawn('nc', ['-zv', ip, port])

    ncProcess.stdout.on('data', data => {
      stdOut += data.toString()
    })

    ncProcess.stderr.on('data', data => {
      stdErr += data.toString()
    })

    return new Promise(resolve => {
      ncProcess.on('close', code => {
        if (code === 0) resolve({ success: true, output: { nc: stdOut } })
        else resolve({ success: false, output: { nc: stdErr } })
      })

      ncProcess.on('error', err => {
        console.log({ err })
        resolve({ success: false, output: { error: err.message } })
      })
    })
  } catch (error: any) {
    return { success: false, output: { error: error.message } }
  }
}
