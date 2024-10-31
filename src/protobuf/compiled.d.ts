import * as $protobuf from "protobufjs";
import Long = require("long");
/** Properties of a RoomData. */
export interface IRoomData {

    /** RoomData id */
    id?: (number|null);

    /** RoomData ownerId */
    ownerId?: (string|null);

    /** RoomData name */
    name?: (string|null);

    /** RoomData maxUserNum */
    maxUserNum?: (number|null);

    /** RoomData state */
    state?: (number|null);

    /** RoomData users */
    users?: (IUserData[]|null);
}

/** Represents a RoomData. */
export class RoomData implements IRoomData {

    /**
     * Constructs a new RoomData.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRoomData);

    /** RoomData id. */
    public id: number;

    /** RoomData ownerId. */
    public ownerId: string;

    /** RoomData name. */
    public name: string;

    /** RoomData maxUserNum. */
    public maxUserNum: number;

    /** RoomData state. */
    public state: number;

    /** RoomData users. */
    public users: IUserData[];

    /**
     * Creates a new RoomData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RoomData instance
     */
    public static create(properties?: IRoomData): RoomData;

    /**
     * Encodes the specified RoomData message. Does not implicitly {@link RoomData.verify|verify} messages.
     * @param message RoomData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRoomData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RoomData message, length delimited. Does not implicitly {@link RoomData.verify|verify} messages.
     * @param message RoomData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRoomData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RoomData message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RoomData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RoomData;

    /**
     * Decodes a RoomData message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RoomData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RoomData;

    /**
     * Verifies a RoomData message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a RoomData message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RoomData
     */
    public static fromObject(object: { [k: string]: any }): RoomData;

    /**
     * Creates a plain object from a RoomData message. Also converts values to other types if specified.
     * @param message RoomData
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RoomData, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RoomData to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for RoomData
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a UserData. */
export interface IUserData {

    /** UserData id */
    id?: (string|null);

    /** UserData nickname */
    nickname?: (string|null);

    /** UserData characterData */
    characterData?: (ICharacterData|null);
}

/** Represents a UserData. */
export class UserData implements IUserData {

    /**
     * Constructs a new UserData.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserData);

    /** UserData id. */
    public id: string;

    /** UserData nickname. */
    public nickname: string;

    /** UserData characterData. */
    public characterData?: (ICharacterData|null);

    /**
     * Creates a new UserData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserData instance
     */
    public static create(properties?: IUserData): UserData;

    /**
     * Encodes the specified UserData message. Does not implicitly {@link UserData.verify|verify} messages.
     * @param message UserData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UserData message, length delimited. Does not implicitly {@link UserData.verify|verify} messages.
     * @param message UserData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUserData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserData message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserData;

    /**
     * Decodes a UserData message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UserData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserData;

    /**
     * Verifies a UserData message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a UserData message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UserData
     */
    public static fromObject(object: { [k: string]: any }): UserData;

    /**
     * Creates a plain object from a UserData message. Also converts values to other types if specified.
     * @param message UserData
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UserData, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UserData to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for UserData
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a CharacterData. */
export interface ICharacterData {

    /** CharacterData characterType */
    characterType?: (number|null);

    /** CharacterData roleType */
    roleType?: (number|null);

    /** CharacterData hp */
    hp?: (number|null);

    /** CharacterData weapon */
    weapon?: (number|null);

    /** CharacterData state */
    state?: (ICharacterStateData|null);

    /** CharacterData equips */
    equips?: (number[]|null);

    /** CharacterData debuffs */
    debuffs?: (number[]|null);

    /** CharacterData handCards */
    handCards?: (ICardData[]|null);
}

/** Represents a CharacterData. */
export class CharacterData implements ICharacterData {

    /**
     * Constructs a new CharacterData.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICharacterData);

    /** CharacterData characterType. */
    public characterType: number;

    /** CharacterData roleType. */
    public roleType: number;

    /** CharacterData hp. */
    public hp: number;

    /** CharacterData weapon. */
    public weapon: number;

    /** CharacterData state. */
    public state?: (ICharacterStateData|null);

    /** CharacterData equips. */
    public equips: number[];

    /** CharacterData debuffs. */
    public debuffs: number[];

    /** CharacterData handCards. */
    public handCards: ICardData[];

    /**
     * Creates a new CharacterData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CharacterData instance
     */
    public static create(properties?: ICharacterData): CharacterData;

    /**
     * Encodes the specified CharacterData message. Does not implicitly {@link CharacterData.verify|verify} messages.
     * @param message CharacterData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICharacterData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CharacterData message, length delimited. Does not implicitly {@link CharacterData.verify|verify} messages.
     * @param message CharacterData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICharacterData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CharacterData message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CharacterData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CharacterData;

    /**
     * Decodes a CharacterData message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CharacterData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CharacterData;

    /**
     * Verifies a CharacterData message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CharacterData message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CharacterData
     */
    public static fromObject(object: { [k: string]: any }): CharacterData;

    /**
     * Creates a plain object from a CharacterData message. Also converts values to other types if specified.
     * @param message CharacterData
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CharacterData, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CharacterData to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CharacterData
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a UserPositionData. */
export interface IUserPositionData {

    /** UserPositionData id */
    id?: (string|null);

    /** UserPositionData x */
    x?: (number|null);

    /** UserPositionData y */
    y?: (number|null);
}

/** Represents a UserPositionData. */
export class UserPositionData implements IUserPositionData {

    /**
     * Constructs a new UserPositionData.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserPositionData);

    /** UserPositionData id. */
    public id: string;

    /** UserPositionData x. */
    public x: number;

    /** UserPositionData y. */
    public y: number;

    /**
     * Creates a new UserPositionData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserPositionData instance
     */
    public static create(properties?: IUserPositionData): UserPositionData;

    /**
     * Encodes the specified UserPositionData message. Does not implicitly {@link UserPositionData.verify|verify} messages.
     * @param message UserPositionData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserPositionData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UserPositionData message, length delimited. Does not implicitly {@link UserPositionData.verify|verify} messages.
     * @param message UserPositionData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUserPositionData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserPositionData message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserPositionData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserPositionData;

    /**
     * Decodes a UserPositionData message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UserPositionData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserPositionData;

    /**
     * Verifies a UserPositionData message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a UserPositionData message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UserPositionData
     */
    public static fromObject(object: { [k: string]: any }): UserPositionData;

    /**
     * Creates a plain object from a UserPositionData message. Also converts values to other types if specified.
     * @param message UserPositionData
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UserPositionData, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UserPositionData to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for UserPositionData
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a CardData. */
export interface ICardData {

    /** CardData type */
    type?: (number|null);

    /** CardData count */
    count?: (number|null);
}

/** Represents a CardData. */
export class CardData implements ICardData {

    /**
     * Constructs a new CardData.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICardData);

    /** CardData type. */
    public type: number;

    /** CardData count. */
    public count: number;

    /**
     * Creates a new CardData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CardData instance
     */
    public static create(properties?: ICardData): CardData;

    /**
     * Encodes the specified CardData message. Does not implicitly {@link CardData.verify|verify} messages.
     * @param message CardData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICardData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CardData message, length delimited. Does not implicitly {@link CardData.verify|verify} messages.
     * @param message CardData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICardData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CardData message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CardData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CardData;

    /**
     * Decodes a CardData message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CardData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CardData;

    /**
     * Verifies a CardData message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CardData message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CardData
     */
    public static fromObject(object: { [k: string]: any }): CardData;

    /**
     * Creates a plain object from a CardData message. Also converts values to other types if specified.
     * @param message CardData
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CardData, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CardData to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CardData
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a GameStateData. */
export interface IGameStateData {

    /** GameStateData phaseType */
    phaseType?: (number|null);

    /** GameStateData nextPhaseAt */
    nextPhaseAt?: (number|Long|null);
}

/** Represents a GameStateData. */
export class GameStateData implements IGameStateData {

    /**
     * Constructs a new GameStateData.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGameStateData);

    /** GameStateData phaseType. */
    public phaseType: number;

    /** GameStateData nextPhaseAt. */
    public nextPhaseAt: (number|Long);

    /**
     * Creates a new GameStateData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GameStateData instance
     */
    public static create(properties?: IGameStateData): GameStateData;

    /**
     * Encodes the specified GameStateData message. Does not implicitly {@link GameStateData.verify|verify} messages.
     * @param message GameStateData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGameStateData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GameStateData message, length delimited. Does not implicitly {@link GameStateData.verify|verify} messages.
     * @param message GameStateData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGameStateData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GameStateData message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GameStateData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GameStateData;

    /**
     * Decodes a GameStateData message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GameStateData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GameStateData;

    /**
     * Verifies a GameStateData message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GameStateData message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GameStateData
     */
    public static fromObject(object: { [k: string]: any }): GameStateData;

    /**
     * Creates a plain object from a GameStateData message. Also converts values to other types if specified.
     * @param message GameStateData
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GameStateData, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GameStateData to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for GameStateData
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a CharacterStateData. */
export interface ICharacterStateData {

    /** CharacterStateData state */
    state?: (number|null);

    /** CharacterStateData nextState */
    nextState?: (number|null);

    /** CharacterStateData nextStateAt */
    nextStateAt?: (number|Long|null);
}

/** Represents a CharacterStateData. */
export class CharacterStateData implements ICharacterStateData {

    /**
     * Constructs a new CharacterStateData.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICharacterStateData);

    /** CharacterStateData state. */
    public state: number;

    /** CharacterStateData nextState. */
    public nextState: number;

    /** CharacterStateData nextStateAt. */
    public nextStateAt: (number|Long);

    /**
     * Creates a new CharacterStateData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CharacterStateData instance
     */
    public static create(properties?: ICharacterStateData): CharacterStateData;

    /**
     * Encodes the specified CharacterStateData message. Does not implicitly {@link CharacterStateData.verify|verify} messages.
     * @param message CharacterStateData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICharacterStateData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CharacterStateData message, length delimited. Does not implicitly {@link CharacterStateData.verify|verify} messages.
     * @param message CharacterStateData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICharacterStateData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CharacterStateData message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CharacterStateData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CharacterStateData;

    /**
     * Decodes a CharacterStateData message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CharacterStateData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CharacterStateData;

    /**
     * Verifies a CharacterStateData message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CharacterStateData message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CharacterStateData
     */
    public static fromObject(object: { [k: string]: any }): CharacterStateData;

    /**
     * Creates a plain object from a CharacterStateData message. Also converts values to other types if specified.
     * @param message CharacterStateData
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CharacterStateData, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CharacterStateData to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CharacterStateData
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a C2SRegisterRequest. */
export interface IC2SRegisterRequest {

    /** C2SRegisterRequest id */
    id?: (string|null);

    /** C2SRegisterRequest password */
    password?: (string|null);

