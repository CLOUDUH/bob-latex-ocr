/*
 * @Author: CLOUDUH
 * @Date: 2022-01-02 16:08:09
 * @LastEditors: CLOUDUH
 * @LastEditTime: 2022-06-10 19:31:13
 * @Description: 
 */

var items = [
    ['auto', 'xxx'],
    ['zh-Hans', 'xxx'],
    ['zh-Hant', 'xxx'],
    ['en', 'xxx'],
];

var langMap = new Map(items);
var langMapReverse = new Map(items.map(([standardLang, lang]) => [lang, standardLang]));

function supportLanguages() {
    return items.map(([standardLang, lang]) => standardLang);
}

function ocr(query, completion) {

    var data = $data;
    
    query({
        'image': data.toBase64(),
        'from': 'auto',
        'detectFrom': 'en'	
    })

    completion({'result': result});
    
    // 翻译失败
    // completion({'error': error});    
}
