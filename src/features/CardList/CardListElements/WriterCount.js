function WriterCount(item, useCard = false) {
  if (useCard) {
    return item.messageCount;
  } else {
    return item.count;
  }
}

export default WriterCount;