    /** C2SRegisterRequest email */
    email?: (string|null);
}

/** Represents a C2SRegisterRequest. */
export class C2SRegisterRequest implements IC2SRegisterRequest {

    /**
     * Constructs a new C2SRegisterRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IC2SRegisterRequest);

    /** C2SRegisterRequest id. */
    public id: string;

    /** C2SRegisterRequest password. */
    public password: string;

    /** C2SRegisterRequest email. */
    public email: string;

    /**
     * Creates a new C2SRegisterRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns C2SRegisterRequest instance
     */
    public static create(properties?: IC2SRegisterRequest): C2SRegisterRequest;

    /**
     * Encodes the specified C2SRegisterRequest message. Does not implicitly {@link C2SRegisterRequest.verify|verify} messages.
     * @param message C2SRegisterRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IC2SRegisterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified C2SRegisterRequest message, length delimited. Does not implicitly {@link C2SRegisterRequest.verify|verify} messages.
     * @param message C2SRegisterRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IC2SRegisterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a C2SRegisterRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns C2SRegisterRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2SRegisterRequest;

    /**
     * Decodes a C2SRegisterRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns C2SRegisterRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2SRegisterRequest;

    /**
     * Verifies a C2SRegisterRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a C2SRegisterRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns C2SRegisterRequest
     */
    public static fromObject(object: { [k: string]: any }): C2SRegisterRequest;

    /**
     * Creates a plain object from a C2SRegisterRequest message. Also converts values to other types if specified.
     * @param message C2SRegisterRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: C2SRegisterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this C2SRegisterRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for C2SRegisterRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a S2CRegisterResponse. */
export interface IS2CRegisterResponse {

    /** S2CRegisterResponse success */
    success?: (boolean|null);

    /** S2CRegisterResponse message */
    message?: (string|null);

    /** S2CRegisterResponse failCode */
    failCode?: (GlobalFailCode|null);
}

/** Represents a S2CRegisterResponse. */
export class S2CRegisterResponse implements IS2CRegisterResponse {

    /**
     * Constructs a new S2CRegisterResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IS2CRegisterResponse);

    /** S2CRegisterResponse success. */
    public success: boolean;

    /** S2CRegisterResponse message. */
    public message: string;

    /** S2CRegisterResponse failCode. */
    public failCode: GlobalFailCode;

    /**
     * Creates a new S2CRegisterResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns S2CRegisterResponse instance
     */
    public static create(properties?: IS2CRegisterResponse): S2CRegisterResponse;

    /**
     * Encodes the specified S2CRegisterResponse message. Does not implicitly {@link S2CRegisterResponse.verify|verify} messages.
     * @param message S2CRegisterResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IS2CRegisterResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified S2CRegisterResponse message, length delimited. Does not implicitly {@link S2CRegisterResponse.verify|verify} messages.
     * @param message S2CRegisterResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IS2CRegisterResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a S2CRegisterResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns S2CRegisterResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2CRegisterResponse;

    /**
     * Decodes a S2CRegisterResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns S2CRegisterResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2CRegisterResponse;

    /**
     * Verifies a S2CRegisterResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a S2CRegisterResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns S2CRegisterResponse
     */
    public static fromObject(object: { [k: string]: any }): S2CRegisterResponse;

    /**
     * Creates a plain object from a S2CRegisterResponse message. Also converts values to other types if specified.
     * @param message S2CRegisterResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: S2CRegisterResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this S2CRegisterResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for S2CRegisterResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a C2SLoginRequest. */
export interface IC2SLoginRequest {

    /** C2SLoginRequest id */
    id?: (string|null);

    /** C2SLoginRequest password */
    password?: (string|null);
}

/** Represents a C2SLoginRequest. */
export class C2SLoginRequest implements IC2SLoginRequest {

    /**
     * Constructs a new C2SLoginRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IC2SLoginRequest);

    /** C2SLoginRequest id. */
    public id: string;

    /** C2SLoginRequest password. */
    public password: string;

    /**
     * Creates a new C2SLoginRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns C2SLoginRequest instance
     */
    public static create(properties?: IC2SLoginRequest): C2SLoginRequest;

    /**
     * Encodes the specified C2SLoginRequest message. Does not implicitly {@link C2SLoginRequest.verify|verify} messages.
     * @param message C2SLoginRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IC2SLoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified C2SLoginRequest message, length delimited. Does not implicitly {@link C2SLoginRequest.verify|verify} messages.
     * @param message C2SLoginRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IC2SLoginRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a C2SLoginRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns C2SLoginRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2SLoginRequest;

    /**
     * Decodes a C2SLoginRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns C2SLoginRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2SLoginRequest;

    /**
     * Verifies a C2SLoginRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a C2SLoginRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns C2SLoginRequest
     */
    public static fromObject(object: { [k: string]: any }): C2SLoginRequest;

    /**
     * Creates a plain object from a C2SLoginRequest message. Also converts values to other types if specified.
     * @param message C2SLoginRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: C2SLoginRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this C2SLoginRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for C2SLoginRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a S2CLoginResponse. */
export interface IS2CLoginResponse {

    /** S2CLoginResponse success */
    success?: (boolean|null);

    /** S2CLoginResponse message */
    message?: (string|null);

    /** S2CLoginResponse token */
    token?: (string|null);

    /** S2CLoginResponse myInfo */
    myInfo?: (IUserData|null);

    /** S2CLoginResponse failCode */
    failCode?: (GlobalFailCode|null);
}

/** Represents a S2CLoginResponse. */
export class S2CLoginResponse implements IS2CLoginResponse {

    /**
     * Constructs a new S2CLoginResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IS2CLoginResponse);

    /** S2CLoginResponse success. */
    public success: boolean;

    /** S2CLoginResponse message. */
    public message: string;

    /** S2CLoginResponse token. */
    public token: string;

    /** S2CLoginResponse myInfo. */
    public myInfo?: (IUserData|null);

    /** S2CLoginResponse failCode. */
    public failCode: GlobalFailCode;

    /**
     * Creates a new S2CLoginResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns S2CLoginResponse instance
     */
    public static create(properties?: IS2CLoginResponse): S2CLoginResponse;

    /**
     * Encodes the specified S2CLoginResponse message. Does not implicitly {@link S2CLoginResponse.verify|verify} messages.
     * @param message S2CLoginResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IS2CLoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified S2CLoginResponse message, length delimited. Does not implicitly {@link S2CLoginResponse.verify|verify} messages.
     * @param message S2CLoginResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IS2CLoginResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a S2CLoginResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns S2CLoginResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2CLoginResponse;

    /**
     * Decodes a S2CLoginResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns S2CLoginResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2CLoginResponse;

    /**
     * Verifies a S2CLoginResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a S2CLoginResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns S2CLoginResponse
     */
    public static fromObject(object: { [k: string]: any }): S2CLoginResponse;

    /**
     * Creates a plain object from a S2CLoginResponse message. Also converts values to other types if specified.
     * @param message S2CLoginResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: S2CLoginResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this S2CLoginResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for S2CLoginResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a C2SCreateRoomRequest. */
export interface IC2SCreateRoomRequest {

    /** C2SCreateRoomRequest name */
    name?: (string|null);

    /** C2SCreateRoomRequest maxUserNum */
    maxUserNum?: (number|null);
}

/** Represents a C2SCreateRoomRequest. */
export class C2SCreateRoomRequest implements IC2SCreateRoomRequest {

    /**
     * Constructs a new C2SCreateRoomRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IC2SCreateRoomRequest);

    /** C2SCreateRoomRequest name. */
    public name: string;

    /** C2SCreateRoomRequest maxUserNum. */
    public maxUserNum: number;

    /**
     * Creates a new C2SCreateRoomRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns C2SCreateRoomRequest instance
     */
    public static create(properties?: IC2SCreateRoomRequest): C2SCreateRoomRequest;

    /**
     * Encodes the specified C2SCreateRoomRequest message. Does not implicitly {@link C2SCreateRoomRequest.verify|verify} messages.
     * @param message C2SCreateRoomRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IC2SCreateRoomRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified C2SCreateRoomRequest message, length delimited. Does not implicitly {@link C2SCreateRoomRequest.verify|verify} messages.
     * @param message C2SCreateRoomRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IC2SCreateRoomRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a C2SCreateRoomRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns C2SCreateRoomRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2SCreateRoomRequest;

    /**
     * Decodes a C2SCreateRoomRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns C2SCreateRoomRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2SCreateRoomRequest;

    /**
     * Verifies a C2SCreateRoomRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a C2SCreateRoomRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns C2SCreateRoomRequest
     */
    public static fromObject(object: { [k: string]: any }): C2SCreateRoomRequest;

    /**
     * Creates a plain object from a C2SCreateRoomRequest message. Also converts values to other types if specified.
     * @param message C2SCreateRoomRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: C2SCreateRoomRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this C2SCreateRoomRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for C2SCreateRoomRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a S2CCreateRoomResponse. */
export interface IS2CCreateRoomResponse {

    /** S2CCreateRoomResponse success */
    success?: (boolean|null);

    /** S2CCreateRoomResponse room */
    room?: (IRoomData|null);

    /** S2CCreateRoomResponse failCode */
    failCode?: (GlobalFailCode|null);
}

/** Represents a S2CCreateRoomResponse. */
export class S2CCreateRoomResponse implements IS2CCreateRoomResponse {

    /**
     * Constructs a new S2CCreateRoomResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IS2CCreateRoomResponse);

    /** S2CCreateRoomResponse success. */
    public success: boolean;

    /** S2CCreateRoomResponse room. */
    public room?: (IRoomData|null);

    /** S2CCreateRoomResponse failCode. */
    public failCode: GlobalFailCode;

    /**
     * Creates a new S2CCreateRoomResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns S2CCreateRoomResponse instance
     */
    public static create(properties?: IS2CCreateRoomResponse): S2CCreateRoomResponse;

    /**
     * Encodes the specified S2CCreateRoomResponse message. Does not implicitly {@link S2CCreateRoomResponse.verify|verify} messages.
     * @param message S2CCreateRoomResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IS2CCreateRoomResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified S2CCreateRoomResponse message, length delimited. Does not implicitly {@link S2CCreateRoomResponse.verify|verify} messages.
     * @param message S2CCreateRoomResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IS2CCreateRoomResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a S2CCreateRoomResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns S2CCreateRoomResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2CCreateRoomResponse;

    /**
     * Decodes a S2CCreateRoomResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns S2CCreateRoomResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2CCreateRoomResponse;

    /**
     * Verifies a S2CCreateRoomResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a S2CCreateRoomResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns S2CCreateRoomResponse
     */
    public static fromObject(object: { [k: string]: any }): S2CCreateRoomResponse;

