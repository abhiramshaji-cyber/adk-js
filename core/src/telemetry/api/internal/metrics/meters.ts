/**
 * @license
 * Copyright 2026 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {metrics, type Meter} from '@opentelemetry/api';

import {version} from '../../../../version.js';
import {GEN_AI_SYSTEM_VALUE} from '../common/attributes.js';

/** Shared OpenTelemetry meter for ADK instrumentation scopes. */
export const telemetryMeter: Meter = metrics.getMeter(
  GEN_AI_SYSTEM_VALUE,
  version,
);
