// jscs:disable disallowSpaceAfterObjectKeys

const xs = 600;
const sm = 960;
const md = 1280;
const lg = 1920;

let maxTemplate = (min, max) => `(min-width: ${min}px) and (max-width: ${max - 1}px)`;
let minTemplate = (min) => `(min-width: ${min}px)`;

export default {
  'xs'    : maxTemplate(0, xs),
  'gt-xs' : minTemplate(xs),
  'sm'    : maxTemplate(xs, sm),
  'gt-sm' : minTemplate(sm),
  'md'    : maxTemplate(sm, md),
  'gt-md' : minTemplate(md),
  'lg'    : maxTemplate(md, lg),
  'gt-lg' : minTemplate(lg),
  'xl'    : minTemplate(lg)
};
