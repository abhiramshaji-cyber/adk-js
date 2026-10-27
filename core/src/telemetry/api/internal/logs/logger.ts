/**
 * @license
 * Copyright 2026 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {logs, type Logger} from '@opentelemetry/api-logs';

import {version} from '../../../../version.js';
import {GEN_AI_SYSTEM_VALUE} from '../common/attributes.js';

/** Shared OpenTelemetry logger for ADK instrumentation scopes. */
export const telemetryLogger: Logger = logs.getLogger(
  GEN_AI_SYSTEM_VALUE,
  version,
);
