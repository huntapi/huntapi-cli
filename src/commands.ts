// Generated from the HuntAPI OpenAPI document. Do not edit by hand.

import type { CommandDefinition } from "./types.js";

export const COMMANDS: readonly CommandDefinition[] = [
  {
    command: "audio-download",
    operation: "audio_download",
    path: "/v1/audio/download",
    methods: ["GET", "POST"],
    summary: "Audio Download",
    description: "Download audio from a URL via HuntAPI and receive a job id.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "URL to download audio from.",
      },
      {
        name: "download_type",
        type: "string",
        required: false,
        description:
          "Desired download type. Supported values: audio (default).",
        default: "audio",
      },
      {
        name: "max_duration",
        type: "number",
        required: false,
        description:
          "Maximum duration of the downloaded content in seconds. If the audio is longer than this value, only the content up to this duration will be downloaded.",
      },
      {
        name: "audio_quality",
        type: "string",
        required: false,
        description: "Desired audio quality.",
        default: "best",
      },
      {
        name: "audio_format",
        type: "string",
        required: false,
        description: "Desired output format for the audio.",
        default: "mp3",
      },
      {
        name: "webhook_url",
        type: "string",
        required: false,
        description:
          "URL of the webhook where results will be sent. When specified, the system will attempt to send the response to this URL up to 3 times with a 5-second delay between each attempt. The results will be s…",
      },
      {
        name: "webhook_authorization",
        type: "string",
        required: false,
        description:
          "Authorization header for the webhook. This parameter allows you to add authentication to your webhook endpoint.",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "jobs",
    operation: "jobs",
    path: "/v1/jobs/{id}",
    methods: ["GET"],
    summary: "Jobs",
    description:
      "Poll status, progress (0–100), and result of an async HuntAPI job.",
    params: [
      {
        name: "id",
        type: "string",
        required: true,
        description:
          "Job UUID returned as job_id by async endpoints such as /v1/video/download and /v1/audio/download.",
      },
    ],
  },
  {
    command: "media-metadata",
    operation: "media_metadata",
    path: "/v1/media/metadata",
    methods: ["GET"],
    summary: "Media Metadata",
    description:
      "Extract metadata from a media URL without downloading the file.",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description:
          "Media URL to inspect (YouTube, Instagram, TikTok, Vimeo, X, Facebook, Twitch, Reddit, etc.).",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
  {
    command: "stats",
    operation: "stats",
    path: "/v1/stats",
    methods: ["GET"],
    summary: "Stats",
    description:
      "Infrastructure health for an engine or endpoint over the last hour. Not scoped to your account or tenant. Enabled per account: HTTP 403 means contact support to activate it.",
    params: [
      {
        name: "engine",
        type: "string",
        required: false,
        description:
          "API family to check, for example video. Provide at least engine or path.",
      },
      {
        name: "path",
        type: "string",
        required: false,
        description:
          "Specific endpoint to check, for example /v1/video/download. If you also pass engine, use an endpoint from that API.",
      },
    ],
  },
  {
    command: "usage",
    operation: "usage",
    path: "/v1/usage",
    methods: ["GET"],
    summary: "Usage",
    description:
      "Retrieve real-time usage statistics and credit balance for your Huntapi account.",
    params: [],
  },
  {
    command: "video-download",
    operation: "video_download",
    path: "/v1/video/download",
    methods: ["GET", "POST"],
    summary: "Video Download",
    description: "",
    params: [
      {
        name: "query",
        type: "string",
        required: true,
        description: "Video URL to download.",
      },
      {
        name: "download_type",
        type: "string",
        required: false,
        description: "Desired download type. You have three options:",
        default: "audio_video",
      },
      {
        name: "max_duration",
        type: "number",
        required: false,
        description:
          "Maximum duration of the downloaded content in seconds. If the video/audio is longer than this value, only the content up to this duration will be downloaded.",
      },
      {
        name: "video_quality",
        type: "string",
        required: false,
        description: "Desired video quality. Available options:",
        default: "best",
      },
      {
        name: "video_format",
        type: "string",
        required: false,
        description: "Desired output format for the video. Available options:",
        default: "mp4",
      },
      {
        name: "webhook_url",
        type: "string",
        required: false,
        description:
          "URL of the webhook where results will be sent. When specified, the system will attempt to send the response to this URL up to 3 times with a 5-second delay between each attempt. The results will be s…",
      },
      {
        name: "webhook_authorization",
        type: "string",
        required: false,
        description:
          "Authorization header for the webhook. This parameter allows you to add authentication to your webhook endpoint. This value will be included in the Authorization header when making the webhook request…",
      },
      {
        name: "fields",
        type: "string",
        required: false,
        description:
          "Comma-separated list of fields to keep in the response, with dot notation for nested fields (e.g. name,location.city). Does not change the credit cost.",
      },
      {
        name: "is_async",
        type: "boolean",
        required: false,
        description:
          "Process the request asynchronously: the response is a job_id to poll on /v1/jobs/{id} (see waitForJob).",
        default: false,
      },
      {
        name: "soft_fail",
        type: "boolean",
        required: false,
        description:
          "Return HTTP 200 even when an error occurs; the error is then in the response body.",
        default: false,
      },
    ],
  },
];
