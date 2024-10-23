# Omniplex Learning Technical Test

## Getting Started

1. Clone this repository locally
2. You may need to install esbuild using `npm -g install esbuild`
3. Run `npm run build`

## Loading into Chrome

1. Open [chrome://extensions](chrome://extensions) in Google Chrome
2. Enable Debug Mode
3. Select **Load Unpacked**
4. Select the build directory from your cloned repository

## The Task

1. The extension should detect all links and buttons on page
2. It should pull the tag name and, if it's a link, the href attribute
3. These should be passed to the background script and stored in extension local storage against the URL they were captured from
   1. **Note:** Not local storage on the site
4. In the content script, using outlines or box shadows
   1. Highlight any buttons as blue
   2. Highlight any links as orange
5. In addition to this, the extension should monitor tab updates
   1. If the URL contains a search parameter of `reverse=true` it should reverse the highlighting (links should be blue and buttons should be orange)

## Documentation

You can use the [Google Chrome Manifest V3 documentation](https://developer.chrome.com/docs/extensions/reference/api) for assistance.
