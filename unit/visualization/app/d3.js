const data = {
  N2: [.2, .2, .2, .2, .2],
  P7: [.2, .2, .2, .2, .1, .1],
}

$(() => {
  /* Step 1:
   * 使用 css selector 加上 .select() 選取要加入資料的元件
   */

  $('button').click(e => {
    const code = $(e.target).data('code')
    /* Step 2:
     * 連結資料
     */

    /* Step 3:
     * .exit() 會過濾出沒有資料配對的物件
     * .remove() 會把這些物件刪掉
     */

    /* Step 4:
     * .enter() 為沒物件的資料建立物件
     * .append() 跟 jQuery 的 append 類似，加入 DOM 元件。
     * d3 元件裡的資料跟索引會傳進 `(v, i) => {}` 裡的 v 跟 i
     */
  })
  $('button:first-child').click()

})

// vi:et