    /**
     * Creates a plain object from a S2CCreateRoomResponse message. Also converts values to other types if specified.
     * @param message S2CCreateRoomResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: S2CCreateRoomResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this S2CCreateRoomResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for S2CCreateRoomResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a C2SGetRoomListRequest. */
export interface IC2SGetRoomListRequest {
}

/** Represents a C2SGetRoomListRequest. */
export class C2SGetRoomListRequest implements IC2SGetRoomListRequest {

    /**
     * Constructs a new C2SGetRoomListRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IC2SGetRoomListRequest);

    /**
     * Creates a new C2SGetRoomListRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns C2SGetRoomListRequest instance
     */
    public static create(properties?: IC2SGetRoomListRequest): C2SGetRoomListRequest;

    /**
     * Encodes the specified C2SGetRoomListRequest message. Does not implicitly {@link C2SGetRoomListRequest.verify|verify} messages.
     * @param message C2SGetRoomListRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IC2SGetRoomListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified C2SGetRoomListRequest message, length delimited. Does not implicitly {@link C2SGetRoomListRequest.verify|verify} messages.
     * @param message C2SGetRoomListRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IC2SGetRoomListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a C2SGetRoomListRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns C2SGetRoomListRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2SGetRoomListRequest;

    /**
     * Decodes a C2SGetRoomListRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns C2SGetRoomListRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2SGetRoomListRequest;

    /**
     * Verifies a C2SGetRoomListRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a C2SGetRoomListRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns C2SGetRoomListRequest
     */
    public static fromObject(object: { [k: string]: any }): C2SGetRoomListRequest;

    /**
     * Creates a plain object from a C2SGetRoomListRequest message. Also converts values to other types if specified.
     * @param message C2SGetRoomListRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: C2SGetRoomListRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this C2SGetRoomListRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for C2SGetRoomListRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a S2CGetRoomListResponse. */
export interface IS2CGetRoomListResponse {

    /** S2CGetRoomListResponse rooms */
    rooms?: (IRoomData[]|null);
}

/** Represents a S2CGetRoomListResponse. */
export class S2CGetRoomListResponse implements IS2CGetRoomListResponse {

    /**
     * Constructs a new S2CGetRoomListResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IS2CGetRoomListResponse);

    /** S2CGetRoomListResponse rooms. */
    public rooms: IRoomData[];

    /**
     * Creates a new S2CGetRoomListResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns S2CGetRoomListResponse instance
     */
    public static create(properties?: IS2CGetRoomListResponse): S2CGetRoomListResponse;

    /**
     * Encodes the specified S2CGetRoomListResponse message. Does not implicitly {@link S2CGetRoomListResponse.verify|verify} messages.
     * @param message S2CGetRoomListResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IS2CGetRoomListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified S2CGetRoomListResponse message, length delimited. Does not implicitly {@link S2CGetRoomListResponse.verify|verify} messages.
     * @param message S2CGetRoomListResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IS2CGetRoomListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a S2CGetRoomListResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns S2CGetRoomListResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2CGetRoomListResponse;

    /**
     * Decodes a S2CGetRoomListResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns S2CGetRoomListResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2CGetRoomListResponse;

    /**
     * Verifies a S2CGetRoomListResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a S2CGetRoomListResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns S2CGetRoomListResponse
     */
    public static fromObject(object: { [k: string]: any }): S2CGetRoomListResponse;

    /**
     * Creates a plain object from a S2CGetRoomListResponse message. Also converts values to other types if specified.
     * @param message S2CGetRoomListResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: S2CGetRoomListResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this S2CGetRoomListResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for S2CGetRoomListResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a C2SJoinRoomRequest. */
export interface IC2SJoinRoomRequest {

    /** C2SJoinRoomRequest roomId */
    roomId?: (number|null);
}

/** Represents a C2SJoinRoomRequest. */
export class C2SJoinRoomRequest implements IC2SJoinRoomRequest {

    /**
     * Constructs a new C2SJoinRoomRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IC2SJoinRoomRequest);

    /** C2SJoinRoomRequest roomId. */
    public roomId: number;

    /**
     * Creates a new C2SJoinRoomRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns C2SJoinRoomRequest instance
     */
    public static create(properties?: IC2SJoinRoomRequest): C2SJoinRoomRequest;

    /**
     * Encodes the specified C2SJoinRoomRequest message. Does not implicitly {@link C2SJoinRoomRequest.verify|verify} messages.
     * @param message C2SJoinRoomRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IC2SJoinRoomRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified C2SJoinRoomRequest message, length delimited. Does not implicitly {@link C2SJoinRoomRequest.verify|verify} messages.
     * @param message C2SJoinRoomRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IC2SJoinRoomRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a C2SJoinRoomRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns C2SJoinRoomRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2SJoinRoomRequest;

    /**
     * Decodes a C2SJoinRoomRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns C2SJoinRoomRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2SJoinRoomRequest;

    /**
     * Verifies a C2SJoinRoomRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a C2SJoinRoomRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns C2SJoinRoomRequest
     */
    public static fromObject(object: { [k: string]: any }): C2SJoinRoomRequest;

    /**
     * Creates a plain object from a C2SJoinRoomRequest message. Also converts values to other types if specified.
     * @param message C2SJoinRoomRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: C2SJoinRoomRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this C2SJoinRoomRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for C2SJoinRoomRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a S2CJoinRoomResponse. */
export interface IS2CJoinRoomResponse {

    /** S2CJoinRoomResponse success */
    success?: (boolean|null);

    /** S2CJoinRoomResponse room */
    room?: (IRoomData|null);

    /** S2CJoinRoomResponse failCode */
    failCode?: (GlobalFailCode|null);
}

/** Represents a S2CJoinRoomResponse. */
export class S2CJoinRoomResponse implements IS2CJoinRoomResponse {

    /**
     * Constructs a new S2CJoinRoomResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IS2CJoinRoomResponse);

    /** S2CJoinRoomResponse success. */
    public success: boolean;

    /** S2CJoinRoomResponse room. */
    public room?: (IRoomData|null);

    /** S2CJoinRoomResponse failCode. */
    public failCode: GlobalFailCode;

    /**
     * Creates a new S2CJoinRoomResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns S2CJoinRoomResponse instance
     */
    public static create(properties?: IS2CJoinRoomResponse): S2CJoinRoomResponse;

    /**
     * Encodes the specified S2CJoinRoomResponse message. Does not implicitly {@link S2CJoinRoomResponse.verify|verify} messages.
     * @param message S2CJoinRoomResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IS2CJoinRoomResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified S2CJoinRoomResponse message, length delimited. Does not implicitly {@link S2CJoinRoomResponse.verify|verify} messages.
     * @param message S2CJoinRoomResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IS2CJoinRoomResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a S2CJoinRoomResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns S2CJoinRoomResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2CJoinRoomResponse;

    /**
     * Decodes a S2CJoinRoomResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns S2CJoinRoomResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2CJoinRoomResponse;

    /**
     * Verifies a S2CJoinRoomResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a S2CJoinRoomResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns S2CJoinRoomResponse
     */
    public static fromObject(object: { [k: string]: any }): S2CJoinRoomResponse;

    /**
     * Creates a plain object from a S2CJoinRoomResponse message. Also converts values to other types if specified.
     * @param message S2CJoinRoomResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: S2CJoinRoomResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this S2CJoinRoomResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for S2CJoinRoomResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a C2SJoinRandomRoomRequest. */
export interface IC2SJoinRandomRoomRequest {

    /** C2SJoinRandomRoomRequest roomId */
    roomId?: (number|null);
}

/** Represents a C2SJoinRandomRoomRequest. */
export class C2SJoinRandomRoomRequest implements IC2SJoinRandomRoomRequest {

    /**
     * Constructs a new C2SJoinRandomRoomRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IC2SJoinRandomRoomRequest);

    /** C2SJoinRandomRoomRequest roomId. */
    public roomId: number;

    /**
     * Creates a new C2SJoinRandomRoomRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns C2SJoinRandomRoomRequest instance
     */
    public static create(properties?: IC2SJoinRandomRoomRequest): C2SJoinRandomRoomRequest;

    /**
     * Encodes the specified C2SJoinRandomRoomRequest message. Does not implicitly {@link C2SJoinRandomRoomRequest.verify|verify} messages.
     * @param message C2SJoinRandomRoomRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IC2SJoinRandomRoomRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified C2SJoinRandomRoomRequest message, length delimited. Does not implicitly {@link C2SJoinRandomRoomRequest.verify|verify} messages.
     * @param message C2SJoinRandomRoomRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IC2SJoinRandomRoomRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a C2SJoinRandomRoomRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns C2SJoinRandomRoomRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2SJoinRandomRoomRequest;

    /**
     * Decodes a C2SJoinRandomRoomRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns C2SJoinRandomRoomRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2SJoinRandomRoomRequest;

    /**
     * Verifies a C2SJoinRandomRoomRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a C2SJoinRandomRoomRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns C2SJoinRandomRoomRequest
     */
    public static fromObject(object: { [k: string]: any }): C2SJoinRandomRoomRequest;

    /**
     * Creates a plain object from a C2SJoinRandomRoomRequest message. Also converts values to other types if specified.
     * @param message C2SJoinRandomRoomRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: C2SJoinRandomRoomRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this C2SJoinRandomRoomRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for C2SJoinRandomRoomRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a S2CJoinRandomRoomResponse. */
export interface IS2CJoinRandomRoomResponse {

    /** S2CJoinRandomRoomResponse success */
    success?: (boolean|null);

    /** S2CJoinRandomRoomResponse room */
    room?: (IRoomData|null);

    /** S2CJoinRandomRoomResponse failCode */
    failCode?: (GlobalFailCode|null);
}

/** Represents a S2CJoinRandomRoomResponse. */
export class S2CJoinRandomRoomResponse implements IS2CJoinRandomRoomResponse {

    /**
     * Constructs a new S2CJoinRandomRoomResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IS2CJoinRandomRoomResponse);

    /** S2CJoinRandomRoomResponse success. */
    public success: boolean;

    /** S2CJoinRandomRoomResponse room. */
    public room?: (IRoomData|null);

    /** S2CJoinRandomRoomResponse failCode. */
    public failCode: GlobalFailCode;

    /**
     * Creates a new S2CJoinRandomRoomResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns S2CJoinRandomRoomResponse instance
     */
    public static create(properties?: IS2CJoinRandomRoomResponse): S2CJoinRandomRoomResponse;

