export type MessageProps<T> = Omit<
  T,
  'create' | 'encode' | 'encodeDelimited' | 'decode' | 'decodeDelimited' | 'verify' | 'fromObject' | 'toObject' | 'getTypeUrl' | 'toJSON'
>;
