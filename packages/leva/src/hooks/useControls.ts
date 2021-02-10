import { globalStore } from '../store'
import { useRootControls, HookSettings, SchemaOrFn } from './useRootControls'
import { useRenderRoot } from '../components/Leva'
import { Schema } from '../types'

/**
 * Main hook of Leva. Pass an optional name and an input schema. Uses the global
 * store.
 *
 * @param nameOrSchema
 * @param schema
 * @param settings
 */
export function useControls<S extends Schema, F extends SchemaOrFn<S>>(
  nameOrSchema: string | F,
  schemaOrSettings?: F | HookSettings,
  settingsOrUndefined?: HookSettings
) {
  // Renders <Leva /> only if it's not manually rendered by the user
  useRenderRoot()
  return useRootControls(globalStore, nameOrSchema, schemaOrSettings, settingsOrUndefined)
}