    /**
     * Encodes the specified S2CJoinRandomRoomResponse message. Does not implicitly {@link S2CJoinRandomRoomResponse.verify|verify} messages.
     * @param message S2CJoinRandomRoomResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IS2CJoinRandomRoomResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified S2CJoinRandomRoomResponse message, length delimited. Does not implicitly {@link S2CJoinRandomRoomResponse.verify|verify} messages.
     * @param message S2CJoinRandomRoomResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IS2CJoinRandomRoomResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a S2CJoinRandomRoomResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns S2CJoinRandomRoomResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2CJoinRandomRoomResponse;

    /**
     * Decodes a S2CJoinRandomRoomResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns S2CJoinRandomRoomResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2CJoinRandomRoomResponse;

    /**
     * Verifies a S2CJoinRandomRoomResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a S2CJoinRandomRoomResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns S2CJoinRandomRoomResponse
     */
    public static fromObject(object: { [k: string]: any }): S2CJoinRandomRoomResponse;

    /**
     * Creates a plain object from a S2CJoinRandomRoomResponse message. Also converts values to other types if specified.
     * @param message S2CJoinRandomRoomResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: S2CJoinRandomRoomResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this S2CJoinRandomRoomResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for S2CJoinRandomRoomResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a S2CJoinRoomNotification. */
export interface IS2CJoinRoomNotification {

    /** S2CJoinRoomNotification joinUser */
    joinUser?: (IUserData|null);
}

/** Represents a S2CJoinRoomNotification. */
export class S2CJoinRoomNotification implements IS2CJoinRoomNotification {

    /**
     * Constructs a new S2CJoinRoomNotification.
     * @param [properties] Properties to set
     */
    constructor(properties?: IS2CJoinRoomNotification);

    /** S2CJoinRoomNotification joinUser. */
    public joinUser?: (IUserData|null);

    /**
     * Creates a new S2CJoinRoomNotification instance using the specified properties.
     * @param [properties] Properties to set
     * @returns S2CJoinRoomNotification instance
     */
    public static create(properties?: IS2CJoinRoomNotification): S2CJoinRoomNotification;

    /**
     * Encodes the specified S2CJoinRoomNotification message. Does not implicitly {@link S2CJoinRoomNotification.verify|verify} messages.
     * @param message S2CJoinRoomNotification message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IS2CJoinRoomNotification, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified S2CJoinRoomNotification message, length delimited. Does not implicitly {@link S2CJoinRoomNotification.verify|verify} messages.
     * @param message S2CJoinRoomNotification message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IS2CJoinRoomNotification, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a S2CJoinRoomNotification message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns S2CJoinRoomNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2CJoinRoomNotification;

    /**
     * Decodes a S2CJoinRoomNotification message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns S2CJoinRoomNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2CJoinRoomNotification;

    /**
     * Verifies a S2CJoinRoomNotification message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a S2CJoinRoomNotification message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns S2CJoinRoomNotification
     */
    public static fromObject(object: { [k: string]: any }): S2CJoinRoomNotification;

    /**
     * Creates a plain object from a S2CJoinRoomNotification message. Also converts values to other types if specified.
     * @param message S2CJoinRoomNotification
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: S2CJoinRoomNotification, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this S2CJoinRoomNotification to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for S2CJoinRoomNotification
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a C2SLeaveRoomRequest. */
export interface IC2SLeaveRoomRequest {
}

/** Represents a C2SLeaveRoomRequest. */
export class C2SLeaveRoomRequest implements IC2SLeaveRoomRequest {

    /**
     * Constructs a new C2SLeaveRoomRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IC2SLeaveRoomRequest);

    /**
     * Creates a new C2SLeaveRoomRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns C2SLeaveRoomRequest instance
     */
    public static create(properties?: IC2SLeaveRoomRequest): C2SLeaveRoomRequest;

    /**
     * Encodes the specified C2SLeaveRoomRequest message. Does not implicitly {@link C2SLeaveRoomRequest.verify|verify} messages.
     * @param message C2SLeaveRoomRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IC2SLeaveRoomRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified C2SLeaveRoomRequest message, length delimited. Does not implicitly {@link C2SLeaveRoomRequest.verify|verify} messages.
     * @param message C2SLeaveRoomRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IC2SLeaveRoomRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a C2SLeaveRoomRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns C2SLeaveRoomRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2SLeaveRoomRequest;

    /**
     * Decodes a C2SLeaveRoomRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns C2SLeaveRoomRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2SLeaveRoomRequest;

    /**
     * Verifies a C2SLeaveRoomRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a C2SLeaveRoomRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns C2SLeaveRoomRequest
     */
    public static fromObject(object: { [k: string]: any }): C2SLeaveRoomRequest;

    /**
     * Creates a plain object from a C2SLeaveRoomRequest message. Also converts values to other types if specified.
     * @param message C2SLeaveRoomRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: C2SLeaveRoomRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this C2SLeaveRoomRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for C2SLeaveRoomRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a S2CLeaveRoomResponse. */
export interface IS2CLeaveRoomResponse {

    /** S2CLeaveRoomResponse success */
    success?: (boolean|null);

    /** S2CLeaveRoomResponse failCode */
    failCode?: (GlobalFailCode|null);
}

/** Represents a S2CLeaveRoomResponse. */
export class S2CLeaveRoomResponse implements IS2CLeaveRoomResponse {

    /**
     * Constructs a new S2CLeaveRoomResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IS2CLeaveRoomResponse);

    /** S2CLeaveRoomResponse success. */
    public success: boolean;

    /** S2CLeaveRoomResponse failCode. */
    public failCode: GlobalFailCode;

    /**
     * Creates a new S2CLeaveRoomResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns S2CLeaveRoomResponse instance
     */
    public static create(properties?: IS2CLeaveRoomResponse): S2CLeaveRoomResponse;

    /**
     * Encodes the specified S2CLeaveRoomResponse message. Does not implicitly {@link S2CLeaveRoomResponse.verify|verify} messages.
     * @param message S2CLeaveRoomResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IS2CLeaveRoomResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified S2CLeaveRoomResponse message, length delimited. Does not implicitly {@link S2CLeaveRoomResponse.verify|verify} messages.
     * @param message S2CLeaveRoomResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IS2CLeaveRoomResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a S2CLeaveRoomResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns S2CLeaveRoomResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2CLeaveRoomResponse;

    /**
     * Decodes a S2CLeaveRoomResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns S2CLeaveRoomResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2CLeaveRoomResponse;

    /**
     * Verifies a S2CLeaveRoomResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a S2CLeaveRoomResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns S2CLeaveRoomResponse
     */
    public static fromObject(object: { [k: string]: any }): S2CLeaveRoomResponse;

    /**
     * Creates a plain object from a S2CLeaveRoomResponse message. Also converts values to other types if specified.
     * @param message S2CLeaveRoomResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: S2CLeaveRoomResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this S2CLeaveRoomResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for S2CLeaveRoomResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a S2CLeaveRoomNotification. */
export interface IS2CLeaveRoomNotification {

    /** S2CLeaveRoomNotification userId */
    userId?: (string|null);
}

/** Represents a S2CLeaveRoomNotification. */
export class S2CLeaveRoomNotification implements IS2CLeaveRoomNotification {

    /**
     * Constructs a new S2CLeaveRoomNotification.
     * @param [properties] Properties to set
     */
    constructor(properties?: IS2CLeaveRoomNotification);

    /** S2CLeaveRoomNotification userId. */
    public userId: string;

    /**
     * Creates a new S2CLeaveRoomNotification instance using the specified properties.
     * @param [properties] Properties to set
     * @returns S2CLeaveRoomNotification instance
     */
    public static create(properties?: IS2CLeaveRoomNotification): S2CLeaveRoomNotification;

    /**
     * Encodes the specified S2CLeaveRoomNotification message. Does not implicitly {@link S2CLeaveRoomNotification.verify|verify} messages.
     * @param message S2CLeaveRoomNotification message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IS2CLeaveRoomNotification, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified S2CLeaveRoomNotification message, length delimited. Does not implicitly {@link S2CLeaveRoomNotification.verify|verify} messages.
     * @param message S2CLeaveRoomNotification message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IS2CLeaveRoomNotification, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a S2CLeaveRoomNotification message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns S2CLeaveRoomNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2CLeaveRoomNotification;

    /**
     * Decodes a S2CLeaveRoomNotification message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns S2CLeaveRoomNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2CLeaveRoomNotification;

    /**
     * Verifies a S2CLeaveRoomNotification message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a S2CLeaveRoomNotification message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns S2CLeaveRoomNotification
     */
    public static fromObject(object: { [k: string]: any }): S2CLeaveRoomNotification;

    /**
     * Creates a plain object from a S2CLeaveRoomNotification message. Also converts values to other types if specified.
     * @param message S2CLeaveRoomNotification
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: S2CLeaveRoomNotification, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this S2CLeaveRoomNotification to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for S2CLeaveRoomNotification
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a C2SGamePrepareRequest. */
export interface IC2SGamePrepareRequest {
}

/** Represents a C2SGamePrepareRequest. */
export class C2SGamePrepareRequest implements IC2SGamePrepareRequest {

    /**
     * Constructs a new C2SGamePrepareRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IC2SGamePrepareRequest);

    /**
     * Creates a new C2SGamePrepareRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns C2SGamePrepareRequest instance
     */
    public static create(properties?: IC2SGamePrepareRequest): C2SGamePrepareRequest;

    /**
     * Encodes the specified C2SGamePrepareRequest message. Does not implicitly {@link C2SGamePrepareRequest.verify|verify} messages.
     * @param message C2SGamePrepareRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IC2SGamePrepareRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified C2SGamePrepareRequest message, length delimited. Does not implicitly {@link C2SGamePrepareRequest.verify|verify} messages.
     * @param message C2SGamePrepareRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IC2SGamePrepareRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a C2SGamePrepareRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns C2SGamePrepareRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2SGamePrepareRequest;

    /**
     * Decodes a C2SGamePrepareRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns C2SGamePrepareRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2SGamePrepareRequest;

    /**
     * Verifies a C2SGamePrepareRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a C2SGamePrepareRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns C2SGamePrepareRequest
     */
    public static fromObject(object: { [k: string]: any }): C2SGamePrepareRequest;

    /**
     * Creates a plain object from a C2SGamePrepareRequest message. Also converts values to other types if specified.
     * @param message C2SGamePrepareRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: C2SGamePrepareRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this C2SGamePrepareRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for C2SGamePrepareRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a S2CGamePrepareResponse. */
export interface IS2CGamePrepareResponse {

    /** S2CGamePrepareResponse success */
    success?: (boolean|null);

    /** S2CGamePrepareResponse failCode */
    failCode?: (GlobalFailCode|null);
}

/** Represents a S2CGamePrepareResponse. */
export class S2CGamePrepareResponse implements IS2CGamePrepareResponse {

