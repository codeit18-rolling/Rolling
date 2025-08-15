function WriterPreview(item, useCard = false) {
  if (useCard) {
    return item.recentMessages;
  } else {
    return item.results;
  }
}

export default WriterPreview;
