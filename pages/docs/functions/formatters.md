# Formatters

The formatters module provides utility functions for formatting various types of data in the application.

## Import

```tsx
import { formatNumber, formatQueryParams, formatFollowersYouKnowText } from 'ethereum-identity-kit'

// For server side usage
import { formatNumber, formatQueryParams, formatFollowersYouKnowText } from 'ethereum-identity-kit/utils'
```

## Functions

### formatNumber

Formats a number to include separators ("," for thousands, "." for decimals)

```tsx
const formattedNumber = formatNumber(1234.56) // "1,234.56" (en-US)
```

#### Parameters

| Parameter | Type   | Description          |
| --------- | ------ | -------------------- |
| `number`  | number | The number to format |

### formatFollowersYouKnowText

Formats the text shown in the common followers component next to the avatars.

```tsx
const text = formatFollowersYouKnowText(3) // "1 other you know follows them"
```

#### Parameters

| Parameter      | Type   | Description                    |
| -------------- | ------ | ------------------------------ |
| `resultLength` | number | The number of common followers |

#### Return Values

| Result Length | Return Value                      |
| ------------- | --------------------------------- |
| 0             | "No common followers"             |
| 1             | " follows them"                   |
| 2             | " follow them"                    |
| 3             | "1 other you know follows them"   |
| >3            | "{n} others you know follow them" |

### formatQueryParams

Formats query parameters for API calls.

```tsx
const queryString = formatQueryParams({
  address: '0x...',
  tags: ['tag1', 'tag2'],
  limit: 10,
}) // "address=0x...&tags=tag1,tag2&limit=10"
```

#### Parameters

| Parameter | Type                                                              | Description                        |
| --------- | ----------------------------------------------------------------- | ---------------------------------- |
| `inputs`  | Record<string, string \| number \| string[] \| null \| undefined> | Object containing query parameters |

#### Return Value

Returns a URL-encoded query string with all non-null/undefined parameters.
