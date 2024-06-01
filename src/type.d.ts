import type * as marked from 'marked';

interface Extended {
  asSpace(): marked.Tokens.Space | undefined;
  isSpace(): this is marked.Tokens.Space;
  asCode(): marked.Tokens.Code | undefined;
  isCode(): this is marked.Tokens.Code;
  asHeading(): marked.Tokens.Heading | undefined;
  isHeading(): this is marked.Tokens.Heading;
  asTable(): marked.Tokens.Table | undefined;
  isTable(): this is marked.Tokens.Table;
  asHr(): marked.Tokens.Hr | undefined;
  isHr(): this is marked.Tokens.Hr;
  asBlockquote(): marked.Tokens.Blockquote | undefined;
  isBlockquote(): this is marked.Tokens.Blockquote;
  asList(): marked.Tokens.List | undefined;
  isList(): this is marked.Tokens.List;
  asListItem(): marked.Tokens.ListItem | undefined;
  isListItem(): this is marked.Tokens.ListItem;
  asParagraph(): marked.Tokens.Paragraph | undefined;
  isParagraph(): this is marked.Tokens.Paragraph;
  asHTML(): marked.Tokens.HTML | undefined;
  isHTML(): this is marked.Tokens.HTML;
  asText(): marked.Tokens.Text | undefined;
  isText(): this is marked.Tokens.Text;
  asDef(): marked.Tokens.Def | undefined;
  isDef(): this is marked.Tokens.Def;
  asEscape(): marked.Tokens.Escape | undefined;
  isEscape(): this is marked.Tokens.Escape;
  asTag(): marked.Tokens.Tag | undefined;
  isTag(): this is marked.Tokens.Tag;
  asLink(): marked.Tokens.Link | undefined;
  isLink(): this is marked.Tokens.Link;
  asImage(): marked.Tokens.Image | undefined;
  isImage(): this is marked.Tokens.Image;
  asStrong(): marked.Tokens.Strong | undefined;
  isStrong(): this is marked.Tokens.Strong;
  asEm(): marked.Tokens.Em | undefined;
  isEm(): this is marked.Tokens.Em;
  asCodespan(): marked.Tokens.Codespan | undefined;
  isCodespan(): this is marked.Tokens.Codespan;
  asBr(): marked.Tokens.Br | undefined;
  isBr(): this is marked.Tokens.Br;
  asDel(): marked.Tokens.Del | undefined;
  isDel(): this is marked.Tokens.Del;
}

declare module 'marked' {
  export namespace Tokens {
    interface Space extends Extended {}
    interface Code extends Extended {}
    interface Heading extends Extended {}
    interface Table extends Extended {}
    interface Hr extends Extended {}
    interface Blockquote extends Extended {}
    interface List extends Extended {}
    interface ListItem extends Extended {}
    interface Paragraph extends Extended {}
    interface HTML extends Extended {}
    interface Text extends Extended {}
    interface Def extends Extended {}
    interface Escape extends Extended {}
    interface Tag extends Extended {}
    interface Link extends Extended {}
    interface Image extends Extended {}
    interface Strong extends Extended {}
    interface Em extends Extended {}
    interface Codespan extends Extended {}
    interface Br extends Extended {}
    interface Del extends Extended {}
    interface Generic extends Extended {}
  }
}
