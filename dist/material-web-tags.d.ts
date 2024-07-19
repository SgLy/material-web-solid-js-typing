/* eslint-disable @typescript-eslint/no-explicit-any */
import type * as SolidJS from 'solid-js';

type SelectOption = any;
type Reason = any;

declare namespace MaterialWeb {
  export interface MdElevatedButton<T> extends SolidJS.JSX.HTMLAttributes<T> {
    /**
     * @description Whether or not the button is disabled.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/button.md#mdelevatedbutton-md-elevated-button
     */
    disabled?: boolean;
    /**
     * @description Whether the button is "soft-disabled" (disabled but still focusable).
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/button.md#mdelevatedbutton-md-elevated-button
     */
    softDisabled?: boolean;
    /**
     * @description The URL that the link button points to.
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/button.md#mdelevatedbutton-md-elevated-button
     */
    href?: string;
    /**
     * @description Where to display the linked `href` URL for a link button. Common options include `_blank` to open in a new tab.
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/button.md#mdelevatedbutton-md-elevated-button
     */
    target?: string;
    /**
     * @description Whether to render the icon at the inline end of the label rather than the inline start.
     *
     * _Note:_ Link buttons cannot have trailing icons.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/button.md#mdelevatedbutton-md-elevated-button
     */
    trailingIcon?: boolean;
    /**
     * @description Whether to display the icon or not.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/button.md#mdelevatedbutton-md-elevated-button
     */
    hasIcon?: boolean;
    /**
     * @description The default behavior of the button. May be "button", "reset", or "submit" (default).
     * @default 'submit'
     * @link https://github.com/material-components/material-web/blob/main/docs/components/button.md#mdelevatedbutton-md-elevated-button
     */
    type?: string;
    /**
     * @description The value added to a form with the button's name when the button submits a form.
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/button.md#mdelevatedbutton-md-elevated-button
     */
    value?: string;
    /**
     * @default undefined
     * @link https://github.com/material-components/material-web/blob/main/docs/components/button.md#mdelevatedbutton-md-elevated-button
     */
    name?: string;
    /**
     * @default undefined
     * @link https://github.com/material-components/material-web/blob/main/docs/components/button.md#mdelevatedbutton-md-elevated-button
     */
    form?: HTMLFormElement;
  }
  export interface MdFilledButton<T> extends SolidJS.JSX.HTMLAttributes<T> {
    /**
     * @description Whether or not the button is disabled.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/button.md#mdfilledbutton-md-filled-button
     */
    disabled?: boolean;
    /**
     * @description The URL that the link button points to.
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/button.md#mdfilledbutton-md-filled-button
     */
    href?: string;
    /**
     * @description Where to display the linked `href` URL for a link button. Common options include `_blank` to open in a new tab.
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/button.md#mdfilledbutton-md-filled-button
     */
    target?: string;
    /**
     * @description Whether to render the icon at the inline end of the label rather than the inline start.
     *
     * _Note:_ Link buttons cannot have trailing icons.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/button.md#mdfilledbutton-md-filled-button
     */
    trailingIcon?: boolean;
    /**
     * @description Whether to display the icon or not.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/button.md#mdfilledbutton-md-filled-button
     */
    hasIcon?: boolean;
    /**
     * @description The default behavior of the button. May be "button", "reset", or "submit" (default).
     * @default 'submit'
     * @link https://github.com/material-components/material-web/blob/main/docs/components/button.md#mdfilledbutton-md-filled-button
     */
    type?: string;
    /**
     * @description The value added to a form with the button's name when the button submits a form.
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/button.md#mdfilledbutton-md-filled-button
     */
    value?: string;
    /**
     * @default undefined
     * @link https://github.com/material-components/material-web/blob/main/docs/components/button.md#mdfilledbutton-md-filled-button
     */
    name?: string;
    /**
     * @default undefined
     * @link https://github.com/material-components/material-web/blob/main/docs/components/button.md#mdfilledbutton-md-filled-button
     */
    form?: HTMLFormElement;
  }
  export interface MdFilledTonalButton<T> extends SolidJS.JSX.HTMLAttributes<T> {
    /**
     * @description Whether or not the button is disabled.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/button.md#mdfilledtonalbutton-md-filled-tonal-button
     */
    disabled?: boolean;
    /**
     * @description The URL that the link button points to.
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/button.md#mdfilledtonalbutton-md-filled-tonal-button
     */
    href?: string;
    /**
     * @description Where to display the linked `href` URL for a link button. Common options include `_blank` to open in a new tab.
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/button.md#mdfilledtonalbutton-md-filled-tonal-button
     */
    target?: string;
    /**
     * @description Whether to render the icon at the inline end of the label rather than the inline start.
     *
     * _Note:_ Link buttons cannot have trailing icons.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/button.md#mdfilledtonalbutton-md-filled-tonal-button
     */
    trailingIcon?: boolean;
    /**
     * @description Whether to display the icon or not.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/button.md#mdfilledtonalbutton-md-filled-tonal-button
     */
    hasIcon?: boolean;
    /**
     * @description The default behavior of the button. May be "button", "reset", or "submit" (default).
     * @default 'submit'
     * @link https://github.com/material-components/material-web/blob/main/docs/components/button.md#mdfilledtonalbutton-md-filled-tonal-button
     */
    type?: string;
    /**
     * @description The value added to a form with the button's name when the button submits a form.
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/button.md#mdfilledtonalbutton-md-filled-tonal-button
     */
    value?: string;
    /**
     * @default undefined
     * @link https://github.com/material-components/material-web/blob/main/docs/components/button.md#mdfilledtonalbutton-md-filled-tonal-button
     */
    name?: string;
    /**
     * @default undefined
     * @link https://github.com/material-components/material-web/blob/main/docs/components/button.md#mdfilledtonalbutton-md-filled-tonal-button
     */
    form?: HTMLFormElement;
  }
  export interface MdOutlinedButton<T> extends SolidJS.JSX.HTMLAttributes<T> {
    /**
     * @description Whether or not the button is disabled.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/button.md#mdoutlinedbutton-md-outlined-button
     */
    disabled?: boolean;
    /**
     * @description The URL that the link button points to.
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/button.md#mdoutlinedbutton-md-outlined-button
     */
    href?: string;
    /**
     * @description Where to display the linked `href` URL for a link button. Common options include `_blank` to open in a new tab.
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/button.md#mdoutlinedbutton-md-outlined-button
     */
    target?: string;
    /**
     * @description Whether to render the icon at the inline end of the label rather than the inline start.
     *
     * _Note:_ Link buttons cannot have trailing icons.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/button.md#mdoutlinedbutton-md-outlined-button
     */
    trailingIcon?: boolean;
    /**
     * @description Whether to display the icon or not.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/button.md#mdoutlinedbutton-md-outlined-button
     */
    hasIcon?: boolean;
    /**
     * @description The default behavior of the button. May be "button", "reset", or "submit" (default).
     * @default 'submit'
     * @link https://github.com/material-components/material-web/blob/main/docs/components/button.md#mdoutlinedbutton-md-outlined-button
     */
    type?: string;
    /**
     * @description The value added to a form with the button's name when the button submits a form.
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/button.md#mdoutlinedbutton-md-outlined-button
     */
    value?: string;
    /**
     * @default undefined
     * @link https://github.com/material-components/material-web/blob/main/docs/components/button.md#mdoutlinedbutton-md-outlined-button
     */
    name?: string;
    /**
     * @default undefined
     * @link https://github.com/material-components/material-web/blob/main/docs/components/button.md#mdoutlinedbutton-md-outlined-button
     */
    form?: HTMLFormElement;
  }
  export interface MdTextButton<T> extends SolidJS.JSX.HTMLAttributes<T> {
    /**
     * @description Whether or not the button is disabled.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/button.md#mdtextbutton-md-text-button
     */
    disabled?: boolean;
    /**
     * @description The URL that the link button points to.
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/button.md#mdtextbutton-md-text-button
     */
    href?: string;
    /**
     * @description Where to display the linked `href` URL for a link button. Common options include `_blank` to open in a new tab.
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/button.md#mdtextbutton-md-text-button
     */
    target?: string;
    /**
     * @description Whether to render the icon at the inline end of the label rather than the inline start.
     *
     * _Note:_ Link buttons cannot have trailing icons.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/button.md#mdtextbutton-md-text-button
     */
    trailingIcon?: boolean;
    /**
     * @description Whether to display the icon or not.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/button.md#mdtextbutton-md-text-button
     */
    hasIcon?: boolean;
    /**
     * @description The default behavior of the button. May be "button", "reset", or "submit" (default).
     * @default 'submit'
     * @link https://github.com/material-components/material-web/blob/main/docs/components/button.md#mdtextbutton-md-text-button
     */
    type?: string;
    /**
     * @description The value added to a form with the button's name when the button submits a form.
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/button.md#mdtextbutton-md-text-button
     */
    value?: string;
    /**
     * @default undefined
     * @link https://github.com/material-components/material-web/blob/main/docs/components/button.md#mdtextbutton-md-text-button
     */
    name?: string;
    /**
     * @default undefined
     * @link https://github.com/material-components/material-web/blob/main/docs/components/button.md#mdtextbutton-md-text-button
     */
    form?: HTMLFormElement;
  }
  export interface MdCheckbox<T> extends SolidJS.JSX.HTMLAttributes<T> {
    /**
     * @description Whether or not the checkbox is selected.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/checkbox.md#mdcheckbox-md-checkbox
     */
    checked?: boolean;
    /**
     * @description Whether or not the checkbox is indeterminate.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/checkbox.md#mdcheckbox-md-checkbox
     */
    indeterminate?: boolean;
    /**
     * @description When true, require the checkbox to be selected when participating in form submission.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#validation
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/checkbox.md#mdcheckbox-md-checkbox
     */
    required?: boolean;
    /**
     * @description The value of the checkbox that is submitted with a form when selected.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#value
     * @default 'on'
     * @link https://github.com/material-components/material-web/blob/main/docs/components/checkbox.md#mdcheckbox-md-checkbox
     */
    value?: string;
    /**
     * @default undefined
     * @link https://github.com/material-components/material-web/blob/main/docs/components/checkbox.md#mdcheckbox-md-checkbox
     */
    disabled?: boolean;
    /**
     * @default undefined
     * @link https://github.com/material-components/material-web/blob/main/docs/components/checkbox.md#mdcheckbox-md-checkbox
     */
    name?: string;
    /**
     * @description The native `change` event on [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)
     * @bubbles Yes
     * @composed No
     * @link https://github.com/material-components/material-web/blob/main/docs/components/checkbox.md#mdcheckbox-md-checkbox
     */
    onChange?: SolidJS.JSX.ChangeEventHandlerUnion<T, Event>;
    /**
     * @description The native `change` event on [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)
     * @bubbles Yes
     * @composed No
     * @link https://github.com/material-components/material-web/blob/main/docs/components/checkbox.md#mdcheckbox-md-checkbox
     */
    onchange?: SolidJS.JSX.ChangeEventHandlerUnion<T, Event>;
    /**
     * @description The native `input` event on [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
     * @bubbles Yes
     * @composed Yes
     * @link https://github.com/material-components/material-web/blob/main/docs/components/checkbox.md#mdcheckbox-md-checkbox
     */
    onInput?: SolidJS.JSX.InputEventHandlerUnion<T, InputEvent>;
    /**
     * @description The native `input` event on [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
     * @bubbles Yes
     * @composed Yes
     * @link https://github.com/material-components/material-web/blob/main/docs/components/checkbox.md#mdcheckbox-md-checkbox
     */
    oninput?: SolidJS.JSX.InputEventHandlerUnion<T, InputEvent>;
  }
  export interface MdChipSet<T> extends SolidJS.JSX.HTMLAttributes<T> {
    /**
     * @default undefined
     * @type {Chip[]}
     * @link https://github.com/material-components/material-web/blob/main/docs/components/chip.md#mdchipset-md-chip-set
     */
    chips?: HTMLElement[];
  }
  export interface MdAssistChip<T> extends SolidJS.JSX.HTMLAttributes<T> {
    /**
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/chip.md#mdassistchip-md-assist-chip
     */
    elevated?: boolean;
    /**
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/chip.md#mdassistchip-md-assist-chip
     */
    href?: string;
    /**
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/chip.md#mdassistchip-md-assist-chip
     */
    target?: string;
    /**
     * @description Whether or not the chip is disabled.
     *
     * Disabled chips are not focusable, unless `always-focusable` is set.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/chip.md#mdassistchip-md-assist-chip
     */
    disabled?: boolean;
    /**
     * @description When true, allow disabled chips to be focused with arrow keys.
     *
     * Add this when a chip needs increased visibility when disabled. See https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_disabled_controls for more guidance on when this is needed.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/chip.md#mdassistchip-md-assist-chip
     */
    alwaysFocusable?: boolean;
    /**
     * @description The label of the chip.
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/chip.md#mdassistchip-md-assist-chip
     */
    label?: string;
    /**
     * @description Only needed for SSR.
     *
     * Add this attribute when a chip has a `slot="icon"` to avoid a Flash Of Unstyled Content.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/chip.md#mdassistchip-md-assist-chip
     */
    hasIcon?: boolean;
    /**
     * @description Dispatched when `disabled` is toggled.
     * @bubbles Yes
     * @composed No
     * @link https://github.com/material-components/material-web/blob/main/docs/components/chip.md#mdassistchip-md-assist-chip
     */
    onUpdateFocus?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Dispatched when `disabled` is toggled.
     * @bubbles Yes
     * @composed No
     * @link https://github.com/material-components/material-web/blob/main/docs/components/chip.md#mdassistchip-md-assist-chip
     */
    onupdatefocus?: SolidJS.JSX.EventHandlerUnion<T, Event>;
  }
  export interface MdFilterChip<T> extends SolidJS.JSX.HTMLAttributes<T> {
    /**
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/chip.md#mdfilterchip-md-filter-chip
     */
    elevated?: boolean;
    /**
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/chip.md#mdfilterchip-md-filter-chip
     */
    removable?: boolean;
    /**
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/chip.md#mdfilterchip-md-filter-chip
     */
    selected?: boolean;
    /**
     * @description Only needed for SSR.
     *
     * Add this attribute when a filter chip has a `slot="selected-icon"` to avoid a Flash Of Unstyled Content.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/chip.md#mdfilterchip-md-filter-chip
     */
    hasSelectedIcon?: boolean;
    /**
     * @description Whether or not the chip is disabled.
     *
     * Disabled chips are not focusable, unless `always-focusable` is set.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/chip.md#mdfilterchip-md-filter-chip
     */
    disabled?: boolean;
    /**
     * @description When true, allow disabled chips to be focused with arrow keys.
     *
     * Add this when a chip needs increased visibility when disabled. See https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_disabled_controls for more guidance on when this is needed.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/chip.md#mdfilterchip-md-filter-chip
     */
    alwaysFocusable?: boolean;
    /**
     * @description The label of the chip.
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/chip.md#mdfilterchip-md-filter-chip
     */
    label?: string;
    /**
     * @description Only needed for SSR.
     *
     * Add this attribute when a chip has a `slot="icon"` to avoid a Flash Of Unstyled Content.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/chip.md#mdfilterchip-md-filter-chip
     */
    hasIcon?: boolean;
    /**
     * @default undefined
     * @link https://github.com/material-components/material-web/blob/main/docs/components/chip.md#mdfilterchip-md-filter-chip
     */
    handleTrailingActionFocus?: () => void;
    /**
     * @default undefined
     * @link https://github.com/material-components/material-web/blob/main/docs/components/chip.md#mdfilterchip-md-filter-chip
     */
    ariaLabelRemove?: string;
    /**
     * @description Dispatched when the remove button is clicked.
     * @bubbles No
     * @composed No
     * @link https://github.com/material-components/material-web/blob/main/docs/components/chip.md#mdfilterchip-md-filter-chip
     */
    onRemove?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Dispatched when the remove button is clicked.
     * @bubbles No
     * @composed No
     * @link https://github.com/material-components/material-web/blob/main/docs/components/chip.md#mdfilterchip-md-filter-chip
     */
    onremove?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Dispatched when `disabled` is toggled.
     * @bubbles Yes
     * @composed No
     * @link https://github.com/material-components/material-web/blob/main/docs/components/chip.md#mdfilterchip-md-filter-chip
     */
    onUpdateFocus?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Dispatched when `disabled` is toggled.
     * @bubbles Yes
     * @composed No
     * @link https://github.com/material-components/material-web/blob/main/docs/components/chip.md#mdfilterchip-md-filter-chip
     */
    onupdatefocus?: SolidJS.JSX.EventHandlerUnion<T, Event>;
  }
  export interface MdInputChip<T> extends SolidJS.JSX.HTMLAttributes<T> {
    /**
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/chip.md#mdinputchip-md-input-chip
     */
    avatar?: boolean;
    /**
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/chip.md#mdinputchip-md-input-chip
     */
    href?: string;
    /**
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/chip.md#mdinputchip-md-input-chip
     */
    target?: string;
    /**
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/chip.md#mdinputchip-md-input-chip
     */
    removeOnly?: boolean;
    /**
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/chip.md#mdinputchip-md-input-chip
     */
    selected?: boolean;
    /**
     * @description Whether or not the chip is disabled.
     *
     * Disabled chips are not focusable, unless `always-focusable` is set.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/chip.md#mdinputchip-md-input-chip
     */
    disabled?: boolean;
    /**
     * @description When true, allow disabled chips to be focused with arrow keys.
     *
     * Add this when a chip needs increased visibility when disabled. See https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_disabled_controls for more guidance on when this is needed.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/chip.md#mdinputchip-md-input-chip
     */
    alwaysFocusable?: boolean;
    /**
     * @description The label of the chip.
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/chip.md#mdinputchip-md-input-chip
     */
    label?: string;
    /**
     * @description Only needed for SSR.
     *
     * Add this attribute when a chip has a `slot="icon"` to avoid a Flash Of Unstyled Content.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/chip.md#mdinputchip-md-input-chip
     */
    hasIcon?: boolean;
    /**
     * @default undefined
     * @link https://github.com/material-components/material-web/blob/main/docs/components/chip.md#mdinputchip-md-input-chip
     */
    handleTrailingActionFocus?: () => void;
    /**
     * @default undefined
     * @link https://github.com/material-components/material-web/blob/main/docs/components/chip.md#mdinputchip-md-input-chip
     */
    ariaLabelRemove?: string;
    /**
     * @description Dispatched when the remove button is clicked.
     * @bubbles No
     * @composed No
     * @link https://github.com/material-components/material-web/blob/main/docs/components/chip.md#mdinputchip-md-input-chip
     */
    onRemove?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Dispatched when the remove button is clicked.
     * @bubbles No
     * @composed No
     * @link https://github.com/material-components/material-web/blob/main/docs/components/chip.md#mdinputchip-md-input-chip
     */
    onremove?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Dispatched when `disabled` is toggled.
     * @bubbles Yes
     * @composed No
     * @link https://github.com/material-components/material-web/blob/main/docs/components/chip.md#mdinputchip-md-input-chip
     */
    onUpdateFocus?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Dispatched when `disabled` is toggled.
     * @bubbles Yes
     * @composed No
     * @link https://github.com/material-components/material-web/blob/main/docs/components/chip.md#mdinputchip-md-input-chip
     */
    onupdatefocus?: SolidJS.JSX.EventHandlerUnion<T, Event>;
  }
  export interface MdSuggestionChip<T> extends SolidJS.JSX.HTMLAttributes<T> {
    /**
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/chip.md#mdsuggestionchip-md-suggestion-chip
     */
    elevated?: boolean;
    /**
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/chip.md#mdsuggestionchip-md-suggestion-chip
     */
    href?: string;
    /**
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/chip.md#mdsuggestionchip-md-suggestion-chip
     */
    target?: string;
    /**
     * @description Whether or not the chip is disabled.
     *
     * Disabled chips are not focusable, unless `always-focusable` is set.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/chip.md#mdsuggestionchip-md-suggestion-chip
     */
    disabled?: boolean;
    /**
     * @description When true, allow disabled chips to be focused with arrow keys.
     *
     * Add this when a chip needs increased visibility when disabled. See https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_disabled_controls for more guidance on when this is needed.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/chip.md#mdsuggestionchip-md-suggestion-chip
     */
    alwaysFocusable?: boolean;
    /**
     * @description The label of the chip.
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/chip.md#mdsuggestionchip-md-suggestion-chip
     */
    label?: string;
    /**
     * @description Only needed for SSR.
     *
     * Add this attribute when a chip has a `slot="icon"` to avoid a Flash Of Unstyled Content.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/chip.md#mdsuggestionchip-md-suggestion-chip
     */
    hasIcon?: boolean;
    /**
     * @description Dispatched when `disabled` is toggled.
     * @bubbles Yes
     * @composed No
     * @link https://github.com/material-components/material-web/blob/main/docs/components/chip.md#mdsuggestionchip-md-suggestion-chip
     */
    onUpdateFocus?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Dispatched when `disabled` is toggled.
     * @bubbles Yes
     * @composed No
     * @link https://github.com/material-components/material-web/blob/main/docs/components/chip.md#mdsuggestionchip-md-suggestion-chip
     */
    onupdatefocus?: SolidJS.JSX.EventHandlerUnion<T, Event>;
  }
  export interface MdDialog<T> extends SolidJS.JSX.HTMLAttributes<T> {
    /**
     * @description Skips the opening and closing animations.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/dialog.md#mddialog-md-dialog
     */
    quick?: boolean;
    /**
     * @description Gets or sets the dialog's return value, usually to indicate which button a user pressed to close it.
     *
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/returnValue
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/dialog.md#mddialog-md-dialog
     */
    returnValue?: string;
    /**
     * @description The type of dialog for accessibility. Set this to `alert` to announce a dialog as an alert dialog.
     * @default undefined
     * @link https://github.com/material-components/material-web/blob/main/docs/components/dialog.md#mddialog-md-dialog
     */
    type?: string;
    /**
     * @description Disables focus trapping, which by default keeps keyboard Tab navigation within the dialog.
     *
     * When disabled, after focusing the last element of a dialog, pressing Tab again will release focus from the window back to the browser (such as the URL bar).
     *
     * Focus trapping is recommended for accessibility, and should not typically be disabled. Only turn this off if the use case of a dialog is more accessible without focus trapping.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/dialog.md#mddialog-md-dialog
     */
    noFocusTrap?: boolean;
    /**
     * @default undefined
     * @link https://github.com/material-components/material-web/blob/main/docs/components/dialog.md#mddialog-md-dialog
     */
    open?: boolean;
    /**
     * @description Gets the opening animation for a dialog. Set to a new function to customize the animation.
     * @default function { ... }
     * @type {() => DialogAnimation}
     * @link https://github.com/material-components/material-web/blob/main/docs/components/dialog.md#mddialog-md-dialog
     */
    getOpenAnimation?: () => any;
    /**
     * @description Gets the closing animation for a dialog. Set to a new function to customize the animation.
     * @default function { ... }
     * @type {() => DialogAnimation}
     * @link https://github.com/material-components/material-web/blob/main/docs/components/dialog.md#mddialog-md-dialog
     */
    getCloseAnimation?: () => any;
    /**
     * @description Dispatched when the dialog is opening before any animations.
     * @bubbles No
     * @composed No
     * @link https://github.com/material-components/material-web/blob/main/docs/components/dialog.md#mddialog-md-dialog
     */
    onOpen?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Dispatched when the dialog is opening before any animations.
     * @bubbles No
     * @composed No
     * @link https://github.com/material-components/material-web/blob/main/docs/components/dialog.md#mddialog-md-dialog
     */
    onopen?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Dispatched when the dialog has opened after any animations.
     * @bubbles No
     * @composed No
     * @link https://github.com/material-components/material-web/blob/main/docs/components/dialog.md#mddialog-md-dialog
     */
    onOpened?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Dispatched when the dialog has opened after any animations.
     * @bubbles No
     * @composed No
     * @link https://github.com/material-components/material-web/blob/main/docs/components/dialog.md#mddialog-md-dialog
     */
    onopened?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Dispatched when the dialog is closing before any animations.
     * @bubbles No
     * @composed No
     * @link https://github.com/material-components/material-web/blob/main/docs/components/dialog.md#mddialog-md-dialog
     */
    onClose?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Dispatched when the dialog is closing before any animations.
     * @bubbles No
     * @composed No
     * @link https://github.com/material-components/material-web/blob/main/docs/components/dialog.md#mddialog-md-dialog
     */
    onclose?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Dispatched when the dialog has closed after any animations.
     * @bubbles No
     * @composed No
     * @link https://github.com/material-components/material-web/blob/main/docs/components/dialog.md#mddialog-md-dialog
     */
    onClosed?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Dispatched when the dialog has closed after any animations.
     * @bubbles No
     * @composed No
     * @link https://github.com/material-components/material-web/blob/main/docs/components/dialog.md#mddialog-md-dialog
     */
    onclosed?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Dispatched when the dialog has been canceled by clicking on the scrim or pressing Escape.
     * @bubbles No
     * @composed No
     * @link https://github.com/material-components/material-web/blob/main/docs/components/dialog.md#mddialog-md-dialog
     */
    onCancel?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Dispatched when the dialog has been canceled by clicking on the scrim or pressing Escape.
     * @bubbles No
     * @composed No
     * @link https://github.com/material-components/material-web/blob/main/docs/components/dialog.md#mddialog-md-dialog
     */
    oncancel?: SolidJS.JSX.EventHandlerUnion<T, Event>;
  }
  export interface MdDivider<T> extends SolidJS.JSX.HTMLAttributes<T> {
    /**
     * @description Indents the divider with equal padding on both sides.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/divider.md#mddivider-md-divider
     */
    inset?: boolean;
    /**
     * @description Indents the divider with padding on the leading side.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/divider.md#mddivider-md-divider
     */
    insetStart?: boolean;
    /**
     * @description Indents the divider with padding on the trailing side.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/divider.md#mddivider-md-divider
     */
    insetEnd?: boolean;
  }
  export interface MdFab<T> extends SolidJS.JSX.HTMLAttributes<T> {
    /**
     * @description The FAB color variant to render.
     * @default 'surface'
     * @link https://github.com/material-components/material-web/blob/main/docs/components/fab.md#mdfab-md-fab
     */
    variant?: string;
    /**
     * @description The size of the FAB.
     *
     * NOTE: Branded FABs cannot be sized to `small`, and Extended FABs do not have different sizes.
     * @default 'medium'
     * @link https://github.com/material-components/material-web/blob/main/docs/components/fab.md#mdfab-md-fab
     */
    size?: string;
    /**
     * @description The text to display on the FAB.
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/fab.md#mdfab-md-fab
     */
    label?: string;
    /**
     * @description Lowers the FAB's elevation.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/fab.md#mdfab-md-fab
     */
    lowered?: boolean;
  }
  export interface MdBrandedFab<T> extends SolidJS.JSX.HTMLAttributes<T> {
    /**
     * @description The FAB color variant to render.
     * @default 'surface'
     * @link https://github.com/material-components/material-web/blob/main/docs/components/fab.md#mdbrandedfab-md-branded-fab
     */
    variant?: string;
    /**
     * @description The size of the FAB.
     *
     * NOTE: Branded FABs cannot be sized to `small`, and Extended FABs do not have different sizes.
     * @default 'medium'
     * @link https://github.com/material-components/material-web/blob/main/docs/components/fab.md#mdbrandedfab-md-branded-fab
     */
    size?: string;
    /**
     * @description The text to display on the FAB.
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/fab.md#mdbrandedfab-md-branded-fab
     */
    label?: string;
    /**
     * @description Lowers the FAB's elevation.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/fab.md#mdbrandedfab-md-branded-fab
     */
    lowered?: boolean;
  }
  export interface MdFocusRing<T> extends SolidJS.JSX.HTMLAttributes<T> {
    /**
     * @description Makes the focus ring visible.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/focus-ring.md#mdfocusring-md-focus-ring
     */
    visible?: boolean;
    /**
     * @description Makes the focus ring animate inwards instead of outwards.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/focus-ring.md#mdfocusring-md-focus-ring
     */
    inward?: boolean;
    /**
     * @default undefined
     * @link https://github.com/material-components/material-web/blob/main/docs/components/focus-ring.md#mdfocusring-md-focus-ring
     */
    htmlFor?: string;
    /**
     * @default undefined
     * @link https://github.com/material-components/material-web/blob/main/docs/components/focus-ring.md#mdfocusring-md-focus-ring
     */
    control?: HTMLElement;
    /**
     * @description Fired whenever `visible` changes.
     * @bubbles No
     * @composed No
     * @link https://github.com/material-components/material-web/blob/main/docs/components/focus-ring.md#mdfocusring-md-focus-ring
     */
    onVisibilityChanged?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Fired whenever `visible` changes.
     * @bubbles No
     * @composed No
     * @link https://github.com/material-components/material-web/blob/main/docs/components/focus-ring.md#mdfocusring-md-focus-ring
     */
    onvisibilitychanged?: SolidJS.JSX.EventHandlerUnion<T, Event>;
  }
  export interface MdIconButton<T> extends SolidJS.JSX.HTMLAttributes<T> {
    /**
     * @description Disables the icon button and makes it non-interactive.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/icon-button.md#mdiconbutton-md-icon-button
     */
    disabled?: boolean;
    /**
     * @description Flips the icon if it is in an RTL context at startup.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/icon-button.md#mdiconbutton-md-icon-button
     */
    flipIconInRtl?: boolean;
    /**
     * @description Sets the underlying `HTMLAnchorElement`'s `href` resource attribute.
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/icon-button.md#mdiconbutton-md-icon-button
     */
    href?: string;
    /**
     * @description Sets the underlying `HTMLAnchorElement`'s `target` attribute.
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/icon-button.md#mdiconbutton-md-icon-button
     */
    target?: string;
    /**
     * @description The `aria-label` of the button when the button is toggleable and selected.
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/icon-button.md#mdiconbutton-md-icon-button
     */
    ariaLabelSelected?: string;
    /**
     * @description When true, the button will toggle between selected and unselected states
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/icon-button.md#mdiconbutton-md-icon-button
     */
    toggle?: boolean;
    /**
     * @description Sets the selected state. When false, displays the default icon. When true, displays the selected icon, or the default icon If no `slot="selected"` icon is provided.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/icon-button.md#mdiconbutton-md-icon-button
     */
    selected?: boolean;
    /**
     * @description The default behavior of the button. May be "button", "reset", or "submit" (default).
     * @default 'submit'
     * @link https://github.com/material-components/material-web/blob/main/docs/components/icon-button.md#mdiconbutton-md-icon-button
     */
    type?: string;
    /**
     * @description The value added to a form with the button's name when the button submits a form.
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/icon-button.md#mdiconbutton-md-icon-button
     */
    value?: string;
    /**
     * @default undefined
     * @link https://github.com/material-components/material-web/blob/main/docs/components/icon-button.md#mdiconbutton-md-icon-button
     */
    name?: string;
    /**
     * @default undefined
     * @link https://github.com/material-components/material-web/blob/main/docs/components/icon-button.md#mdiconbutton-md-icon-button
     */
    form?: HTMLFormElement;
    /**
     * @default undefined
     * @link https://github.com/material-components/material-web/blob/main/docs/components/icon-button.md#mdiconbutton-md-icon-button
     */
    labels?: NodeList;
    /**
     * @description Dispatched when a toggle button toggles
     * @bubbles Yes
     * @composed Yes
     * @link https://github.com/material-components/material-web/blob/main/docs/components/icon-button.md#mdiconbutton-md-icon-button
     */
    onInput?: SolidJS.JSX.InputEventHandlerUnion<T, InputEvent>;
    /**
     * @description Dispatched when a toggle button toggles
     * @bubbles Yes
     * @composed Yes
     * @link https://github.com/material-components/material-web/blob/main/docs/components/icon-button.md#mdiconbutton-md-icon-button
     */
    oninput?: SolidJS.JSX.InputEventHandlerUnion<T, InputEvent>;
    /**
     * @description Dispatched when a toggle button toggles
     * @bubbles Yes
     * @composed No
     * @link https://github.com/material-components/material-web/blob/main/docs/components/icon-button.md#mdiconbutton-md-icon-button
     */
    onChange?: SolidJS.JSX.ChangeEventHandlerUnion<T, Event>;
    /**
     * @description Dispatched when a toggle button toggles
     * @bubbles Yes
     * @composed No
     * @link https://github.com/material-components/material-web/blob/main/docs/components/icon-button.md#mdiconbutton-md-icon-button
     */
    onchange?: SolidJS.JSX.ChangeEventHandlerUnion<T, Event>;
  }
  export interface MdFilledIconButton<T> extends SolidJS.JSX.HTMLAttributes<T> {
    /**
     * @description Disables the icon button and makes it non-interactive.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/icon-button.md#mdfillediconbutton-md-filled-icon-button
     */
    disabled?: boolean;
    /**
     * @description "Soft-disables" the icon button (disabled but still focusable).
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/icon-button.md#mdfillediconbutton-md-filled-icon-button
     */
    softDisabled?: boolean;
    /**
     * @description Flips the icon if it is in an RTL context at startup.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/icon-button.md#mdfillediconbutton-md-filled-icon-button
     */
    flipIconInRtl?: boolean;
    /**
     * @description Sets the underlying `HTMLAnchorElement`'s `href` resource attribute.
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/icon-button.md#mdfillediconbutton-md-filled-icon-button
     */
    href?: string;
    /**
     * @description Sets the underlying `HTMLAnchorElement`'s `target` attribute.
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/icon-button.md#mdfillediconbutton-md-filled-icon-button
     */
    target?: string;
    /**
     * @description The `aria-label` of the button when the button is toggleable and selected.
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/icon-button.md#mdfillediconbutton-md-filled-icon-button
     */
    ariaLabelSelected?: string;
    /**
     * @description When true, the button will toggle between selected and unselected states
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/icon-button.md#mdfillediconbutton-md-filled-icon-button
     */
    toggle?: boolean;
    /**
     * @description Sets the selected state. When false, displays the default icon. When true, displays the selected icon, or the default icon If no `slot="selected"` icon is provided.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/icon-button.md#mdfillediconbutton-md-filled-icon-button
     */
    selected?: boolean;
    /**
     * @description The default behavior of the button. May be "button", "reset", or "submit" (default).
     * @default 'submit'
     * @link https://github.com/material-components/material-web/blob/main/docs/components/icon-button.md#mdfillediconbutton-md-filled-icon-button
     */
    type?: string;
    /**
     * @description The value added to a form with the button's name when the button submits a form.
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/icon-button.md#mdfillediconbutton-md-filled-icon-button
     */
    value?: string;
    /**
     * @default undefined
     * @link https://github.com/material-components/material-web/blob/main/docs/components/icon-button.md#mdfillediconbutton-md-filled-icon-button
     */
    name?: string;
    /**
     * @default undefined
     * @link https://github.com/material-components/material-web/blob/main/docs/components/icon-button.md#mdfillediconbutton-md-filled-icon-button
     */
    form?: HTMLFormElement;
    /**
     * @default undefined
     * @link https://github.com/material-components/material-web/blob/main/docs/components/icon-button.md#mdfillediconbutton-md-filled-icon-button
     */
    labels?: NodeList;
    /**
     * @description Dispatched when a toggle button toggles
     * @bubbles Yes
     * @composed Yes
     * @link https://github.com/material-components/material-web/blob/main/docs/components/icon-button.md#mdfillediconbutton-md-filled-icon-button
     */
    onInput?: SolidJS.JSX.InputEventHandlerUnion<T, InputEvent>;
    /**
     * @description Dispatched when a toggle button toggles
     * @bubbles Yes
     * @composed Yes
     * @link https://github.com/material-components/material-web/blob/main/docs/components/icon-button.md#mdfillediconbutton-md-filled-icon-button
     */
    oninput?: SolidJS.JSX.InputEventHandlerUnion<T, InputEvent>;
    /**
     * @description Dispatched when a toggle button toggles
     * @bubbles Yes
     * @composed No
     * @link https://github.com/material-components/material-web/blob/main/docs/components/icon-button.md#mdfillediconbutton-md-filled-icon-button
     */
    onChange?: SolidJS.JSX.ChangeEventHandlerUnion<T, Event>;
    /**
     * @description Dispatched when a toggle button toggles
     * @bubbles Yes
     * @composed No
     * @link https://github.com/material-components/material-web/blob/main/docs/components/icon-button.md#mdfillediconbutton-md-filled-icon-button
     */
    onchange?: SolidJS.JSX.ChangeEventHandlerUnion<T, Event>;
  }
  export interface MdFilledTonalIconButton<T> extends SolidJS.JSX.HTMLAttributes<T> {
    /**
     * @description Disables the icon button and makes it non-interactive.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/icon-button.md#mdfilledtonaliconbutton-md-filled-tonal-icon-button
     */
    disabled?: boolean;
    /**
     * @description Flips the icon if it is in an RTL context at startup.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/icon-button.md#mdfilledtonaliconbutton-md-filled-tonal-icon-button
     */
    flipIconInRtl?: boolean;
    /**
     * @description Sets the underlying `HTMLAnchorElement`'s `href` resource attribute.
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/icon-button.md#mdfilledtonaliconbutton-md-filled-tonal-icon-button
     */
    href?: string;
    /**
     * @description Sets the underlying `HTMLAnchorElement`'s `target` attribute.
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/icon-button.md#mdfilledtonaliconbutton-md-filled-tonal-icon-button
     */
    target?: string;
    /**
     * @description The `aria-label` of the button when the button is toggleable and selected.
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/icon-button.md#mdfilledtonaliconbutton-md-filled-tonal-icon-button
     */
    ariaLabelSelected?: string;
    /**
     * @description When true, the button will toggle between selected and unselected states
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/icon-button.md#mdfilledtonaliconbutton-md-filled-tonal-icon-button
     */
    toggle?: boolean;
    /**
     * @description Sets the selected state. When false, displays the default icon. When true, displays the selected icon, or the default icon If no `slot="selected"` icon is provided.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/icon-button.md#mdfilledtonaliconbutton-md-filled-tonal-icon-button
     */
    selected?: boolean;
    /**
     * @description The default behavior of the button. May be "button", "reset", or "submit" (default).
     * @default 'submit'
     * @link https://github.com/material-components/material-web/blob/main/docs/components/icon-button.md#mdfilledtonaliconbutton-md-filled-tonal-icon-button
     */
    type?: string;
    /**
     * @description The value added to a form with the button's name when the button submits a form.
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/icon-button.md#mdfilledtonaliconbutton-md-filled-tonal-icon-button
     */
    value?: string;
    /**
     * @default undefined
     * @link https://github.com/material-components/material-web/blob/main/docs/components/icon-button.md#mdfilledtonaliconbutton-md-filled-tonal-icon-button
     */
    name?: string;
    /**
     * @default undefined
     * @link https://github.com/material-components/material-web/blob/main/docs/components/icon-button.md#mdfilledtonaliconbutton-md-filled-tonal-icon-button
     */
    form?: HTMLFormElement;
    /**
     * @default undefined
     * @link https://github.com/material-components/material-web/blob/main/docs/components/icon-button.md#mdfilledtonaliconbutton-md-filled-tonal-icon-button
     */
    labels?: NodeList;
    /**
     * @description Dispatched when a toggle button toggles
     * @bubbles Yes
     * @composed Yes
     * @link https://github.com/material-components/material-web/blob/main/docs/components/icon-button.md#mdfilledtonaliconbutton-md-filled-tonal-icon-button
     */
    onInput?: SolidJS.JSX.InputEventHandlerUnion<T, InputEvent>;
    /**
     * @description Dispatched when a toggle button toggles
     * @bubbles Yes
     * @composed Yes
     * @link https://github.com/material-components/material-web/blob/main/docs/components/icon-button.md#mdfilledtonaliconbutton-md-filled-tonal-icon-button
     */
    oninput?: SolidJS.JSX.InputEventHandlerUnion<T, InputEvent>;
    /**
     * @description Dispatched when a toggle button toggles
     * @bubbles Yes
     * @composed No
     * @link https://github.com/material-components/material-web/blob/main/docs/components/icon-button.md#mdfilledtonaliconbutton-md-filled-tonal-icon-button
     */
    onChange?: SolidJS.JSX.ChangeEventHandlerUnion<T, Event>;
    /**
     * @description Dispatched when a toggle button toggles
     * @bubbles Yes
     * @composed No
     * @link https://github.com/material-components/material-web/blob/main/docs/components/icon-button.md#mdfilledtonaliconbutton-md-filled-tonal-icon-button
     */
    onchange?: SolidJS.JSX.ChangeEventHandlerUnion<T, Event>;
  }
  export interface MdOutlinedIconButton<T> extends SolidJS.JSX.HTMLAttributes<T> {
    /**
     * @description Disables the icon button and makes it non-interactive.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/icon-button.md#mdoutlinediconbutton-md-outlined-icon-button
     */
    disabled?: boolean;
    /**
     * @description Flips the icon if it is in an RTL context at startup.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/icon-button.md#mdoutlinediconbutton-md-outlined-icon-button
     */
    flipIconInRtl?: boolean;
    /**
     * @description Sets the underlying `HTMLAnchorElement`'s `href` resource attribute.
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/icon-button.md#mdoutlinediconbutton-md-outlined-icon-button
     */
    href?: string;
    /**
     * @description Sets the underlying `HTMLAnchorElement`'s `target` attribute.
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/icon-button.md#mdoutlinediconbutton-md-outlined-icon-button
     */
    target?: string;
    /**
     * @description The `aria-label` of the button when the button is toggleable and selected.
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/icon-button.md#mdoutlinediconbutton-md-outlined-icon-button
     */
    ariaLabelSelected?: string;
    /**
     * @description When true, the button will toggle between selected and unselected states
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/icon-button.md#mdoutlinediconbutton-md-outlined-icon-button
     */
    toggle?: boolean;
    /**
     * @description Sets the selected state. When false, displays the default icon. When true, displays the selected icon, or the default icon If no `slot="selected"` icon is provided.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/icon-button.md#mdoutlinediconbutton-md-outlined-icon-button
     */
    selected?: boolean;
    /**
     * @description The default behavior of the button. May be "button", "reset", or "submit" (default).
     * @default 'submit'
     * @link https://github.com/material-components/material-web/blob/main/docs/components/icon-button.md#mdoutlinediconbutton-md-outlined-icon-button
     */
    type?: string;
    /**
     * @description The value added to a form with the button's name when the button submits a form.
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/icon-button.md#mdoutlinediconbutton-md-outlined-icon-button
     */
    value?: string;
    /**
     * @default undefined
     * @link https://github.com/material-components/material-web/blob/main/docs/components/icon-button.md#mdoutlinediconbutton-md-outlined-icon-button
     */
    name?: string;
    /**
     * @default undefined
     * @link https://github.com/material-components/material-web/blob/main/docs/components/icon-button.md#mdoutlinediconbutton-md-outlined-icon-button
     */
    form?: HTMLFormElement;
    /**
     * @default undefined
     * @link https://github.com/material-components/material-web/blob/main/docs/components/icon-button.md#mdoutlinediconbutton-md-outlined-icon-button
     */
    labels?: NodeList;
    /**
     * @description Dispatched when a toggle button toggles
     * @bubbles Yes
     * @composed Yes
     * @link https://github.com/material-components/material-web/blob/main/docs/components/icon-button.md#mdoutlinediconbutton-md-outlined-icon-button
     */
    onInput?: SolidJS.JSX.InputEventHandlerUnion<T, InputEvent>;
    /**
     * @description Dispatched when a toggle button toggles
     * @bubbles Yes
     * @composed Yes
     * @link https://github.com/material-components/material-web/blob/main/docs/components/icon-button.md#mdoutlinediconbutton-md-outlined-icon-button
     */
    oninput?: SolidJS.JSX.InputEventHandlerUnion<T, InputEvent>;
    /**
     * @description Dispatched when a toggle button toggles
     * @bubbles Yes
     * @composed No
     * @link https://github.com/material-components/material-web/blob/main/docs/components/icon-button.md#mdoutlinediconbutton-md-outlined-icon-button
     */
    onChange?: SolidJS.JSX.ChangeEventHandlerUnion<T, Event>;
    /**
     * @description Dispatched when a toggle button toggles
     * @bubbles Yes
     * @composed No
     * @link https://github.com/material-components/material-web/blob/main/docs/components/icon-button.md#mdoutlinediconbutton-md-outlined-icon-button
     */
    onchange?: SolidJS.JSX.ChangeEventHandlerUnion<T, Event>;
  }
  export interface MdList<T> extends SolidJS.JSX.HTMLAttributes<T> {
    /**
     * @default undefined
     * @type {ListItem[]}
     * @link https://github.com/material-components/material-web/blob/main/docs/components/list.md#mdlist-md-list
     */
    items?: HTMLElement[];
  }
  export interface MdListItem<T> extends SolidJS.JSX.HTMLAttributes<T> {
    /**
     * @description Disables the item and makes it non-selectable and non-interactive.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/list.md#mdlistitem-md-list-item
     */
    disabled?: boolean;
    /**
     * @description Sets the behavior of the list item, defaults to "text". Change to "link" or "button" for interactive items.
     * @default 'text'
     * @link https://github.com/material-components/material-web/blob/main/docs/components/list.md#mdlistitem-md-list-item
     */
    type?: string;
    /**
     * @description Sets the underlying `HTMLAnchorElement`'s `href` resource attribute.
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/list.md#mdlistitem-md-list-item
     */
    href?: string;
    /**
     * @description Sets the underlying `HTMLAnchorElement`'s `target` attribute when `href` is set.
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/list.md#mdlistitem-md-list-item
     */
    target?: string;
    /**
     * @description Requests the list to set `tabindex=0` on the item and focus it.
     * @bubbles Yes
     * @composed Yes
     * @link https://github.com/material-components/material-web/blob/main/docs/components/list.md#mdlistitem-md-list-item
     */
    onRequestActivation?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Requests the list to set `tabindex=0` on the item and focus it.
     * @bubbles Yes
     * @composed Yes
     * @link https://github.com/material-components/material-web/blob/main/docs/components/list.md#mdlistitem-md-list-item
     */
    onrequestactivation?: SolidJS.JSX.EventHandlerUnion<T, Event>;
  }
  export interface MdMenu<T> extends SolidJS.JSX.HTMLAttributes<T> {
    /**
     * @description The ID of the element in the same root node in which the menu should align to. Overrides setting `anchorElement = elementReference`.
     *
     * __NOTE__: anchor or anchorElement must either be an HTMLElement or resolve to an HTMLElement in order for menu to open.
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/menu.md#mdmenu-md-menu
     */
    anchor?: string;
    /**
     * @description Whether the positioning algorithm should calculate relative to the parent of the anchor element (`absolute`), relative to the window (`fixed`), or relative to the document (`document`). `popover` will use the popover API to render the menu in the top-layer. If your browser does not support the popover API, it will fall back to `fixed`.
     *
     * __Examples for `position = 'fixed'`:__
     *
     * - If there is no `position:relative` in the given parent tree and the surface is `position:absolute` - If the surface is `position:fixed` - If the surface is in the "top layer" - The anchor and the surface do not share a common `position:relative` ancestor
     *
     * When using `positioning=fixed`, in most cases, the menu should position itself above most other `position:absolute` or `position:fixed` elements when placed inside of them. e.g. using a menu inside of an `md-dialog`.
     *
     * __NOTE__: Fixed menus will not scroll with the page and will be fixed to the window instead.
     *
     * __Examples for `position = 'document'`:__
     *
     * - There is no parent that creates a relative positioning context e.g. `position: relative`, `position: absolute`, `transform: translate(x, y)`, etc. - You put the effort into hoisting the menu to the top of the DOM like the end of the `<body>` to render over everything or in a top-layer. - You are reusing a single `md-menu` element that dynamically renders content.
     *
     * __Examples for `position = 'popover'`:__
     *
     * - Your browser supports `popover`. - Most cases. Once popover is in browsers, this will become the default.
     * @default 'absolute'
     * @link https://github.com/material-components/material-web/blob/main/docs/components/menu.md#mdmenu-md-menu
     */
    positioning?: string;
    /**
     * @description Skips the opening and closing animations.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/menu.md#mdmenu-md-menu
     */
    quick?: boolean;
    /**
     * @description Displays overflow content like a submenu. Not required in most cases when using `positioning="popover"`.
     *
     * __NOTE__: This may cause adverse effects if you set `md-menu {max-height:...}` and have items overflowing items in the "y" direction.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/menu.md#mdmenu-md-menu
     */
    hasOverflow?: boolean;
    /**
     * @description Opens the menu and makes it visible. Alternative to the `.show()` and `.close()` methods
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/menu.md#mdmenu-md-menu
     */
    open?: boolean;
    /**
     * @description Offsets the menu's inline alignment from the anchor by the given number in pixels. This value is direction aware and will follow the LTR / RTL direction.
     *
     * e.g. LTR: positive -> right, negative -> left RTL: positive -> left, negative -> right
     * @default 0
     * @link https://github.com/material-components/material-web/blob/main/docs/components/menu.md#mdmenu-md-menu
     */
    xOffset?: number;
    /**
     * @description Offsets the menu's block alignment from the anchor by the given number in pixels.
     *
     * e.g. positive -> down, negative -> up
     * @default 0
     * @link https://github.com/material-components/material-web/blob/main/docs/components/menu.md#mdmenu-md-menu
     */
    yOffset?: number;
    /**
     * @description The max time between the keystrokes of the typeahead menu behavior before it clears the typeahead buffer.
     * @default 200
     * @link https://github.com/material-components/material-web/blob/main/docs/components/menu.md#mdmenu-md-menu
     */
    typeaheadDelay?: number;
    /**
     * @description The corner of the anchor which to align the menu in the standard logical property style of <block>-<inline> e.g. `'end-start'`.
     *
     * NOTE: This value may not be respected by the menu positioning algorithm if the menu would render outisde the viewport.
     * @default Corner.END_START
     * @link https://github.com/material-components/material-web/blob/main/docs/components/menu.md#mdmenu-md-menu
     */
    anchorCorner?: string;
    /**
     * @description The corner of the menu which to align the anchor in the standard logical property style of <block>-<inline> e.g. `'start-start'`.
     *
     * NOTE: This value may not be respected by the menu positioning algorithm if the menu would render outisde the viewport.
     * @default Corner.START_START
     * @link https://github.com/material-components/material-web/blob/main/docs/components/menu.md#mdmenu-md-menu
     */
    menuCorner?: string;
    /**
     * @description Keeps the user clicks outside the menu.
     *
     * NOTE: clicking outside may still cause focusout to close the menu so see `stayOpenOnFocusout`.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/menu.md#mdmenu-md-menu
     */
    stayOpenOnOutsideClick?: boolean;
    /**
     * @description Keeps the menu open when focus leaves the menu's composed subtree.
     *
     * NOTE: Focusout behavior will stop propagation of the focusout event. Set this property to true to opt-out of menu's focusout handling altogether.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/menu.md#mdmenu-md-menu
     */
    stayOpenOnFocusout?: boolean;
    /**
     * @description After closing, does not restore focus to the last focused element before the menu was opened.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/menu.md#mdmenu-md-menu
     */
    skipRestoreFocus?: boolean;
    /**
     * @description The element that should be focused by default once opened.
     *
     * NOTE: When setting default focus to 'LIST_ROOT', remember to change `tabindex` to `0` and change md-menu's display to something other than `display: contents` when necessary.
     * @default FocusState.FIRST_ITEM
     * @link https://github.com/material-components/material-web/blob/main/docs/components/menu.md#mdmenu-md-menu
     */
    defaultFocus?: string;
    /**
     * @description Turns off navigation wrapping. By default, navigating past the end of the menu items will wrap focus back to the beginning and vice versa. Use this for ARIA patterns that do not wrap focus, like combobox.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/menu.md#mdmenu-md-menu
     */
    noNavigationWrap?: boolean;
    /**
     * @description Whether or not the current menu is a submenu and should not handle specific navigation keys.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/menu.md#mdmenu-md-menu
     */
    isSubmenu?: boolean;
    /**
     * @description Handles typeahead navigation through the menu.
     * @default function { ... }
     * @type {TypeaheadController}
     * @link https://github.com/material-components/material-web/blob/main/docs/components/menu.md#mdmenu-md-menu
     */
    typeaheadController?: any;
    /**
     * @default undefined
     * @type {HTMLElement & Partial<SurfacePositionTarget>}
     * @link https://github.com/material-components/material-web/blob/main/docs/components/menu.md#mdmenu-md-menu
     */
    anchorElement?: HTMLElement;
    /**
     * @default undefined
     * @type {MenuItem[]}
     * @link https://github.com/material-components/material-web/blob/main/docs/components/menu.md#mdmenu-md-menu
     */
    items?: HTMLElement[];
    /**
     * @description Fired before the opening animation begins
     * @bubbles No
     * @composed No
     * @link https://github.com/material-components/material-web/blob/main/docs/components/menu.md#mdmenu-md-menu
     */
    onOpening?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Fired before the opening animation begins
     * @bubbles No
     * @composed No
     * @link https://github.com/material-components/material-web/blob/main/docs/components/menu.md#mdmenu-md-menu
     */
    onopening?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Fired once the menu is open, after any animations
     * @bubbles No
     * @composed No
     * @link https://github.com/material-components/material-web/blob/main/docs/components/menu.md#mdmenu-md-menu
     */
    onOpened?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Fired once the menu is open, after any animations
     * @bubbles No
     * @composed No
     * @link https://github.com/material-components/material-web/blob/main/docs/components/menu.md#mdmenu-md-menu
     */
    onopened?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Fired before the closing animation begins
     * @bubbles No
     * @composed No
     * @link https://github.com/material-components/material-web/blob/main/docs/components/menu.md#mdmenu-md-menu
     */
    onClosing?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Fired before the closing animation begins
     * @bubbles No
     * @composed No
     * @link https://github.com/material-components/material-web/blob/main/docs/components/menu.md#mdmenu-md-menu
     */
    onclosing?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Fired once the menu is closed, after any animations
     * @bubbles No
     * @composed No
     * @link https://github.com/material-components/material-web/blob/main/docs/components/menu.md#mdmenu-md-menu
     */
    onClosed?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Fired once the menu is closed, after any animations
     * @bubbles No
     * @composed No
     * @link https://github.com/material-components/material-web/blob/main/docs/components/menu.md#mdmenu-md-menu
     */
    onclosed?: SolidJS.JSX.EventHandlerUnion<T, Event>;
  }
  export interface MdMenuItem<T> extends SolidJS.JSX.HTMLAttributes<T> {
    /**
     * @description Disables the item and makes it non-selectable and non-interactive.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/menu.md#mdmenuitem-md-menu-item
     */
    disabled?: boolean;
    /**
     * @description Sets the behavior and role of the menu item, defaults to "menuitem".
     * @default 'menuitem'
     * @link https://github.com/material-components/material-web/blob/main/docs/components/menu.md#mdmenuitem-md-menu-item
     */
    type?: string;
    /**
     * @description Sets the underlying `HTMLAnchorElement`'s `href` resource attribute.
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/menu.md#mdmenuitem-md-menu-item
     */
    href?: string;
    /**
     * @description Sets the underlying `HTMLAnchorElement`'s `target` attribute when `href` is set.
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/menu.md#mdmenuitem-md-menu-item
     */
    target?: string;
    /**
     * @description Keeps the menu open if clicked or keyboard selected.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/menu.md#mdmenuitem-md-menu-item
     */
    keepOpen?: boolean;
    /**
     * @description Sets the item in the selected visual state when a submenu is opened.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/menu.md#mdmenuitem-md-menu-item
     */
    selected?: boolean;
    /**
     * @default undefined
     * @link https://github.com/material-components/material-web/blob/main/docs/components/menu.md#mdmenuitem-md-menu-item
     */
    typeaheadText?: string;
    /**
     * @description Closes the encapsulating menu on closable interaction.
     * @bubbles Yes
     * @composed Yes
     * @link https://github.com/material-components/material-web/blob/main/docs/components/menu.md#mdmenuitem-md-menu-item
     */
    onCloseMenu?: SolidJS.JSX.EventHandlerUnion<
      T,
      CustomEvent<{ initiator: SelectOption; reason: Reason; itemPath: SelectOption[] }>
    >;
    /**
     * @description Closes the encapsulating menu on closable interaction.
     * @bubbles Yes
     * @composed Yes
     * @link https://github.com/material-components/material-web/blob/main/docs/components/menu.md#mdmenuitem-md-menu-item
     */
    onclosemenu?: SolidJS.JSX.EventHandlerUnion<
      T,
      CustomEvent<{ initiator: SelectOption; reason: Reason; itemPath: SelectOption[] }>
    >;
  }
  export interface MdSubMenu<T> extends SolidJS.JSX.HTMLAttributes<T> {
    /**
     * @description The anchorCorner to set on the submenu.
     * @default Corner.START_END
     * @link https://github.com/material-components/material-web/blob/main/docs/components/menu.md#mdsubmenu-md-sub-menu
     */
    anchorCorner?: string;
    /**
     * @description The menuCorner to set on the submenu.
     * @default Corner.START_START
     * @link https://github.com/material-components/material-web/blob/main/docs/components/menu.md#mdsubmenu-md-sub-menu
     */
    menuCorner?: string;
    /**
     * @description The delay between mouseenter and submenu opening.
     * @default 400
     * @link https://github.com/material-components/material-web/blob/main/docs/components/menu.md#mdsubmenu-md-sub-menu
     */
    hoverOpenDelay?: number;
    /**
     * @description The delay between ponterleave and the submenu closing.
     * @default 400
     * @link https://github.com/material-components/material-web/blob/main/docs/components/menu.md#mdsubmenu-md-sub-menu
     */
    hoverCloseDelay?: number;
    /**
     * @description READONLY: self-identifies as a menu item and sets its identifying attribute
     * @default true
     * @link https://github.com/material-components/material-web/blob/main/docs/components/menu.md#mdsubmenu-md-sub-menu
     */
    isSubMenu?: boolean;
    /**
     * @default undefined
     * @type {MenuItem}
     * @link https://github.com/material-components/material-web/blob/main/docs/components/menu.md#mdsubmenu-md-sub-menu
     */
    item?: HTMLElement;
    /**
     * @default undefined
     * @type {Menu}
     * @link https://github.com/material-components/material-web/blob/main/docs/components/menu.md#mdsubmenu-md-sub-menu
     */
    menu?: HTMLElement;
    /**
     * @description Requests the parent menu to deselect other items when a submenu opens.
     * @bubbles Yes
     * @composed Yes
     * @link https://github.com/material-components/material-web/blob/main/docs/components/menu.md#mdsubmenu-md-sub-menu
     */
    onDeactivateItems?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Requests the parent menu to deselect other items when a submenu opens.
     * @bubbles Yes
     * @composed Yes
     * @link https://github.com/material-components/material-web/blob/main/docs/components/menu.md#mdsubmenu-md-sub-menu
     */
    ondeactivateitems?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Requests the parent to make the slotted item focusable and focus the item.
     * @bubbles Yes
     * @composed Yes
     * @link https://github.com/material-components/material-web/blob/main/docs/components/menu.md#mdsubmenu-md-sub-menu
     */
    onRequestActivation?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Requests the parent to make the slotted item focusable and focus the item.
     * @bubbles Yes
     * @composed Yes
     * @link https://github.com/material-components/material-web/blob/main/docs/components/menu.md#mdsubmenu-md-sub-menu
     */
    onrequestactivation?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Requests the parent menu to deactivate the typeahead functionality when a submenu opens.
     * @bubbles Yes
     * @composed Yes
     * @link https://github.com/material-components/material-web/blob/main/docs/components/menu.md#mdsubmenu-md-sub-menu
     */
    onDeactivateTypeahead?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Requests the parent menu to deactivate the typeahead functionality when a submenu opens.
     * @bubbles Yes
     * @composed Yes
     * @link https://github.com/material-components/material-web/blob/main/docs/components/menu.md#mdsubmenu-md-sub-menu
     */
    ondeactivatetypeahead?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Requests the parent menu to activate the typeahead functionality when a submenu closes.
     * @bubbles Yes
     * @composed Yes
     * @link https://github.com/material-components/material-web/blob/main/docs/components/menu.md#mdsubmenu-md-sub-menu
     */
    onActivateTypeahead?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Requests the parent menu to activate the typeahead functionality when a submenu closes.
     * @bubbles Yes
     * @composed Yes
     * @link https://github.com/material-components/material-web/blob/main/docs/components/menu.md#mdsubmenu-md-sub-menu
     */
    onactivatetypeahead?: SolidJS.JSX.EventHandlerUnion<T, Event>;
  }
  export interface MdLinearProgress<T> extends SolidJS.JSX.HTMLAttributes<T> {
    /**
     * @description Buffer amount to display, a fraction between 0 and `max`. If the value is 0 or negative, the buffer is not displayed.
     * @default 0
     * @link https://github.com/material-components/material-web/blob/main/docs/components/progress.md#mdlinearprogress-md-linear-progress
     */
    buffer?: number;
    /**
     * @description Progress to display, a fraction between 0 and `max`.
     * @default 0
     * @link https://github.com/material-components/material-web/blob/main/docs/components/progress.md#mdlinearprogress-md-linear-progress
     */
    value?: number;
    /**
     * @description Maximum progress to display, defaults to 1.
     * @default 1
     * @link https://github.com/material-components/material-web/blob/main/docs/components/progress.md#mdlinearprogress-md-linear-progress
     */
    max?: number;
    /**
     * @description Whether or not to display indeterminate progress, which gives no indication to how long an activity will take.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/progress.md#mdlinearprogress-md-linear-progress
     */
    indeterminate?: boolean;
    /**
     * @description Whether or not to render indeterminate mode using 4 colors instead of one.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/progress.md#mdlinearprogress-md-linear-progress
     */
    fourColor?: boolean;
  }
  export interface MdCircularProgress<T> extends SolidJS.JSX.HTMLAttributes<T> {
    /**
     * @description Progress to display, a fraction between 0 and `max`.
     * @default 0
     * @link https://github.com/material-components/material-web/blob/main/docs/components/progress.md#mdcircularprogress-md-circular-progress
     */
    value?: number;
    /**
     * @description Maximum progress to display, defaults to 1.
     * @default 1
     * @link https://github.com/material-components/material-web/blob/main/docs/components/progress.md#mdcircularprogress-md-circular-progress
     */
    max?: number;
    /**
     * @description Whether or not to display indeterminate progress, which gives no indication to how long an activity will take.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/progress.md#mdcircularprogress-md-circular-progress
     */
    indeterminate?: boolean;
    /**
     * @description Whether or not to render indeterminate mode using 4 colors instead of one.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/progress.md#mdcircularprogress-md-circular-progress
     */
    fourColor?: boolean;
  }
  export interface MdRadio<T> extends SolidJS.JSX.HTMLAttributes<T> {
    /**
     * @description Whether or not the radio is required. If any radio is required in a group, all radios are implicitly required.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/radio.md#mdradio-md-radio
     */
    required?: boolean;
    /**
     * @description The element value to use in form submission when checked.
     * @default 'on'
     * @link https://github.com/material-components/material-web/blob/main/docs/components/radio.md#mdradio-md-radio
     */
    value?: string;
    /**
     * @default undefined
     * @link https://github.com/material-components/material-web/blob/main/docs/components/radio.md#mdradio-md-radio
     */
    checked?: boolean;
    /**
     * @default undefined
     * @link https://github.com/material-components/material-web/blob/main/docs/components/radio.md#mdradio-md-radio
     */
    disabled?: boolean;
    /**
     * @default undefined
     * @link https://github.com/material-components/material-web/blob/main/docs/components/radio.md#mdradio-md-radio
     */
    name?: string;
    /**
     * @description Dispatched when the value changes from user interaction.
     * @bubbles Yes
     * @composed No
     * @link https://github.com/material-components/material-web/blob/main/docs/components/radio.md#mdradio-md-radio
     */
    onInput?: SolidJS.JSX.InputEventHandlerUnion<T, InputEvent>;
    /**
     * @description Dispatched when the value changes from user interaction.
     * @bubbles Yes
     * @composed No
     * @link https://github.com/material-components/material-web/blob/main/docs/components/radio.md#mdradio-md-radio
     */
    oninput?: SolidJS.JSX.InputEventHandlerUnion<T, InputEvent>;
    /**
     * @description Dispatched when the value changes from user interaction.
     * @bubbles Yes
     * @composed Yes
     * @link https://github.com/material-components/material-web/blob/main/docs/components/radio.md#mdradio-md-radio
     */
    onChange?: SolidJS.JSX.ChangeEventHandlerUnion<T, Event>;
    /**
     * @description Dispatched when the value changes from user interaction.
     * @bubbles Yes
     * @composed Yes
     * @link https://github.com/material-components/material-web/blob/main/docs/components/radio.md#mdradio-md-radio
     */
    onchange?: SolidJS.JSX.ChangeEventHandlerUnion<T, Event>;
  }
  export interface MdRipple<T> extends SolidJS.JSX.HTMLAttributes<T> {
    /**
     * @description Disables the ripple.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/ripple.md#mdripple-md-ripple
     */
    disabled?: boolean;
    /**
     * @default undefined
     * @link https://github.com/material-components/material-web/blob/main/docs/components/ripple.md#mdripple-md-ripple
     */
    htmlFor?: string;
    /**
     * @default undefined
     * @link https://github.com/material-components/material-web/blob/main/docs/components/ripple.md#mdripple-md-ripple
     */
    control?: HTMLElement;
  }
  export interface MdFilledSelect<T> extends SolidJS.JSX.HTMLAttributes<T> {
    /**
     * @description Opens the menu synchronously with no animation.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/select.md#mdfilledselect-md-filled-select
     */
    quick?: boolean;
    /**
     * @description Whether or not the select is required.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/select.md#mdfilledselect-md-filled-select
     */
    required?: boolean;
    /**
     * @description The error message that replaces supporting text when `error` is true. If `errorText` is an empty string, then the supporting text will continue to show.
     *
     * This error message overrides the error message displayed by `reportValidity()`.
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/select.md#mdfilledselect-md-filled-select
     */
    errorText?: string;
    /**
     * @description The floating label for the field.
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/select.md#mdfilledselect-md-filled-select
     */
    label?: string;
    /**
     * @description Disables the asterisk on the floating label, when the select is required.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/select.md#mdfilledselect-md-filled-select
     */
    noAsterisk?: boolean;
    /**
     * @description Conveys additional information below the select, such as how it should be used.
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/select.md#mdfilledselect-md-filled-select
     */
    supportingText?: string;
    /**
     * @description Gets or sets whether or not the select is in a visually invalid state.
     *
     * This error state overrides the error state controlled by `reportValidity()`.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/select.md#mdfilledselect-md-filled-select
     */
    error?: boolean;
    /**
     * @description Whether or not the underlying md-menu should be position: fixed to display in a top-level manner, or position: absolute.
     *
     * position:fixed is useful for cases where select is inside of another element with stacking context and hidden overflows such as `md-dialog`.
     * @default 'popover'
     * @link https://github.com/material-components/material-web/blob/main/docs/components/select.md#mdfilledselect-md-filled-select
     */
    menuPositioning?: string;
    /**
     * @description Clamps the menu-width to the width of the select.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/select.md#mdfilledselect-md-filled-select
     */
    clampMenuWidth?: boolean;
    /**
     * @description The max time between the keystrokes of the typeahead select / menu behavior before it clears the typeahead buffer.
     * @default DEFAULT_TYPEAHEAD_BUFFER_TIME
     * @link https://github.com/material-components/material-web/blob/main/docs/components/select.md#mdfilledselect-md-filled-select
     */
    typeaheadDelay?: number;
    /**
     * @description Whether or not the text field has a leading icon. Used for SSR.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/select.md#mdfilledselect-md-filled-select
     */
    hasLeadingIcon?: boolean;
    /**
     * @description Text to display in the field. Only set for SSR.
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/select.md#mdfilledselect-md-filled-select
     */
    displayText?: string;
    /**
     * @description Whether the menu should be aligned to the start or the end of the select's textbox.
     * @default 'start'
     * @link https://github.com/material-components/material-web/blob/main/docs/components/select.md#mdfilledselect-md-filled-select
     */
    menuAlign?: string;
    /**
     * @default undefined
     * @link https://github.com/material-components/material-web/blob/main/docs/components/select.md#mdfilledselect-md-filled-select
     */
    value?: string;
    /**
     * @default undefined
     * @link https://github.com/material-components/material-web/blob/main/docs/components/select.md#mdfilledselect-md-filled-select
     */
    selectedIndex?: number;
    /**
     * @default undefined
     * @link https://github.com/material-components/material-web/blob/main/docs/components/select.md#mdfilledselect-md-filled-select
     */
    disabled?: boolean;
    /**
     * @default undefined
     * @link https://github.com/material-components/material-web/blob/main/docs/components/select.md#mdfilledselect-md-filled-select
     */
    name?: string;
    /**
     * @default undefined
     * @type {SelectOption[]}
     * @link https://github.com/material-components/material-web/blob/main/docs/components/select.md#mdfilledselect-md-filled-select
     */
    options?: HTMLElement[];
    /**
     * @default undefined
     * @type {SelectOption[]}
     * @link https://github.com/material-components/material-web/blob/main/docs/components/select.md#mdfilledselect-md-filled-select
     */
    selectedOptions?: HTMLElement[];
    /**
     * @description The native `change` event on [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)
     * @bubbles Yes
     * @composed No
     * @link https://github.com/material-components/material-web/blob/main/docs/components/select.md#mdfilledselect-md-filled-select
     */
    onChange?: SolidJS.JSX.ChangeEventHandlerUnion<T, Event>;
    /**
     * @description The native `change` event on [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)
     * @bubbles Yes
     * @composed No
     * @link https://github.com/material-components/material-web/blob/main/docs/components/select.md#mdfilledselect-md-filled-select
     */
    onchange?: SolidJS.JSX.ChangeEventHandlerUnion<T, Event>;
    /**
     * @description The native `input` event on [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
     * @bubbles Yes
     * @composed Yes
     * @link https://github.com/material-components/material-web/blob/main/docs/components/select.md#mdfilledselect-md-filled-select
     */
    onInput?: SolidJS.JSX.InputEventHandlerUnion<T, InputEvent>;
    /**
     * @description The native `input` event on [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
     * @bubbles Yes
     * @composed Yes
     * @link https://github.com/material-components/material-web/blob/main/docs/components/select.md#mdfilledselect-md-filled-select
     */
    oninput?: SolidJS.JSX.InputEventHandlerUnion<T, InputEvent>;
    /**
     * @description Fired when the select's menu is about to open.
     * @bubbles No
     * @composed No
     * @link https://github.com/material-components/material-web/blob/main/docs/components/select.md#mdfilledselect-md-filled-select
     */
    onOpening?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Fired when the select's menu is about to open.
     * @bubbles No
     * @composed No
     * @link https://github.com/material-components/material-web/blob/main/docs/components/select.md#mdfilledselect-md-filled-select
     */
    onopening?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Fired when the select's menu has finished animations and opened.
     * @bubbles No
     * @composed No
     * @link https://github.com/material-components/material-web/blob/main/docs/components/select.md#mdfilledselect-md-filled-select
     */
    onOpened?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Fired when the select's menu has finished animations and opened.
     * @bubbles No
     * @composed No
     * @link https://github.com/material-components/material-web/blob/main/docs/components/select.md#mdfilledselect-md-filled-select
     */
    onopened?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Fired when the select's menu is about to close.
     * @bubbles No
     * @composed No
     * @link https://github.com/material-components/material-web/blob/main/docs/components/select.md#mdfilledselect-md-filled-select
     */
    onClosing?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Fired when the select's menu is about to close.
     * @bubbles No
     * @composed No
     * @link https://github.com/material-components/material-web/blob/main/docs/components/select.md#mdfilledselect-md-filled-select
     */
    onclosing?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Fired when the select's menu has finished animations and closed.
     * @bubbles No
     * @composed No
     * @link https://github.com/material-components/material-web/blob/main/docs/components/select.md#mdfilledselect-md-filled-select
     */
    onClosed?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Fired when the select's menu has finished animations and closed.
     * @bubbles No
     * @composed No
     * @link https://github.com/material-components/material-web/blob/main/docs/components/select.md#mdfilledselect-md-filled-select
     */
    onclosed?: SolidJS.JSX.EventHandlerUnion<T, Event>;
  }
  export interface MdOutlinedSelect<T> extends SolidJS.JSX.HTMLAttributes<T> {
    /**
     * @description Opens the menu synchronously with no animation.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/select.md#mdoutlinedselect-md-outlined-select
     */
    quick?: boolean;
    /**
     * @description Whether or not the select is required.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/select.md#mdoutlinedselect-md-outlined-select
     */
    required?: boolean;
    /**
     * @description The error message that replaces supporting text when `error` is true. If `errorText` is an empty string, then the supporting text will continue to show.
     *
     * This error message overrides the error message displayed by `reportValidity()`.
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/select.md#mdoutlinedselect-md-outlined-select
     */
    errorText?: string;
    /**
     * @description The floating label for the field.
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/select.md#mdoutlinedselect-md-outlined-select
     */
    label?: string;
    /**
     * @description Disables the asterisk on the floating label, when the select is required.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/select.md#mdoutlinedselect-md-outlined-select
     */
    noAsterisk?: boolean;
    /**
     * @description Conveys additional information below the select, such as how it should be used.
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/select.md#mdoutlinedselect-md-outlined-select
     */
    supportingText?: string;
    /**
     * @description Gets or sets whether or not the select is in a visually invalid state.
     *
     * This error state overrides the error state controlled by `reportValidity()`.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/select.md#mdoutlinedselect-md-outlined-select
     */
    error?: boolean;
    /**
     * @description Whether or not the underlying md-menu should be position: fixed to display in a top-level manner, or position: absolute.
     *
     * position:fixed is useful for cases where select is inside of another element with stacking context and hidden overflows such as `md-dialog`.
     * @default 'popover'
     * @link https://github.com/material-components/material-web/blob/main/docs/components/select.md#mdoutlinedselect-md-outlined-select
     */
    menuPositioning?: string;
    /**
     * @description Clamps the menu-width to the width of the select.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/select.md#mdoutlinedselect-md-outlined-select
     */
    clampMenuWidth?: boolean;
    /**
     * @description The max time between the keystrokes of the typeahead select / menu behavior before it clears the typeahead buffer.
     * @default DEFAULT_TYPEAHEAD_BUFFER_TIME
     * @link https://github.com/material-components/material-web/blob/main/docs/components/select.md#mdoutlinedselect-md-outlined-select
     */
    typeaheadDelay?: number;
    /**
     * @description Whether or not the text field has a leading icon. Used for SSR.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/select.md#mdoutlinedselect-md-outlined-select
     */
    hasLeadingIcon?: boolean;
    /**
     * @description Text to display in the field. Only set for SSR.
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/select.md#mdoutlinedselect-md-outlined-select
     */
    displayText?: string;
    /**
     * @description Whether the menu should be aligned to the start or the end of the select's textbox.
     * @default 'start'
     * @link https://github.com/material-components/material-web/blob/main/docs/components/select.md#mdoutlinedselect-md-outlined-select
     */
    menuAlign?: string;
    /**
     * @default undefined
     * @link https://github.com/material-components/material-web/blob/main/docs/components/select.md#mdoutlinedselect-md-outlined-select
     */
    value?: string;
    /**
     * @default undefined
     * @link https://github.com/material-components/material-web/blob/main/docs/components/select.md#mdoutlinedselect-md-outlined-select
     */
    selectedIndex?: number;
    /**
     * @default undefined
     * @link https://github.com/material-components/material-web/blob/main/docs/components/select.md#mdoutlinedselect-md-outlined-select
     */
    disabled?: boolean;
    /**
     * @default undefined
     * @link https://github.com/material-components/material-web/blob/main/docs/components/select.md#mdoutlinedselect-md-outlined-select
     */
    name?: string;
    /**
     * @default undefined
     * @type {SelectOption[]}
     * @link https://github.com/material-components/material-web/blob/main/docs/components/select.md#mdoutlinedselect-md-outlined-select
     */
    options?: HTMLElement[];
    /**
     * @default undefined
     * @type {SelectOption[]}
     * @link https://github.com/material-components/material-web/blob/main/docs/components/select.md#mdoutlinedselect-md-outlined-select
     */
    selectedOptions?: HTMLElement[];
    /**
     * @description The native `change` event on [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)
     * @bubbles Yes
     * @composed No
     * @link https://github.com/material-components/material-web/blob/main/docs/components/select.md#mdoutlinedselect-md-outlined-select
     */
    onChange?: SolidJS.JSX.ChangeEventHandlerUnion<T, Event>;
    /**
     * @description The native `change` event on [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)
     * @bubbles Yes
     * @composed No
     * @link https://github.com/material-components/material-web/blob/main/docs/components/select.md#mdoutlinedselect-md-outlined-select
     */
    onchange?: SolidJS.JSX.ChangeEventHandlerUnion<T, Event>;
    /**
     * @description The native `input` event on [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
     * @bubbles Yes
     * @composed Yes
     * @link https://github.com/material-components/material-web/blob/main/docs/components/select.md#mdoutlinedselect-md-outlined-select
     */
    onInput?: SolidJS.JSX.InputEventHandlerUnion<T, InputEvent>;
    /**
     * @description The native `input` event on [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
     * @bubbles Yes
     * @composed Yes
     * @link https://github.com/material-components/material-web/blob/main/docs/components/select.md#mdoutlinedselect-md-outlined-select
     */
    oninput?: SolidJS.JSX.InputEventHandlerUnion<T, InputEvent>;
    /**
     * @description Fired when the select's menu is about to open.
     * @bubbles No
     * @composed No
     * @link https://github.com/material-components/material-web/blob/main/docs/components/select.md#mdoutlinedselect-md-outlined-select
     */
    onOpening?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Fired when the select's menu is about to open.
     * @bubbles No
     * @composed No
     * @link https://github.com/material-components/material-web/blob/main/docs/components/select.md#mdoutlinedselect-md-outlined-select
     */
    onopening?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Fired when the select's menu has finished animations and opened.
     * @bubbles No
     * @composed No
     * @link https://github.com/material-components/material-web/blob/main/docs/components/select.md#mdoutlinedselect-md-outlined-select
     */
    onOpened?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Fired when the select's menu has finished animations and opened.
     * @bubbles No
     * @composed No
     * @link https://github.com/material-components/material-web/blob/main/docs/components/select.md#mdoutlinedselect-md-outlined-select
     */
    onopened?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Fired when the select's menu is about to close.
     * @bubbles No
     * @composed No
     * @link https://github.com/material-components/material-web/blob/main/docs/components/select.md#mdoutlinedselect-md-outlined-select
     */
    onClosing?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Fired when the select's menu is about to close.
     * @bubbles No
     * @composed No
     * @link https://github.com/material-components/material-web/blob/main/docs/components/select.md#mdoutlinedselect-md-outlined-select
     */
    onclosing?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Fired when the select's menu has finished animations and closed.
     * @bubbles No
     * @composed No
     * @link https://github.com/material-components/material-web/blob/main/docs/components/select.md#mdoutlinedselect-md-outlined-select
     */
    onClosed?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Fired when the select's menu has finished animations and closed.
     * @bubbles No
     * @composed No
     * @link https://github.com/material-components/material-web/blob/main/docs/components/select.md#mdoutlinedselect-md-outlined-select
     */
    onclosed?: SolidJS.JSX.EventHandlerUnion<T, Event>;
  }
  export interface MdSelectOption<T> extends SolidJS.JSX.HTMLAttributes<T> {
    /**
     * @description Disables the item and makes it non-selectable and non-interactive.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/select.md#mdselectoption-md-select-option
     */
    disabled?: boolean;
    /**
     * @description Sets the item in the selected visual state when a submenu is opened.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/select.md#mdselectoption-md-select-option
     */
    selected?: boolean;
    /**
     * @description Form value of the option.
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/select.md#mdselectoption-md-select-option
     */
    value?: string;
    /**
     * @default 'option' as const
     * @link https://github.com/material-components/material-web/blob/main/docs/components/select.md#mdselectoption-md-select-option
     */
    type?: string;
    /**
     * @default undefined
     * @link https://github.com/material-components/material-web/blob/main/docs/components/select.md#mdselectoption-md-select-option
     */
    typeaheadText?: string;
    /**
     * @default undefined
     * @link https://github.com/material-components/material-web/blob/main/docs/components/select.md#mdselectoption-md-select-option
     */
    displayText?: string;
    /**
     * @description Closes the encapsulating menu on closable interaction.
     * @bubbles Yes
     * @composed Yes
     * @link https://github.com/material-components/material-web/blob/main/docs/components/select.md#mdselectoption-md-select-option
     */
    onCloseMenu?: SolidJS.JSX.EventHandlerUnion<
      T,
      CustomEvent<{ initiator: SelectOption; reason: Reason; itemPath: SelectOption[] }>
    >;
    /**
     * @description Closes the encapsulating menu on closable interaction.
     * @bubbles Yes
     * @composed Yes
     * @link https://github.com/material-components/material-web/blob/main/docs/components/select.md#mdselectoption-md-select-option
     */
    onclosemenu?: SolidJS.JSX.EventHandlerUnion<
      T,
      CustomEvent<{ initiator: SelectOption; reason: Reason; itemPath: SelectOption[] }>
    >;
    /**
     * @description Requests the parent md-select to select this element (and deselect others if single-selection) when `selected` changed to `true`.
     * @bubbles Yes
     * @composed Yes
     * @link https://github.com/material-components/material-web/blob/main/docs/components/select.md#mdselectoption-md-select-option
     */
    onRequestSelection?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Requests the parent md-select to select this element (and deselect others if single-selection) when `selected` changed to `true`.
     * @bubbles Yes
     * @composed Yes
     * @link https://github.com/material-components/material-web/blob/main/docs/components/select.md#mdselectoption-md-select-option
     */
    onrequestselection?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Requests the parent md-select to deselect this element when `selected` changed to `false`.
     * @bubbles Yes
     * @composed Yes
     * @link https://github.com/material-components/material-web/blob/main/docs/components/select.md#mdselectoption-md-select-option
     */
    onRequestDeselection?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Requests the parent md-select to deselect this element when `selected` changed to `false`.
     * @bubbles Yes
     * @composed Yes
     * @link https://github.com/material-components/material-web/blob/main/docs/components/select.md#mdselectoption-md-select-option
     */
    onrequestdeselection?: SolidJS.JSX.EventHandlerUnion<T, Event>;
  }
  export interface MdSlider<T> extends SolidJS.JSX.HTMLAttributes<T> {
    /**
     * @description The slider minimum value
     * @default 0
     * @link https://github.com/material-components/material-web/blob/main/docs/components/slider.md#mdslider-md-slider
     */
    min?: number;
    /**
     * @description The slider maximum value
     * @default 100
     * @link https://github.com/material-components/material-web/blob/main/docs/components/slider.md#mdslider-md-slider
     */
    max?: number;
    /**
     * @description The slider value displayed when range is false.
     * @default undefined
     * @link https://github.com/material-components/material-web/blob/main/docs/components/slider.md#mdslider-md-slider
     */
    value?: number;
    /**
     * @description The slider start value displayed when range is true.
     * @default undefined
     * @link https://github.com/material-components/material-web/blob/main/docs/components/slider.md#mdslider-md-slider
     */
    valueStart?: number;
    /**
     * @description The slider end value displayed when range is true.
     * @default undefined
     * @link https://github.com/material-components/material-web/blob/main/docs/components/slider.md#mdslider-md-slider
     */
    valueEnd?: number;
    /**
     * @description An optional label for the slider's value displayed when range is false; if not set, the label is the value itself.
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/slider.md#mdslider-md-slider
     */
    valueLabel?: string;
    /**
     * @description An optional label for the slider's start value displayed when range is true; if not set, the label is the valueStart itself.
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/slider.md#mdslider-md-slider
     */
    valueLabelStart?: string;
    /**
     * @description An optional label for the slider's end value displayed when range is true; if not set, the label is the valueEnd itself.
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/slider.md#mdslider-md-slider
     */
    valueLabelEnd?: string;
    /**
     * @description Aria label for the slider's start handle displayed when range is true.
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/slider.md#mdslider-md-slider
     */
    ariaLabelStart?: string;
    /**
     * @description Aria value text for the slider's start value displayed when range is true.
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/slider.md#mdslider-md-slider
     */
    ariaValueTextStart?: string;
    /**
     * @description Aria label for the slider's end handle displayed when range is true.
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/slider.md#mdslider-md-slider
     */
    ariaLabelEnd?: string;
    /**
     * @description Aria value text for the slider's end value displayed when range is true.
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/slider.md#mdslider-md-slider
     */
    ariaValueTextEnd?: string;
    /**
     * @description The step between values.
     * @default 1
     * @link https://github.com/material-components/material-web/blob/main/docs/components/slider.md#mdslider-md-slider
     */
    step?: number;
    /**
     * @description Whether or not to show tick marks.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/slider.md#mdslider-md-slider
     */
    ticks?: boolean;
    /**
     * @description Whether or not to show a value label when activated.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/slider.md#mdslider-md-slider
     */
    labeled?: boolean;
    /**
     * @description Whether or not to show a value range. When false, the slider displays a slideable handle for the value property; when true, it displays slideable handles for the valueStart and valueEnd properties.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/slider.md#mdslider-md-slider
     */
    range?: boolean;
    /**
     * @default undefined
     * @link https://github.com/material-components/material-web/blob/main/docs/components/slider.md#mdslider-md-slider
     */
    disabled?: boolean;
    /**
     * @default undefined
     * @link https://github.com/material-components/material-web/blob/main/docs/components/slider.md#mdslider-md-slider
     */
    name?: string;
    /**
     * @default undefined
     * @link https://github.com/material-components/material-web/blob/main/docs/components/slider.md#mdslider-md-slider
     */
    nameStart?: string;
    /**
     * @default undefined
     * @link https://github.com/material-components/material-web/blob/main/docs/components/slider.md#mdslider-md-slider
     */
    nameEnd?: string;
    /**
     * @description The native `change` event on [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)
     * @bubbles Yes
     * @composed No
     * @link https://github.com/material-components/material-web/blob/main/docs/components/slider.md#mdslider-md-slider
     */
    onChange?: SolidJS.JSX.ChangeEventHandlerUnion<T, Event>;
    /**
     * @description The native `change` event on [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)
     * @bubbles Yes
     * @composed No
     * @link https://github.com/material-components/material-web/blob/main/docs/components/slider.md#mdslider-md-slider
     */
    onchange?: SolidJS.JSX.ChangeEventHandlerUnion<T, Event>;
    /**
     * @description The native `input` event on [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
     * @bubbles Yes
     * @composed Yes
     * @link https://github.com/material-components/material-web/blob/main/docs/components/slider.md#mdslider-md-slider
     */
    onInput?: SolidJS.JSX.InputEventHandlerUnion<T, InputEvent>;
    /**
     * @description The native `input` event on [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
     * @bubbles Yes
     * @composed Yes
     * @link https://github.com/material-components/material-web/blob/main/docs/components/slider.md#mdslider-md-slider
     */
    oninput?: SolidJS.JSX.InputEventHandlerUnion<T, InputEvent>;
  }
  export interface MdSwitch<T> extends SolidJS.JSX.HTMLAttributes<T> {
    /**
     * @description Puts the switch in the selected state and sets the form submission value to the `value` property.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/switch.md#mdswitch-md-switch
     */
    selected?: boolean;
    /**
     * @description Shows both the selected and deselected icons.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/switch.md#mdswitch-md-switch
     */
    icons?: boolean;
    /**
     * @description Shows only the selected icon, and not the deselected icon. If `true`, overrides the behavior of the `icons` property.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/switch.md#mdswitch-md-switch
     */
    showOnlySelectedIcon?: boolean;
    /**
     * @description When true, require the switch to be selected when participating in form submission.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#validation
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/switch.md#mdswitch-md-switch
     */
    required?: boolean;
    /**
     * @description The value associated with this switch on form submission. `null` is submitted when `selected` is `false`.
     * @default 'on'
     * @link https://github.com/material-components/material-web/blob/main/docs/components/switch.md#mdswitch-md-switch
     */
    value?: string;
    /**
     * @default undefined
     * @link https://github.com/material-components/material-web/blob/main/docs/components/switch.md#mdswitch-md-switch
     */
    disabled?: boolean;
    /**
     * @default undefined
     * @link https://github.com/material-components/material-web/blob/main/docs/components/switch.md#mdswitch-md-switch
     */
    name?: string;
    /**
     * @description Fired whenever `selected` changes due to user interaction (bubbles and composed).
     * @bubbles No
     * @composed No
     * @link https://github.com/material-components/material-web/blob/main/docs/components/switch.md#mdswitch-md-switch
     */
    onInput?: SolidJS.JSX.InputEventHandlerUnion<T, InputEvent>;
    /**
     * @description Fired whenever `selected` changes due to user interaction (bubbles and composed).
     * @bubbles No
     * @composed No
     * @link https://github.com/material-components/material-web/blob/main/docs/components/switch.md#mdswitch-md-switch
     */
    oninput?: SolidJS.JSX.InputEventHandlerUnion<T, InputEvent>;
    /**
     * @description Fired whenever `selected` changes due to user interaction (bubbles).
     * @bubbles No
     * @composed No
     * @link https://github.com/material-components/material-web/blob/main/docs/components/switch.md#mdswitch-md-switch
     */
    onChange?: SolidJS.JSX.ChangeEventHandlerUnion<T, Event>;
    /**
     * @description Fired whenever `selected` changes due to user interaction (bubbles).
     * @bubbles No
     * @composed No
     * @link https://github.com/material-components/material-web/blob/main/docs/components/switch.md#mdswitch-md-switch
     */
    onchange?: SolidJS.JSX.ChangeEventHandlerUnion<T, Event>;
  }
  export interface MdTabs<T> extends SolidJS.JSX.HTMLAttributes<T> {
    /**
     * @description Whether or not to automatically select a tab when it is focused.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/tabs.md#mdtabs-md-tabs
     */
    autoActivate?: boolean;
    /**
     * @default undefined
     * @link https://github.com/material-components/material-web/blob/main/docs/components/tabs.md#mdtabs-md-tabs
     */
    activeTabIndex?: number;
    /**
     * @description The tabs of this tab bar.
     * @default undefined
     * @type {Tab[]}
     * @link https://github.com/material-components/material-web/blob/main/docs/components/tabs.md#mdtabs-md-tabs
     */
    tabs?: HTMLElement[];
    /**
     * @default undefined
     * @type {Tab}
     * @link https://github.com/material-components/material-web/blob/main/docs/components/tabs.md#mdtabs-md-tabs
     */
    activeTab?: HTMLElement;
    /**
     * @description Fired when the selected tab changes. The target's `activeTabIndex` or `activeTab` provide information about the selection change. The change event is fired when a user interaction like a space/enter key or click cause a selection change. The tab selection based on these actions can be cancelled by calling preventDefault on the triggering `keydown` or `click` event.
     * @bubbles Yes
     * @composed No
     * @link https://github.com/material-components/material-web/blob/main/docs/components/tabs.md#mdtabs-md-tabs
     */
    onChange?: SolidJS.JSX.ChangeEventHandlerUnion<T, Event>;
    /**
     * @description Fired when the selected tab changes. The target's `activeTabIndex` or `activeTab` provide information about the selection change. The change event is fired when a user interaction like a space/enter key or click cause a selection change. The tab selection based on these actions can be cancelled by calling preventDefault on the triggering `keydown` or `click` event.
     * @bubbles Yes
     * @composed No
     * @link https://github.com/material-components/material-web/blob/main/docs/components/tabs.md#mdtabs-md-tabs
     */
    onchange?: SolidJS.JSX.ChangeEventHandlerUnion<T, Event>;
  }
  export interface MdPrimaryTab<T> extends SolidJS.JSX.HTMLAttributes<T> {
    /**
     * @description Whether or not the icon renders inline with label or stacked vertically.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/tabs.md#mdprimarytab-md-primary-tab
     */
    inlineIcon?: boolean;
    /**
     * @description The attribute `md-tab` indicates that the element is a tab for the parent element, `<md-tabs>`. Make sure if you're implementing your own `md-tab` component that you have an `md-tab` attribute set.
     * @default true
     * @link https://github.com/material-components/material-web/blob/main/docs/components/tabs.md#mdprimarytab-md-primary-tab
     */
    isTab?: boolean;
    /**
     * @description Whether or not the tab is selected.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/tabs.md#mdprimarytab-md-primary-tab
     */
    active?: boolean;
    /**
     * @description In SSR, set this to true when an icon is present.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/tabs.md#mdprimarytab-md-primary-tab
     */
    hasIcon?: boolean;
    /**
     * @description In SSR, set this to true when there is no label and only an icon.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/tabs.md#mdprimarytab-md-primary-tab
     */
    iconOnly?: boolean;
    /**
     * @default undefined
     * @link https://github.com/material-components/material-web/blob/main/docs/components/tabs.md#mdprimarytab-md-primary-tab
     */
    selected?: boolean;
  }
  export interface MdSecondaryTab<T> extends SolidJS.JSX.HTMLAttributes<T> {
    /**
     * @description The attribute `md-tab` indicates that the element is a tab for the parent element, `<md-tabs>`. Make sure if you're implementing your own `md-tab` component that you have an `md-tab` attribute set.
     * @default true
     * @link https://github.com/material-components/material-web/blob/main/docs/components/tabs.md#mdsecondarytab-md-secondary-tab
     */
    isTab?: boolean;
    /**
     * @description Whether or not the tab is selected.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/tabs.md#mdsecondarytab-md-secondary-tab
     */
    active?: boolean;
    /**
     * @description In SSR, set this to true when an icon is present.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/tabs.md#mdsecondarytab-md-secondary-tab
     */
    hasIcon?: boolean;
    /**
     * @description In SSR, set this to true when there is no label and only an icon.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/tabs.md#mdsecondarytab-md-secondary-tab
     */
    iconOnly?: boolean;
    /**
     * @default undefined
     * @link https://github.com/material-components/material-web/blob/main/docs/components/tabs.md#mdsecondarytab-md-secondary-tab
     */
    selected?: boolean;
  }
  export interface MdFilledTextField<T> extends SolidJS.JSX.HTMLAttributes<T> {
    /**
     * @description Gets or sets whether or not the text field is in a visually invalid state.
     *
     * This error state overrides the error state controlled by `reportValidity()`.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdfilledtextfield-md-filled-text-field
     */
    error?: boolean;
    /**
     * @description The error message that replaces supporting text when `error` is true. If `errorText` is an empty string, then the supporting text will continue to show.
     *
     * This error message overrides the error message displayed by `reportValidity()`.
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdfilledtextfield-md-filled-text-field
     */
    errorText?: string;
    /**
     * @description The floating Material label of the textfield component. It informs the user about what information is requested for a text field. It is aligned with the input text, is always visible, and it floats when focused or when text is entered into the textfield. This label also sets accessibilty labels, but the accessible label is overriden by `aria-label`.
     *
     * Learn more about floating labels from the Material Design guidelines: https://m3.material.io/components/text-fields/guidelines
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdfilledtextfield-md-filled-text-field
     */
    label?: string;
    /**
     * @description Disables the asterisk on the floating label, when the text field is required.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdfilledtextfield-md-filled-text-field
     */
    noAsterisk?: boolean;
    /**
     * @description Indicates that the user must specify a value for the input before the owning form can be submitted and will render an error state when `reportValidity()` is invoked when value is empty. Additionally the floating label will render an asterisk `"*"` when true.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdfilledtextfield-md-filled-text-field
     */
    required?: boolean;
    /**
     * @description The current value of the text field. It is always a string.
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdfilledtextfield-md-filled-text-field
     */
    value?: string;
    /**
     * @description An optional prefix to display before the input value.
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdfilledtextfield-md-filled-text-field
     */
    prefixText?: string;
    /**
     * @description An optional suffix to display after the input value.
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdfilledtextfield-md-filled-text-field
     */
    suffixText?: string;
    /**
     * @description Whether or not the text field has a leading icon. Used for SSR.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdfilledtextfield-md-filled-text-field
     */
    hasLeadingIcon?: boolean;
    /**
     * @description Whether or not the text field has a trailing icon. Used for SSR.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdfilledtextfield-md-filled-text-field
     */
    hasTrailingIcon?: boolean;
    /**
     * @description Conveys additional information below the text field, such as how it should be used.
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdfilledtextfield-md-filled-text-field
     */
    supportingText?: string;
    /**
     * @description Override the input text CSS `direction`. Useful for RTL languages that use LTR notation for fractions.
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdfilledtextfield-md-filled-text-field
     */
    textDirection?: string;
    /**
     * @description The number of rows to display for a `type="textarea"` text field. Defaults to 2.
     * @default 2
     * @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdfilledtextfield-md-filled-text-field
     */
    rows?: number;
    /**
     * @description The number of cols to display for a `type="textarea"` text field. Defaults to 20.
     * @default 20
     * @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdfilledtextfield-md-filled-text-field
     */
    cols?: number;
    /**
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdfilledtextfield-md-filled-text-field
     */
    inputMode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';
    /**
     * @description Defines the greatest value in the range of permitted values.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#max
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdfilledtextfield-md-filled-text-field
     */
    max?: string;
    /**
     * @description The maximum number of characters a user can enter into the text field. Set to -1 for none.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#maxlength
     * @default -1
     * @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdfilledtextfield-md-filled-text-field
     */
    maxLength?: number;
    /**
     * @description Defines the most negative value in the range of permitted values.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#min
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdfilledtextfield-md-filled-text-field
     */
    min?: string;
    /**
     * @description The minimum number of characters a user can enter into the text field. Set to -1 for none.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#minlength
     * @default -1
     * @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdfilledtextfield-md-filled-text-field
     */
    minLength?: number;
    /**
     * @description When true, hide the spinner for `type="number"` text fields.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdfilledtextfield-md-filled-text-field
     */
    noSpinner?: boolean;
    /**
     * @description A regular expression that the text field's value must match to pass constraint validation.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#pattern
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdfilledtextfield-md-filled-text-field
     */
    pattern?: string;
    /**
     * @description Defines the text displayed in the textfield when it has no value. Provides a brief hint to the user as to the expected type of data that should be entered into the control. Unlike `label`, the placeholder is not visible and does not float when the textfield has a value.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/placeholder
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdfilledtextfield-md-filled-text-field
     */
    placeholder?: string;
    /**
     * @description Indicates whether or not a user should be able to edit the text field's value.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#readonly
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdfilledtextfield-md-filled-text-field
     */
    readOnly?: boolean;
    /**
     * @description Indicates that input accepts multiple email addresses.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email#multiple
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdfilledtextfield-md-filled-text-field
     */
    multiple?: boolean;
    /**
     * @description Returns or sets the element's step attribute, which works with min and max to limit the increments at which a numeric or date-time value can be set.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#step
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdfilledtextfield-md-filled-text-field
     */
    step?: string;
    /**
     * @description The `<input>` type to use, defaults to "text". The type greatly changes how the text field behaves.
     *
     * Text fields support a limited number of `<input>` types:
     *
     * - text - textarea - email - number - password - search - tel - url
     *
     * See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types for more details on each input type.
     * @default 'text'
     * @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdfilledtextfield-md-filled-text-field
     */
    type?: string;
    /**
     * @description Describes what, if any, type of autocomplete functionality the input should provide.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdfilledtextfield-md-filled-text-field
     */
    autocomplete?: string;
    /**
     * @default undefined
     * @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdfilledtextfield-md-filled-text-field
     */
    disabled?: boolean;
    /**
     * @default undefined
     * @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdfilledtextfield-md-filled-text-field
     */
    name?: string;
    /**
     * @default undefined
     * @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdfilledtextfield-md-filled-text-field
     */
    selectionDirection?: string;
    /**
     * @default undefined
     * @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdfilledtextfield-md-filled-text-field
     */
    selectionEnd?: number;
    /**
     * @default undefined
     * @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdfilledtextfield-md-filled-text-field
     */
    selectionStart?: number;
    /**
     * @default undefined
     * @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdfilledtextfield-md-filled-text-field
     */
    valueAsNumber?: number;
    /**
     * @default undefined
     * @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdfilledtextfield-md-filled-text-field
     */
    valueAsDate?: Date;
    /**
     * @description The native `select` event on [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/select_event)
     * @bubbles Yes
     * @composed No
     * @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdfilledtextfield-md-filled-text-field
     */
    onSelect?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description The native `select` event on [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/select_event)
     * @bubbles Yes
     * @composed No
     * @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdfilledtextfield-md-filled-text-field
     */
    onselect?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description The native `change` event on [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)
     * @bubbles Yes
     * @composed No
     * @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdfilledtextfield-md-filled-text-field
     */
    onChange?: SolidJS.JSX.ChangeEventHandlerUnion<T, Event>;
    /**
     * @description The native `change` event on [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)
     * @bubbles Yes
     * @composed No
     * @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdfilledtextfield-md-filled-text-field
     */
    onchange?: SolidJS.JSX.ChangeEventHandlerUnion<T, Event>;
    /**
     * @description The native `input` event on [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
     * @bubbles Yes
     * @composed Yes
     * @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdfilledtextfield-md-filled-text-field
     */
    onInput?: SolidJS.JSX.InputEventHandlerUnion<T, InputEvent>;
    /**
     * @description The native `input` event on [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
     * @bubbles Yes
     * @composed Yes
     * @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdfilledtextfield-md-filled-text-field
     */
    oninput?: SolidJS.JSX.InputEventHandlerUnion<T, InputEvent>;
  }
  export interface MdOutlinedTextField<T> extends SolidJS.JSX.HTMLAttributes<T> {
    /**
     * @description Gets or sets whether or not the text field is in a visually invalid state.
     *
     * This error state overrides the error state controlled by `reportValidity()`.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdoutlinedtextfield-md-outlined-text-field
     */
    error?: boolean;
    /**
     * @description The error message that replaces supporting text when `error` is true. If `errorText` is an empty string, then the supporting text will continue to show.
     *
     * This error message overrides the error message displayed by `reportValidity()`.
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdoutlinedtextfield-md-outlined-text-field
     */
    errorText?: string;
    /**
     * @description The floating Material label of the textfield component. It informs the user about what information is requested for a text field. It is aligned with the input text, is always visible, and it floats when focused or when text is entered into the textfield. This label also sets accessibilty labels, but the accessible label is overriden by `aria-label`.
     *
     * Learn more about floating labels from the Material Design guidelines: https://m3.material.io/components/text-fields/guidelines
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdoutlinedtextfield-md-outlined-text-field
     */
    label?: string;
    /**
     * @description Disables the asterisk on the floating label, when the text field is required.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdoutlinedtextfield-md-outlined-text-field
     */
    noAsterisk?: boolean;
    /**
     * @description Indicates that the user must specify a value for the input before the owning form can be submitted and will render an error state when `reportValidity()` is invoked when value is empty. Additionally the floating label will render an asterisk `"*"` when true.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdoutlinedtextfield-md-outlined-text-field
     */
    required?: boolean;
    /**
     * @description The current value of the text field. It is always a string.
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdoutlinedtextfield-md-outlined-text-field
     */
    value?: string;
    /**
     * @description An optional prefix to display before the input value.
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdoutlinedtextfield-md-outlined-text-field
     */
    prefixText?: string;
    /**
     * @description An optional suffix to display after the input value.
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdoutlinedtextfield-md-outlined-text-field
     */
    suffixText?: string;
    /**
     * @description Whether or not the text field has a leading icon. Used for SSR.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdoutlinedtextfield-md-outlined-text-field
     */
    hasLeadingIcon?: boolean;
    /**
     * @description Whether or not the text field has a trailing icon. Used for SSR.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdoutlinedtextfield-md-outlined-text-field
     */
    hasTrailingIcon?: boolean;
    /**
     * @description Conveys additional information below the text field, such as how it should be used.
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdoutlinedtextfield-md-outlined-text-field
     */
    supportingText?: string;
    /**
     * @description Override the input text CSS `direction`. Useful for RTL languages that use LTR notation for fractions.
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdoutlinedtextfield-md-outlined-text-field
     */
    textDirection?: string;
    /**
     * @description The number of rows to display for a `type="textarea"` text field. Defaults to 2.
     * @default 2
     * @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdoutlinedtextfield-md-outlined-text-field
     */
    rows?: number;
    /**
     * @description The number of cols to display for a `type="textarea"` text field. Defaults to 20.
     * @default 20
     * @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdoutlinedtextfield-md-outlined-text-field
     */
    cols?: number;
    /**
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdoutlinedtextfield-md-outlined-text-field
     */
    inputMode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';
    /**
     * @description Defines the greatest value in the range of permitted values.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#max
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdoutlinedtextfield-md-outlined-text-field
     */
    max?: string;
    /**
     * @description The maximum number of characters a user can enter into the text field. Set to -1 for none.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#maxlength
     * @default -1
     * @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdoutlinedtextfield-md-outlined-text-field
     */
    maxLength?: number;
    /**
     * @description Defines the most negative value in the range of permitted values.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#min
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdoutlinedtextfield-md-outlined-text-field
     */
    min?: string;
    /**
     * @description The minimum number of characters a user can enter into the text field. Set to -1 for none.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#minlength
     * @default -1
     * @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdoutlinedtextfield-md-outlined-text-field
     */
    minLength?: number;
    /**
     * @description When true, hide the spinner for `type="number"` text fields.
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdoutlinedtextfield-md-outlined-text-field
     */
    noSpinner?: boolean;
    /**
     * @description A regular expression that the text field's value must match to pass constraint validation.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#pattern
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdoutlinedtextfield-md-outlined-text-field
     */
    pattern?: string;
    /**
     * @description Defines the text displayed in the textfield when it has no value. Provides a brief hint to the user as to the expected type of data that should be entered into the control. Unlike `label`, the placeholder is not visible and does not float when the textfield has a value.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/placeholder
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdoutlinedtextfield-md-outlined-text-field
     */
    placeholder?: string;
    /**
     * @description Indicates whether or not a user should be able to edit the text field's value.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#readonly
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdoutlinedtextfield-md-outlined-text-field
     */
    readOnly?: boolean;
    /**
     * @description Indicates that input accepts multiple email addresses.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email#multiple
     * @default false
     * @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdoutlinedtextfield-md-outlined-text-field
     */
    multiple?: boolean;
    /**
     * @description Returns or sets the element's step attribute, which works with min and max to limit the increments at which a numeric or date-time value can be set.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#step
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdoutlinedtextfield-md-outlined-text-field
     */
    step?: string;
    /**
     * @description The `<input>` type to use, defaults to "text". The type greatly changes how the text field behaves.
     *
     * Text fields support a limited number of `<input>` types:
     *
     * - text - textarea - email - number - password - search - tel - url
     *
     * See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types for more details on each input type.
     * @default 'text'
     * @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdoutlinedtextfield-md-outlined-text-field
     */
    type?: string;
    /**
     * @description Describes what, if any, type of autocomplete functionality the input should provide.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
     * @default ''
     * @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdoutlinedtextfield-md-outlined-text-field
     */
    autocomplete?: string;
    /**
     * @default undefined
     * @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdoutlinedtextfield-md-outlined-text-field
     */
    disabled?: boolean;
    /**
     * @default undefined
     * @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdoutlinedtextfield-md-outlined-text-field
     */
    name?: string;
    /**
     * @default undefined
     * @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdoutlinedtextfield-md-outlined-text-field
     */
    selectionDirection?: string;
    /**
     * @default undefined
     * @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdoutlinedtextfield-md-outlined-text-field
     */
    selectionEnd?: number;
    /**
     * @default undefined
     * @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdoutlinedtextfield-md-outlined-text-field
     */
    selectionStart?: number;
    /**
     * @default undefined
     * @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdoutlinedtextfield-md-outlined-text-field
     */
    valueAsNumber?: number;
    /**
     * @default undefined
     * @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdoutlinedtextfield-md-outlined-text-field
     */
    valueAsDate?: Date;
    /**
     * @description The native `select` event on [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/select_event)
     * @bubbles Yes
     * @composed No
     * @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdoutlinedtextfield-md-outlined-text-field
     */
    onSelect?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description The native `select` event on [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/select_event)
     * @bubbles Yes
     * @composed No
     * @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdoutlinedtextfield-md-outlined-text-field
     */
    onselect?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description The native `change` event on [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)
     * @bubbles Yes
     * @composed No
     * @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdoutlinedtextfield-md-outlined-text-field
     */
    onChange?: SolidJS.JSX.ChangeEventHandlerUnion<T, Event>;
    /**
     * @description The native `change` event on [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)
     * @bubbles Yes
     * @composed No
     * @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdoutlinedtextfield-md-outlined-text-field
     */
    onchange?: SolidJS.JSX.ChangeEventHandlerUnion<T, Event>;
    /**
     * @description The native `input` event on [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
     * @bubbles Yes
     * @composed Yes
     * @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdoutlinedtextfield-md-outlined-text-field
     */
    onInput?: SolidJS.JSX.InputEventHandlerUnion<T, InputEvent>;
    /**
     * @description The native `input` event on [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
     * @bubbles Yes
     * @composed Yes
     * @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdoutlinedtextfield-md-outlined-text-field
     */
    oninput?: SolidJS.JSX.InputEventHandlerUnion<T, InputEvent>;
  }
  export type MdIcon<T> = SolidJS.JSX.HTMLAttributes<T>;
}

