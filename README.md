# diff-json-keys

[![Lint](https://github.com/emirdeliz/diff-json-keys/actions/workflows/lint.yml/badge.svg)](https://github.com/emirdeliz/diff-json-keys/actions/workflows/lint.yml)
[![Test](https://github.com/emirdeliz/diff-json-keys/actions/workflows/test.yml/badge.svg)](https://github.com/emirdeliz/diff-json-keys/actions/workflows/test.yml)

This is a simple lib to compare diff between json keys and get the output.

## How to use?

```javascript
import { runDiff } from "diff-json-keys";
const diff = runDiff(json1, json2);
```