    /**
     * Constructs a new S2CGamePrepareResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IS2CGamePrepareResponse);

    /** S2CGamePrepareResponse success. */
    public success: boolean;

    /** S2CGamePrepareResponse failCode. */
    public failCode: GlobalFailCode;

    /**
     * Creates a new S2CGamePrepareResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns S2CGamePrepareResponse instance
     */
    public static create(properties?: IS2CGamePrepareResponse): S2CGamePrepareResponse;

    /**
     * Encodes the specified S2CGamePrepareResponse message. Does not implicitly {@link S2CGamePrepareResponse.verify|verify} messages.
     * @param message S2CGamePrepareResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IS2CGamePrepareResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified S2CGamePrepareResponse message, length delimited. Does not implicitly {@link S2CGamePrepareResponse.verify|verify} messages.
     * @param message S2CGamePrepareResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IS2CGamePrepareResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a S2CGamePrepareResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns S2CGamePrepareResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2CGamePrepareResponse;

    /**
     * Decodes a S2CGamePrepareResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns S2CGamePrepareResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2CGamePrepareResponse;

    /**
     * Verifies a S2CGamePrepareResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a S2CGamePrepareResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns S2CGamePrepareResponse
     */
    public static fromObject(object: { [k: string]: any }): S2CGamePrepareResponse;

    /**
     * Creates a plain object from a S2CGamePrepareResponse message. Also converts values to other types if specified.
     * @param message S2CGamePrepareResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: S2CGamePrepareResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this S2CGamePrepareResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for S2CGamePrepareResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a S2CGamePrepareNotification. */
export interface IS2CGamePrepareNotification {

    /** S2CGamePrepareNotification room */
    room?: (IRoomData|null);

    /** S2CGamePrepareNotification users */
    users?: (IUserData[]|null);
}

/** Represents a S2CGamePrepareNotification. */
export class S2CGamePrepareNotification implements IS2CGamePrepareNotification {

    /**
     * Constructs a new S2CGamePrepareNotification.
     * @param [properties] Properties to set
     */
    constructor(properties?: IS2CGamePrepareNotification);

    /** S2CGamePrepareNotification room. */
    public room?: (IRoomData|null);

    /** S2CGamePrepareNotification users. */
    public users: IUserData[];

    /**
     * Creates a new S2CGamePrepareNotification instance using the specified properties.
     * @param [properties] Properties to set
     * @returns S2CGamePrepareNotification instance
     */
    public static create(properties?: IS2CGamePrepareNotification): S2CGamePrepareNotification;

    /**
     * Encodes the specified S2CGamePrepareNotification message. Does not implicitly {@link S2CGamePrepareNotification.verify|verify} messages.
     * @param message S2CGamePrepareNotification message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IS2CGamePrepareNotification, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified S2CGamePrepareNotification message, length delimited. Does not implicitly {@link S2CGamePrepareNotification.verify|verify} messages.
     * @param message S2CGamePrepareNotification message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IS2CGamePrepareNotification, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a S2CGamePrepareNotification message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns S2CGamePrepareNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2CGamePrepareNotification;

    /**
     * Decodes a S2CGamePrepareNotification message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns S2CGamePrepareNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2CGamePrepareNotification;

    /**
     * Verifies a S2CGamePrepareNotification message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a S2CGamePrepareNotification message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns S2CGamePrepareNotification
     */
    public static fromObject(object: { [k: string]: any }): S2CGamePrepareNotification;

    /**
     * Creates a plain object from a S2CGamePrepareNotification message. Also converts values to other types if specified.
     * @param message S2CGamePrepareNotification
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: S2CGamePrepareNotification, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this S2CGamePrepareNotification to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for S2CGamePrepareNotification
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a C2SGameStartRequest. */
export interface IC2SGameStartRequest {
}

/** Represents a C2SGameStartRequest. */
export class C2SGameStartRequest implements IC2SGameStartRequest {

    /**
     * Constructs a new C2SGameStartRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IC2SGameStartRequest);

    /**
     * Creates a new C2SGameStartRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns C2SGameStartRequest instance
     */
    public static create(properties?: IC2SGameStartRequest): C2SGameStartRequest;

    /**
     * Encodes the specified C2SGameStartRequest message. Does not implicitly {@link C2SGameStartRequest.verify|verify} messages.
     * @param message C2SGameStartRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IC2SGameStartRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified C2SGameStartRequest message, length delimited. Does not implicitly {@link C2SGameStartRequest.verify|verify} messages.
     * @param message C2SGameStartRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IC2SGameStartRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a C2SGameStartRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns C2SGameStartRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2SGameStartRequest;

    /**
     * Decodes a C2SGameStartRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns C2SGameStartRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2SGameStartRequest;

    /**
     * Verifies a C2SGameStartRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a C2SGameStartRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns C2SGameStartRequest
     */
    public static fromObject(object: { [k: string]: any }): C2SGameStartRequest;

    /**
     * Creates a plain object from a C2SGameStartRequest message. Also converts values to other types if specified.
     * @param message C2SGameStartRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: C2SGameStartRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this C2SGameStartRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for C2SGameStartRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a S2CGameStartResponse. */
export interface IS2CGameStartResponse {

    /** S2CGameStartResponse success */
    success?: (boolean|null);

    /** S2CGameStartResponse failCode */
    failCode?: (GlobalFailCode|null);
}

/** Represents a S2CGameStartResponse. */
export class S2CGameStartResponse implements IS2CGameStartResponse {

    /**
     * Constructs a new S2CGameStartResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IS2CGameStartResponse);

    /** S2CGameStartResponse success. */
    public success: boolean;

    /** S2CGameStartResponse failCode. */
    public failCode: GlobalFailCode;

    /**
     * Creates a new S2CGameStartResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns S2CGameStartResponse instance
     */
    public static create(properties?: IS2CGameStartResponse): S2CGameStartResponse;

    /**
     * Encodes the specified S2CGameStartResponse message. Does not implicitly {@link S2CGameStartResponse.verify|verify} messages.
     * @param message S2CGameStartResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IS2CGameStartResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified S2CGameStartResponse message, length delimited. Does not implicitly {@link S2CGameStartResponse.verify|verify} messages.
     * @param message S2CGameStartResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IS2CGameStartResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a S2CGameStartResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns S2CGameStartResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2CGameStartResponse;

    /**
     * Decodes a S2CGameStartResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns S2CGameStartResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2CGameStartResponse;

    /**
     * Verifies a S2CGameStartResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a S2CGameStartResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns S2CGameStartResponse
     */
    public static fromObject(object: { [k: string]: any }): S2CGameStartResponse;

    /**
     * Creates a plain object from a S2CGameStartResponse message. Also converts values to other types if specified.
     * @param message S2CGameStartResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: S2CGameStartResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this S2CGameStartResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for S2CGameStartResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a S2CGameStartNotification. */
export interface IS2CGameStartNotification {

    /** S2CGameStartNotification gameState */
    gameState?: (IGameStateData|null);

    /** S2CGameStartNotification users */
    users?: (IUserData[]|null);

    /** S2CGameStartNotification userPositions */
    userPositions?: (IUserPositionData[]|null);
}

/** Represents a S2CGameStartNotification. */
export class S2CGameStartNotification implements IS2CGameStartNotification {

    /**
     * Constructs a new S2CGameStartNotification.
     * @param [properties] Properties to set
     */
    constructor(properties?: IS2CGameStartNotification);

    /** S2CGameStartNotification gameState. */
    public gameState?: (IGameStateData|null);

    /** S2CGameStartNotification users. */
    public users: IUserData[];

    /** S2CGameStartNotification userPositions. */
    public userPositions: IUserPositionData[];

    /**
     * Creates a new S2CGameStartNotification instance using the specified properties.
     * @param [properties] Properties to set
     * @returns S2CGameStartNotification instance
     */
    public static create(properties?: IS2CGameStartNotification): S2CGameStartNotification;

    /**
     * Encodes the specified S2CGameStartNotification message. Does not implicitly {@link S2CGameStartNotification.verify|verify} messages.
     * @param message S2CGameStartNotification message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IS2CGameStartNotification, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified S2CGameStartNotification message, length delimited. Does not implicitly {@link S2CGameStartNotification.verify|verify} messages.
     * @param message S2CGameStartNotification message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IS2CGameStartNotification, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a S2CGameStartNotification message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns S2CGameStartNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2CGameStartNotification;

    /**
     * Decodes a S2CGameStartNotification message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns S2CGameStartNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2CGameStartNotification;

    /**
     * Verifies a S2CGameStartNotification message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a S2CGameStartNotification message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns S2CGameStartNotification
     */
    public static fromObject(object: { [k: string]: any }): S2CGameStartNotification;

    /**
     * Creates a plain object from a S2CGameStartNotification message. Also converts values to other types if specified.
     * @param message S2CGameStartNotification
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: S2CGameStartNotification, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this S2CGameStartNotification to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for S2CGameStartNotification
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a C2SPositionUpdateRequest. */
export interface IC2SPositionUpdateRequest {

    /** C2SPositionUpdateRequest x */
    x?: (number|null);

    /** C2SPositionUpdateRequest y */
    y?: (number|null);
}

/** Represents a C2SPositionUpdateRequest. */
export class C2SPositionUpdateRequest implements IC2SPositionUpdateRequest {

    /**
     * Constructs a new C2SPositionUpdateRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IC2SPositionUpdateRequest);

    /** C2SPositionUpdateRequest x. */
    public x: number;

    /** C2SPositionUpdateRequest y. */
    public y: number;

    /**
     * Creates a new C2SPositionUpdateRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns C2SPositionUpdateRequest instance
     */
    public static create(properties?: IC2SPositionUpdateRequest): C2SPositionUpdateRequest;

    /**
     * Encodes the specified C2SPositionUpdateRequest message. Does not implicitly {@link C2SPositionUpdateRequest.verify|verify} messages.
     * @param message C2SPositionUpdateRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IC2SPositionUpdateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified C2SPositionUpdateRequest message, length delimited. Does not implicitly {@link C2SPositionUpdateRequest.verify|verify} messages.
     * @param message C2SPositionUpdateRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IC2SPositionUpdateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a C2SPositionUpdateRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns C2SPositionUpdateRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2SPositionUpdateRequest;

    /**
     * Decodes a C2SPositionUpdateRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns C2SPositionUpdateRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2SPositionUpdateRequest;

    /**
     * Verifies a C2SPositionUpdateRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a C2SPositionUpdateRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns C2SPositionUpdateRequest
     */
    public static fromObject(object: { [k: string]: any }): C2SPositionUpdateRequest;