declare module 'solid-js' {
  namespace JSX {
    interface IntrinsicElements {
      /** @link https://github.com/material-components/material-web/blob/main/docs/components/button.md#mdelevatedbutton-md-elevated-button */
      'md-elevated-button': MaterialWeb.MdElevatedButton<HTMLElement>;
      /** @link https://github.com/material-components/material-web/blob/main/docs/components/button.md#mdfilledbutton-md-filled-button */
      'md-filled-button': MaterialWeb.MdFilledButton<HTMLElement>;
      /** @link https://github.com/material-components/material-web/blob/main/docs/components/button.md#mdfilledtonalbutton-md-filled-tonal-button */
      'md-filled-tonal-button': MaterialWeb.MdFilledTonalButton<HTMLElement>;
      /** @link https://github.com/material-components/material-web/blob/main/docs/components/button.md#mdoutlinedbutton-md-outlined-button */
      'md-outlined-button': MaterialWeb.MdOutlinedButton<HTMLElement>;
      /** @link https://github.com/material-components/material-web/blob/main/docs/components/button.md#mdtextbutton-md-text-button */
      'md-text-button': MaterialWeb.MdTextButton<HTMLElement>;
      /** @link https://github.com/material-components/material-web/blob/main/docs/components/checkbox.md#mdcheckbox-md-checkbox */
      'md-checkbox': MaterialWeb.MdCheckbox<HTMLElement>;
      /** @link https://github.com/material-components/material-web/blob/main/docs/components/chip.md#mdchipset-md-chip-set */
      'md-chip-set': MaterialWeb.MdChipSet<HTMLElement>;
      /** @link https://github.com/material-components/material-web/blob/main/docs/components/chip.md#mdassistchip-md-assist-chip */
      'md-assist-chip': MaterialWeb.MdAssistChip<HTMLElement>;
      /** @link https://github.com/material-components/material-web/blob/main/docs/components/chip.md#mdfilterchip-md-filter-chip */
      'md-filter-chip': MaterialWeb.MdFilterChip<HTMLElement>;
      /** @link https://github.com/material-components/material-web/blob/main/docs/components/chip.md#mdinputchip-md-input-chip */
      'md-input-chip': MaterialWeb.MdInputChip<HTMLElement>;
      /** @link https://github.com/material-components/material-web/blob/main/docs/components/chip.md#mdsuggestionchip-md-suggestion-chip */
      'md-suggestion-chip': MaterialWeb.MdSuggestionChip<HTMLElement>;
      /** @link https://github.com/material-components/material-web/blob/main/docs/components/dialog.md#mddialog-md-dialog */
      'md-dialog': MaterialWeb.MdDialog<HTMLElement>;
      /** @link https://github.com/material-components/material-web/blob/main/docs/components/divider.md#mddivider-md-divider */
      'md-divider': MaterialWeb.MdDivider<HTMLElement>;
      /** @link https://github.com/material-components/material-web/blob/main/docs/components/fab.md#mdfab-md-fab */
      'md-fab': MaterialWeb.MdFab<HTMLElement>;
      /** @link https://github.com/material-components/material-web/blob/main/docs/components/fab.md#mdbrandedfab-md-branded-fab */
      'md-branded-fab': MaterialWeb.MdBrandedFab<HTMLElement>;
      /** @link https://github.com/material-components/material-web/blob/main/docs/components/focus-ring.md#mdfocusring-md-focus-ring */
      'md-focus-ring': MaterialWeb.MdFocusRing<HTMLElement>;
      /** @link https://github.com/material-components/material-web/blob/main/docs/components/icon-button.md#mdiconbutton-md-icon-button */
      'md-icon-button': MaterialWeb.MdIconButton<HTMLElement>;
      /** @link https://github.com/material-components/material-web/blob/main/docs/components/icon-button.md#mdfillediconbutton-md-filled-icon-button */
      'md-filled-icon-button': MaterialWeb.MdFilledIconButton<HTMLElement>;
      /** @link https://github.com/material-components/material-web/blob/main/docs/components/icon-button.md#mdfilledtonaliconbutton-md-filled-tonal-icon-button */
      'md-filled-tonal-icon-button': MaterialWeb.MdFilledTonalIconButton<HTMLElement>;
      /** @link https://github.com/material-components/material-web/blob/main/docs/components/icon-button.md#mdoutlinediconbutton-md-outlined-icon-button */
      'md-outlined-icon-button': MaterialWeb.MdOutlinedIconButton<HTMLElement>;
      /** @link https://github.com/material-components/material-web/blob/main/docs/components/list.md#mdlist-md-list */
      'md-list': MaterialWeb.MdList<HTMLElement>;
      /** @link https://github.com/material-components/material-web/blob/main/docs/components/list.md#mdlistitem-md-list-item */
      'md-list-item': MaterialWeb.MdListItem<HTMLElement>;
      /** @link https://github.com/material-components/material-web/blob/main/docs/components/menu.md#mdmenu-md-menu */
      'md-menu': MaterialWeb.MdMenu<HTMLElement>;
      /** @link https://github.com/material-components/material-web/blob/main/docs/components/menu.md#mdmenuitem-md-menu-item */
      'md-menu-item': MaterialWeb.MdMenuItem<HTMLElement>;
      /** @link https://github.com/material-components/material-web/blob/main/docs/components/menu.md#mdsubmenu-md-sub-menu */
      'md-sub-menu': MaterialWeb.MdSubMenu<HTMLElement>;
      /** @link https://github.com/material-components/material-web/blob/main/docs/components/progress.md#mdlinearprogress-md-linear-progress */
      'md-linear-progress': MaterialWeb.MdLinearProgress<HTMLElement>;
      /** @link https://github.com/material-components/material-web/blob/main/docs/components/progress.md#mdcircularprogress-md-circular-progress */
      'md-circular-progress': MaterialWeb.MdCircularProgress<HTMLElement>;
      /** @link https://github.com/material-components/material-web/blob/main/docs/components/radio.md#mdradio-md-radio */
      'md-radio': MaterialWeb.MdRadio<HTMLElement>;
      /** @link https://github.com/material-components/material-web/blob/main/docs/components/ripple.md#mdripple-md-ripple */
      'md-ripple': MaterialWeb.MdRipple<HTMLElement>;
      /** @link https://github.com/material-components/material-web/blob/main/docs/components/select.md#mdfilledselect-md-filled-select */
      'md-filled-select': MaterialWeb.MdFilledSelect<HTMLElement>;
      /** @link https://github.com/material-components/material-web/blob/main/docs/components/select.md#mdoutlinedselect-md-outlined-select */
      'md-outlined-select': MaterialWeb.MdOutlinedSelect<HTMLElement>;
      /** @link https://github.com/material-components/material-web/blob/main/docs/components/select.md#mdselectoption-md-select-option */
      'md-select-option': MaterialWeb.MdSelectOption<HTMLElement>;
      /** @link https://github.com/material-components/material-web/blob/main/docs/components/slider.md#mdslider-md-slider */
      'md-slider': MaterialWeb.MdSlider<HTMLElement>;
      /** @link https://github.com/material-components/material-web/blob/main/docs/components/switch.md#mdswitch-md-switch */
      'md-switch': MaterialWeb.MdSwitch<HTMLElement>;
      /** @link https://github.com/material-components/material-web/blob/main/docs/components/tabs.md#mdtabs-md-tabs */
      'md-tabs': MaterialWeb.MdTabs<HTMLElement>;
      /** @link https://github.com/material-components/material-web/blob/main/docs/components/tabs.md#mdprimarytab-md-primary-tab */
      'md-primary-tab': MaterialWeb.MdPrimaryTab<HTMLElement>;
      /** @link https://github.com/material-components/material-web/blob/main/docs/components/tabs.md#mdsecondarytab-md-secondary-tab */
      'md-secondary-tab': MaterialWeb.MdSecondaryTab<HTMLElement>;
      /** @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdfilledtextfield-md-filled-text-field */
      'md-filled-text-field': MaterialWeb.MdFilledTextField<HTMLElement>;
      /** @link https://github.com/material-components/material-web/blob/main/docs/components/text-field.md#mdoutlinedtextfield-md-outlined-text-field */
      'md-outlined-text-field': MaterialWeb.MdOutlinedTextField<HTMLElement>;
      /** @link https://github.com/material-components/material-web/blob/main/docs/components/icon.md */
      'md-icon': MaterialWeb.MdIcon<HTMLElement>;
    }
  }
}
