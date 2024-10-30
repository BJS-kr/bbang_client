type ProtoMessageBaseMethods =
  | 'create'
  | 'encode'
  | 'encodeDelimited'
  | 'decode'
  | 'decodeDelimited'
  | 'verify'
  | 'fromObject'
  | 'toObject'
  | 'getTypeUrl'
  | 'toJSON';

export type MessageProps<T = Record<string, any>> = Omit<T, ProtoMessageBaseMethods>;
