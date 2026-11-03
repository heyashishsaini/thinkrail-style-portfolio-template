---
title: A simple checklist for responsive UI
slug: responsive-ui-checklist
date: 2026-09-15
author: ashish-kumar
excerpt: The responsive details I check before considering a page ready to ship.
tags:
  - css
  - accessibility
---

Responsive design is more than shrinking a desktop layout. A small screen changes how people read, navigate, and act.

## Check the layout, not only the viewport

Test narrow screens for hidden grid tracks, fixed-width elements, clipped tabs, and unintentional horizontal scrolling. A layout can look fine at one width and still fail in between breakpoints.

## Keep touch targets comfortable

Buttons, links, and controls need enough room to be tapped without precision. Make focus states visible for keyboard users too.

## Respect user preferences

Support reduced motion, readable contrast, and scalable text. These are small implementation details with a large impact on usability.