    /**
     * Creates a plain object from a C2SPositionUpdateRequest message. Also converts values to other types if specified.
     * @param message C2SPositionUpdateRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: C2SPositionUpdateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this C2SPositionUpdateRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for C2SPositionUpdateRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a S2CPositionUpdateNotification. */
export interface IS2CPositionUpdateNotification {

    /** S2CPositionUpdateNotification UserPosition */
    UserPosition?: (IUserPositionData|null);
}

/** Represents a S2CPositionUpdateNotification. */
export class S2CPositionUpdateNotification implements IS2CPositionUpdateNotification {

    /**
     * Constructs a new S2CPositionUpdateNotification.
     * @param [properties] Properties to set
     */
    constructor(properties?: IS2CPositionUpdateNotification);

    /** S2CPositionUpdateNotification UserPosition. */
    public UserPosition?: (IUserPositionData|null);

    /**
     * Creates a new S2CPositionUpdateNotification instance using the specified properties.
     * @param [properties] Properties to set
     * @returns S2CPositionUpdateNotification instance
     */
    public static create(properties?: IS2CPositionUpdateNotification): S2CPositionUpdateNotification;

    /**
     * Encodes the specified S2CPositionUpdateNotification message. Does not implicitly {@link S2CPositionUpdateNotification.verify|verify} messages.
     * @param message S2CPositionUpdateNotification message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IS2CPositionUpdateNotification, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified S2CPositionUpdateNotification message, length delimited. Does not implicitly {@link S2CPositionUpdateNotification.verify|verify} messages.
     * @param message S2CPositionUpdateNotification message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IS2CPositionUpdateNotification, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a S2CPositionUpdateNotification message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns S2CPositionUpdateNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2CPositionUpdateNotification;

    /**
     * Decodes a S2CPositionUpdateNotification message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns S2CPositionUpdateNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2CPositionUpdateNotification;

    /**
     * Verifies a S2CPositionUpdateNotification message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a S2CPositionUpdateNotification message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns S2CPositionUpdateNotification
     */
    public static fromObject(object: { [k: string]: any }): S2CPositionUpdateNotification;

    /**
     * Creates a plain object from a S2CPositionUpdateNotification message. Also converts values to other types if specified.
     * @param message S2CPositionUpdateNotification
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: S2CPositionUpdateNotification, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this S2CPositionUpdateNotification to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for S2CPositionUpdateNotification
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a C2SUseCardRequest. */
export interface IC2SUseCardRequest {

    /** C2SUseCardRequest cardType */
    cardType?: (number|null);

    /** C2SUseCardRequest targetUserId */
    targetUserId?: (string|null);
}

/** Represents a C2SUseCardRequest. */
export class C2SUseCardRequest implements IC2SUseCardRequest {

    /**
     * Constructs a new C2SUseCardRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IC2SUseCardRequest);

    /** C2SUseCardRequest cardType. */
    public cardType: number;

    /** C2SUseCardRequest targetUserId. */
    public targetUserId: string;

    /**
     * Creates a new C2SUseCardRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns C2SUseCardRequest instance
     */
    public static create(properties?: IC2SUseCardRequest): C2SUseCardRequest;

    /**
     * Encodes the specified C2SUseCardRequest message. Does not implicitly {@link C2SUseCardRequest.verify|verify} messages.
     * @param message C2SUseCardRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IC2SUseCardRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified C2SUseCardRequest message, length delimited. Does not implicitly {@link C2SUseCardRequest.verify|verify} messages.
     * @param message C2SUseCardRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IC2SUseCardRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a C2SUseCardRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns C2SUseCardRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2SUseCardRequest;

    /**
     * Decodes a C2SUseCardRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns C2SUseCardRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2SUseCardRequest;

    /**
     * Verifies a C2SUseCardRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a C2SUseCardRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns C2SUseCardRequest
     */
    public static fromObject(object: { [k: string]: any }): C2SUseCardRequest;

    /**
     * Creates a plain object from a C2SUseCardRequest message. Also converts values to other types if specified.
     * @param message C2SUseCardRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: C2SUseCardRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this C2SUseCardRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for C2SUseCardRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a S2CUseCardResponse. */
export interface IS2CUseCardResponse {

    /** S2CUseCardResponse success */
    success?: (boolean|null);

    /** S2CUseCardResponse failCode */
    failCode?: (GlobalFailCode|null);
}

/** Represents a S2CUseCardResponse. */
export class S2CUseCardResponse implements IS2CUseCardResponse {

    /**
     * Constructs a new S2CUseCardResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: IS2CUseCardResponse);

    /** S2CUseCardResponse success. */
    public success: boolean;

    /** S2CUseCardResponse failCode. */
    public failCode: GlobalFailCode;

    /**
     * Creates a new S2CUseCardResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns S2CUseCardResponse instance
     */
    public static create(properties?: IS2CUseCardResponse): S2CUseCardResponse;

    /**
     * Encodes the specified S2CUseCardResponse message. Does not implicitly {@link S2CUseCardResponse.verify|verify} messages.
     * @param message S2CUseCardResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IS2CUseCardResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified S2CUseCardResponse message, length delimited. Does not implicitly {@link S2CUseCardResponse.verify|verify} messages.
     * @param message S2CUseCardResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IS2CUseCardResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a S2CUseCardResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns S2CUseCardResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2CUseCardResponse;

    /**
     * Decodes a S2CUseCardResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns S2CUseCardResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2CUseCardResponse;

    /**
     * Verifies a S2CUseCardResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a S2CUseCardResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns S2CUseCardResponse
     */
    public static fromObject(object: { [k: string]: any }): S2CUseCardResponse;

    /**
     * Creates a plain object from a S2CUseCardResponse message. Also converts values to other types if specified.
     * @param message S2CUseCardResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: S2CUseCardResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this S2CUseCardResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for S2CUseCardResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a S2CUseCardNotification. */
export interface IS2CUseCardNotification {

    /** S2CUseCardNotification cardType */
    cardType?: (number|null);

    /** S2CUseCardNotification userId */
    userId?: (string|null);

    /** S2CUseCardNotification targetUserId */
    targetUserId?: (string|null);
}

/** Represents a S2CUseCardNotification. */
export class S2CUseCardNotification implements IS2CUseCardNotification {

    /**
     * Constructs a new S2CUseCardNotification.
     * @param [properties] Properties to set
     */
    constructor(properties?: IS2CUseCardNotification);

    /** S2CUseCardNotification cardType. */
    public cardType: number;

    /** S2CUseCardNotification userId. */
    public userId: string;

    /** S2CUseCardNotification targetUserId. */
    public targetUserId: string;

    /**
     * Creates a new S2CUseCardNotification instance using the specified properties.
     * @param [properties] Properties to set
     * @returns S2CUseCardNotification instance
     */
    public static create(properties?: IS2CUseCardNotification): S2CUseCardNotification;

    /**
     * Encodes the specified S2CUseCardNotification message. Does not implicitly {@link S2CUseCardNotification.verify|verify} messages.
     * @param message S2CUseCardNotification message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IS2CUseCardNotification, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified S2CUseCardNotification message, length delimited. Does not implicitly {@link S2CUseCardNotification.verify|verify} messages.
     * @param message S2CUseCardNotification message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IS2CUseCardNotification, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a S2CUseCardNotification message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns S2CUseCardNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2CUseCardNotification;

    /**
     * Decodes a S2CUseCardNotification message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns S2CUseCardNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2CUseCardNotification;

    /**
     * Verifies a S2CUseCardNotification message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a S2CUseCardNotification message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns S2CUseCardNotification
     */
    public static fromObject(object: { [k: string]: any }): S2CUseCardNotification;

    /**
     * Creates a plain object from a S2CUseCardNotification message. Also converts values to other types if specified.
     * @param message S2CUseCardNotification
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: S2CUseCardNotification, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this S2CUseCardNotification to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for S2CUseCardNotification
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a S2CEquipCardNotification. */
export interface IS2CEquipCardNotification {

    /** S2CEquipCardNotification cardType */
    cardType?: (number|null);

    /** S2CEquipCardNotification userId */
    userId?: (string|null);
}

/** Represents a S2CEquipCardNotification. */
export class S2CEquipCardNotification implements IS2CEquipCardNotification {

    /**
     * Constructs a new S2CEquipCardNotification.
     * @param [properties] Properties to set
     */
    constructor(properties?: IS2CEquipCardNotification);

    /** S2CEquipCardNotification cardType. */
    public cardType: number;

    /** S2CEquipCardNotification userId. */
    public userId: string;

    /**
     * Creates a new S2CEquipCardNotification instance using the specified properties.
     * @param [properties] Properties to set
     * @returns S2CEquipCardNotification instance
     */
    public static create(properties?: IS2CEquipCardNotification): S2CEquipCardNotification;

    /**
     * Encodes the specified S2CEquipCardNotification message. Does not implicitly {@link S2CEquipCardNotification.verify|verify} messages.
     * @param message S2CEquipCardNotification message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IS2CEquipCardNotification, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified S2CEquipCardNotification message, length delimited. Does not implicitly {@link S2CEquipCardNotification.verify|verify} messages.
     * @param message S2CEquipCardNotification message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IS2CEquipCardNotification, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a S2CEquipCardNotification message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns S2CEquipCardNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2CEquipCardNotification;

    /**
     * Decodes a S2CEquipCardNotification message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns S2CEquipCardNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2CEquipCardNotification;

    /**
     * Verifies a S2CEquipCardNotification message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a S2CEquipCardNotification message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns S2CEquipCardNotification
     */
    public static fromObject(object: { [k: string]: any }): S2CEquipCardNotification;

    /**
     * Creates a plain object from a S2CEquipCardNotification message. Also converts values to other types if specified.
     * @param message S2CEquipCardNotification
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: S2CEquipCardNotification, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this S2CEquipCardNotification to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for S2CEquipCardNotification
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a S2CCardEffectNotification. */
export interface IS2CCardEffectNotification {

    /** S2CCardEffectNotification cardType */
    cardType?: (number|null);

    /** S2CCardEffectNotification userId */
    userId?: (string|null);

    /** S2CCardEffectNotification success */
    success?: (boolean|null);
}

/** Represents a S2CCardEffectNotification. */
export class S2CCardEffectNotification implements IS2CCardEffectNotification {

    /**
     * Constructs a new S2CCardEffectNotification.
     * @param [properties] Properties to set
     */
    constructor(properties?: IS2CCardEffectNotification);

    /** S2CCardEffectNotification cardType. */
    public cardType: number;

    /** S2CCardEffectNotification userId. */
    public userId: string;

    /** S2CCardEffectNotification success. */
    public success: boolean;

