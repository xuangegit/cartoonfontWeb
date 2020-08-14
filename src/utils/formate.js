var format = {
  formatDate(d, format) {
    var o = {
      'M+': d.getMonth() + 1, // month
      'd+': d.getDate(), // day
      'h+': d.getHours(), // hour
      'H+': d.getHours(), // hour
      'm+': d.getMinutes(), // minute
      's+': d.getSeconds(), // second
    }
    //将连续的y转换成年的最后几位
    if (/(y+)/.test(format)) {
      format = format.replace(
        RegExp.$1,
        (d.getFullYear() + '').substr(4 - RegExp.$1.length)
      )
    }
    //连续两个前面以0补全，只有一个不补
    for (var k in o) {
      if (new RegExp('(' + k + ')').test(format)) {
        format = format.replace(
          RegExp.$1,
          RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
        )
      }
    }
    return format
  },
  formatToDatetime(d) {
    return this.formatDate(d, 'yyyy-MM-dd hh:mm:ss')
  }
}

export default format
