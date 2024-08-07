/* eslint-disable @typescript-eslint/no-explicit-any */
import type * as SolidJS from 'solid-js';

type SelectOption = any;
type Reason = any;

declare namespace MaterialWeb {
  export interface MdElevatedButton<T> extends SolidJS.JSX.HTMLAttributes<T> {
    /**
     * @description Whether or not the button is disabled.
     * @default false
     * @link https://material-web.dev/components/button/#mdelevatedbutton-lessmd-elevated-buttongreater
     */
    disabled?: boolean;
    /**
     * @description Whether the button is "soft-disabled" (disabled but still focusable).
     * @default false
     * @link https://material-web.dev/components/button/#mdelevatedbutton-lessmd-elevated-buttongreater
     */
    softDisabled?: boolean;
    /**
     * @description The URL that the link button points to.
     * @default ''
     * @link https://material-web.dev/components/button/#mdelevatedbutton-lessmd-elevated-buttongreater
     */
    href?: string;
    /**
     * @description Where to display the linked `href` URL for a link button. Common options include `_blank` to open in a new tab.
     * @default ''
     * @link https://material-web.dev/components/button/#mdelevatedbutton-lessmd-elevated-buttongreater
     */
    target?: string;
    /**
     * @description Whether to render the icon at the inline end of the label rather than the inline start.
     *
     * _Note:_ Link buttons cannot have trailing icons.
     * @default false
     * @link https://material-web.dev/components/button/#mdelevatedbutton-lessmd-elevated-buttongreater
     */
    trailingIcon?: boolean;
    /**
     * @description Whether to display the icon or not.
     * @default false
     * @link https://material-web.dev/components/button/#mdelevatedbutton-lessmd-elevated-buttongreater
     */
    hasIcon?: boolean;
    /**
     * @description The default behavior of the button. May be "button", "reset", or "submit" (default).
     * @default 'submit'
     * @link https://material-web.dev/components/button/#mdelevatedbutton-lessmd-elevated-buttongreater
     */
    type?: string;
    /**
     * @description The value added to a form with the button's name when the button submits a form.
     * @default ''
     * @link https://material-web.dev/components/button/#mdelevatedbutton-lessmd-elevated-buttongreater
     */
    value?: string;
    /**
     * @default undefined
     * @link https://material-web.dev/components/button/#mdelevatedbutton-lessmd-elevated-buttongreater
     */
    name?: string;
    /**
     * @default undefined
     * @link https://material-web.dev/components/button/#mdelevatedbutton-lessmd-elevated-buttongreater
     */
    form?: HTMLFormElement;
  }
  export interface MdFilledButton<T> extends SolidJS.JSX.HTMLAttributes<T> {
    /**
     * @description Whether or not the button is disabled.
     * @default false
     * @link https://material-web.dev/components/button/#mdfilledbutton-lessmd-filled-buttongreater
     */
    disabled?: boolean;
    /**
     * @description The URL that the link button points to.
     * @default ''
     * @link https://material-web.dev/components/button/#mdfilledbutton-lessmd-filled-buttongreater
     */
    href?: string;
    /**
     * @description Where to display the linked `href` URL for a link button. Common options include `_blank` to open in a new tab.
     * @default ''
     * @link https://material-web.dev/components/button/#mdfilledbutton-lessmd-filled-buttongreater
     */
    target?: string;
    /**
     * @description Whether to render the icon at the inline end of the label rather than the inline start.
     *
     * _Note:_ Link buttons cannot have trailing icons.
     * @default false
     * @link https://material-web.dev/components/button/#mdfilledbutton-lessmd-filled-buttongreater
     */
    trailingIcon?: boolean;
    /**
     * @description Whether to display the icon or not.
     * @default false
     * @link https://material-web.dev/components/button/#mdfilledbutton-lessmd-filled-buttongreater
     */
    hasIcon?: boolean;
    /**
     * @description The default behavior of the button. May be "button", "reset", or "submit" (default).
     * @default 'submit'
     * @link https://material-web.dev/components/button/#mdfilledbutton-lessmd-filled-buttongreater
     */
    type?: string;
    /**
     * @description The value added to a form with the button's name when the button submits a form.
     * @default ''
     * @link https://material-web.dev/components/button/#mdfilledbutton-lessmd-filled-buttongreater
     */
    value?: string;
    /**
     * @default undefined
     * @link https://material-web.dev/components/button/#mdfilledbutton-lessmd-filled-buttongreater
     */
    name?: string;
    /**
     * @default undefined
     * @link https://material-web.dev/components/button/#mdfilledbutton-lessmd-filled-buttongreater
     */
    form?: HTMLFormElement;
  }
  export interface MdFilledTonalButton<T> extends SolidJS.JSX.HTMLAttributes<T> {
    /**
     * @description Whether or not the button is disabled.
     * @default false
     * @link https://material-web.dev/components/button/#mdfilledtonalbutton-lessmd-filled-tonal-buttongreater
     */
    disabled?: boolean;
    /**
     * @description The URL that the link button points to.
     * @default ''
     * @link https://material-web.dev/components/button/#mdfilledtonalbutton-lessmd-filled-tonal-buttongreater
     */
    href?: string;
    /**
     * @description Where to display the linked `href` URL for a link button. Common options include `_blank` to open in a new tab.
     * @default ''
     * @link https://material-web.dev/components/button/#mdfilledtonalbutton-lessmd-filled-tonal-buttongreater
     */
    target?: string;
    /**
     * @description Whether to render the icon at the inline end of the label rather than the inline start.
     *
     * _Note:_ Link buttons cannot have trailing icons.
     * @default false
     * @link https://material-web.dev/components/button/#mdfilledtonalbutton-lessmd-filled-tonal-buttongreater
     */
    trailingIcon?: boolean;
    /**
     * @description Whether to display the icon or not.
     * @default false
     * @link https://material-web.dev/components/button/#mdfilledtonalbutton-lessmd-filled-tonal-buttongreater
     */
    hasIcon?: boolean;
    /**
     * @description The default behavior of the button. May be "button", "reset", or "submit" (default).
     * @default 'submit'
     * @link https://material-web.dev/components/button/#mdfilledtonalbutton-lessmd-filled-tonal-buttongreater
     */
    type?: string;
    /**
     * @description The value added to a form with the button's name when the button submits a form.
     * @default ''
     * @link https://material-web.dev/components/button/#mdfilledtonalbutton-lessmd-filled-tonal-buttongreater
     */
    value?: string;
    /**
     * @default undefined
     * @link https://material-web.dev/components/button/#mdfilledtonalbutton-lessmd-filled-tonal-buttongreater
     */
    name?: string;
    /**
     * @default undefined
     * @link https://material-web.dev/components/button/#mdfilledtonalbutton-lessmd-filled-tonal-buttongreater
     */
    form?: HTMLFormElement;
  }
  export interface MdOutlinedButton<T> extends SolidJS.JSX.HTMLAttributes<T> {
    /**
     * @description Whether or not the button is disabled.
     * @default false
     * @link https://material-web.dev/components/button/#mdoutlinedbutton-lessmd-outlined-buttongreater
     */
    disabled?: boolean;
    /**
     * @description The URL that the link button points to.
     * @default ''
     * @link https://material-web.dev/components/button/#mdoutlinedbutton-lessmd-outlined-buttongreater
     */
    href?: string;
    /**
     * @description Where to display the linked `href` URL for a link button. Common options include `_blank` to open in a new tab.
     * @default ''
     * @link https://material-web.dev/components/button/#mdoutlinedbutton-lessmd-outlined-buttongreater
     */
    target?: string;
    /**
     * @description Whether to render the icon at the inline end of the label rather than the inline start.
     *
     * _Note:_ Link buttons cannot have trailing icons.
     * @default false
     * @link https://material-web.dev/components/button/#mdoutlinedbutton-lessmd-outlined-buttongreater
     */
    trailingIcon?: boolean;
    /**
     * @description Whether to display the icon or not.
     * @default false
     * @link https://material-web.dev/components/button/#mdoutlinedbutton-lessmd-outlined-buttongreater
     */
    hasIcon?: boolean;
    /**
     * @description The default behavior of the button. May be "button", "reset", or "submit" (default).
     * @default 'submit'
     * @link https://material-web.dev/components/button/#mdoutlinedbutton-lessmd-outlined-buttongreater
     */
    type?: string;
    /**
     * @description The value added to a form with the button's name when the button submits a form.
     * @default ''
     * @link https://material-web.dev/components/button/#mdoutlinedbutton-lessmd-outlined-buttongreater
     */
    value?: string;
    /**
     * @default undefined
     * @link https://material-web.dev/components/button/#mdoutlinedbutton-lessmd-outlined-buttongreater
     */
    name?: string;
    /**
     * @default undefined
     * @link https://material-web.dev/components/button/#mdoutlinedbutton-lessmd-outlined-buttongreater
     */
    form?: HTMLFormElement;
  }
  export interface MdTextButton<T> extends SolidJS.JSX.HTMLAttributes<T> {
    /**
     * @description Whether or not the button is disabled.
     * @default false
     * @link https://material-web.dev/components/button/#mdtextbutton-lessmd-text-buttongreater
     */
    disabled?: boolean;
    /**
     * @description The URL that the link button points to.
     * @default ''
     * @link https://material-web.dev/components/button/#mdtextbutton-lessmd-text-buttongreater
     */
    href?: string;
    /**
     * @description Where to display the linked `href` URL for a link button. Common options include `_blank` to open in a new tab.
     * @default ''
     * @link https://material-web.dev/components/button/#mdtextbutton-lessmd-text-buttongreater
     */
    target?: string;
    /**
     * @description Whether to render the icon at the inline end of the label rather than the inline start.
     *
     * _Note:_ Link buttons cannot have trailing icons.
     * @default false
     * @link https://material-web.dev/components/button/#mdtextbutton-lessmd-text-buttongreater
     */
    trailingIcon?: boolean;
    /**
     * @description Whether to display the icon or not.
     * @default false
     * @link https://material-web.dev/components/button/#mdtextbutton-lessmd-text-buttongreater
     */
    hasIcon?: boolean;
    /**
     * @description The default behavior of the button. May be "button", "reset", or "submit" (default).
     * @default 'submit'
     * @link https://material-web.dev/components/button/#mdtextbutton-lessmd-text-buttongreater
     */
    type?: string;
    /**
     * @description The value added to a form with the button's name when the button submits a form.
     * @default ''
     * @link https://material-web.dev/components/button/#mdtextbutton-lessmd-text-buttongreater
     */
    value?: string;
    /**
     * @default undefined
     * @link https://material-web.dev/components/button/#mdtextbutton-lessmd-text-buttongreater
     */
    name?: string;
    /**
     * @default undefined
     * @link https://material-web.dev/components/button/#mdtextbutton-lessmd-text-buttongreater
     */
    form?: HTMLFormElement;
  }
  export interface MdCheckbox<T> extends SolidJS.JSX.HTMLAttributes<T> {
    /**
     * @description Whether or not the checkbox is selected.
     * @default false
     * @link https://material-web.dev/components/checkbox/#mdcheckbox-lessmd-checkboxgreater
     */
    checked?: boolean;
    /**
     * @description Whether or not the checkbox is indeterminate.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#indeterminate_state_checkboxes
     * @default false
     * @link https://material-web.dev/components/checkbox/#mdcheckbox-lessmd-checkboxgreater
     */
    indeterminate?: boolean;
    /**
     * @description When true, require the checkbox to be selected when participating in form submission.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#validation
     * @default false
     * @link https://material-web.dev/components/checkbox/#mdcheckbox-lessmd-checkboxgreater
     */
    required?: boolean;
    /**
     * @description The value of the checkbox that is submitted with a form when selected.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#value
     * @default 'on'
     * @link https://material-web.dev/components/checkbox/#mdcheckbox-lessmd-checkboxgreater
     */
    value?: string;
    /**
     * @default undefined
     * @link https://material-web.dev/components/checkbox/#mdcheckbox-lessmd-checkboxgreater
     */
    disabled?: boolean;
    /**
     * @default undefined
     * @link https://material-web.dev/components/checkbox/#mdcheckbox-lessmd-checkboxgreater
     */
    name?: string;
    /**
     * @description The native `change` event on [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)
     * @bubbles Yes
     * @composed No
     * @link https://material-web.dev/components/checkbox/#mdcheckbox-lessmd-checkboxgreater
     */
    onChange?: SolidJS.JSX.ChangeEventHandlerUnion<T, Event>;
    /**
     * @description The native `change` event on [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)
     * @bubbles Yes
     * @composed No
     * @link https://material-web.dev/components/checkbox/#mdcheckbox-lessmd-checkboxgreater
     */
    onchange?: SolidJS.JSX.ChangeEventHandlerUnion<T, Event>;
    /**
     * @description The native `input` event on [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
     * @bubbles Yes
     * @composed Yes
     * @link https://material-web.dev/components/checkbox/#mdcheckbox-lessmd-checkboxgreater
     */
    onInput?: SolidJS.JSX.InputEventHandlerUnion<T, InputEvent>;
    /**
     * @description The native `input` event on [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
     * @bubbles Yes
     * @composed Yes
     * @link https://material-web.dev/components/checkbox/#mdcheckbox-lessmd-checkboxgreater
     */
    oninput?: SolidJS.JSX.InputEventHandlerUnion<T, InputEvent>;
  }
  export interface MdChipSet<T> extends SolidJS.JSX.HTMLAttributes<T> {
    /**
     * @default undefined
     * @type {Chip[]}
     * @link https://material-web.dev/components/chip/#mdchipset-lessmd-chip-setgreater
     */
    chips?: HTMLElement[];
  }
  export interface MdAssistChip<T> extends SolidJS.JSX.HTMLAttributes<T> {
    /**
     * @default false
     * @link https://material-web.dev/components/chip/#mdassistchip-lessmd-assist-chipgreater
     */
    elevated?: boolean;
    /**
     * @default ''
     * @link https://material-web.dev/components/chip/#mdassistchip-lessmd-assist-chipgreater
     */
    href?: string;
    /**
     * @default ''
     * @link https://material-web.dev/components/chip/#mdassistchip-lessmd-assist-chipgreater
     */
    target?: string;
    /**
     * @description Whether or not the chip is disabled.
     *
     * Disabled chips are not focusable, unless `always-focusable` is set.
     * @default false
     * @link https://material-web.dev/components/chip/#mdassistchip-lessmd-assist-chipgreater
     */
    disabled?: boolean;
    /**
     * @description When true, allow disabled chips to be focused with arrow keys.
     *
     * Add this when a chip needs increased visibility when disabled. See https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_disabled_controls for more guidance on when this is needed.
     * @default false
     * @link https://material-web.dev/components/chip/#mdassistchip-lessmd-assist-chipgreater
     */
    alwaysFocusable?: boolean;
    /**
     * @description The label of the chip.
     * @default ''
     * @link https://material-web.dev/components/chip/#mdassistchip-lessmd-assist-chipgreater
     */
    label?: string;
    /**
     * @description Only needed for SSR.
     *
     * Add this attribute when a chip has a `slot="icon"` to avoid a Flash Of Unstyled Content.
     * @default false
     * @link https://material-web.dev/components/chip/#mdassistchip-lessmd-assist-chipgreater
     */
    hasIcon?: boolean;
    /**
     * @description Dispatched when `disabled` is toggled.
     * @bubbles Yes
     * @composed No
     * @link https://material-web.dev/components/chip/#mdassistchip-lessmd-assist-chipgreater
     */
    onUpdateFocus?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Dispatched when `disabled` is toggled.
     * @bubbles Yes
     * @composed No
     * @link https://material-web.dev/components/chip/#mdassistchip-lessmd-assist-chipgreater
     */
    onupdatefocus?: SolidJS.JSX.EventHandlerUnion<T, Event>;
  }
  export interface MdFilterChip<T> extends SolidJS.JSX.HTMLAttributes<T> {
    /**
     * @default false
     * @link https://material-web.dev/components/chip/#mdfilterchip-lessmd-filter-chipgreater
     */
    elevated?: boolean;
    /**
     * @default false
     * @link https://material-web.dev/components/chip/#mdfilterchip-lessmd-filter-chipgreater
     */
    removable?: boolean;
    /**
     * @default false
     * @link https://material-web.dev/components/chip/#mdfilterchip-lessmd-filter-chipgreater
     */
    selected?: boolean;
    /**
     * @description Only needed for SSR.
     *
     * Add this attribute when a filter chip has a `slot="selected-icon"` to avoid a Flash Of Unstyled Content.
     * @default false
     * @link https://material-web.dev/components/chip/#mdfilterchip-lessmd-filter-chipgreater
     */
    hasSelectedIcon?: boolean;
    /**
     * @description Whether or not the chip is disabled.
     *
     * Disabled chips are not focusable, unless `always-focusable` is set.
     * @default false
     * @link https://material-web.dev/components/chip/#mdfilterchip-lessmd-filter-chipgreater
     */
    disabled?: boolean;
    /**
     * @description When true, allow disabled chips to be focused with arrow keys.
     *
     * Add this when a chip needs increased visibility when disabled. See https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_disabled_controls for more guidance on when this is needed.
     * @default false
     * @link https://material-web.dev/components/chip/#mdfilterchip-lessmd-filter-chipgreater
     */
    alwaysFocusable?: boolean;
    /**
     * @description The label of the chip.
     * @default ''
     * @link https://material-web.dev/components/chip/#mdfilterchip-lessmd-filter-chipgreater
     */
    label?: string;
    /**
     * @description Only needed for SSR.
     *
     * Add this attribute when a chip has a `slot="icon"` to avoid a Flash Of Unstyled Content.
     * @default false
     * @link https://material-web.dev/components/chip/#mdfilterchip-lessmd-filter-chipgreater
     */
    hasIcon?: boolean;
    /**
     * @default undefined
     * @link https://material-web.dev/components/chip/#mdfilterchip-lessmd-filter-chipgreater
     */
    handleTrailingActionFocus?: () => void;
    /**
     * @default undefined
     * @link https://material-web.dev/components/chip/#mdfilterchip-lessmd-filter-chipgreater
     */
    ariaLabelRemove?: string;
    /**
     * @description Dispatched when the remove button is clicked.
     * @bubbles No
     * @composed No
     * @link https://material-web.dev/components/chip/#mdfilterchip-lessmd-filter-chipgreater
     */
    onRemove?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Dispatched when the remove button is clicked.
     * @bubbles No
     * @composed No
     * @link https://material-web.dev/components/chip/#mdfilterchip-lessmd-filter-chipgreater
     */
    onremove?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Dispatched when `disabled` is toggled.
     * @bubbles Yes
     * @composed No
     * @link https://material-web.dev/components/chip/#mdfilterchip-lessmd-filter-chipgreater
     */
    onUpdateFocus?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Dispatched when `disabled` is toggled.
     * @bubbles Yes
     * @composed No
     * @link https://material-web.dev/components/chip/#mdfilterchip-lessmd-filter-chipgreater
     */
    onupdatefocus?: SolidJS.JSX.EventHandlerUnion<T, Event>;
  }
  export interface MdInputChip<T> extends SolidJS.JSX.HTMLAttributes<T> {
    /**
     * @default false
     * @link https://material-web.dev/components/chip/#mdinputchip-lessmd-input-chipgreater
     */
    avatar?: boolean;
    /**
     * @default ''
     * @link https://material-web.dev/components/chip/#mdinputchip-lessmd-input-chipgreater
     */
    href?: string;
    /**
     * @default ''
     * @link https://material-web.dev/components/chip/#mdinputchip-lessmd-input-chipgreater
     */
    target?: string;
    /**
     * @default false
     * @link https://material-web.dev/components/chip/#mdinputchip-lessmd-input-chipgreater
     */
    removeOnly?: boolean;
    /**
     * @default false
     * @link https://material-web.dev/components/chip/#mdinputchip-lessmd-input-chipgreater
     */
    selected?: boolean;
    /**
     * @description Whether or not the chip is disabled.
     *
     * Disabled chips are not focusable, unless `always-focusable` is set.
     * @default false
     * @link https://material-web.dev/components/chip/#mdinputchip-lessmd-input-chipgreater
     */
    disabled?: boolean;
    /**
     * @description When true, allow disabled chips to be focused with arrow keys.
     *
     * Add this when a chip needs increased visibility when disabled. See https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_disabled_controls for more guidance on when this is needed.
     * @default false
     * @link https://material-web.dev/components/chip/#mdinputchip-lessmd-input-chipgreater
     */
    alwaysFocusable?: boolean;
    /**
     * @description The label of the chip.
     * @default ''
     * @link https://material-web.dev/components/chip/#mdinputchip-lessmd-input-chipgreater
     */
    label?: string;
    /**
     * @description Only needed for SSR.
     *
     * Add this attribute when a chip has a `slot="icon"` to avoid a Flash Of Unstyled Content.
     * @default false
     * @link https://material-web.dev/components/chip/#mdinputchip-lessmd-input-chipgreater
     */
    hasIcon?: boolean;
    /**
     * @default undefined
     * @link https://material-web.dev/components/chip/#mdinputchip-lessmd-input-chipgreater
     */
    handleTrailingActionFocus?: () => void;
    /**
     * @default undefined
     * @link https://material-web.dev/components/chip/#mdinputchip-lessmd-input-chipgreater
     */
    ariaLabelRemove?: string;
    /**
     * @description Dispatched when the remove button is clicked.
     * @bubbles No
     * @composed No
     * @link https://material-web.dev/components/chip/#mdinputchip-lessmd-input-chipgreater
     */
    onRemove?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Dispatched when the remove button is clicked.
     * @bubbles No
     * @composed No
     * @link https://material-web.dev/components/chip/#mdinputchip-lessmd-input-chipgreater
     */
    onremove?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Dispatched when `disabled` is toggled.
     * @bubbles Yes
     * @composed No
     * @link https://material-web.dev/components/chip/#mdinputchip-lessmd-input-chipgreater
     */
    onUpdateFocus?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Dispatched when `disabled` is toggled.
     * @bubbles Yes
     * @composed No
     * @link https://material-web.dev/components/chip/#mdinputchip-lessmd-input-chipgreater
     */
    onupdatefocus?: SolidJS.JSX.EventHandlerUnion<T, Event>;
  }
  export interface MdSuggestionChip<T> extends SolidJS.JSX.HTMLAttributes<T> {
    /**
     * @default false
     * @link https://material-web.dev/components/chip/#mdsuggestionchip-lessmd-suggestion-chipgreater
     */
    elevated?: boolean;
    /**
     * @default ''
     * @link https://material-web.dev/components/chip/#mdsuggestionchip-lessmd-suggestion-chipgreater
     */
    href?: string;
    /**
     * @default ''
     * @link https://material-web.dev/components/chip/#mdsuggestionchip-lessmd-suggestion-chipgreater
     */
    target?: string;
    /**
     * @description Whether or not the chip is disabled.
     *
     * Disabled chips are not focusable, unless `always-focusable` is set.
     * @default false
     * @link https://material-web.dev/components/chip/#mdsuggestionchip-lessmd-suggestion-chipgreater
     */
    disabled?: boolean;
    /**
     * @description When true, allow disabled chips to be focused with arrow keys.
     *
     * Add this when a chip needs increased visibility when disabled. See https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/#kbd_disabled_controls for more guidance on when this is needed.
     * @default false
     * @link https://material-web.dev/components/chip/#mdsuggestionchip-lessmd-suggestion-chipgreater
     */
    alwaysFocusable?: boolean;
    /**
     * @description The label of the chip.
     * @default ''
     * @link https://material-web.dev/components/chip/#mdsuggestionchip-lessmd-suggestion-chipgreater
     */
    label?: string;
    /**
     * @description Only needed for SSR.
     *
     * Add this attribute when a chip has a `slot="icon"` to avoid a Flash Of Unstyled Content.
     * @default false
     * @link https://material-web.dev/components/chip/#mdsuggestionchip-lessmd-suggestion-chipgreater
     */
    hasIcon?: boolean;
    /**
     * @description Dispatched when `disabled` is toggled.
     * @bubbles Yes
     * @composed No
     * @link https://material-web.dev/components/chip/#mdsuggestionchip-lessmd-suggestion-chipgreater
     */
    onUpdateFocus?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Dispatched when `disabled` is toggled.
     * @bubbles Yes
     * @composed No
     * @link https://material-web.dev/components/chip/#mdsuggestionchip-lessmd-suggestion-chipgreater
     */
    onupdatefocus?: SolidJS.JSX.EventHandlerUnion<T, Event>;
  }
  export interface MdDialog<T> extends SolidJS.JSX.HTMLAttributes<T> {
    /**
     * @description Skips the opening and closing animations.
     * @default false
     * @link https://material-web.dev/components/dialog/#mddialog-lessmd-dialoggreater
     */
    quick?: boolean;
    /**
     * @description Gets or sets the dialog's return value, usually to indicate which button a user pressed to close it.
     *
     * https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/returnValue
     * @default ''
     * @link https://material-web.dev/components/dialog/#mddialog-lessmd-dialoggreater
     */
    returnValue?: string;
    /**
     * @description The type of dialog for accessibility. Set this to `alert` to announce a dialog as an alert dialog.
     * @default undefined
     * @link https://material-web.dev/components/dialog/#mddialog-lessmd-dialoggreater
     */
    type?: string;
    /**
     * @description Disables focus trapping, which by default keeps keyboard Tab navigation within the dialog.
     *
     * When disabled, after focusing the last element of a dialog, pressing Tab again will release focus from the window back to the browser (such as the URL bar).
     *
     * Focus trapping is recommended for accessibility, and should not typically be disabled. Only turn this off if the use case of a dialog is more accessible without focus trapping.
     * @default false
     * @link https://material-web.dev/components/dialog/#mddialog-lessmd-dialoggreater
     */
    noFocusTrap?: boolean;
    /**
     * @default undefined
     * @link https://material-web.dev/components/dialog/#mddialog-lessmd-dialoggreater
     */
    open?: boolean;
    /**
     * @description Gets the opening animation for a dialog. Set to a new function to customize the animation.
     * @default function { ... }
     * @type {() => DialogAnimation}
     * @link https://material-web.dev/components/dialog/#mddialog-lessmd-dialoggreater
     */
    getOpenAnimation?: () => any;
    /**
     * @description Gets the closing animation for a dialog. Set to a new function to customize the animation.
     * @default function { ... }
     * @type {() => DialogAnimation}
     * @link https://material-web.dev/components/dialog/#mddialog-lessmd-dialoggreater
     */
    getCloseAnimation?: () => any;
    /**
     * @description Dispatched when the dialog is opening before any animations.
     * @bubbles No
     * @composed No
     * @link https://material-web.dev/components/dialog/#mddialog-lessmd-dialoggreater
     */
    onOpen?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Dispatched when the dialog is opening before any animations.
     * @bubbles No
     * @composed No
     * @link https://material-web.dev/components/dialog/#mddialog-lessmd-dialoggreater
     */
    onopen?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Dispatched when the dialog has opened after any animations.
     * @bubbles No
     * @composed No
     * @link https://material-web.dev/components/dialog/#mddialog-lessmd-dialoggreater
     */
    onOpened?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Dispatched when the dialog has opened after any animations.
     * @bubbles No
     * @composed No
     * @link https://material-web.dev/components/dialog/#mddialog-lessmd-dialoggreater
     */
    onopened?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Dispatched when the dialog is closing before any animations.
     * @bubbles No
     * @composed No
     * @link https://material-web.dev/components/dialog/#mddialog-lessmd-dialoggreater
     */
    onClose?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Dispatched when the dialog is closing before any animations.
     * @bubbles No
     * @composed No
     * @link https://material-web.dev/components/dialog/#mddialog-lessmd-dialoggreater
     */
    onclose?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Dispatched when the dialog has closed after any animations.
     * @bubbles No
     * @composed No
     * @link https://material-web.dev/components/dialog/#mddialog-lessmd-dialoggreater
     */
    onClosed?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Dispatched when the dialog has closed after any animations.
     * @bubbles No
     * @composed No
     * @link https://material-web.dev/components/dialog/#mddialog-lessmd-dialoggreater
     */
    onclosed?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Dispatched when the dialog has been canceled by clicking on the scrim or pressing Escape.
     * @bubbles No
     * @composed No
     * @link https://material-web.dev/components/dialog/#mddialog-lessmd-dialoggreater
     */
    onCancel?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Dispatched when the dialog has been canceled by clicking on the scrim or pressing Escape.
     * @bubbles No
     * @composed No
     * @link https://material-web.dev/components/dialog/#mddialog-lessmd-dialoggreater
     */
    oncancel?: SolidJS.JSX.EventHandlerUnion<T, Event>;
  }
  export interface MdDivider<T> extends SolidJS.JSX.HTMLAttributes<T> {
    /**
     * @description Indents the divider with equal padding on both sides.
     * @default false
     * @link https://material-web.dev/components/divider/#mddivider-lessmd-dividergreater
     */
    inset?: boolean;
    /**
     * @description Indents the divider with padding on the leading side.
     * @default false
     * @link https://material-web.dev/components/divider/#mddivider-lessmd-dividergreater
     */
    insetStart?: boolean;
    /**
     * @description Indents the divider with padding on the trailing side.
     * @default false
     * @link https://material-web.dev/components/divider/#mddivider-lessmd-dividergreater
     */
    insetEnd?: boolean;
  }
  export interface MdFab<T> extends SolidJS.JSX.HTMLAttributes<T> {
    /**
     * @description The FAB color variant to render.
     * @default 'surface'
     * @link https://material-web.dev/components/fab/#mdfab-lessmd-fabgreater
     */
    variant?: string;
    /**
     * @description The size of the FAB.
     *
     * NOTE: Branded FABs cannot be sized to `small`, and Extended FABs do not have different sizes.
     * @default 'medium'
     * @link https://material-web.dev/components/fab/#mdfab-lessmd-fabgreater
     */
    size?: string;
    /**
     * @description The text to display on the FAB.
     * @default ''
     * @link https://material-web.dev/components/fab/#mdfab-lessmd-fabgreater
     */
    label?: string;
    /**
     * @description Lowers the FAB's elevation.
     * @default false
     * @link https://material-web.dev/components/fab/#mdfab-lessmd-fabgreater
     */
    lowered?: boolean;
  }
  export interface MdBrandedFab<T> extends SolidJS.JSX.HTMLAttributes<T> {
    /**
     * @description The FAB color variant to render.
     * @default 'surface'
     * @link https://material-web.dev/components/fab/#mdbrandedfab-lessmd-branded-fabgreater
     */
    variant?: string;
    /**
     * @description The size of the FAB.
     *
     * NOTE: Branded FABs cannot be sized to `small`, and Extended FABs do not have different sizes.
     * @default 'medium'
     * @link https://material-web.dev/components/fab/#mdbrandedfab-lessmd-branded-fabgreater
     */
    size?: string;
    /**
     * @description The text to display on the FAB.
     * @default ''
     * @link https://material-web.dev/components/fab/#mdbrandedfab-lessmd-branded-fabgreater
     */
    label?: string;
    /**
     * @description Lowers the FAB's elevation.
     * @default false
     * @link https://material-web.dev/components/fab/#mdbrandedfab-lessmd-branded-fabgreater
     */
    lowered?: boolean;
  }
  export interface MdFocusRing<T> extends SolidJS.JSX.HTMLAttributes<T> {
    /**
     * @description Makes the focus ring visible.
     * @default false
     * @link https://material-web.dev/components/focus-ring/#mdfocusring-lessmd-focus-ringgreater
     */
    visible?: boolean;
    /**
     * @description Makes the focus ring animate inwards instead of outwards.
     * @default false
     * @link https://material-web.dev/components/focus-ring/#mdfocusring-lessmd-focus-ringgreater
     */
    inward?: boolean;
    /**
     * @default undefined
     * @link https://material-web.dev/components/focus-ring/#mdfocusring-lessmd-focus-ringgreater
     */
    htmlFor?: string;
    /**
     * @default undefined
     * @link https://material-web.dev/components/focus-ring/#mdfocusring-lessmd-focus-ringgreater
     */
    control?: HTMLElement;
    /**
     * @description Fired whenever `visible` changes.
     * @bubbles No
     * @composed No
     * @link https://material-web.dev/components/focus-ring/#mdfocusring-lessmd-focus-ringgreater
     */
    onVisibilityChanged?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Fired whenever `visible` changes.
     * @bubbles No
     * @composed No
     * @link https://material-web.dev/components/focus-ring/#mdfocusring-lessmd-focus-ringgreater
     */
    onvisibilitychanged?: SolidJS.JSX.EventHandlerUnion<T, Event>;
  }
  export interface MdIconButton<T> extends SolidJS.JSX.HTMLAttributes<T> {
    /**
     * @description Disables the icon button and makes it non-interactive.
     * @default false
     * @link https://material-web.dev/components/icon-button/#mdiconbutton-lessmd-icon-buttongreater
     */
    disabled?: boolean;
    /**
     * @description Flips the icon if it is in an RTL context at startup.
     * @default false
     * @link https://material-web.dev/components/icon-button/#mdiconbutton-lessmd-icon-buttongreater
     */
    flipIconInRtl?: boolean;
    /**
     * @description Sets the underlying `HTMLAnchorElement`'s `href` resource attribute.
     * @default ''
     * @link https://material-web.dev/components/icon-button/#mdiconbutton-lessmd-icon-buttongreater
     */
    href?: string;
    /**
     * @description Sets the underlying `HTMLAnchorElement`'s `target` attribute.
     * @default ''
     * @link https://material-web.dev/components/icon-button/#mdiconbutton-lessmd-icon-buttongreater
     */
    target?: string;
    /**
     * @description The `aria-label` of the button when the button is toggleable and selected.
     * @default ''
     * @link https://material-web.dev/components/icon-button/#mdiconbutton-lessmd-icon-buttongreater
     */
    ariaLabelSelected?: string;
    /**
     * @description When true, the button will toggle between selected and unselected states
     * @default false
     * @link https://material-web.dev/components/icon-button/#mdiconbutton-lessmd-icon-buttongreater
     */
    toggle?: boolean;
    /**
     * @description Sets the selected state. When false, displays the default icon. When true, displays the selected icon, or the default icon If no `slot="selected"` icon is provided.
     * @default false
     * @link https://material-web.dev/components/icon-button/#mdiconbutton-lessmd-icon-buttongreater
     */
    selected?: boolean;
    /**
     * @description The default behavior of the button. May be "button", "reset", or "submit" (default).
     * @default 'submit'
     * @link https://material-web.dev/components/icon-button/#mdiconbutton-lessmd-icon-buttongreater
     */
    type?: string;
    /**
     * @description The value added to a form with the button's name when the button submits a form.
     * @default ''
     * @link https://material-web.dev/components/icon-button/#mdiconbutton-lessmd-icon-buttongreater
     */
    value?: string;
    /**
     * @default undefined
     * @link https://material-web.dev/components/icon-button/#mdiconbutton-lessmd-icon-buttongreater
     */
    name?: string;
    /**
     * @default undefined
     * @link https://material-web.dev/components/icon-button/#mdiconbutton-lessmd-icon-buttongreater
     */
    form?: HTMLFormElement;
    /**
     * @default undefined
     * @link https://material-web.dev/components/icon-button/#mdiconbutton-lessmd-icon-buttongreater
     */
    labels?: NodeList;
    /**
     * @description Dispatched when a toggle button toggles
     * @bubbles Yes
     * @composed Yes
     * @link https://material-web.dev/components/icon-button/#mdiconbutton-lessmd-icon-buttongreater
     */
    onInput?: SolidJS.JSX.InputEventHandlerUnion<T, InputEvent>;
    /**
     * @description Dispatched when a toggle button toggles
     * @bubbles Yes
     * @composed Yes
     * @link https://material-web.dev/components/icon-button/#mdiconbutton-lessmd-icon-buttongreater
     */
    oninput?: SolidJS.JSX.InputEventHandlerUnion<T, InputEvent>;
    /**
     * @description Dispatched when a toggle button toggles
     * @bubbles Yes
     * @composed No
     * @link https://material-web.dev/components/icon-button/#mdiconbutton-lessmd-icon-buttongreater
     */
    onChange?: SolidJS.JSX.ChangeEventHandlerUnion<T, Event>;
    /**
     * @description Dispatched when a toggle button toggles
     * @bubbles Yes
     * @composed No
     * @link https://material-web.dev/components/icon-button/#mdiconbutton-lessmd-icon-buttongreater
     */
    onchange?: SolidJS.JSX.ChangeEventHandlerUnion<T, Event>;
  }
  export interface MdFilledIconButton<T> extends SolidJS.JSX.HTMLAttributes<T> {
    /**
     * @description Disables the icon button and makes it non-interactive.
     * @default false
     * @link https://material-web.dev/components/icon-button/#mdfillediconbutton-lessmd-filled-icon-buttongreater
     */
    disabled?: boolean;
    /**
     * @description "Soft-disables" the icon button (disabled but still focusable).
     * @default false
     * @link https://material-web.dev/components/icon-button/#mdfillediconbutton-lessmd-filled-icon-buttongreater
     */
    softDisabled?: boolean;
    /**
     * @description Flips the icon if it is in an RTL context at startup.
     * @default false
     * @link https://material-web.dev/components/icon-button/#mdfillediconbutton-lessmd-filled-icon-buttongreater
     */
    flipIconInRtl?: boolean;
    /**
     * @description Sets the underlying `HTMLAnchorElement`'s `href` resource attribute.
     * @default ''
     * @link https://material-web.dev/components/icon-button/#mdfillediconbutton-lessmd-filled-icon-buttongreater
     */
    href?: string;
    /**
     * @description Sets the underlying `HTMLAnchorElement`'s `target` attribute.
     * @default ''
     * @link https://material-web.dev/components/icon-button/#mdfillediconbutton-lessmd-filled-icon-buttongreater
     */
    target?: string;
    /**
     * @description The `aria-label` of the button when the button is toggleable and selected.
     * @default ''
     * @link https://material-web.dev/components/icon-button/#mdfillediconbutton-lessmd-filled-icon-buttongreater
     */
    ariaLabelSelected?: string;
    /**
     * @description When true, the button will toggle between selected and unselected states
     * @default false
     * @link https://material-web.dev/components/icon-button/#mdfillediconbutton-lessmd-filled-icon-buttongreater
     */
    toggle?: boolean;
    /**
     * @description Sets the selected state. When false, displays the default icon. When true, displays the selected icon, or the default icon If no `slot="selected"` icon is provided.
     * @default false
     * @link https://material-web.dev/components/icon-button/#mdfillediconbutton-lessmd-filled-icon-buttongreater
     */
    selected?: boolean;
    /**
     * @description The default behavior of the button. May be "button", "reset", or "submit" (default).
     * @default 'submit'
     * @link https://material-web.dev/components/icon-button/#mdfillediconbutton-lessmd-filled-icon-buttongreater
     */
    type?: string;
    /**
     * @description The value added to a form with the button's name when the button submits a form.
     * @default ''
     * @link https://material-web.dev/components/icon-button/#mdfillediconbutton-lessmd-filled-icon-buttongreater
     */
    value?: string;
    /**
     * @default undefined
     * @link https://material-web.dev/components/icon-button/#mdfillediconbutton-lessmd-filled-icon-buttongreater
     */
    name?: string;
    /**
     * @default undefined
     * @link https://material-web.dev/components/icon-button/#mdfillediconbutton-lessmd-filled-icon-buttongreater
     */
    form?: HTMLFormElement;
    /**
     * @default undefined
     * @link https://material-web.dev/components/icon-button/#mdfillediconbutton-lessmd-filled-icon-buttongreater
     */
    labels?: NodeList;
    /**
     * @description Dispatched when a toggle button toggles
     * @bubbles Yes
     * @composed Yes
     * @link https://material-web.dev/components/icon-button/#mdfillediconbutton-lessmd-filled-icon-buttongreater
     */
    onInput?: SolidJS.JSX.InputEventHandlerUnion<T, InputEvent>;
    /**
     * @description Dispatched when a toggle button toggles
     * @bubbles Yes
     * @composed Yes
     * @link https://material-web.dev/components/icon-button/#mdfillediconbutton-lessmd-filled-icon-buttongreater
     */
    oninput?: SolidJS.JSX.InputEventHandlerUnion<T, InputEvent>;
    /**
     * @description Dispatched when a toggle button toggles
     * @bubbles Yes
     * @composed No
     * @link https://material-web.dev/components/icon-button/#mdfillediconbutton-lessmd-filled-icon-buttongreater
     */
    onChange?: SolidJS.JSX.ChangeEventHandlerUnion<T, Event>;
    /**
     * @description Dispatched when a toggle button toggles
     * @bubbles Yes
     * @composed No
     * @link https://material-web.dev/components/icon-button/#mdfillediconbutton-lessmd-filled-icon-buttongreater
     */
    onchange?: SolidJS.JSX.ChangeEventHandlerUnion<T, Event>;
  }
  export interface MdFilledTonalIconButton<T> extends SolidJS.JSX.HTMLAttributes<T> {
    /**
     * @description Disables the icon button and makes it non-interactive.
     * @default false
     * @link https://material-web.dev/components/icon-button/#mdfilledtonaliconbutton-lessmd-filled-tonal-icon-buttongreater
     */
    disabled?: boolean;
    /**
     * @description Flips the icon if it is in an RTL context at startup.
     * @default false
     * @link https://material-web.dev/components/icon-button/#mdfilledtonaliconbutton-lessmd-filled-tonal-icon-buttongreater
     */
    flipIconInRtl?: boolean;
    /**
     * @description Sets the underlying `HTMLAnchorElement`'s `href` resource attribute.
     * @default ''
     * @link https://material-web.dev/components/icon-button/#mdfilledtonaliconbutton-lessmd-filled-tonal-icon-buttongreater
     */
    href?: string;
    /**
     * @description Sets the underlying `HTMLAnchorElement`'s `target` attribute.
     * @default ''
     * @link https://material-web.dev/components/icon-button/#mdfilledtonaliconbutton-lessmd-filled-tonal-icon-buttongreater
     */
    target?: string;
    /**
     * @description The `aria-label` of the button when the button is toggleable and selected.
     * @default ''
     * @link https://material-web.dev/components/icon-button/#mdfilledtonaliconbutton-lessmd-filled-tonal-icon-buttongreater
     */
    ariaLabelSelected?: string;
    /**
     * @description When true, the button will toggle between selected and unselected states
     * @default false
     * @link https://material-web.dev/components/icon-button/#mdfilledtonaliconbutton-lessmd-filled-tonal-icon-buttongreater
     */
    toggle?: boolean;
    /**
     * @description Sets the selected state. When false, displays the default icon. When true, displays the selected icon, or the default icon If no `slot="selected"` icon is provided.
     * @default false
     * @link https://material-web.dev/components/icon-button/#mdfilledtonaliconbutton-lessmd-filled-tonal-icon-buttongreater
     */
    selected?: boolean;
    /**
     * @description The default behavior of the button. May be "button", "reset", or "submit" (default).
     * @default 'submit'
     * @link https://material-web.dev/components/icon-button/#mdfilledtonaliconbutton-lessmd-filled-tonal-icon-buttongreater
     */
    type?: string;
    /**
     * @description The value added to a form with the button's name when the button submits a form.
     * @default ''
     * @link https://material-web.dev/components/icon-button/#mdfilledtonaliconbutton-lessmd-filled-tonal-icon-buttongreater
     */
    value?: string;
    /**
     * @default undefined
     * @link https://material-web.dev/components/icon-button/#mdfilledtonaliconbutton-lessmd-filled-tonal-icon-buttongreater
     */
    name?: string;
    /**
     * @default undefined
     * @link https://material-web.dev/components/icon-button/#mdfilledtonaliconbutton-lessmd-filled-tonal-icon-buttongreater
     */
    form?: HTMLFormElement;
    /**
     * @default undefined
     * @link https://material-web.dev/components/icon-button/#mdfilledtonaliconbutton-lessmd-filled-tonal-icon-buttongreater
     */
    labels?: NodeList;
    /**
     * @description Dispatched when a toggle button toggles
     * @bubbles Yes
     * @composed Yes
     * @link https://material-web.dev/components/icon-button/#mdfilledtonaliconbutton-lessmd-filled-tonal-icon-buttongreater
     */
    onInput?: SolidJS.JSX.InputEventHandlerUnion<T, InputEvent>;
    /**
     * @description Dispatched when a toggle button toggles
     * @bubbles Yes
     * @composed Yes
     * @link https://material-web.dev/components/icon-button/#mdfilledtonaliconbutton-lessmd-filled-tonal-icon-buttongreater
     */
    oninput?: SolidJS.JSX.InputEventHandlerUnion<T, InputEvent>;
    /**
     * @description Dispatched when a toggle button toggles
     * @bubbles Yes
     * @composed No
     * @link https://material-web.dev/components/icon-button/#mdfilledtonaliconbutton-lessmd-filled-tonal-icon-buttongreater
     */
    onChange?: SolidJS.JSX.ChangeEventHandlerUnion<T, Event>;
    /**
     * @description Dispatched when a toggle button toggles
     * @bubbles Yes
     * @composed No
     * @link https://material-web.dev/components/icon-button/#mdfilledtonaliconbutton-lessmd-filled-tonal-icon-buttongreater
     */
    onchange?: SolidJS.JSX.ChangeEventHandlerUnion<T, Event>;
  }
  export interface MdOutlinedIconButton<T> extends SolidJS.JSX.HTMLAttributes<T> {
    /**
     * @description Disables the icon button and makes it non-interactive.
     * @default false
     * @link https://material-web.dev/components/icon-button/#mdoutlinediconbutton-lessmd-outlined-icon-buttongreater
     */
    disabled?: boolean;
    /**
     * @description Flips the icon if it is in an RTL context at startup.
     * @default false
     * @link https://material-web.dev/components/icon-button/#mdoutlinediconbutton-lessmd-outlined-icon-buttongreater
     */
    flipIconInRtl?: boolean;
    /**
     * @description Sets the underlying `HTMLAnchorElement`'s `href` resource attribute.
     * @default ''
     * @link https://material-web.dev/components/icon-button/#mdoutlinediconbutton-lessmd-outlined-icon-buttongreater
     */
    href?: string;
    /**
     * @description Sets the underlying `HTMLAnchorElement`'s `target` attribute.
     * @default ''
     * @link https://material-web.dev/components/icon-button/#mdoutlinediconbutton-lessmd-outlined-icon-buttongreater
     */
    target?: string;
    /**
     * @description The `aria-label` of the button when the button is toggleable and selected.
     * @default ''
     * @link https://material-web.dev/components/icon-button/#mdoutlinediconbutton-lessmd-outlined-icon-buttongreater
     */
    ariaLabelSelected?: string;
    /**
     * @description When true, the button will toggle between selected and unselected states
     * @default false
     * @link https://material-web.dev/components/icon-button/#mdoutlinediconbutton-lessmd-outlined-icon-buttongreater
     */
    toggle?: boolean;
    /**
     * @description Sets the selected state. When false, displays the default icon. When true, displays the selected icon, or the default icon If no `slot="selected"` icon is provided.
     * @default false
     * @link https://material-web.dev/components/icon-button/#mdoutlinediconbutton-lessmd-outlined-icon-buttongreater
     */
    selected?: boolean;
    /**
     * @description The default behavior of the button. May be "button", "reset", or "submit" (default).
     * @default 'submit'
     * @link https://material-web.dev/components/icon-button/#mdoutlinediconbutton-lessmd-outlined-icon-buttongreater
     */
    type?: string;
    /**
     * @description The value added to a form with the button's name when the button submits a form.
     * @default ''
     * @link https://material-web.dev/components/icon-button/#mdoutlinediconbutton-lessmd-outlined-icon-buttongreater
     */
    value?: string;
    /**
     * @default undefined
     * @link https://material-web.dev/components/icon-button/#mdoutlinediconbutton-lessmd-outlined-icon-buttongreater
     */
    name?: string;
    /**
     * @default undefined
     * @link https://material-web.dev/components/icon-button/#mdoutlinediconbutton-lessmd-outlined-icon-buttongreater
     */
    form?: HTMLFormElement;
    /**
     * @default undefined
     * @link https://material-web.dev/components/icon-button/#mdoutlinediconbutton-lessmd-outlined-icon-buttongreater
     */
    labels?: NodeList;
    /**
     * @description Dispatched when a toggle button toggles
     * @bubbles Yes
     * @composed Yes
     * @link https://material-web.dev/components/icon-button/#mdoutlinediconbutton-lessmd-outlined-icon-buttongreater
     */
    onInput?: SolidJS.JSX.InputEventHandlerUnion<T, InputEvent>;
    /**
     * @description Dispatched when a toggle button toggles
     * @bubbles Yes
     * @composed Yes
     * @link https://material-web.dev/components/icon-button/#mdoutlinediconbutton-lessmd-outlined-icon-buttongreater
     */
    oninput?: SolidJS.JSX.InputEventHandlerUnion<T, InputEvent>;
    /**
     * @description Dispatched when a toggle button toggles
     * @bubbles Yes
     * @composed No
     * @link https://material-web.dev/components/icon-button/#mdoutlinediconbutton-lessmd-outlined-icon-buttongreater
     */
    onChange?: SolidJS.JSX.ChangeEventHandlerUnion<T, Event>;
    /**
     * @description Dispatched when a toggle button toggles
     * @bubbles Yes
     * @composed No
     * @link https://material-web.dev/components/icon-button/#mdoutlinediconbutton-lessmd-outlined-icon-buttongreater
     */
    onchange?: SolidJS.JSX.ChangeEventHandlerUnion<T, Event>;
  }
  export interface MdList<T> extends SolidJS.JSX.HTMLAttributes<T> {
    /**
     * @default undefined
     * @type {ListItem[]}
     * @link https://material-web.dev/components/list/#mdlist-lessmd-listgreater
     */
    items?: HTMLElement[];
  }
  export interface MdListItem<T> extends SolidJS.JSX.HTMLAttributes<T> {
    /**
     * @description Disables the item and makes it non-selectable and non-interactive.
     * @default false
     * @link https://material-web.dev/components/list/#mdlistitem-lessmd-list-itemgreater
     */
    disabled?: boolean;
    /**
     * @description Sets the behavior of the list item, defaults to "text". Change to "link" or "button" for interactive items.
     * @default 'text'
     * @link https://material-web.dev/components/list/#mdlistitem-lessmd-list-itemgreater
     */
    type?: string;
    /**
     * @description Sets the underlying `HTMLAnchorElement`'s `href` resource attribute.
     * @default ''
     * @link https://material-web.dev/components/list/#mdlistitem-lessmd-list-itemgreater
     */
    href?: string;
    /**
     * @description Sets the underlying `HTMLAnchorElement`'s `target` attribute when `href` is set.
     * @default ''
     * @link https://material-web.dev/components/list/#mdlistitem-lessmd-list-itemgreater
     */
    target?: string;
    /**
     * @description Requests the list to set `tabindex=0` on the item and focus it.
     * @bubbles Yes
     * @composed Yes
     * @link https://material-web.dev/components/list/#mdlistitem-lessmd-list-itemgreater
     */
    onRequestActivation?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Requests the list to set `tabindex=0` on the item and focus it.
     * @bubbles Yes
     * @composed Yes
     * @link https://material-web.dev/components/list/#mdlistitem-lessmd-list-itemgreater
     */
    onrequestactivation?: SolidJS.JSX.EventHandlerUnion<T, Event>;
  }
  export interface MdMenu<T> extends SolidJS.JSX.HTMLAttributes<T> {
    /**
     * @description The ID of the element in the same root node in which the menu should align to. Overrides setting `anchorElement = elementReference`.
     *
     * __NOTE__: anchor or anchorElement must either be an HTMLElement or resolve to an HTMLElement in order for menu to open.
     * @default ''
     * @link https://material-web.dev/components/menu/#mdmenu-lessmd-menugreater
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
     * @link https://material-web.dev/components/menu/#mdmenu-lessmd-menugreater
     */
    positioning?: string;
    /**
     * @description Skips the opening and closing animations.
     * @default false
     * @link https://material-web.dev/components/menu/#mdmenu-lessmd-menugreater
     */
    quick?: boolean;
    /**
     * @description Displays overflow content like a submenu. Not required in most cases when using `positioning="popover"`.
     *
     * __NOTE__: This may cause adverse effects if you set `md-menu {max-height:...}` and have items overflowing items in the "y" direction.
     * @default false
     * @link https://material-web.dev/components/menu/#mdmenu-lessmd-menugreater
     */
    hasOverflow?: boolean;
    /**
     * @description Opens the menu and makes it visible. Alternative to the `.show()` and `.close()` methods
     * @default false
     * @link https://material-web.dev/components/menu/#mdmenu-lessmd-menugreater
     */
    open?: boolean;
    /**
     * @description Offsets the menu's inline alignment from the anchor by the given number in pixels. This value is direction aware and will follow the LTR / RTL direction.
     *
     * e.g. LTR: positive -> right, negative -> left RTL: positive -> left, negative -> right
     * @default 0
     * @link https://material-web.dev/components/menu/#mdmenu-lessmd-menugreater
     */
    xOffset?: number;
    /**
     * @description Offsets the menu's block alignment from the anchor by the given number in pixels.
     *
     * e.g. positive -> down, negative -> up
     * @default 0
     * @link https://material-web.dev/components/menu/#mdmenu-lessmd-menugreater
     */
    yOffset?: number;
    /**
     * @description The max time between the keystrokes of the typeahead menu behavior before it clears the typeahead buffer.
     * @default 200
     * @link https://material-web.dev/components/menu/#mdmenu-lessmd-menugreater
     */
    typeaheadDelay?: number;
    /**
     * @description The corner of the anchor which to align the menu in the standard logical property style of <block>-<inline> e.g. `'end-start'`.
     *
     * NOTE: This value may not be respected by the menu positioning algorithm if the menu would render outisde the viewport.
     * @default Corner.END_START
     * @link https://material-web.dev/components/menu/#mdmenu-lessmd-menugreater
     */
    anchorCorner?: string;
    /**
     * @description The corner of the menu which to align the anchor in the standard logical property style of <block>-<inline> e.g. `'start-start'`.
     *
     * NOTE: This value may not be respected by the menu positioning algorithm if the menu would render outisde the viewport.
     * @default Corner.START_START
     * @link https://material-web.dev/components/menu/#mdmenu-lessmd-menugreater
     */
    menuCorner?: string;
    /**
     * @description Disable the `flip` behavior that usually happens on the horizontal axis when the surface would render outside the viewport.
     * @default false
     * @link https://material-web.dev/components/menu/#mdmenu-lessmd-menugreater
     */
    noHorizontalFlip?: boolean;
    /**
     * @description Disable the `flip` behavior that usually happens on the vertical axis when the surface would render outside the viewport.
     * @default false
     * @link https://material-web.dev/components/menu/#mdmenu-lessmd-menugreater
     */
    noVerticalFlip?: boolean;
    /**
     * @description Keeps the user clicks outside the menu.
     *
     * NOTE: clicking outside may still cause focusout to close the menu so see `stayOpenOnFocusout`.
     * @default false
     * @link https://material-web.dev/components/menu/#mdmenu-lessmd-menugreater
     */
    stayOpenOnOutsideClick?: boolean;
    /**
     * @description Keeps the menu open when focus leaves the menu's composed subtree.
     *
     * NOTE: Focusout behavior will stop propagation of the focusout event. Set this property to true to opt-out of menu's focusout handling altogether.
     * @default false
     * @link https://material-web.dev/components/menu/#mdmenu-lessmd-menugreater
     */
    stayOpenOnFocusout?: boolean;
    /**
     * @description After closing, does not restore focus to the last focused element before the menu was opened.
     * @default false
     * @link https://material-web.dev/components/menu/#mdmenu-lessmd-menugreater
     */
    skipRestoreFocus?: boolean;
    /**
     * @description The element that should be focused by default once opened.
     *
     * NOTE: When setting default focus to 'LIST_ROOT', remember to change `tabindex` to `0` and change md-menu's display to something other than `display: contents` when necessary.
     * @default FocusState.FIRST_ITEM
     * @link https://material-web.dev/components/menu/#mdmenu-lessmd-menugreater
     */
    defaultFocus?: string;
    /**
     * @description Turns off navigation wrapping. By default, navigating past the end of the menu items will wrap focus back to the beginning and vice versa. Use this for ARIA patterns that do not wrap focus, like combobox.
     * @default false
     * @link https://material-web.dev/components/menu/#mdmenu-lessmd-menugreater
     */
    noNavigationWrap?: boolean;
    /**
     * @description Whether or not the current menu is a submenu and should not handle specific navigation keys.
     * @default false
     * @link https://material-web.dev/components/menu/#mdmenu-lessmd-menugreater
     */
    isSubmenu?: boolean;
    /**
     * @description Handles typeahead navigation through the menu.
     * @default function { ... }
     * @type {TypeaheadController}
     * @link https://material-web.dev/components/menu/#mdmenu-lessmd-menugreater
     */
    typeaheadController?: any;
    /**
     * @default undefined
     * @type {HTMLElement & Partial<SurfacePositionTarget>}
     * @link https://material-web.dev/components/menu/#mdmenu-lessmd-menugreater
     */
    anchorElement?: HTMLElement;
    /**
     * @default undefined
     * @type {MenuItem[]}
     * @link https://material-web.dev/components/menu/#mdmenu-lessmd-menugreater
     */
    items?: HTMLElement[];
    /**
     * @description Fired before the opening animation begins
     * @bubbles No
     * @composed No
     * @link https://material-web.dev/components/menu/#mdmenu-lessmd-menugreater
     */
    onOpening?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Fired before the opening animation begins
     * @bubbles No
     * @composed No
     * @link https://material-web.dev/components/menu/#mdmenu-lessmd-menugreater
     */
    onopening?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Fired once the menu is open, after any animations
     * @bubbles No
     * @composed No
     * @link https://material-web.dev/components/menu/#mdmenu-lessmd-menugreater
     */
    onOpened?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Fired once the menu is open, after any animations
     * @bubbles No
     * @composed No
     * @link https://material-web.dev/components/menu/#mdmenu-lessmd-menugreater
     */
    onopened?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Fired before the closing animation begins
     * @bubbles No
     * @composed No
     * @link https://material-web.dev/components/menu/#mdmenu-lessmd-menugreater
     */
    onClosing?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Fired before the closing animation begins
     * @bubbles No
     * @composed No
     * @link https://material-web.dev/components/menu/#mdmenu-lessmd-menugreater
     */
    onclosing?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Fired once the menu is closed, after any animations
     * @bubbles No
     * @composed No
     * @link https://material-web.dev/components/menu/#mdmenu-lessmd-menugreater
     */
    onClosed?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Fired once the menu is closed, after any animations
     * @bubbles No
     * @composed No
     * @link https://material-web.dev/components/menu/#mdmenu-lessmd-menugreater
     */
    onclosed?: SolidJS.JSX.EventHandlerUnion<T, Event>;
  }
  export interface MdMenuItem<T> extends SolidJS.JSX.HTMLAttributes<T> {
    /**
     * @description Disables the item and makes it non-selectable and non-interactive.
     * @default false
     * @link https://material-web.dev/components/menu/#mdmenuitem-lessmd-menu-itemgreater
     */
    disabled?: boolean;
    /**
     * @description Sets the behavior and role of the menu item, defaults to "menuitem".
     * @default 'menuitem'
     * @link https://material-web.dev/components/menu/#mdmenuitem-lessmd-menu-itemgreater
     */
    type?: string;
    /**
     * @description Sets the underlying `HTMLAnchorElement`'s `href` resource attribute.
     * @default ''
     * @link https://material-web.dev/components/menu/#mdmenuitem-lessmd-menu-itemgreater
     */
    href?: string;
    /**
     * @description Sets the underlying `HTMLAnchorElement`'s `target` attribute when `href` is set.
     * @default ''
     * @link https://material-web.dev/components/menu/#mdmenuitem-lessmd-menu-itemgreater
     */
    target?: string;
    /**
     * @description Keeps the menu open if clicked or keyboard selected.
     * @default false
     * @link https://material-web.dev/components/menu/#mdmenuitem-lessmd-menu-itemgreater
     */
    keepOpen?: boolean;
    /**
     * @description Sets the item in the selected visual state when a submenu is opened.
     * @default false
     * @link https://material-web.dev/components/menu/#mdmenuitem-lessmd-menu-itemgreater
     */
    selected?: boolean;
    /**
     * @default undefined
     * @link https://material-web.dev/components/menu/#mdmenuitem-lessmd-menu-itemgreater
     */
    typeaheadText?: string;
    /**
     * @description Closes the encapsulating menu on closable interaction.
     * @bubbles Yes
     * @composed Yes
     * @link https://material-web.dev/components/menu/#mdmenuitem-lessmd-menu-itemgreater
     */
    onCloseMenu?: SolidJS.JSX.EventHandlerUnion<
      T,
      CustomEvent<{ initiator: SelectOption; reason: Reason; itemPath: SelectOption[] }>
    >;
    /**
     * @description Closes the encapsulating menu on closable interaction.
     * @bubbles Yes
     * @composed Yes
     * @link https://material-web.dev/components/menu/#mdmenuitem-lessmd-menu-itemgreater
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
     * @link https://material-web.dev/components/menu/#mdsubmenu-lessmd-sub-menugreater
     */
    anchorCorner?: string;
    /**
     * @description The menuCorner to set on the submenu.
     * @default Corner.START_START
     * @link https://material-web.dev/components/menu/#mdsubmenu-lessmd-sub-menugreater
     */
    menuCorner?: string;
    /**
     * @description The delay between mouseenter and submenu opening.
     * @default 400
     * @link https://material-web.dev/components/menu/#mdsubmenu-lessmd-sub-menugreater
     */
    hoverOpenDelay?: number;
    /**
     * @description The delay between ponterleave and the submenu closing.
     * @default 400
     * @link https://material-web.dev/components/menu/#mdsubmenu-lessmd-sub-menugreater
     */
    hoverCloseDelay?: number;
    /**
     * @description READONLY: self-identifies as a menu item and sets its identifying attribute
     * @default true
     * @link https://material-web.dev/components/menu/#mdsubmenu-lessmd-sub-menugreater
     */
    isSubMenu?: boolean;
    /**
     * @default undefined
     * @type {MenuItem}
     * @link https://material-web.dev/components/menu/#mdsubmenu-lessmd-sub-menugreater
     */
    item?: HTMLElement;
    /**
     * @default undefined
     * @type {Menu}
     * @link https://material-web.dev/components/menu/#mdsubmenu-lessmd-sub-menugreater
     */
    menu?: HTMLElement;
    /**
     * @description Requests the parent menu to deselect other items when a submenu opens.
     * @bubbles Yes
     * @composed Yes
     * @link https://material-web.dev/components/menu/#mdsubmenu-lessmd-sub-menugreater
     */
    onDeactivateItems?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Requests the parent menu to deselect other items when a submenu opens.
     * @bubbles Yes
     * @composed Yes
     * @link https://material-web.dev/components/menu/#mdsubmenu-lessmd-sub-menugreater
     */
    ondeactivateitems?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Requests the parent to make the slotted item focusable and focus the item.
     * @bubbles Yes
     * @composed Yes
     * @link https://material-web.dev/components/menu/#mdsubmenu-lessmd-sub-menugreater
     */
    onRequestActivation?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Requests the parent to make the slotted item focusable and focus the item.
     * @bubbles Yes
     * @composed Yes
     * @link https://material-web.dev/components/menu/#mdsubmenu-lessmd-sub-menugreater
     */
    onrequestactivation?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Requests the parent menu to deactivate the typeahead functionality when a submenu opens.
     * @bubbles Yes
     * @composed Yes
     * @link https://material-web.dev/components/menu/#mdsubmenu-lessmd-sub-menugreater
     */
    onDeactivateTypeahead?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Requests the parent menu to deactivate the typeahead functionality when a submenu opens.
     * @bubbles Yes
     * @composed Yes
     * @link https://material-web.dev/components/menu/#mdsubmenu-lessmd-sub-menugreater
     */
    ondeactivatetypeahead?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Requests the parent menu to activate the typeahead functionality when a submenu closes.
     * @bubbles Yes
     * @composed Yes
     * @link https://material-web.dev/components/menu/#mdsubmenu-lessmd-sub-menugreater
     */
    onActivateTypeahead?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Requests the parent menu to activate the typeahead functionality when a submenu closes.
     * @bubbles Yes
     * @composed Yes
     * @link https://material-web.dev/components/menu/#mdsubmenu-lessmd-sub-menugreater
     */
    onactivatetypeahead?: SolidJS.JSX.EventHandlerUnion<T, Event>;
  }
  export interface MdLinearProgress<T> extends SolidJS.JSX.HTMLAttributes<T> {
    /**
     * @description Buffer amount to display, a fraction between 0 and `max`. If the value is 0 or negative, the buffer is not displayed.
     * @default 0
     * @link https://material-web.dev/components/progress/#mdlinearprogress-lessmd-linear-progressgreater
     */
    buffer?: number;
    /**
     * @description Progress to display, a fraction between 0 and `max`.
     * @default 0
     * @link https://material-web.dev/components/progress/#mdlinearprogress-lessmd-linear-progressgreater
     */
    value?: number;
    /**
     * @description Maximum progress to display, defaults to 1.
     * @default 1
     * @link https://material-web.dev/components/progress/#mdlinearprogress-lessmd-linear-progressgreater
     */
    max?: number;
    /**
     * @description Whether or not to display indeterminate progress, which gives no indication to how long an activity will take.
     * @default false
     * @link https://material-web.dev/components/progress/#mdlinearprogress-lessmd-linear-progressgreater
     */
    indeterminate?: boolean;
    /**
     * @description Whether or not to render indeterminate mode using 4 colors instead of one.
     * @default false
     * @link https://material-web.dev/components/progress/#mdlinearprogress-lessmd-linear-progressgreater
     */
    fourColor?: boolean;
  }
  export interface MdCircularProgress<T> extends SolidJS.JSX.HTMLAttributes<T> {
    /**
     * @description Progress to display, a fraction between 0 and `max`.
     * @default 0
     * @link https://material-web.dev/components/progress/#mdcircularprogress-lessmd-circular-progressgreater
     */
    value?: number;
    /**
     * @description Maximum progress to display, defaults to 1.
     * @default 1
     * @link https://material-web.dev/components/progress/#mdcircularprogress-lessmd-circular-progressgreater
     */
    max?: number;
    /**
     * @description Whether or not to display indeterminate progress, which gives no indication to how long an activity will take.
     * @default false
     * @link https://material-web.dev/components/progress/#mdcircularprogress-lessmd-circular-progressgreater
     */
    indeterminate?: boolean;
    /**
     * @description Whether or not to render indeterminate mode using 4 colors instead of one.
     * @default false
     * @link https://material-web.dev/components/progress/#mdcircularprogress-lessmd-circular-progressgreater
     */
    fourColor?: boolean;
  }
  export interface MdRadio<T> extends SolidJS.JSX.HTMLAttributes<T> {
    /**
     * @description Whether or not the radio is required. If any radio is required in a group, all radios are implicitly required.
     * @default false
     * @link https://material-web.dev/components/radio/#mdradio-lessmd-radiogreater
     */
    required?: boolean;
    /**
     * @description The element value to use in form submission when checked.
     * @default 'on'
     * @link https://material-web.dev/components/radio/#mdradio-lessmd-radiogreater
     */
    value?: string;
    /**
     * @default undefined
     * @link https://material-web.dev/components/radio/#mdradio-lessmd-radiogreater
     */
    checked?: boolean;
    /**
     * @default undefined
     * @link https://material-web.dev/components/radio/#mdradio-lessmd-radiogreater
     */
    disabled?: boolean;
    /**
     * @default undefined
     * @link https://material-web.dev/components/radio/#mdradio-lessmd-radiogreater
     */
    name?: string;
    /**
     * @description Dispatched when the value changes from user interaction.
     * @bubbles Yes
     * @composed No
     * @link https://material-web.dev/components/radio/#mdradio-lessmd-radiogreater
     */
    onInput?: SolidJS.JSX.InputEventHandlerUnion<T, InputEvent>;
    /**
     * @description Dispatched when the value changes from user interaction.
     * @bubbles Yes
     * @composed No
     * @link https://material-web.dev/components/radio/#mdradio-lessmd-radiogreater
     */
    oninput?: SolidJS.JSX.InputEventHandlerUnion<T, InputEvent>;
    /**
     * @description Dispatched when the value changes from user interaction.
     * @bubbles Yes
     * @composed Yes
     * @link https://material-web.dev/components/radio/#mdradio-lessmd-radiogreater
     */
    onChange?: SolidJS.JSX.ChangeEventHandlerUnion<T, Event>;
    /**
     * @description Dispatched when the value changes from user interaction.
     * @bubbles Yes
     * @composed Yes
     * @link https://material-web.dev/components/radio/#mdradio-lessmd-radiogreater
     */
    onchange?: SolidJS.JSX.ChangeEventHandlerUnion<T, Event>;
  }
  export interface MdRipple<T> extends SolidJS.JSX.HTMLAttributes<T> {
    /**
     * @description Disables the ripple.
     * @default false
     * @link https://material-web.dev/components/ripple/#mdripple-lessmd-ripplegreater
     */
    disabled?: boolean;
    /**
     * @default undefined
     * @link https://material-web.dev/components/ripple/#mdripple-lessmd-ripplegreater
     */
    htmlFor?: string;
    /**
     * @default undefined
     * @link https://material-web.dev/components/ripple/#mdripple-lessmd-ripplegreater
     */
    control?: HTMLElement;
  }
  export interface MdFilledSelect<T> extends SolidJS.JSX.HTMLAttributes<T> {
    /**
     * @description Opens the menu synchronously with no animation.
     * @default false
     * @link https://material-web.dev/components/select/#mdfilledselect-lessmd-filled-selectgreater
     */
    quick?: boolean;
    /**
     * @description Whether or not the select is required.
     * @default false
     * @link https://material-web.dev/components/select/#mdfilledselect-lessmd-filled-selectgreater
     */
    required?: boolean;
    /**
     * @description The error message that replaces supporting text when `error` is true. If `errorText` is an empty string, then the supporting text will continue to show.
     *
     * This error message overrides the error message displayed by `reportValidity()`.
     * @default ''
     * @link https://material-web.dev/components/select/#mdfilledselect-lessmd-filled-selectgreater
     */
    errorText?: string;
    /**
     * @description The floating label for the field.
     * @default ''
     * @link https://material-web.dev/components/select/#mdfilledselect-lessmd-filled-selectgreater
     */
    label?: string;
    /**
     * @description Disables the asterisk on the floating label, when the select is required.
     * @default false
     * @link https://material-web.dev/components/select/#mdfilledselect-lessmd-filled-selectgreater
     */
    noAsterisk?: boolean;
    /**
     * @description Conveys additional information below the select, such as how it should be used.
     * @default ''
     * @link https://material-web.dev/components/select/#mdfilledselect-lessmd-filled-selectgreater
     */
    supportingText?: string;
    /**
     * @description Gets or sets whether or not the select is in a visually invalid state.
     *
     * This error state overrides the error state controlled by `reportValidity()`.
     * @default false
     * @link https://material-web.dev/components/select/#mdfilledselect-lessmd-filled-selectgreater
     */
    error?: boolean;
    /**
     * @description Whether or not the underlying md-menu should be position: fixed to display in a top-level manner, or position: absolute.
     *
     * position:fixed is useful for cases where select is inside of another element with stacking context and hidden overflows such as `md-dialog`.
     * @default 'popover'
     * @link https://material-web.dev/components/select/#mdfilledselect-lessmd-filled-selectgreater
     */
    menuPositioning?: string;
    /**
     * @description Clamps the menu-width to the width of the select.
     * @default false
     * @link https://material-web.dev/components/select/#mdfilledselect-lessmd-filled-selectgreater
     */
    clampMenuWidth?: boolean;
    /**
     * @description The max time between the keystrokes of the typeahead select / menu behavior before it clears the typeahead buffer.
     * @default DEFAULT_TYPEAHEAD_BUFFER_TIME
     * @link https://material-web.dev/components/select/#mdfilledselect-lessmd-filled-selectgreater
     */
    typeaheadDelay?: number;
    /**
     * @description Whether or not the text field has a leading icon. Used for SSR.
     * @default false
     * @link https://material-web.dev/components/select/#mdfilledselect-lessmd-filled-selectgreater
     */
    hasLeadingIcon?: boolean;
    /**
     * @description Text to display in the field. Only set for SSR.
     * @default ''
     * @link https://material-web.dev/components/select/#mdfilledselect-lessmd-filled-selectgreater
     */
    displayText?: string;
    /**
     * @description Whether the menu should be aligned to the start or the end of the select's textbox.
     * @default 'start'
     * @link https://material-web.dev/components/select/#mdfilledselect-lessmd-filled-selectgreater
     */
    menuAlign?: string;
    /**
     * @default undefined
     * @link https://material-web.dev/components/select/#mdfilledselect-lessmd-filled-selectgreater
     */
    value?: string;
    /**
     * @default undefined
     * @link https://material-web.dev/components/select/#mdfilledselect-lessmd-filled-selectgreater
     */
    selectedIndex?: number;
    /**
     * @default undefined
     * @link https://material-web.dev/components/select/#mdfilledselect-lessmd-filled-selectgreater
     */
    disabled?: boolean;
    /**
     * @default undefined
     * @link https://material-web.dev/components/select/#mdfilledselect-lessmd-filled-selectgreater
     */
    name?: string;
    /**
     * @default undefined
     * @type {SelectOption[]}
     * @link https://material-web.dev/components/select/#mdfilledselect-lessmd-filled-selectgreater
     */
    options?: HTMLElement[];
    /**
     * @default undefined
     * @type {SelectOption[]}
     * @link https://material-web.dev/components/select/#mdfilledselect-lessmd-filled-selectgreater
     */
    selectedOptions?: HTMLElement[];
    /**
     * @description The native `change` event on [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)
     * @bubbles Yes
     * @composed No
     * @link https://material-web.dev/components/select/#mdfilledselect-lessmd-filled-selectgreater
     */
    onChange?: SolidJS.JSX.ChangeEventHandlerUnion<T, Event>;
    /**
     * @description The native `change` event on [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)
     * @bubbles Yes
     * @composed No
     * @link https://material-web.dev/components/select/#mdfilledselect-lessmd-filled-selectgreater
     */
    onchange?: SolidJS.JSX.ChangeEventHandlerUnion<T, Event>;
    /**
     * @description The native `input` event on [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
     * @bubbles Yes
     * @composed Yes
     * @link https://material-web.dev/components/select/#mdfilledselect-lessmd-filled-selectgreater
     */
    onInput?: SolidJS.JSX.InputEventHandlerUnion<T, InputEvent>;
    /**
     * @description The native `input` event on [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
     * @bubbles Yes
     * @composed Yes
     * @link https://material-web.dev/components/select/#mdfilledselect-lessmd-filled-selectgreater
     */
    oninput?: SolidJS.JSX.InputEventHandlerUnion<T, InputEvent>;
    /**
     * @description Fired when the select's menu is about to open.
     * @bubbles No
     * @composed No
     * @link https://material-web.dev/components/select/#mdfilledselect-lessmd-filled-selectgreater
     */
    onOpening?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Fired when the select's menu is about to open.
     * @bubbles No
     * @composed No
     * @link https://material-web.dev/components/select/#mdfilledselect-lessmd-filled-selectgreater
     */
    onopening?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Fired when the select's menu has finished animations and opened.
     * @bubbles No
     * @composed No
     * @link https://material-web.dev/components/select/#mdfilledselect-lessmd-filled-selectgreater
     */
    onOpened?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Fired when the select's menu has finished animations and opened.
     * @bubbles No
     * @composed No
     * @link https://material-web.dev/components/select/#mdfilledselect-lessmd-filled-selectgreater
     */
    onopened?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Fired when the select's menu is about to close.
     * @bubbles No
     * @composed No
     * @link https://material-web.dev/components/select/#mdfilledselect-lessmd-filled-selectgreater
     */
    onClosing?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Fired when the select's menu is about to close.
     * @bubbles No
     * @composed No
     * @link https://material-web.dev/components/select/#mdfilledselect-lessmd-filled-selectgreater
     */
    onclosing?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Fired when the select's menu has finished animations and closed.
     * @bubbles No
     * @composed No
     * @link https://material-web.dev/components/select/#mdfilledselect-lessmd-filled-selectgreater
     */
    onClosed?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Fired when the select's menu has finished animations and closed.
     * @bubbles No
     * @composed No
     * @link https://material-web.dev/components/select/#mdfilledselect-lessmd-filled-selectgreater
     */
    onclosed?: SolidJS.JSX.EventHandlerUnion<T, Event>;
  }
  export interface MdOutlinedSelect<T> extends SolidJS.JSX.HTMLAttributes<T> {
    /**
     * @description Opens the menu synchronously with no animation.
     * @default false
     * @link https://material-web.dev/components/select/#mdoutlinedselect-lessmd-outlined-selectgreater
     */
    quick?: boolean;
    /**
     * @description Whether or not the select is required.
     * @default false
     * @link https://material-web.dev/components/select/#mdoutlinedselect-lessmd-outlined-selectgreater
     */
    required?: boolean;
    /**
     * @description The error message that replaces supporting text when `error` is true. If `errorText` is an empty string, then the supporting text will continue to show.
     *
     * This error message overrides the error message displayed by `reportValidity()`.
     * @default ''
     * @link https://material-web.dev/components/select/#mdoutlinedselect-lessmd-outlined-selectgreater
     */
    errorText?: string;
    /**
     * @description The floating label for the field.
     * @default ''
     * @link https://material-web.dev/components/select/#mdoutlinedselect-lessmd-outlined-selectgreater
     */
    label?: string;
    /**
     * @description Disables the asterisk on the floating label, when the select is required.
     * @default false
     * @link https://material-web.dev/components/select/#mdoutlinedselect-lessmd-outlined-selectgreater
     */
    noAsterisk?: boolean;
    /**
     * @description Conveys additional information below the select, such as how it should be used.
     * @default ''
     * @link https://material-web.dev/components/select/#mdoutlinedselect-lessmd-outlined-selectgreater
     */
    supportingText?: string;
    /**
     * @description Gets or sets whether or not the select is in a visually invalid state.
     *
     * This error state overrides the error state controlled by `reportValidity()`.
     * @default false
     * @link https://material-web.dev/components/select/#mdoutlinedselect-lessmd-outlined-selectgreater
     */
    error?: boolean;
    /**
     * @description Whether or not the underlying md-menu should be position: fixed to display in a top-level manner, or position: absolute.
     *
     * position:fixed is useful for cases where select is inside of another element with stacking context and hidden overflows such as `md-dialog`.
     * @default 'popover'
     * @link https://material-web.dev/components/select/#mdoutlinedselect-lessmd-outlined-selectgreater
     */
    menuPositioning?: string;
    /**
     * @description Clamps the menu-width to the width of the select.
     * @default false
     * @link https://material-web.dev/components/select/#mdoutlinedselect-lessmd-outlined-selectgreater
     */
    clampMenuWidth?: boolean;
    /**
     * @description The max time between the keystrokes of the typeahead select / menu behavior before it clears the typeahead buffer.
     * @default DEFAULT_TYPEAHEAD_BUFFER_TIME
     * @link https://material-web.dev/components/select/#mdoutlinedselect-lessmd-outlined-selectgreater
     */
    typeaheadDelay?: number;
    /**
     * @description Whether or not the text field has a leading icon. Used for SSR.
     * @default false
     * @link https://material-web.dev/components/select/#mdoutlinedselect-lessmd-outlined-selectgreater
     */
    hasLeadingIcon?: boolean;
    /**
     * @description Text to display in the field. Only set for SSR.
     * @default ''
     * @link https://material-web.dev/components/select/#mdoutlinedselect-lessmd-outlined-selectgreater
     */
    displayText?: string;
    /**
     * @description Whether the menu should be aligned to the start or the end of the select's textbox.
     * @default 'start'
     * @link https://material-web.dev/components/select/#mdoutlinedselect-lessmd-outlined-selectgreater
     */
    menuAlign?: string;
    /**
     * @default undefined
     * @link https://material-web.dev/components/select/#mdoutlinedselect-lessmd-outlined-selectgreater
     */
    value?: string;
    /**
     * @default undefined
     * @link https://material-web.dev/components/select/#mdoutlinedselect-lessmd-outlined-selectgreater
     */
    selectedIndex?: number;
    /**
     * @default undefined
     * @link https://material-web.dev/components/select/#mdoutlinedselect-lessmd-outlined-selectgreater
     */
    disabled?: boolean;
    /**
     * @default undefined
     * @link https://material-web.dev/components/select/#mdoutlinedselect-lessmd-outlined-selectgreater
     */
    name?: string;
    /**
     * @default undefined
     * @type {SelectOption[]}
     * @link https://material-web.dev/components/select/#mdoutlinedselect-lessmd-outlined-selectgreater
     */
    options?: HTMLElement[];
    /**
     * @default undefined
     * @type {SelectOption[]}
     * @link https://material-web.dev/components/select/#mdoutlinedselect-lessmd-outlined-selectgreater
     */
    selectedOptions?: HTMLElement[];
    /**
     * @description The native `change` event on [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)
     * @bubbles Yes
     * @composed No
     * @link https://material-web.dev/components/select/#mdoutlinedselect-lessmd-outlined-selectgreater
     */
    onChange?: SolidJS.JSX.ChangeEventHandlerUnion<T, Event>;
    /**
     * @description The native `change` event on [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)
     * @bubbles Yes
     * @composed No
     * @link https://material-web.dev/components/select/#mdoutlinedselect-lessmd-outlined-selectgreater
     */
    onchange?: SolidJS.JSX.ChangeEventHandlerUnion<T, Event>;
    /**
     * @description The native `input` event on [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
     * @bubbles Yes
     * @composed Yes
     * @link https://material-web.dev/components/select/#mdoutlinedselect-lessmd-outlined-selectgreater
     */
    onInput?: SolidJS.JSX.InputEventHandlerUnion<T, InputEvent>;
    /**
     * @description The native `input` event on [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
     * @bubbles Yes
     * @composed Yes
     * @link https://material-web.dev/components/select/#mdoutlinedselect-lessmd-outlined-selectgreater
     */
    oninput?: SolidJS.JSX.InputEventHandlerUnion<T, InputEvent>;
    /**
     * @description Fired when the select's menu is about to open.
     * @bubbles No
     * @composed No
     * @link https://material-web.dev/components/select/#mdoutlinedselect-lessmd-outlined-selectgreater
     */
    onOpening?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Fired when the select's menu is about to open.
     * @bubbles No
     * @composed No
     * @link https://material-web.dev/components/select/#mdoutlinedselect-lessmd-outlined-selectgreater
     */
    onopening?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Fired when the select's menu has finished animations and opened.
     * @bubbles No
     * @composed No
     * @link https://material-web.dev/components/select/#mdoutlinedselect-lessmd-outlined-selectgreater
     */
    onOpened?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Fired when the select's menu has finished animations and opened.
     * @bubbles No
     * @composed No
     * @link https://material-web.dev/components/select/#mdoutlinedselect-lessmd-outlined-selectgreater
     */
    onopened?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Fired when the select's menu is about to close.
     * @bubbles No
     * @composed No
     * @link https://material-web.dev/components/select/#mdoutlinedselect-lessmd-outlined-selectgreater
     */
    onClosing?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Fired when the select's menu is about to close.
     * @bubbles No
     * @composed No
     * @link https://material-web.dev/components/select/#mdoutlinedselect-lessmd-outlined-selectgreater
     */
    onclosing?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Fired when the select's menu has finished animations and closed.
     * @bubbles No
     * @composed No
     * @link https://material-web.dev/components/select/#mdoutlinedselect-lessmd-outlined-selectgreater
     */
    onClosed?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Fired when the select's menu has finished animations and closed.
     * @bubbles No
     * @composed No
     * @link https://material-web.dev/components/select/#mdoutlinedselect-lessmd-outlined-selectgreater
     */
    onclosed?: SolidJS.JSX.EventHandlerUnion<T, Event>;
  }
  export interface MdSelectOption<T> extends SolidJS.JSX.HTMLAttributes<T> {
    /**
     * @description Disables the item and makes it non-selectable and non-interactive.
     * @default false
     * @link https://material-web.dev/components/select/#mdselectoption-lessmd-select-optiongreater
     */
    disabled?: boolean;
    /**
     * @description Sets the item in the selected visual state when a submenu is opened.
     * @default false
     * @link https://material-web.dev/components/select/#mdselectoption-lessmd-select-optiongreater
     */
    selected?: boolean;
    /**
     * @description Form value of the option.
     * @default ''
     * @link https://material-web.dev/components/select/#mdselectoption-lessmd-select-optiongreater
     */
    value?: string;
    /**
     * @default 'option' as const
     * @link https://material-web.dev/components/select/#mdselectoption-lessmd-select-optiongreater
     */
    type?: string;
    /**
     * @default undefined
     * @link https://material-web.dev/components/select/#mdselectoption-lessmd-select-optiongreater
     */
    typeaheadText?: string;
    /**
     * @default undefined
     * @link https://material-web.dev/components/select/#mdselectoption-lessmd-select-optiongreater
     */
    displayText?: string;
    /**
     * @description Closes the encapsulating menu on closable interaction.
     * @bubbles Yes
     * @composed Yes
     * @link https://material-web.dev/components/select/#mdselectoption-lessmd-select-optiongreater
     */
    onCloseMenu?: SolidJS.JSX.EventHandlerUnion<
      T,
      CustomEvent<{ initiator: SelectOption; reason: Reason; itemPath: SelectOption[] }>
    >;
    /**
     * @description Closes the encapsulating menu on closable interaction.
     * @bubbles Yes
     * @composed Yes
     * @link https://material-web.dev/components/select/#mdselectoption-lessmd-select-optiongreater
     */
    onclosemenu?: SolidJS.JSX.EventHandlerUnion<
      T,
      CustomEvent<{ initiator: SelectOption; reason: Reason; itemPath: SelectOption[] }>
    >;
    /**
     * @description Requests the parent md-select to select this element (and deselect others if single-selection) when `selected` changed to `true`.
     * @bubbles Yes
     * @composed Yes
     * @link https://material-web.dev/components/select/#mdselectoption-lessmd-select-optiongreater
     */
    onRequestSelection?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Requests the parent md-select to select this element (and deselect others if single-selection) when `selected` changed to `true`.
     * @bubbles Yes
     * @composed Yes
     * @link https://material-web.dev/components/select/#mdselectoption-lessmd-select-optiongreater
     */
    onrequestselection?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Requests the parent md-select to deselect this element when `selected` changed to `false`.
     * @bubbles Yes
     * @composed Yes
     * @link https://material-web.dev/components/select/#mdselectoption-lessmd-select-optiongreater
     */
    onRequestDeselection?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description Requests the parent md-select to deselect this element when `selected` changed to `false`.
     * @bubbles Yes
     * @composed Yes
     * @link https://material-web.dev/components/select/#mdselectoption-lessmd-select-optiongreater
     */
    onrequestdeselection?: SolidJS.JSX.EventHandlerUnion<T, Event>;
  }
  export interface MdSlider<T> extends SolidJS.JSX.HTMLAttributes<T> {
    /**
     * @description The slider minimum value
     * @default 0
     * @link https://material-web.dev/components/slider/#mdslider-lessmd-slidergreater
     */
    min?: number;
    /**
     * @description The slider maximum value
     * @default 100
     * @link https://material-web.dev/components/slider/#mdslider-lessmd-slidergreater
     */
    max?: number;
    /**
     * @description The slider value displayed when range is false.
     * @default undefined
     * @link https://material-web.dev/components/slider/#mdslider-lessmd-slidergreater
     */
    value?: number;
    /**
     * @description The slider start value displayed when range is true.
     * @default undefined
     * @link https://material-web.dev/components/slider/#mdslider-lessmd-slidergreater
     */
    valueStart?: number;
    /**
     * @description The slider end value displayed when range is true.
     * @default undefined
     * @link https://material-web.dev/components/slider/#mdslider-lessmd-slidergreater
     */
    valueEnd?: number;
    /**
     * @description An optional label for the slider's value displayed when range is false; if not set, the label is the value itself.
     * @default ''
     * @link https://material-web.dev/components/slider/#mdslider-lessmd-slidergreater
     */
    valueLabel?: string;
    /**
     * @description An optional label for the slider's start value displayed when range is true; if not set, the label is the valueStart itself.
     * @default ''
     * @link https://material-web.dev/components/slider/#mdslider-lessmd-slidergreater
     */
    valueLabelStart?: string;
    /**
     * @description An optional label for the slider's end value displayed when range is true; if not set, the label is the valueEnd itself.
     * @default ''
     * @link https://material-web.dev/components/slider/#mdslider-lessmd-slidergreater
     */
    valueLabelEnd?: string;
    /**
     * @description Aria label for the slider's start handle displayed when range is true.
     * @default ''
     * @link https://material-web.dev/components/slider/#mdslider-lessmd-slidergreater
     */
    ariaLabelStart?: string;
    /**
     * @description Aria value text for the slider's start value displayed when range is true.
     * @default ''
     * @link https://material-web.dev/components/slider/#mdslider-lessmd-slidergreater
     */
    ariaValueTextStart?: string;
    /**
     * @description Aria label for the slider's end handle displayed when range is true.
     * @default ''
     * @link https://material-web.dev/components/slider/#mdslider-lessmd-slidergreater
     */
    ariaLabelEnd?: string;
    /**
     * @description Aria value text for the slider's end value displayed when range is true.
     * @default ''
     * @link https://material-web.dev/components/slider/#mdslider-lessmd-slidergreater
     */
    ariaValueTextEnd?: string;
    /**
     * @description The step between values.
     * @default 1
     * @link https://material-web.dev/components/slider/#mdslider-lessmd-slidergreater
     */
    step?: number;
    /**
     * @description Whether or not to show tick marks.
     * @default false
     * @link https://material-web.dev/components/slider/#mdslider-lessmd-slidergreater
     */
    ticks?: boolean;
    /**
     * @description Whether or not to show a value label when activated.
     * @default false
     * @link https://material-web.dev/components/slider/#mdslider-lessmd-slidergreater
     */
    labeled?: boolean;
    /**
     * @description Whether or not to show a value range. When false, the slider displays a slideable handle for the value property; when true, it displays slideable handles for the valueStart and valueEnd properties.
     * @default false
     * @link https://material-web.dev/components/slider/#mdslider-lessmd-slidergreater
     */
    range?: boolean;
    /**
     * @default undefined
     * @link https://material-web.dev/components/slider/#mdslider-lessmd-slidergreater
     */
    disabled?: boolean;
    /**
     * @default undefined
     * @link https://material-web.dev/components/slider/#mdslider-lessmd-slidergreater
     */
    name?: string;
    /**
     * @default undefined
     * @link https://material-web.dev/components/slider/#mdslider-lessmd-slidergreater
     */
    nameStart?: string;
    /**
     * @default undefined
     * @link https://material-web.dev/components/slider/#mdslider-lessmd-slidergreater
     */
    nameEnd?: string;
    /**
     * @description The native `change` event on [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)
     * @bubbles Yes
     * @composed No
     * @link https://material-web.dev/components/slider/#mdslider-lessmd-slidergreater
     */
    onChange?: SolidJS.JSX.ChangeEventHandlerUnion<T, Event>;
    /**
     * @description The native `change` event on [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)
     * @bubbles Yes
     * @composed No
     * @link https://material-web.dev/components/slider/#mdslider-lessmd-slidergreater
     */
    onchange?: SolidJS.JSX.ChangeEventHandlerUnion<T, Event>;
    /**
     * @description The native `input` event on [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
     * @bubbles Yes
     * @composed Yes
     * @link https://material-web.dev/components/slider/#mdslider-lessmd-slidergreater
     */
    onInput?: SolidJS.JSX.InputEventHandlerUnion<T, InputEvent>;
    /**
     * @description The native `input` event on [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
     * @bubbles Yes
     * @composed Yes
     * @link https://material-web.dev/components/slider/#mdslider-lessmd-slidergreater
     */
    oninput?: SolidJS.JSX.InputEventHandlerUnion<T, InputEvent>;
  }
  export interface MdSwitch<T> extends SolidJS.JSX.HTMLAttributes<T> {
    /**
     * @description Puts the switch in the selected state and sets the form submission value to the `value` property.
     * @default false
     * @link https://material-web.dev/components/switch/#mdswitch-lessmd-switchgreater
     */
    selected?: boolean;
    /**
     * @description Shows both the selected and deselected icons.
     * @default false
     * @link https://material-web.dev/components/switch/#mdswitch-lessmd-switchgreater
     */
    icons?: boolean;
    /**
     * @description Shows only the selected icon, and not the deselected icon. If `true`, overrides the behavior of the `icons` property.
     * @default false
     * @link https://material-web.dev/components/switch/#mdswitch-lessmd-switchgreater
     */
    showOnlySelectedIcon?: boolean;
    /**
     * @description When true, require the switch to be selected when participating in form submission.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#validation
     * @default false
     * @link https://material-web.dev/components/switch/#mdswitch-lessmd-switchgreater
     */
    required?: boolean;
    /**
     * @description The value associated with this switch on form submission. `null` is submitted when `selected` is `false`.
     * @default 'on'
     * @link https://material-web.dev/components/switch/#mdswitch-lessmd-switchgreater
     */
    value?: string;
    /**
     * @default undefined
     * @link https://material-web.dev/components/switch/#mdswitch-lessmd-switchgreater
     */
    disabled?: boolean;
    /**
     * @default undefined
     * @link https://material-web.dev/components/switch/#mdswitch-lessmd-switchgreater
     */
    name?: string;
    /**
     * @description Fired whenever `selected` changes due to user interaction (bubbles and composed).
     * @bubbles No
     * @composed No
     * @link https://material-web.dev/components/switch/#mdswitch-lessmd-switchgreater
     */
    onInput?: SolidJS.JSX.InputEventHandlerUnion<T, InputEvent>;
    /**
     * @description Fired whenever `selected` changes due to user interaction (bubbles and composed).
     * @bubbles No
     * @composed No
     * @link https://material-web.dev/components/switch/#mdswitch-lessmd-switchgreater
     */
    oninput?: SolidJS.JSX.InputEventHandlerUnion<T, InputEvent>;
    /**
     * @description Fired whenever `selected` changes due to user interaction (bubbles).
     * @bubbles No
     * @composed No
     * @link https://material-web.dev/components/switch/#mdswitch-lessmd-switchgreater
     */
    onChange?: SolidJS.JSX.ChangeEventHandlerUnion<T, Event>;
    /**
     * @description Fired whenever `selected` changes due to user interaction (bubbles).
     * @bubbles No
     * @composed No
     * @link https://material-web.dev/components/switch/#mdswitch-lessmd-switchgreater
     */
    onchange?: SolidJS.JSX.ChangeEventHandlerUnion<T, Event>;
  }
  export interface MdTabs<T> extends SolidJS.JSX.HTMLAttributes<T> {
    /**
     * @description Whether or not to automatically select a tab when it is focused.
     * @default false
     * @link https://material-web.dev/components/tabs/#mdtabs-lessmd-tabsgreater
     */
    autoActivate?: boolean;
    /**
     * @default undefined
     * @link https://material-web.dev/components/tabs/#mdtabs-lessmd-tabsgreater
     */
    activeTabIndex?: number;
    /**
     * @description The tabs of this tab bar.
     * @default undefined
     * @type {Tab[]}
     * @link https://material-web.dev/components/tabs/#mdtabs-lessmd-tabsgreater
     */
    tabs?: HTMLElement[];
    /**
     * @default undefined
     * @type {Tab}
     * @link https://material-web.dev/components/tabs/#mdtabs-lessmd-tabsgreater
     */
    activeTab?: HTMLElement;
    /**
     * @description Fired when the selected tab changes. The target's `activeTabIndex` or `activeTab` provide information about the selection change. The change event is fired when a user interaction like a space/enter key or click cause a selection change. The tab selection based on these actions can be cancelled by calling preventDefault on the triggering `keydown` or `click` event.
     * @bubbles Yes
     * @composed No
     * @link https://material-web.dev/components/tabs/#mdtabs-lessmd-tabsgreater
     */
    onChange?: SolidJS.JSX.ChangeEventHandlerUnion<T, Event>;
    /**
     * @description Fired when the selected tab changes. The target's `activeTabIndex` or `activeTab` provide information about the selection change. The change event is fired when a user interaction like a space/enter key or click cause a selection change. The tab selection based on these actions can be cancelled by calling preventDefault on the triggering `keydown` or `click` event.
     * @bubbles Yes
     * @composed No
     * @link https://material-web.dev/components/tabs/#mdtabs-lessmd-tabsgreater
     */
    onchange?: SolidJS.JSX.ChangeEventHandlerUnion<T, Event>;
  }
  export interface MdPrimaryTab<T> extends SolidJS.JSX.HTMLAttributes<T> {
    /**
     * @description Whether or not the icon renders inline with label or stacked vertically.
     * @default false
     * @link https://material-web.dev/components/tabs/#mdprimarytab-lessmd-primary-tabgreater
     */
    inlineIcon?: boolean;
    /**
     * @description The attribute `md-tab` indicates that the element is a tab for the parent element, `<md-tabs>`. Make sure if you're implementing your own `md-tab` component that you have an `md-tab` attribute set.
     * @default true
     * @link https://material-web.dev/components/tabs/#mdprimarytab-lessmd-primary-tabgreater
     */
    isTab?: boolean;
    /**
     * @description Whether or not the tab is selected.
     * @default false
     * @link https://material-web.dev/components/tabs/#mdprimarytab-lessmd-primary-tabgreater
     */
    active?: boolean;
    /**
     * @description In SSR, set this to true when an icon is present.
     * @default false
     * @link https://material-web.dev/components/tabs/#mdprimarytab-lessmd-primary-tabgreater
     */
    hasIcon?: boolean;
    /**
     * @description In SSR, set this to true when there is no label and only an icon.
     * @default false
     * @link https://material-web.dev/components/tabs/#mdprimarytab-lessmd-primary-tabgreater
     */
    iconOnly?: boolean;
    /**
     * @default undefined
     * @link https://material-web.dev/components/tabs/#mdprimarytab-lessmd-primary-tabgreater
     */
    selected?: boolean;
  }
  export interface MdSecondaryTab<T> extends SolidJS.JSX.HTMLAttributes<T> {
    /**
     * @description The attribute `md-tab` indicates that the element is a tab for the parent element, `<md-tabs>`. Make sure if you're implementing your own `md-tab` component that you have an `md-tab` attribute set.
     * @default true
     * @link https://material-web.dev/components/tabs/#mdsecondarytab-lessmd-secondary-tabgreater
     */
    isTab?: boolean;
    /**
     * @description Whether or not the tab is selected.
     * @default false
     * @link https://material-web.dev/components/tabs/#mdsecondarytab-lessmd-secondary-tabgreater
     */
    active?: boolean;
    /**
     * @description In SSR, set this to true when an icon is present.
     * @default false
     * @link https://material-web.dev/components/tabs/#mdsecondarytab-lessmd-secondary-tabgreater
     */
    hasIcon?: boolean;
    /**
     * @description In SSR, set this to true when there is no label and only an icon.
     * @default false
     * @link https://material-web.dev/components/tabs/#mdsecondarytab-lessmd-secondary-tabgreater
     */
    iconOnly?: boolean;
    /**
     * @default undefined
     * @link https://material-web.dev/components/tabs/#mdsecondarytab-lessmd-secondary-tabgreater
     */
    selected?: boolean;
  }
  export interface MdFilledTextField<T> extends SolidJS.JSX.HTMLAttributes<T> {
    /**
     * @description Gets or sets whether or not the text field is in a visually invalid state.
     *
     * This error state overrides the error state controlled by `reportValidity()`.
     * @default false
     * @link https://material-web.dev/components/text-field/#mdfilledtextfield-lessmd-filled-text-fieldgreater
     */
    error?: boolean;
    /**
     * @description The error message that replaces supporting text when `error` is true. If `errorText` is an empty string, then the supporting text will continue to show.
     *
     * This error message overrides the error message displayed by `reportValidity()`.
     * @default ''
     * @link https://material-web.dev/components/text-field/#mdfilledtextfield-lessmd-filled-text-fieldgreater
     */
    errorText?: string;
    /**
     * @description The floating Material label of the textfield component. It informs the user about what information is requested for a text field. It is aligned with the input text, is always visible, and it floats when focused or when text is entered into the textfield. This label also sets accessibilty labels, but the accessible label is overriden by `aria-label`.
     *
     * Learn more about floating labels from the Material Design guidelines: https://m3.material.io/components/text-fields/guidelines
     * @default ''
     * @link https://material-web.dev/components/text-field/#mdfilledtextfield-lessmd-filled-text-fieldgreater
     */
    label?: string;
    /**
     * @description Disables the asterisk on the floating label, when the text field is required.
     * @default false
     * @link https://material-web.dev/components/text-field/#mdfilledtextfield-lessmd-filled-text-fieldgreater
     */
    noAsterisk?: boolean;
    /**
     * @description Indicates that the user must specify a value for the input before the owning form can be submitted and will render an error state when `reportValidity()` is invoked when value is empty. Additionally the floating label will render an asterisk `"*"` when true.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required
     * @default false
     * @link https://material-web.dev/components/text-field/#mdfilledtextfield-lessmd-filled-text-fieldgreater
     */
    required?: boolean;
    /**
     * @description The current value of the text field. It is always a string.
     * @default ''
     * @link https://material-web.dev/components/text-field/#mdfilledtextfield-lessmd-filled-text-fieldgreater
     */
    value?: string;
    /**
     * @description An optional prefix to display before the input value.
     * @default ''
     * @link https://material-web.dev/components/text-field/#mdfilledtextfield-lessmd-filled-text-fieldgreater
     */
    prefixText?: string;
    /**
     * @description An optional suffix to display after the input value.
     * @default ''
     * @link https://material-web.dev/components/text-field/#mdfilledtextfield-lessmd-filled-text-fieldgreater
     */
    suffixText?: string;
    /**
     * @description Whether or not the text field has a leading icon. Used for SSR.
     * @default false
     * @link https://material-web.dev/components/text-field/#mdfilledtextfield-lessmd-filled-text-fieldgreater
     */
    hasLeadingIcon?: boolean;
    /**
     * @description Whether or not the text field has a trailing icon. Used for SSR.
     * @default false
     * @link https://material-web.dev/components/text-field/#mdfilledtextfield-lessmd-filled-text-fieldgreater
     */
    hasTrailingIcon?: boolean;
    /**
     * @description Conveys additional information below the text field, such as how it should be used.
     * @default ''
     * @link https://material-web.dev/components/text-field/#mdfilledtextfield-lessmd-filled-text-fieldgreater
     */
    supportingText?: string;
    /**
     * @description Override the input text CSS `direction`. Useful for RTL languages that use LTR notation for fractions.
     * @default ''
     * @link https://material-web.dev/components/text-field/#mdfilledtextfield-lessmd-filled-text-fieldgreater
     */
    textDirection?: string;
    /**
     * @description The number of rows to display for a `type="textarea"` text field. Defaults to 2.
     * @default 2
     * @link https://material-web.dev/components/text-field/#mdfilledtextfield-lessmd-filled-text-fieldgreater
     */
    rows?: number;
    /**
     * @description The number of cols to display for a `type="textarea"` text field. Defaults to 20.
     * @default 20
     * @link https://material-web.dev/components/text-field/#mdfilledtextfield-lessmd-filled-text-fieldgreater
     */
    cols?: number;
    /**
     * @default ''
     * @link https://material-web.dev/components/text-field/#mdfilledtextfield-lessmd-filled-text-fieldgreater
     */
    inputMode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';
    /**
     * @description Defines the greatest value in the range of permitted values.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#max
     * @default ''
     * @link https://material-web.dev/components/text-field/#mdfilledtextfield-lessmd-filled-text-fieldgreater
     */
    max?: string;
    /**
     * @description The maximum number of characters a user can enter into the text field. Set to -1 for none.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#maxlength
     * @default -1
     * @link https://material-web.dev/components/text-field/#mdfilledtextfield-lessmd-filled-text-fieldgreater
     */
    maxLength?: number;
    /**
     * @description Defines the most negative value in the range of permitted values.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#min
     * @default ''
     * @link https://material-web.dev/components/text-field/#mdfilledtextfield-lessmd-filled-text-fieldgreater
     */
    min?: string;
    /**
     * @description The minimum number of characters a user can enter into the text field. Set to -1 for none.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#minlength
     * @default -1
     * @link https://material-web.dev/components/text-field/#mdfilledtextfield-lessmd-filled-text-fieldgreater
     */
    minLength?: number;
    /**
     * @description When true, hide the spinner for `type="number"` text fields.
     * @default false
     * @link https://material-web.dev/components/text-field/#mdfilledtextfield-lessmd-filled-text-fieldgreater
     */
    noSpinner?: boolean;
    /**
     * @description A regular expression that the text field's value must match to pass constraint validation.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#pattern
     * @default ''
     * @link https://material-web.dev/components/text-field/#mdfilledtextfield-lessmd-filled-text-fieldgreater
     */
    pattern?: string;
    /**
     * @description Defines the text displayed in the textfield when it has no value. Provides a brief hint to the user as to the expected type of data that should be entered into the control. Unlike `label`, the placeholder is not visible and does not float when the textfield has a value.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/placeholder
     * @default ''
     * @link https://material-web.dev/components/text-field/#mdfilledtextfield-lessmd-filled-text-fieldgreater
     */
    placeholder?: string;
    /**
     * @description Indicates whether or not a user should be able to edit the text field's value.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#readonly
     * @default false
     * @link https://material-web.dev/components/text-field/#mdfilledtextfield-lessmd-filled-text-fieldgreater
     */
    readOnly?: boolean;
    /**
     * @description Indicates that input accepts multiple email addresses.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email#multiple
     * @default false
     * @link https://material-web.dev/components/text-field/#mdfilledtextfield-lessmd-filled-text-fieldgreater
     */
    multiple?: boolean;
    /**
     * @description Returns or sets the element's step attribute, which works with min and max to limit the increments at which a numeric or date-time value can be set.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#step
     * @default ''
     * @link https://material-web.dev/components/text-field/#mdfilledtextfield-lessmd-filled-text-fieldgreater
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
     * @link https://material-web.dev/components/text-field/#mdfilledtextfield-lessmd-filled-text-fieldgreater
     */
    type?: string;
    /**
     * @description Describes what, if any, type of autocomplete functionality the input should provide.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
     * @default ''
     * @link https://material-web.dev/components/text-field/#mdfilledtextfield-lessmd-filled-text-fieldgreater
     */
    autocomplete?: string;
    /**
     * @default undefined
     * @link https://material-web.dev/components/text-field/#mdfilledtextfield-lessmd-filled-text-fieldgreater
     */
    disabled?: boolean;
    /**
     * @default undefined
     * @link https://material-web.dev/components/text-field/#mdfilledtextfield-lessmd-filled-text-fieldgreater
     */
    name?: string;
    /**
     * @default undefined
     * @link https://material-web.dev/components/text-field/#mdfilledtextfield-lessmd-filled-text-fieldgreater
     */
    selectionDirection?: string;
    /**
     * @default undefined
     * @link https://material-web.dev/components/text-field/#mdfilledtextfield-lessmd-filled-text-fieldgreater
     */
    selectionEnd?: number;
    /**
     * @default undefined
     * @link https://material-web.dev/components/text-field/#mdfilledtextfield-lessmd-filled-text-fieldgreater
     */
    selectionStart?: number;
    /**
     * @default undefined
     * @link https://material-web.dev/components/text-field/#mdfilledtextfield-lessmd-filled-text-fieldgreater
     */
    valueAsNumber?: number;
    /**
     * @default undefined
     * @link https://material-web.dev/components/text-field/#mdfilledtextfield-lessmd-filled-text-fieldgreater
     */
    valueAsDate?: Date;
    /**
     * @description The native `select` event on [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/select_event)
     * @bubbles Yes
     * @composed No
     * @link https://material-web.dev/components/text-field/#mdfilledtextfield-lessmd-filled-text-fieldgreater
     */
    onSelect?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description The native `select` event on [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/select_event)
     * @bubbles Yes
     * @composed No
     * @link https://material-web.dev/components/text-field/#mdfilledtextfield-lessmd-filled-text-fieldgreater
     */
    onselect?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description The native `change` event on [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)
     * @bubbles Yes
     * @composed No
     * @link https://material-web.dev/components/text-field/#mdfilledtextfield-lessmd-filled-text-fieldgreater
     */
    onChange?: SolidJS.JSX.ChangeEventHandlerUnion<T, Event>;
    /**
     * @description The native `change` event on [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)
     * @bubbles Yes
     * @composed No
     * @link https://material-web.dev/components/text-field/#mdfilledtextfield-lessmd-filled-text-fieldgreater
     */
    onchange?: SolidJS.JSX.ChangeEventHandlerUnion<T, Event>;
    /**
     * @description The native `input` event on [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
     * @bubbles Yes
     * @composed Yes
     * @link https://material-web.dev/components/text-field/#mdfilledtextfield-lessmd-filled-text-fieldgreater
     */
    onInput?: SolidJS.JSX.InputEventHandlerUnion<T, InputEvent>;
    /**
     * @description The native `input` event on [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
     * @bubbles Yes
     * @composed Yes
     * @link https://material-web.dev/components/text-field/#mdfilledtextfield-lessmd-filled-text-fieldgreater
     */
    oninput?: SolidJS.JSX.InputEventHandlerUnion<T, InputEvent>;
  }
  export interface MdOutlinedTextField<T> extends SolidJS.JSX.HTMLAttributes<T> {
    /**
     * @description Gets or sets whether or not the text field is in a visually invalid state.
     *
     * This error state overrides the error state controlled by `reportValidity()`.
     * @default false
     * @link https://material-web.dev/components/text-field/#mdoutlinedtextfield-lessmd-outlined-text-fieldgreater
     */
    error?: boolean;
    /**
     * @description The error message that replaces supporting text when `error` is true. If `errorText` is an empty string, then the supporting text will continue to show.
     *
     * This error message overrides the error message displayed by `reportValidity()`.
     * @default ''
     * @link https://material-web.dev/components/text-field/#mdoutlinedtextfield-lessmd-outlined-text-fieldgreater
     */
    errorText?: string;
    /**
     * @description The floating Material label of the textfield component. It informs the user about what information is requested for a text field. It is aligned with the input text, is always visible, and it floats when focused or when text is entered into the textfield. This label also sets accessibilty labels, but the accessible label is overriden by `aria-label`.
     *
     * Learn more about floating labels from the Material Design guidelines: https://m3.material.io/components/text-fields/guidelines
     * @default ''
     * @link https://material-web.dev/components/text-field/#mdoutlinedtextfield-lessmd-outlined-text-fieldgreater
     */
    label?: string;
    /**
     * @description Disables the asterisk on the floating label, when the text field is required.
     * @default false
     * @link https://material-web.dev/components/text-field/#mdoutlinedtextfield-lessmd-outlined-text-fieldgreater
     */
    noAsterisk?: boolean;
    /**
     * @description Indicates that the user must specify a value for the input before the owning form can be submitted and will render an error state when `reportValidity()` is invoked when value is empty. Additionally the floating label will render an asterisk `"*"` when true.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required
     * @default false
     * @link https://material-web.dev/components/text-field/#mdoutlinedtextfield-lessmd-outlined-text-fieldgreater
     */
    required?: boolean;
    /**
     * @description The current value of the text field. It is always a string.
     * @default ''
     * @link https://material-web.dev/components/text-field/#mdoutlinedtextfield-lessmd-outlined-text-fieldgreater
     */
    value?: string;
    /**
     * @description An optional prefix to display before the input value.
     * @default ''
     * @link https://material-web.dev/components/text-field/#mdoutlinedtextfield-lessmd-outlined-text-fieldgreater
     */
    prefixText?: string;
    /**
     * @description An optional suffix to display after the input value.
     * @default ''
     * @link https://material-web.dev/components/text-field/#mdoutlinedtextfield-lessmd-outlined-text-fieldgreater
     */
    suffixText?: string;
    /**
     * @description Whether or not the text field has a leading icon. Used for SSR.
     * @default false
     * @link https://material-web.dev/components/text-field/#mdoutlinedtextfield-lessmd-outlined-text-fieldgreater
     */
    hasLeadingIcon?: boolean;
    /**
     * @description Whether or not the text field has a trailing icon. Used for SSR.
     * @default false
     * @link https://material-web.dev/components/text-field/#mdoutlinedtextfield-lessmd-outlined-text-fieldgreater
     */
    hasTrailingIcon?: boolean;
    /**
     * @description Conveys additional information below the text field, such as how it should be used.
     * @default ''
     * @link https://material-web.dev/components/text-field/#mdoutlinedtextfield-lessmd-outlined-text-fieldgreater
     */
    supportingText?: string;
    /**
     * @description Override the input text CSS `direction`. Useful for RTL languages that use LTR notation for fractions.
     * @default ''
     * @link https://material-web.dev/components/text-field/#mdoutlinedtextfield-lessmd-outlined-text-fieldgreater
     */
    textDirection?: string;
    /**
     * @description The number of rows to display for a `type="textarea"` text field. Defaults to 2.
     * @default 2
     * @link https://material-web.dev/components/text-field/#mdoutlinedtextfield-lessmd-outlined-text-fieldgreater
     */
    rows?: number;
    /**
     * @description The number of cols to display for a `type="textarea"` text field. Defaults to 20.
     * @default 20
     * @link https://material-web.dev/components/text-field/#mdoutlinedtextfield-lessmd-outlined-text-fieldgreater
     */
    cols?: number;
    /**
     * @default ''
     * @link https://material-web.dev/components/text-field/#mdoutlinedtextfield-lessmd-outlined-text-fieldgreater
     */
    inputMode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';
    /**
     * @description Defines the greatest value in the range of permitted values.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#max
     * @default ''
     * @link https://material-web.dev/components/text-field/#mdoutlinedtextfield-lessmd-outlined-text-fieldgreater
     */
    max?: string;
    /**
     * @description The maximum number of characters a user can enter into the text field. Set to -1 for none.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#maxlength
     * @default -1
     * @link https://material-web.dev/components/text-field/#mdoutlinedtextfield-lessmd-outlined-text-fieldgreater
     */
    maxLength?: number;
    /**
     * @description Defines the most negative value in the range of permitted values.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#min
     * @default ''
     * @link https://material-web.dev/components/text-field/#mdoutlinedtextfield-lessmd-outlined-text-fieldgreater
     */
    min?: string;
    /**
     * @description The minimum number of characters a user can enter into the text field. Set to -1 for none.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#minlength
     * @default -1
     * @link https://material-web.dev/components/text-field/#mdoutlinedtextfield-lessmd-outlined-text-fieldgreater
     */
    minLength?: number;
    /**
     * @description When true, hide the spinner for `type="number"` text fields.
     * @default false
     * @link https://material-web.dev/components/text-field/#mdoutlinedtextfield-lessmd-outlined-text-fieldgreater
     */
    noSpinner?: boolean;
    /**
     * @description A regular expression that the text field's value must match to pass constraint validation.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#pattern
     * @default ''
     * @link https://material-web.dev/components/text-field/#mdoutlinedtextfield-lessmd-outlined-text-fieldgreater
     */
    pattern?: string;
    /**
     * @description Defines the text displayed in the textfield when it has no value. Provides a brief hint to the user as to the expected type of data that should be entered into the control. Unlike `label`, the placeholder is not visible and does not float when the textfield has a value.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/placeholder
     * @default ''
     * @link https://material-web.dev/components/text-field/#mdoutlinedtextfield-lessmd-outlined-text-fieldgreater
     */
    placeholder?: string;
    /**
     * @description Indicates whether or not a user should be able to edit the text field's value.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#readonly
     * @default false
     * @link https://material-web.dev/components/text-field/#mdoutlinedtextfield-lessmd-outlined-text-fieldgreater
     */
    readOnly?: boolean;
    /**
     * @description Indicates that input accepts multiple email addresses.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email#multiple
     * @default false
     * @link https://material-web.dev/components/text-field/#mdoutlinedtextfield-lessmd-outlined-text-fieldgreater
     */
    multiple?: boolean;
    /**
     * @description Returns or sets the element's step attribute, which works with min and max to limit the increments at which a numeric or date-time value can be set.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#step
     * @default ''
     * @link https://material-web.dev/components/text-field/#mdoutlinedtextfield-lessmd-outlined-text-fieldgreater
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
     * @link https://material-web.dev/components/text-field/#mdoutlinedtextfield-lessmd-outlined-text-fieldgreater
     */
    type?: string;
    /**
     * @description Describes what, if any, type of autocomplete functionality the input should provide.
     *
     * https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete
     * @default ''
     * @link https://material-web.dev/components/text-field/#mdoutlinedtextfield-lessmd-outlined-text-fieldgreater
     */
    autocomplete?: string;
    /**
     * @default undefined
     * @link https://material-web.dev/components/text-field/#mdoutlinedtextfield-lessmd-outlined-text-fieldgreater
     */
    disabled?: boolean;
    /**
     * @default undefined
     * @link https://material-web.dev/components/text-field/#mdoutlinedtextfield-lessmd-outlined-text-fieldgreater
     */
    name?: string;
    /**
     * @default undefined
     * @link https://material-web.dev/components/text-field/#mdoutlinedtextfield-lessmd-outlined-text-fieldgreater
     */
    selectionDirection?: string;
    /**
     * @default undefined
     * @link https://material-web.dev/components/text-field/#mdoutlinedtextfield-lessmd-outlined-text-fieldgreater
     */
    selectionEnd?: number;
    /**
     * @default undefined
     * @link https://material-web.dev/components/text-field/#mdoutlinedtextfield-lessmd-outlined-text-fieldgreater
     */
    selectionStart?: number;
    /**
     * @default undefined
     * @link https://material-web.dev/components/text-field/#mdoutlinedtextfield-lessmd-outlined-text-fieldgreater
     */
    valueAsNumber?: number;
    /**
     * @default undefined
     * @link https://material-web.dev/components/text-field/#mdoutlinedtextfield-lessmd-outlined-text-fieldgreater
     */
    valueAsDate?: Date;
    /**
     * @description The native `select` event on [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/select_event)
     * @bubbles Yes
     * @composed No
     * @link https://material-web.dev/components/text-field/#mdoutlinedtextfield-lessmd-outlined-text-fieldgreater
     */
    onSelect?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description The native `select` event on [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/select_event)
     * @bubbles Yes
     * @composed No
     * @link https://material-web.dev/components/text-field/#mdoutlinedtextfield-lessmd-outlined-text-fieldgreater
     */
    onselect?: SolidJS.JSX.EventHandlerUnion<T, Event>;
    /**
     * @description The native `change` event on [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)
     * @bubbles Yes
     * @composed No
     * @link https://material-web.dev/components/text-field/#mdoutlinedtextfield-lessmd-outlined-text-fieldgreater
     */
    onChange?: SolidJS.JSX.ChangeEventHandlerUnion<T, Event>;
    /**
     * @description The native `change` event on [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event)
     * @bubbles Yes
     * @composed No
     * @link https://material-web.dev/components/text-field/#mdoutlinedtextfield-lessmd-outlined-text-fieldgreater
     */
    onchange?: SolidJS.JSX.ChangeEventHandlerUnion<T, Event>;
    /**
     * @description The native `input` event on [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
     * @bubbles Yes
     * @composed Yes
     * @link https://material-web.dev/components/text-field/#mdoutlinedtextfield-lessmd-outlined-text-fieldgreater
     */
    onInput?: SolidJS.JSX.InputEventHandlerUnion<T, InputEvent>;
    /**
     * @description The native `input` event on [`<input>`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
     * @bubbles Yes
     * @composed Yes
     * @link https://material-web.dev/components/text-field/#mdoutlinedtextfield-lessmd-outlined-text-fieldgreater
     */
    oninput?: SolidJS.JSX.InputEventHandlerUnion<T, InputEvent>;
  }
  export type MdIcon<T> = SolidJS.JSX.HTMLAttributes<T>;
  export type MdElevation<T> = SolidJS.JSX.HTMLAttributes<T>;
}