    /**
     * Creates a new S2CCardEffectNotification instance using the specified properties.
     * @param [properties] Properties to set
     * @returns S2CCardEffectNotification instance
     */
    public static create(properties?: IS2CCardEffectNotification): S2CCardEffectNotification;

    /**
     * Encodes the specified S2CCardEffectNotification message. Does not implicitly {@link S2CCardEffectNotification.verify|verify} messages.
     * @param message S2CCardEffectNotification message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IS2CCardEffectNotification, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified S2CCardEffectNotification message, length delimited. Does not implicitly {@link S2CCardEffectNotification.verify|verify} messages.
     * @param message S2CCardEffectNotification message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IS2CCardEffectNotification, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a S2CCardEffectNotification message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns S2CCardEffectNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2CCardEffectNotification;

    /**
     * Decodes a S2CCardEffectNotification message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns S2CCardEffectNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2CCardEffectNotification;

    /**
     * Verifies a S2CCardEffectNotification message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a S2CCardEffectNotification message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns S2CCardEffectNotification
     */
    public static fromObject(object: { [k: string]: any }): S2CCardEffectNotification;

    /**
     * Creates a plain object from a S2CCardEffectNotification message. Also converts values to other types if specified.
     * @param message S2CCardEffectNotification
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: S2CCardEffectNotification, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this S2CCardEffectNotification to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for S2CCardEffectNotification
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a S2CUserUpdateNotification. */
export interface IS2CUserUpdateNotification {

    /** S2CUserUpdateNotification user */
    user?: (IUserData[]|null);
}

/** Represents a S2CUserUpdateNotification. */
export class S2CUserUpdateNotification implements IS2CUserUpdateNotification {

    /**
     * Constructs a new S2CUserUpdateNotification.
     * @param [properties] Properties to set
     */
    constructor(properties?: IS2CUserUpdateNotification);

    /** S2CUserUpdateNotification user. */
    public user: IUserData[];

    /**
     * Creates a new S2CUserUpdateNotification instance using the specified properties.
     * @param [properties] Properties to set
     * @returns S2CUserUpdateNotification instance
     */
    public static create(properties?: IS2CUserUpdateNotification): S2CUserUpdateNotification;

    /**
     * Encodes the specified S2CUserUpdateNotification message. Does not implicitly {@link S2CUserUpdateNotification.verify|verify} messages.
     * @param message S2CUserUpdateNotification message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IS2CUserUpdateNotification, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified S2CUserUpdateNotification message, length delimited. Does not implicitly {@link S2CUserUpdateNotification.verify|verify} messages.
     * @param message S2CUserUpdateNotification message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IS2CUserUpdateNotification, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a S2CUserUpdateNotification message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns S2CUserUpdateNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2CUserUpdateNotification;

    /**
     * Decodes a S2CUserUpdateNotification message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns S2CUserUpdateNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2CUserUpdateNotification;

    /**
     * Verifies a S2CUserUpdateNotification message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a S2CUserUpdateNotification message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns S2CUserUpdateNotification
     */
    public static fromObject(object: { [k: string]: any }): S2CUserUpdateNotification;

    /**
     * Creates a plain object from a S2CUserUpdateNotification message. Also converts values to other types if specified.
     * @param message S2CUserUpdateNotification
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: S2CUserUpdateNotification, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this S2CUserUpdateNotification to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for S2CUserUpdateNotification
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a S2CPhaseUpdateNotification. */
export interface IS2CPhaseUpdateNotification {

    /** S2CPhaseUpdateNotification phaseType */
    phaseType?: (number|null);

    /** S2CPhaseUpdateNotification nextPhaseAt */
    nextPhaseAt?: (number|Long|null);
}

/** Represents a S2CPhaseUpdateNotification. */
export class S2CPhaseUpdateNotification implements IS2CPhaseUpdateNotification {

    /**
     * Constructs a new S2CPhaseUpdateNotification.
     * @param [properties] Properties to set
     */
    constructor(properties?: IS2CPhaseUpdateNotification);

    /** S2CPhaseUpdateNotification phaseType. */
    public phaseType: number;

    /** S2CPhaseUpdateNotification nextPhaseAt. */
    public nextPhaseAt: (number|Long);

    /**
     * Creates a new S2CPhaseUpdateNotification instance using the specified properties.
     * @param [properties] Properties to set
     * @returns S2CPhaseUpdateNotification instance
     */
    public static create(properties?: IS2CPhaseUpdateNotification): S2CPhaseUpdateNotification;

    /**
     * Encodes the specified S2CPhaseUpdateNotification message. Does not implicitly {@link S2CPhaseUpdateNotification.verify|verify} messages.
     * @param message S2CPhaseUpdateNotification message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IS2CPhaseUpdateNotification, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified S2CPhaseUpdateNotification message, length delimited. Does not implicitly {@link S2CPhaseUpdateNotification.verify|verify} messages.
     * @param message S2CPhaseUpdateNotification message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IS2CPhaseUpdateNotification, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a S2CPhaseUpdateNotification message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns S2CPhaseUpdateNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2CPhaseUpdateNotification;

    /**
     * Decodes a S2CPhaseUpdateNotification message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns S2CPhaseUpdateNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2CPhaseUpdateNotification;

    /**
     * Verifies a S2CPhaseUpdateNotification message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a S2CPhaseUpdateNotification message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns S2CPhaseUpdateNotification
     */
    public static fromObject(object: { [k: string]: any }): S2CPhaseUpdateNotification;

    /**
     * Creates a plain object from a S2CPhaseUpdateNotification message. Also converts values to other types if specified.
     * @param message S2CPhaseUpdateNotification
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: S2CPhaseUpdateNotification, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this S2CPhaseUpdateNotification to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for S2CPhaseUpdateNotification
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a C2SDestroyCardRequest. */
export interface IC2SDestroyCardRequest {

    /** C2SDestroyCardRequest destroyCards */
    destroyCards?: (ICardData[]|null);
}

/** Represents a C2SDestroyCardRequest. */
export class C2SDestroyCardRequest implements IC2SDestroyCardRequest {

    /**
     * Constructs a new C2SDestroyCardRequest.
     * @param [properties] Properties to set
     */
    constructor(properties?: IC2SDestroyCardRequest);

    /** C2SDestroyCardRequest destroyCards. */
    public destroyCards: ICardData[];

    /**
     * Creates a new C2SDestroyCardRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns C2SDestroyCardRequest instance
     */
    public static create(properties?: IC2SDestroyCardRequest): C2SDestroyCardRequest;

    /**
     * Encodes the specified C2SDestroyCardRequest message. Does not implicitly {@link C2SDestroyCardRequest.verify|verify} messages.
     * @param message C2SDestroyCardRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IC2SDestroyCardRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified C2SDestroyCardRequest message, length delimited. Does not implicitly {@link C2SDestroyCardRequest.verify|verify} messages.
     * @param message C2SDestroyCardRequest message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IC2SDestroyCardRequest, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a C2SDestroyCardRequest message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns C2SDestroyCardRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): C2SDestroyCardRequest;

    /**
     * Decodes a C2SDestroyCardRequest message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns C2SDestroyCardRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): C2SDestroyCardRequest;

    /**
     * Verifies a C2SDestroyCardRequest message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a C2SDestroyCardRequest message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns C2SDestroyCardRequest
     */
    public static fromObject(object: { [k: string]: any }): C2SDestroyCardRequest;

    /**
     * Creates a plain object from a C2SDestroyCardRequest message. Also converts values to other types if specified.
     * @param message C2SDestroyCardRequest
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: C2SDestroyCardRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this C2SDestroyCardRequest to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for C2SDestroyCardRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a S2CDestroyCardNotification. */
export interface IS2CDestroyCardNotification {

    /** S2CDestroyCardNotification handCards */
    handCards?: (ICardData[]|null);
}

/** Represents a S2CDestroyCardNotification. */
export class S2CDestroyCardNotification implements IS2CDestroyCardNotification {

    /**
     * Constructs a new S2CDestroyCardNotification.
     * @param [properties] Properties to set
     */
    constructor(properties?: IS2CDestroyCardNotification);

    /** S2CDestroyCardNotification handCards. */
    public handCards: ICardData[];

    /**
     * Creates a new S2CDestroyCardNotification instance using the specified properties.
     * @param [properties] Properties to set
     * @returns S2CDestroyCardNotification instance
     */
    public static create(properties?: IS2CDestroyCardNotification): S2CDestroyCardNotification;

    /**
     * Encodes the specified S2CDestroyCardNotification message. Does not implicitly {@link S2CDestroyCardNotification.verify|verify} messages.
     * @param message S2CDestroyCardNotification message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IS2CDestroyCardNotification, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified S2CDestroyCardNotification message, length delimited. Does not implicitly {@link S2CDestroyCardNotification.verify|verify} messages.
     * @param message S2CDestroyCardNotification message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IS2CDestroyCardNotification, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a S2CDestroyCardNotification message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns S2CDestroyCardNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2CDestroyCardNotification;

    /**
     * Decodes a S2CDestroyCardNotification message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns S2CDestroyCardNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2CDestroyCardNotification;

    /**
     * Verifies a S2CDestroyCardNotification message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a S2CDestroyCardNotification message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns S2CDestroyCardNotification
     */
    public static fromObject(object: { [k: string]: any }): S2CDestroyCardNotification;

    /**
     * Creates a plain object from a S2CDestroyCardNotification message. Also converts values to other types if specified.
     * @param message S2CDestroyCardNotification
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: S2CDestroyCardNotification, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this S2CDestroyCardNotification to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for S2CDestroyCardNotification
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a S2CGameEndNotification. */
export interface IS2CGameEndNotification {
}

/** Represents a S2CGameEndNotification. */
export class S2CGameEndNotification implements IS2CGameEndNotification {

    /**
     * Constructs a new S2CGameEndNotification.
     * @param [properties] Properties to set
     */
    constructor(properties?: IS2CGameEndNotification);

    /**
     * Creates a new S2CGameEndNotification instance using the specified properties.
     * @param [properties] Properties to set
     * @returns S2CGameEndNotification instance
     */
    public static create(properties?: IS2CGameEndNotification): S2CGameEndNotification;

    /**
     * Encodes the specified S2CGameEndNotification message. Does not implicitly {@link S2CGameEndNotification.verify|verify} messages.
     * @param message S2CGameEndNotification message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IS2CGameEndNotification, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified S2CGameEndNotification message, length delimited. Does not implicitly {@link S2CGameEndNotification.verify|verify} messages.
     * @param message S2CGameEndNotification message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IS2CGameEndNotification, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a S2CGameEndNotification message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns S2CGameEndNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): S2CGameEndNotification;

    /**
     * Decodes a S2CGameEndNotification message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns S2CGameEndNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): S2CGameEndNotification;

    /**
     * Verifies a S2CGameEndNotification message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a S2CGameEndNotification message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns S2CGameEndNotification
     */
    public static fromObject(object: { [k: string]: any }): S2CGameEndNotification;

