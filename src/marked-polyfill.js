const d = (n, f) => {
  Object.defineProperty(Object.prototype, n, {
    enumerable: false,
    configurable: false,
    writable: false,
    value: f,
  });
};

d('isSpace', function () {
  return this?.type === 'space';
});
d('asSpace', function () {
  return this.isSpace() ? this : undefined;
});
d('isCode', function () {
  return this?.type === 'code';
});
d('asCode', function () {
  return this.isCode() ? this : undefined;
});
d('isHeading', function () {
  return this?.type === 'heading';
});
d('asHeading', function () {
  return this.isHeading() ? this : undefined;
});
d('isTable', function () {
  return this?.type === 'table';
});
d('asTable', function () {
  return this.isTable() ? this : undefined;
});
d('isHr', function () {
  return this?.type === 'hr';
});
d('asHr', function () {
  return this.isHr() ? this : undefined;
});
d('isBlockquote', function () {
  return this?.type === 'blockquote';
});
d('asBlockquote', function () {
  return this.isBlockquote() ? this : undefined;
});
d('isList', function () {
  return this?.type === 'list';
});
d('asList', function () {
  return this.isList() ? this : undefined;
});
d('isListItem', function () {
  return this?.type === 'list_item';
});
d('asListItem', function () {
  return this.isListItem() ? this : undefined;
});
d('isParagraph', function () {
  return this?.type === 'paragraph';
});
d('asParagraph', function () {
  return this.isParagraph() ? this : undefined;
});
d('isHTML', function () {
  return this?.type === 'html' && typeof this?.inRawBlock !== 'boolean';
});
d('asHTML', function () {
  return this.isHTML() ? this : undefined;
});
d('isText', function () {
  return this?.type === 'text' && typeof this?.inRawBlock !== 'boolean';
});
d('asText', function () {
  return this.isText() ? this : undefined;
});
d('isDef', function () {
  return this?.type === 'def';
});
d('asDef', function () {
  return this.isDef() ? this : undefined;
});
d('isEscape', function () {
  return this?.type === 'escape';
});
d('asEscape', function () {
  return this.isEscape() ? this : undefined;
});
d('isTag', function () {
  return (this?.type === 'text' || this?.type === 'html') && typeof this?.inRawBlock === 'boolean';
});
d('asTag', function () {
  return this.isTag() ? this : undefined;
});
d('isLink', function () {
  return this?.type === 'link';
});
d('asLink', function () {
  return this.isLink() ? this : undefined;
});
d('isImage', function () {
  return this?.type === 'image';
});
d('asImage', function () {
  return this.isImage() ? this : undefined;
});
d('isStrong', function () {
  return this?.type === 'strong';
});
d('asStrong', function () {
  return this.isStrong() ? this : undefined;
});
d('isEm', function () {
  return this?.type === 'em';
});
d('asEm', function () {
  return this.isEm() ? this : undefined;
});
d('isCodespan', function () {
  return this?.type === 'codespan';
});
d('asCodespan', function () {
  return this.isCodespan() ? this : undefined;
});
d('isBr', function () {
  return this?.type === 'br';
});
d('asBr', function () {
  return this.isBr() ? this : undefined;
});
d('isDel', function () {
  return this?.type === 'del';
});
d('asDel', function () {
  return this.isDel() ? this : undefined;
});
