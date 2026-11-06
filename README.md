# HuntAPI CLI

Official command-line interface for the [HuntAPI](https://www.huntapi.com) media download API.

Download video and audio from public media URLs, or extract their metadata, with one async REST API.

Every documented endpoint is a command — **6 commands** — and `request` reaches any other path. JSON responses are pretty-printed; files (images, PDFs…) are saved with `-o`.

## Requirements

- Node.js 20 or newer
- a HuntAPI [API key](https://app.huntapi.com)

## Install

```sh
npm install --global @huntapi/cli
huntapi --help
```

Or run it without installing:

```sh
npx @huntapi/cli --help
```

## Configure your API key

The CLI reads the key from the environment; it does not load `.env` files.

```sh
export HUNTAPI_API_KEY="YOUR_API_KEY"
```

PowerShell:

```powershell
$env:HUNTAPI_API_KEY = "YOUR_API_KEY"
```

## Usage

```sh
huntapi media-metadata --query 'https://www.youtube.com/watch?v=Z5YP8kznWZs'
```

Parameters use the names of the [API reference](https://docs.huntapi.com) as flags: `--full-page` and `--full_page` are equivalent. Boolean flags can be bare (`--flag`) or explicit (`--flag=false`); array parameters accept commas or repeated flags.

```sh
huntapi media-metadata --help     # parameters of one command
huntapi endpoints                # every command and its HTTP path
huntapi endpoints search         # filter the list
```

### JSON parameters

```sh
echo '{"query": "https://www.youtube.com/watch?v=Z5YP8kznWZs"}' | huntapi media-metadata --params -
huntapi media-metadata --params params.json --compact
```

Flags override values read with `--params`.

### Any endpoint

```sh
huntapi request get /v1/usage
huntapi request post /v1/some/new/endpoint --params body.json
```

### Pipe into jq

```sh
huntapi media-metadata --query 'https://www.youtube.com/watch?v=Z5YP8kznWZs' | jq .
```

## Exit codes

| Code | Meaning                                                                             |
| ---- | ----------------------------------------------------------------------------------- |
| `0`  | Success.                                                                            |
| `1`  | The API returned an error (details on standard error) or the network failed.        |
| `2`  | Invalid usage: unknown command or parameter, missing API key or required parameter. |

## Commands

| Command          | HTTP                            | Description                                                                                                              |
| ---------------- | ------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `audio-download` | GET / POST `/v1/audio/download` | Download audio from a URL via HuntAPI and receive a job id.                                                              |
| `jobs`           | GET `/v1/jobs/{id}`             | Poll status, progress (0–100), and result of an async HuntAPI job.                                                       |
| `media-metadata` | GET `/v1/media/metadata`        | Extract metadata from a media URL without downloading the file.                                                          |
| `stats`          | GET `/v1/stats`                 | Infrastructure health for an engine or endpoint over the last hour. Not scoped to your account or tenant. Enabled per a… |
| `usage`          | GET `/v1/usage`                 | Retrieve real-time usage statistics and credit balance for your Huntapi account.                                         |
| `video-download` | GET / POST `/v1/video/download` | Video Download                                                                                                           |

## Built on the SDK

The CLI uses the official [Node.js SDK](https://github.com/huntapi/huntapi-node) (`@huntapi/sdk`). Use the SDK directly for programmatic access.

## License

MIT — see [LICENSE](LICENSE).