    /**
     * Creates a plain object from a S2CGameEndNotification message. Also converts values to other types if specified.
     * @param message S2CGameEndNotification
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: S2CGameEndNotification, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this S2CGameEndNotification to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for S2CGameEndNotification
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a GamePacket. */
export interface IGamePacket {

    /** GamePacket registerRequest */
    registerRequest?: (IC2SRegisterRequest|null);

    /** GamePacket registerResponse */
    registerResponse?: (IS2CRegisterResponse|null);

    /** GamePacket loginRequest */
    loginRequest?: (IC2SLoginRequest|null);

    /** GamePacket loginResponse */
    loginResponse?: (IS2CLoginResponse|null);

    /** GamePacket createRoomRequest */
    createRoomRequest?: (IC2SCreateRoomRequest|null);

    /** GamePacket createRoomResponse */
    createRoomResponse?: (IS2CCreateRoomResponse|null);

    /** GamePacket getRoomListRequest */
    getRoomListRequest?: (IC2SGetRoomListRequest|null);

    /** GamePacket getRoomListResponse */
    getRoomListResponse?: (IS2CGetRoomListResponse|null);

    /** GamePacket joinRoomRequest */
    joinRoomRequest?: (IC2SJoinRoomRequest|null);

    /** GamePacket joinRoomResponse */
    joinRoomResponse?: (IS2CJoinRoomResponse|null);

    /** GamePacket joinRandomRoomRequest */
    joinRandomRoomRequest?: (IC2SJoinRandomRoomRequest|null);

    /** GamePacket joinRandomRoomResponse */
    joinRandomRoomResponse?: (IS2CJoinRandomRoomResponse|null);

    /** GamePacket joinRoomNotification */
    joinRoomNotification?: (IS2CJoinRoomNotification|null);

    /** GamePacket leaveRoomRequest */
    leaveRoomRequest?: (IC2SLeaveRoomRequest|null);

    /** GamePacket leaveRoomResponse */
    leaveRoomResponse?: (IS2CLeaveRoomResponse|null);

    /** GamePacket leaveRoomNotification */
    leaveRoomNotification?: (IS2CLeaveRoomNotification|null);

    /** GamePacket gamePrepareRequest */
    gamePrepareRequest?: (IC2SGamePrepareRequest|null);

    /** GamePacket gamePrepareResponse */
    gamePrepareResponse?: (IS2CGamePrepareResponse|null);

    /** GamePacket gamePrepareNotification */
    gamePrepareNotification?: (IS2CGamePrepareNotification|null);

    /** GamePacket gameStartRequest */
    gameStartRequest?: (IC2SGameStartRequest|null);

    /** GamePacket gameStartResponse */
    gameStartResponse?: (IS2CGameStartResponse|null);

    /** GamePacket gameStartnotification */
    gameStartnotification?: (IS2CGameStartNotification|null);

    /** GamePacket positionUpdateRequest */
    positionUpdateRequest?: (IC2SPositionUpdateRequest|null);

    /** GamePacket positionUpdateNotification */
    positionUpdateNotification?: (IS2CPositionUpdateNotification|null);

    /** GamePacket useCardRequest */
    useCardRequest?: (IC2SUseCardRequest|null);

    /** GamePacket useCardResponse */
    useCardResponse?: (IS2CUseCardResponse|null);

    /** GamePacket useCardNotification */
    useCardNotification?: (IS2CUseCardNotification|null);

    /** GamePacket equipCardNotification */
    equipCardNotification?: (IS2CEquipCardNotification|null);

    /** GamePacket cardEffectNotification */
    cardEffectNotification?: (IS2CCardEffectNotification|null);

    /** GamePacket userUpdateNotification */
    userUpdateNotification?: (IS2CUserUpdateNotification|null);

    /** GamePacket phaseUpdateNotification */
    phaseUpdateNotification?: (IS2CPhaseUpdateNotification|null);

    /** GamePacket destroyCardRequest */
    destroyCardRequest?: (IC2SDestroyCardRequest|null);

    /** GamePacket destroyCardNotification */
    destroyCardNotification?: (IS2CDestroyCardNotification|null);

    /** GamePacket gameEndNotification */
    gameEndNotification?: (IS2CGameEndNotification|null);
}

/** Represents a GamePacket. */
export class GamePacket implements IGamePacket {

    /**
     * Constructs a new GamePacket.
     * @param [properties] Properties to set
     */
    constructor(properties?: IGamePacket);

    /** GamePacket registerRequest. */
    public registerRequest?: (IC2SRegisterRequest|null);

    /** GamePacket registerResponse. */
    public registerResponse?: (IS2CRegisterResponse|null);

    /** GamePacket loginRequest. */
    public loginRequest?: (IC2SLoginRequest|null);

    /** GamePacket loginResponse. */
    public loginResponse?: (IS2CLoginResponse|null);

    /** GamePacket createRoomRequest. */
    public createRoomRequest?: (IC2SCreateRoomRequest|null);

    /** GamePacket createRoomResponse. */
    public createRoomResponse?: (IS2CCreateRoomResponse|null);

    /** GamePacket getRoomListRequest. */
    public getRoomListRequest?: (IC2SGetRoomListRequest|null);

    /** GamePacket getRoomListResponse. */
    public getRoomListResponse?: (IS2CGetRoomListResponse|null);

    /** GamePacket joinRoomRequest. */
    public joinRoomRequest?: (IC2SJoinRoomRequest|null);

    /** GamePacket joinRoomResponse. */
    public joinRoomResponse?: (IS2CJoinRoomResponse|null);

    /** GamePacket joinRandomRoomRequest. */
    public joinRandomRoomRequest?: (IC2SJoinRandomRoomRequest|null);

    /** GamePacket joinRandomRoomResponse. */
    public joinRandomRoomResponse?: (IS2CJoinRandomRoomResponse|null);

    /** GamePacket joinRoomNotification. */
    public joinRoomNotification?: (IS2CJoinRoomNotification|null);

    /** GamePacket leaveRoomRequest. */
    public leaveRoomRequest?: (IC2SLeaveRoomRequest|null);

    /** GamePacket leaveRoomResponse. */
    public leaveRoomResponse?: (IS2CLeaveRoomResponse|null);

    /** GamePacket leaveRoomNotification. */
    public leaveRoomNotification?: (IS2CLeaveRoomNotification|null);

    /** GamePacket gamePrepareRequest. */
    public gamePrepareRequest?: (IC2SGamePrepareRequest|null);

    /** GamePacket gamePrepareResponse. */
    public gamePrepareResponse?: (IS2CGamePrepareResponse|null);

    /** GamePacket gamePrepareNotification. */
    public gamePrepareNotification?: (IS2CGamePrepareNotification|null);

    /** GamePacket gameStartRequest. */
    public gameStartRequest?: (IC2SGameStartRequest|null);

    /** GamePacket gameStartResponse. */
    public gameStartResponse?: (IS2CGameStartResponse|null);

    /** GamePacket gameStartnotification. */
    public gameStartnotification?: (IS2CGameStartNotification|null);

    /** GamePacket positionUpdateRequest. */
    public positionUpdateRequest?: (IC2SPositionUpdateRequest|null);

    /** GamePacket positionUpdateNotification. */
    public positionUpdateNotification?: (IS2CPositionUpdateNotification|null);

    /** GamePacket useCardRequest. */
    public useCardRequest?: (IC2SUseCardRequest|null);

    /** GamePacket useCardResponse. */
    public useCardResponse?: (IS2CUseCardResponse|null);

    /** GamePacket useCardNotification. */
    public useCardNotification?: (IS2CUseCardNotification|null);

    /** GamePacket equipCardNotification. */
    public equipCardNotification?: (IS2CEquipCardNotification|null);

    /** GamePacket cardEffectNotification. */
    public cardEffectNotification?: (IS2CCardEffectNotification|null);

    /** GamePacket userUpdateNotification. */
    public userUpdateNotification?: (IS2CUserUpdateNotification|null);

    /** GamePacket phaseUpdateNotification. */
    public phaseUpdateNotification?: (IS2CPhaseUpdateNotification|null);

    /** GamePacket destroyCardRequest. */
    public destroyCardRequest?: (IC2SDestroyCardRequest|null);

    /** GamePacket destroyCardNotification. */
    public destroyCardNotification?: (IS2CDestroyCardNotification|null);

    /** GamePacket gameEndNotification. */
    public gameEndNotification?: (IS2CGameEndNotification|null);

    /** GamePacket payload. */
    public payload?: ("registerRequest"|"registerResponse"|"loginRequest"|"loginResponse"|"createRoomRequest"|"createRoomResponse"|"getRoomListRequest"|"getRoomListResponse"|"joinRoomRequest"|"joinRoomResponse"|"joinRandomRoomRequest"|"joinRandomRoomResponse"|"joinRoomNotification"|"leaveRoomRequest"|"leaveRoomResponse"|"leaveRoomNotification"|"gamePrepareRequest"|"gamePrepareResponse"|"gamePrepareNotification"|"gameStartRequest"|"gameStartResponse"|"gameStartnotification"|"positionUpdateRequest"|"positionUpdateNotification"|"useCardRequest"|"useCardResponse"|"useCardNotification"|"equipCardNotification"|"cardEffectNotification"|"userUpdateNotification"|"phaseUpdateNotification"|"destroyCardRequest"|"destroyCardNotification"|"gameEndNotification");

    /**
     * Creates a new GamePacket instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GamePacket instance
     */
    public static create(properties?: IGamePacket): GamePacket;

    /**
     * Encodes the specified GamePacket message. Does not implicitly {@link GamePacket.verify|verify} messages.
     * @param message GamePacket message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IGamePacket, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified GamePacket message, length delimited. Does not implicitly {@link GamePacket.verify|verify} messages.
     * @param message GamePacket message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IGamePacket, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GamePacket message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns GamePacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): GamePacket;

    /**
     * Decodes a GamePacket message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns GamePacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): GamePacket;

    /**
     * Verifies a GamePacket message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a GamePacket message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns GamePacket
     */
    public static fromObject(object: { [k: string]: any }): GamePacket;

    /**
     * Creates a plain object from a GamePacket message. Also converts values to other types if specified.
     * @param message GamePacket
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: GamePacket, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this GamePacket to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for GamePacket
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** GlobalFailCode enum. */
export enum GlobalFailCode {
    NONE = 0,
    UNKNOWN_ERROR = 1,
    INVALID_REQUEST = 2,
    AUTHENTICATION_FAILED = 3,
    CREATE_ROOM_FAILED = 4,
    JOIN_ROOM_FAILED = 5,
    LEAVE_ROOM_FAILED = 6,
    REGISTER_FAILED = 7
}