declare module 'solid-js' {
  namespace JSX {
    interface IntrinsicElements {
      /** @link https://material-web.dev/components/button/#mdelevatedbutton-lessmd-elevated-buttongreater */
      'md-elevated-button': MaterialWeb.MdElevatedButton<HTMLElement>;
      /** @link https://material-web.dev/components/button/#mdfilledbutton-lessmd-filled-buttongreater */
      'md-filled-button': MaterialWeb.MdFilledButton<HTMLElement>;
      /** @link https://material-web.dev/components/button/#mdfilledtonalbutton-lessmd-filled-tonal-buttongreater */
      'md-filled-tonal-button': MaterialWeb.MdFilledTonalButton<HTMLElement>;
      /** @link https://material-web.dev/components/button/#mdoutlinedbutton-lessmd-outlined-buttongreater */
      'md-outlined-button': MaterialWeb.MdOutlinedButton<HTMLElement>;
      /** @link https://material-web.dev/components/button/#mdtextbutton-lessmd-text-buttongreater */
      'md-text-button': MaterialWeb.MdTextButton<HTMLElement>;
      /** @link https://material-web.dev/components/checkbox/#mdcheckbox-lessmd-checkboxgreater */
      'md-checkbox': MaterialWeb.MdCheckbox<HTMLElement>;
      /** @link https://material-web.dev/components/chip/#mdchipset-lessmd-chip-setgreater */
      'md-chip-set': MaterialWeb.MdChipSet<HTMLElement>;
      /** @link https://material-web.dev/components/chip/#mdassistchip-lessmd-assist-chipgreater */
      'md-assist-chip': MaterialWeb.MdAssistChip<HTMLElement>;
      /** @link https://material-web.dev/components/chip/#mdfilterchip-lessmd-filter-chipgreater */
      'md-filter-chip': MaterialWeb.MdFilterChip<HTMLElement>;
      /** @link https://material-web.dev/components/chip/#mdinputchip-lessmd-input-chipgreater */
      'md-input-chip': MaterialWeb.MdInputChip<HTMLElement>;
      /** @link https://material-web.dev/components/chip/#mdsuggestionchip-lessmd-suggestion-chipgreater */
      'md-suggestion-chip': MaterialWeb.MdSuggestionChip<HTMLElement>;
      /** @link https://material-web.dev/components/dialog/#mddialog-lessmd-dialoggreater */
      'md-dialog': MaterialWeb.MdDialog<HTMLElement>;
      /** @link https://material-web.dev/components/divider/#mddivider-lessmd-dividergreater */
      'md-divider': MaterialWeb.MdDivider<HTMLElement>;
      /** @link https://material-web.dev/components/fab/#mdfab-lessmd-fabgreater */
      'md-fab': MaterialWeb.MdFab<HTMLElement>;
      /** @link https://material-web.dev/components/fab/#mdbrandedfab-lessmd-branded-fabgreater */
      'md-branded-fab': MaterialWeb.MdBrandedFab<HTMLElement>;
      /** @link https://material-web.dev/components/focus-ring/#mdfocusring-lessmd-focus-ringgreater */
      'md-focus-ring': MaterialWeb.MdFocusRing<HTMLElement>;
      /** @link https://material-web.dev/components/icon-button/#mdiconbutton-lessmd-icon-buttongreater */
      'md-icon-button': MaterialWeb.MdIconButton<HTMLElement>;
      /** @link https://material-web.dev/components/icon-button/#mdfillediconbutton-lessmd-filled-icon-buttongreater */
      'md-filled-icon-button': MaterialWeb.MdFilledIconButton<HTMLElement>;
      /** @link https://material-web.dev/components/icon-button/#mdfilledtonaliconbutton-lessmd-filled-tonal-icon-buttongreater */
      'md-filled-tonal-icon-button': MaterialWeb.MdFilledTonalIconButton<HTMLElement>;
      /** @link https://material-web.dev/components/icon-button/#mdoutlinediconbutton-lessmd-outlined-icon-buttongreater */
      'md-outlined-icon-button': MaterialWeb.MdOutlinedIconButton<HTMLElement>;
      /** @link https://material-web.dev/components/list/#mdlist-lessmd-listgreater */
      'md-list': MaterialWeb.MdList<HTMLElement>;
      /** @link https://material-web.dev/components/list/#mdlistitem-lessmd-list-itemgreater */
      'md-list-item': MaterialWeb.MdListItem<HTMLElement>;
      /** @link https://material-web.dev/components/menu/#mdmenu-lessmd-menugreater */
      'md-menu': MaterialWeb.MdMenu<HTMLElement>;
      /** @link https://material-web.dev/components/menu/#mdmenuitem-lessmd-menu-itemgreater */
      'md-menu-item': MaterialWeb.MdMenuItem<HTMLElement>;
      /** @link https://material-web.dev/components/menu/#mdsubmenu-lessmd-sub-menugreater */
      'md-sub-menu': MaterialWeb.MdSubMenu<HTMLElement>;
      /** @link https://material-web.dev/components/progress/#mdlinearprogress-lessmd-linear-progressgreater */
      'md-linear-progress': MaterialWeb.MdLinearProgress<HTMLElement>;
      /** @link https://material-web.dev/components/progress/#mdcircularprogress-lessmd-circular-progressgreater */
      'md-circular-progress': MaterialWeb.MdCircularProgress<HTMLElement>;
      /** @link https://material-web.dev/components/radio/#mdradio-lessmd-radiogreater */
      'md-radio': MaterialWeb.MdRadio<HTMLElement>;
      /** @link https://material-web.dev/components/ripple/#mdripple-lessmd-ripplegreater */
      'md-ripple': MaterialWeb.MdRipple<HTMLElement>;
      /** @link https://material-web.dev/components/select/#mdfilledselect-lessmd-filled-selectgreater */
      'md-filled-select': MaterialWeb.MdFilledSelect<HTMLElement>;
      /** @link https://material-web.dev/components/select/#mdoutlinedselect-lessmd-outlined-selectgreater */
      'md-outlined-select': MaterialWeb.MdOutlinedSelect<HTMLElement>;
      /** @link https://material-web.dev/components/select/#mdselectoption-lessmd-select-optiongreater */
      'md-select-option': MaterialWeb.MdSelectOption<HTMLElement>;
      /** @link https://material-web.dev/components/slider/#mdslider-lessmd-slidergreater */
      'md-slider': MaterialWeb.MdSlider<HTMLElement>;
      /** @link https://material-web.dev/components/switch/#mdswitch-lessmd-switchgreater */
      'md-switch': MaterialWeb.MdSwitch<HTMLElement>;
      /** @link https://material-web.dev/components/tabs/#mdtabs-lessmd-tabsgreater */
      'md-tabs': MaterialWeb.MdTabs<HTMLElement>;
      /** @link https://material-web.dev/components/tabs/#mdprimarytab-lessmd-primary-tabgreater */
      'md-primary-tab': MaterialWeb.MdPrimaryTab<HTMLElement>;
      /** @link https://material-web.dev/components/tabs/#mdsecondarytab-lessmd-secondary-tabgreater */
      'md-secondary-tab': MaterialWeb.MdSecondaryTab<HTMLElement>;
      /** @link https://material-web.dev/components/text-field/#mdfilledtextfield-lessmd-filled-text-fieldgreater */
      'md-filled-text-field': MaterialWeb.MdFilledTextField<HTMLElement>;
      /** @link https://material-web.dev/components/text-field/#mdoutlinedtextfield-lessmd-outlined-text-fieldgreater */
      'md-outlined-text-field': MaterialWeb.MdOutlinedTextField<HTMLElement>;
      /** @link https://material-web.dev/components/icon.md */
      'md-icon': MaterialWeb.MdIcon<HTMLElement>;
      /** @link https://material-web.dev/components/elevation.md */
      'md-elevation': MaterialWeb.MdElevation<HTMLElement>;
    }
  }
}
