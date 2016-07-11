## Mapping between Code Page and Encoding names
### Usage
```javascript
var encoding = require('codepage-encoding');

encoding.from(65001);
//=> "utf-8"

encoding.to("utf-8");
//=> "65001"
```