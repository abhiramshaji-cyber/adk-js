/**
 * @license
 * Copyright 2026 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {context, type Context, trace} from '@opentelemetry/api';

import {version} from '../../../../version.js';
import {GEN_AI_SYSTEM_VALUE} from '../common/attributes.js';

/** Shared OpenTelemetry tracer for ADK spans. */
export const tracer = trace.getTracer(GEN_AI_SYSTEM_VALUE, version);

/**
 * Binds an async generator to OpenTelemetry context for trace propagation.
 *
 * @param ctx The OpenTelemetry context to bind the generator to.
 * @param generator The async generator to be bound to the context.
 * @returns A new async generator that executes all operations within the provided context.
 */
export function bindOtelContextToAsyncGenerator<T>(
  ctx: Context,
  generator: AsyncGenerator<T, void, void>,
): AsyncGenerator<T, void, void> {
  return {
    next: context.bind(ctx, generator.next.bind(generator)),
    return: context.bind(ctx, generator.return.bind(generator)),
    throw: context.bind(ctx, generator.throw.bind(generator)),
    [Symbol.asyncIterator]() {
      return bindOtelContextToAsyncGenerator(
        ctx,
        generator[Symbol.asyncIterator](),
      );
    },
  };
}
