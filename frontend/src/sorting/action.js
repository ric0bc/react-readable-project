export const CHANGE_SELECT_VALUE = 'CHANGE_SELECT_VALUE'

export function changeSelectValue (value) {
  return {
    type: CHANGE_SELECT_VALUE,
    value
  }
}
