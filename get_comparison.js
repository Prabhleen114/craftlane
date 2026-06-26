const fs = require('fs');
const readline = require('readline');

async function run() {
  const fileStream = fs.createReadStream('C:\\Users\\krary\\.gemini\\antigravity\\brain\\18c17a38-f2b0-4bed-908d-84d9f88916d9\\.system_generated\\logs\\transcript_full.jsonl');
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  for await (const line of rl) {
    if (line.includes('"TargetFile":"C:\\\\Users\\\\krary\\\\OneDrive\\\\Desktop\\\\craftland\\\\src\\\\components\\\\Comparison.tsx"')) {
      const parsed = JSON.parse(line);
      if (parsed.tool_calls) {
        for (const tc of parsed.tool_calls) {
          if (tc.name === 'write_to_file' && tc.args.TargetFile.endsWith('Comparison.tsx')) {
            console.log(tc.args.CodeContent);
            return;
          }
        }
      }
    }
  }
}

run();
