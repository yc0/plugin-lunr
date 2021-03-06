# lunr

This plugin provides a backend for the [search](https://github.com/GitbookIO/plugin-search) plugin.

This plugin is a modified default plugin. It supplies chinese segmentation and highlight features in this plugin.

本功能提供簡易的中文搜尋功能，基於原生的lunr搜尋引擎增加高亮和中文索引。

### Demo preview

![](https://raw.githubusercontent.com/yc0/plugin-lunr/master/demo/demo.gif)

### Usage

Put this in your book.json, and it would automatically replace your default lunr search engine.

```js
{
    "plugins": ["lunr@git+https://github.com/yc0/plugin-lunr.git"]
}
```
```bash
root@1f771d0d716c#gitbook install
```
### Limitations

Lunr can't index a huge book, by default the index size is limited at ~100ko.

You can change this limit by settings the configuration `maxIndexSize`:

```js
{
    "pluginsConfig": {
        "lunr": {
            "maxIndexSize": 200000
        }
    }
}
```

### Adding keywords to a page

You can specify explicit keywords for any page. When searching for these keywords, the page will rank higher in the results.

```md
---
search:
    keywords: ['keyword1', 'keyword2', 'etc.']

---

# My Page

This page will rank better if we search for 'keyword1'.
```

### Disabling indexing of a page

You can disable the indexing of a specific page by adding a YAML header to the page:

```md
---
search: false
---

# My Page

This page is not indexed in Lunr.
```

### Ignoring special characters

By default, special characters will be taken into account, to allow special searches like "C++" or "#word". You can disable this if your text is essentially English prose with the `ignoreSpecialCharacters` option:


```js
{
    "pluginsConfig": {
        "lunr": {
            "ignoreSpecialCharacters": true
        }
    }
}
```
