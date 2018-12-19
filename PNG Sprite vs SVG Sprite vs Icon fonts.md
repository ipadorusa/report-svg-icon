# PNG Sprite vs SVG Sprite vs Icon fonts

## 1. PNG Sprite

- raster image
- decompressed 를 해야한다.

## 2. SVG Sprite

- vetor image
- XML TEXT로 읽을수 있다.

## 3. Icon font

- ie8에서도 지원
- svg보다는 낮은 accessibility 
- Icon font 가 싫다고 하는 사람들은 핵 처럼 느껴져서 시맨틱하지 않아 거부한다.



## Browser support

|                 | SVGs                   | Icon Font                              |
| --------------- | ---------------------- | -------------------------------------- |
| Browser support | IE9+. Polyfill for IE8 | IE8+ out of the box. Even IE6 possible |



## Accessibility & Semantics

|               | SVGs                                                | Icon Font                    |
| ------------- | --------------------------------------------------- | ---------------------------- |
| Accessibility | <title> & <desc> combined with aria-labelledby attr | aria-label attr & title attr |

Winner: SVGs

참고(인용) 자료 : https://bulldogjob.com/articles/626-svgs-vs-icon-fonts-the-battle-without-resolution