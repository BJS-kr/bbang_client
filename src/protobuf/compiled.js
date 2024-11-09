/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.RoomData = (function() {

    /**
     * Properties of a RoomData.
     * @exports IRoomData
     * @interface IRoomData
     * @property {number|null} [id] RoomData id
     * @property {string|null} [ownerId] RoomData ownerId
     * @property {string|null} [name] RoomData name
     * @property {number|null} [maxUserNum] RoomData maxUserNum
     * @property {RoomStateType|null} [state] RoomData state
     * @property {Array.<IUserData>|null} [users] RoomData users
     */

    /**
     * Constructs a new RoomData.
     * @exports RoomData
     * @classdesc Represents a RoomData.
     * @implements IRoomData
     * @constructor
     * @param {IRoomData=} [properties] Properties to set
     */
    function RoomData(properties) {
        this.users = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * RoomData id.
     * @member {number} id
     * @memberof RoomData
     * @instance
     */
    RoomData.prototype.id = 0;

    /**
     * RoomData ownerId.
     * @member {string} ownerId
     * @memberof RoomData
     * @instance
     */
    RoomData.prototype.ownerId = "";

    /**
     * RoomData name.
     * @member {string} name
     * @memberof RoomData
     * @instance
     */
    RoomData.prototype.name = "";

    /**
     * RoomData maxUserNum.
     * @member {number} maxUserNum
     * @memberof RoomData
     * @instance
     */
    RoomData.prototype.maxUserNum = 0;

    /**
     * RoomData state.
     * @member {RoomStateType} state
     * @memberof RoomData
     * @instance
     */
    RoomData.prototype.state = 0;

    /**
     * RoomData users.
     * @member {Array.<IUserData>} users
     * @memberof RoomData
     * @instance
     */
    RoomData.prototype.users = $util.emptyArray;

    /**
     * Creates a new RoomData instance using the specified properties.
     * @function create
     * @memberof RoomData
     * @static
     * @param {IRoomData=} [properties] Properties to set
     * @returns {RoomData} RoomData instance
     */
    RoomData.create = function create(properties) {
        return new RoomData(properties);
    };

    /**
     * Encodes the specified RoomData message. Does not implicitly {@link RoomData.verify|verify} messages.
     * @function encode
     * @memberof RoomData
     * @static
     * @param {IRoomData} message RoomData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RoomData.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
        if (message.ownerId != null && Object.hasOwnProperty.call(message, "ownerId"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.ownerId);
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.name);
        if (message.maxUserNum != null && Object.hasOwnProperty.call(message, "maxUserNum"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.maxUserNum);
        if (message.state != null && Object.hasOwnProperty.call(message, "state"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.state);
        if (message.users != null && message.users.length)
            for (var i = 0; i < message.users.length; ++i)
                $root.UserData.encode(message.users[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified RoomData message, length delimited. Does not implicitly {@link RoomData.verify|verify} messages.
     * @function encodeDelimited
     * @memberof RoomData
     * @static
     * @param {IRoomData} message RoomData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    RoomData.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a RoomData message from the specified reader or buffer.
     * @function decode
     * @memberof RoomData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {RoomData} RoomData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RoomData.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.RoomData();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.id = reader.int32();
                    break;
                }
            case 2: {
                    message.ownerId = reader.string();
                    break;
                }
            case 3: {
                    message.name = reader.string();
                    break;
                }
            case 4: {
                    message.maxUserNum = reader.int32();
                    break;
                }
            case 5: {
                    message.state = reader.int32();
                    break;
                }
            case 6: {
                    if (!(message.users && message.users.length))
                        message.users = [];
                    message.users.push($root.UserData.decode(reader, reader.uint32()));
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a RoomData message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof RoomData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {RoomData} RoomData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    RoomData.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a RoomData message.
     * @function verify
     * @memberof RoomData
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    RoomData.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isInteger(message.id))
                return "id: integer expected";
        if (message.ownerId != null && message.hasOwnProperty("ownerId"))
            if (!$util.isString(message.ownerId))
                return "ownerId: string expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.maxUserNum != null && message.hasOwnProperty("maxUserNum"))
            if (!$util.isInteger(message.maxUserNum))
                return "maxUserNum: integer expected";
        if (message.state != null && message.hasOwnProperty("state"))
            switch (message.state) {
            default:
                return "state: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
        if (message.users != null && message.hasOwnProperty("users")) {
            if (!Array.isArray(message.users))
                return "users: array expected";
            for (var i = 0; i < message.users.length; ++i) {
                var error = $root.UserData.verify(message.users[i]);
                if (error)
                    return "users." + error;
            }
        }
        return null;
    };

    /**
     * Creates a RoomData message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof RoomData
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {RoomData} RoomData
     */
    RoomData.fromObject = function fromObject(object) {
        if (object instanceof $root.RoomData)
            return object;
        var message = new $root.RoomData();
        if (object.id != null)
            message.id = object.id | 0;
        if (object.ownerId != null)
            message.ownerId = String(object.ownerId);
        if (object.name != null)
            message.name = String(object.name);
        if (object.maxUserNum != null)
            message.maxUserNum = object.maxUserNum | 0;
        switch (object.state) {
        default:
            if (typeof object.state === "number") {
                message.state = object.state;
                break;
            }
            break;
        case "WAIT":
        case 0:
            message.state = 0;
            break;
        case "PREPARE":
        case 1:
            message.state = 1;
            break;
        case "INGAME":
        case 2:
            message.state = 2;
            break;
        }
        if (object.users) {
            if (!Array.isArray(object.users))
                throw TypeError(".RoomData.users: array expected");
            message.users = [];
            for (var i = 0; i < object.users.length; ++i) {
                if (typeof object.users[i] !== "object")
                    throw TypeError(".RoomData.users: object expected");
                message.users[i] = $root.UserData.fromObject(object.users[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a RoomData message. Also converts values to other types if specified.
     * @function toObject
     * @memberof RoomData
     * @static
     * @param {RoomData} message RoomData
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    RoomData.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.users = [];
        if (options.defaults) {
            object.id = 0;
            object.ownerId = "";
            object.name = "";
            object.maxUserNum = 0;
            object.state = options.enums === String ? "WAIT" : 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.ownerId != null && message.hasOwnProperty("ownerId"))
            object.ownerId = message.ownerId;
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.maxUserNum != null && message.hasOwnProperty("maxUserNum"))
            object.maxUserNum = message.maxUserNum;
        if (message.state != null && message.hasOwnProperty("state"))
            object.state = options.enums === String ? $root.RoomStateType[message.state] === undefined ? message.state : $root.RoomStateType[message.state] : message.state;
        if (message.users && message.users.length) {
            object.users = [];
            for (var j = 0; j < message.users.length; ++j)
                object.users[j] = $root.UserData.toObject(message.users[j], options);
        }
        return object;
    };

    /**
     * Converts this RoomData to JSON.
     * @function toJSON
     * @memberof RoomData
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    RoomData.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for RoomData
     * @function getTypeUrl
     * @memberof RoomData
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    RoomData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/RoomData";
    };

    return RoomData;
})();

$root.UserData = (function() {

    /**
     * Properties of a UserData.
     * @exports IUserData
     * @interface IUserData
     * @property {string|null} [id] UserData id
     * @property {string|null} [nickname] UserData nickname
     * @property {ICharacterData|null} [character] UserData character
     */

    /**
     * Constructs a new UserData.
     * @exports UserData
     * @classdesc Represents a UserData.
     * @implements IUserData
     * @constructor
     * @param {IUserData=} [properties] Properties to set
     */
    function UserData(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * UserData id.
     * @member {string} id
     * @memberof UserData
     * @instance
     */
    UserData.prototype.id = "";

    /**
     * UserData nickname.
     * @member {string} nickname
     * @memberof UserData
     * @instance
     */
    UserData.prototype.nickname = "";

    /**
     * UserData character.
     * @member {ICharacterData|null|undefined} character
     * @memberof UserData
     * @instance
     */
    UserData.prototype.character = null;

    /**
     * Creates a new UserData instance using the specified properties.
     * @function create
     * @memberof UserData
     * @static
     * @param {IUserData=} [properties] Properties to set
     * @returns {UserData} UserData instance
     */
    UserData.create = function create(properties) {
        return new UserData(properties);
    };

    /**
     * Encodes the specified UserData message. Does not implicitly {@link UserData.verify|verify} messages.
     * @function encode
     * @memberof UserData
     * @static
     * @param {IUserData} message UserData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserData.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.nickname != null && Object.hasOwnProperty.call(message, "nickname"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.nickname);
        if (message.character != null && Object.hasOwnProperty.call(message, "character"))
            $root.CharacterData.encode(message.character, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified UserData message, length delimited. Does not implicitly {@link UserData.verify|verify} messages.
     * @function encodeDelimited
     * @memberof UserData
     * @static
     * @param {IUserData} message UserData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    UserData.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a UserData message from the specified reader or buffer.
     * @function decode
     * @memberof UserData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {UserData} UserData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserData.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UserData();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.id = reader.string();
                    break;
                }
            case 2: {
                    message.nickname = reader.string();
                    break;
                }
            case 3: {
                    message.character = $root.CharacterData.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a UserData message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof UserData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {UserData} UserData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    UserData.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a UserData message.
     * @function verify
     * @memberof UserData
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    UserData.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.nickname != null && message.hasOwnProperty("nickname"))
            if (!$util.isString(message.nickname))
                return "nickname: string expected";
        if (message.character != null && message.hasOwnProperty("character")) {
            var error = $root.CharacterData.verify(message.character);
            if (error)
                return "character." + error;
        }
        return null;
    };

    /**
     * Creates a UserData message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof UserData
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {UserData} UserData
     */
    UserData.fromObject = function fromObject(object) {
        if (object instanceof $root.UserData)
            return object;
        var message = new $root.UserData();
        if (object.id != null)
            message.id = String(object.id);
        if (object.nickname != null)
            message.nickname = String(object.nickname);
        if (object.character != null) {
            if (typeof object.character !== "object")
                throw TypeError(".UserData.character: object expected");
            message.character = $root.CharacterData.fromObject(object.character);
        }
        return message;
    };

    /**
     * Creates a plain object from a UserData message. Also converts values to other types if specified.
     * @function toObject
     * @memberof UserData
     * @static
     * @param {UserData} message UserData
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    UserData.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = "";
            object.nickname = "";
            object.character = null;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.nickname != null && message.hasOwnProperty("nickname"))
            object.nickname = message.nickname;
        if (message.character != null && message.hasOwnProperty("character"))
            object.character = $root.CharacterData.toObject(message.character, options);
        return object;
    };

    /**
     * Converts this UserData to JSON.
     * @function toJSON
     * @memberof UserData
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    UserData.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for UserData
     * @function getTypeUrl
     * @memberof UserData
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    UserData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/UserData";
    };

    return UserData;
})();

$root.CharacterData = (function() {

    /**
     * Properties of a CharacterData.
     * @exports ICharacterData
     * @interface ICharacterData
     * @property {CharacterType|null} [characterType] CharacterData characterType
     * @property {RoleType|null} [roleType] CharacterData roleType
     * @property {number|null} [hp] CharacterData hp
     * @property {number|null} [weapon] CharacterData weapon
     * @property {ICharacterStateInfoData|null} [stateInfo] CharacterData stateInfo
     * @property {Array.<number>|null} [equips] CharacterData equips
     * @property {Array.<number>|null} [debuffs] CharacterData debuffs
     * @property {Array.<ICardData>|null} [handCards] CharacterData handCards
     * @property {number|null} [bbangCount] CharacterData bbangCount
     * @property {number|null} [handCardsCount] CharacterData handCardsCount
     */

    /**
     * Constructs a new CharacterData.
     * @exports CharacterData
     * @classdesc Represents a CharacterData.
     * @implements ICharacterData
     * @constructor
     * @param {ICharacterData=} [properties] Properties to set
     */
    function CharacterData(properties) {
        this.equips = [];
        this.debuffs = [];
        this.handCards = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CharacterData characterType.
     * @member {CharacterType} characterType
     * @memberof CharacterData
     * @instance
     */
    CharacterData.prototype.characterType = 0;

    /**
     * CharacterData roleType.
     * @member {RoleType} roleType
     * @memberof CharacterData
     * @instance
     */
    CharacterData.prototype.roleType = 0;

    /**
     * CharacterData hp.
     * @member {number} hp
     * @memberof CharacterData
     * @instance
     */
    CharacterData.prototype.hp = 0;

    /**
     * CharacterData weapon.
     * @member {number} weapon
     * @memberof CharacterData
     * @instance
     */
    CharacterData.prototype.weapon = 0;

    /**
     * CharacterData stateInfo.
     * @member {ICharacterStateInfoData|null|undefined} stateInfo
     * @memberof CharacterData
     * @instance
     */
    CharacterData.prototype.stateInfo = null;

    /**
     * CharacterData equips.
     * @member {Array.<number>} equips
     * @memberof CharacterData
     * @instance
     */
    CharacterData.prototype.equips = $util.emptyArray;

    /**
     * CharacterData debuffs.
     * @member {Array.<number>} debuffs
     * @memberof CharacterData
     * @instance
     */
    CharacterData.prototype.debuffs = $util.emptyArray;

    /**
     * CharacterData handCards.
     * @member {Array.<ICardData>} handCards
     * @memberof CharacterData
     * @instance
     */
    CharacterData.prototype.handCards = $util.emptyArray;

    /**
     * CharacterData bbangCount.
     * @member {number} bbangCount
     * @memberof CharacterData
     * @instance
     */
    CharacterData.prototype.bbangCount = 0;

    /**
     * CharacterData handCardsCount.
     * @member {number} handCardsCount
     * @memberof CharacterData
     * @instance
     */
    CharacterData.prototype.handCardsCount = 0;

    /**
     * Creates a new CharacterData instance using the specified properties.
     * @function create
     * @memberof CharacterData
     * @static
     * @param {ICharacterData=} [properties] Properties to set
     * @returns {CharacterData} CharacterData instance
     */
    CharacterData.create = function create(properties) {
        return new CharacterData(properties);
    };

    /**
     * Encodes the specified CharacterData message. Does not implicitly {@link CharacterData.verify|verify} messages.
     * @function encode
     * @memberof CharacterData
     * @static
     * @param {ICharacterData} message CharacterData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CharacterData.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.characterType != null && Object.hasOwnProperty.call(message, "characterType"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.characterType);
        if (message.roleType != null && Object.hasOwnProperty.call(message, "roleType"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.roleType);
        if (message.hp != null && Object.hasOwnProperty.call(message, "hp"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.hp);
        if (message.weapon != null && Object.hasOwnProperty.call(message, "weapon"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.weapon);
        if (message.stateInfo != null && Object.hasOwnProperty.call(message, "stateInfo"))
            $root.CharacterStateInfoData.encode(message.stateInfo, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.equips != null && message.equips.length) {
            writer.uint32(/* id 6, wireType 2 =*/50).fork();
            for (var i = 0; i < message.equips.length; ++i)
                writer.int32(message.equips[i]);
            writer.ldelim();
        }
        if (message.debuffs != null && message.debuffs.length) {
            writer.uint32(/* id 7, wireType 2 =*/58).fork();
            for (var i = 0; i < message.debuffs.length; ++i)
                writer.int32(message.debuffs[i]);
            writer.ldelim();
        }
        if (message.handCards != null && message.handCards.length)
            for (var i = 0; i < message.handCards.length; ++i)
                $root.CardData.encode(message.handCards[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        if (message.bbangCount != null && Object.hasOwnProperty.call(message, "bbangCount"))
            writer.uint32(/* id 9, wireType 0 =*/72).int32(message.bbangCount);
        if (message.handCardsCount != null && Object.hasOwnProperty.call(message, "handCardsCount"))
            writer.uint32(/* id 10, wireType 0 =*/80).int32(message.handCardsCount);
        return writer;
    };

    /**
     * Encodes the specified CharacterData message, length delimited. Does not implicitly {@link CharacterData.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CharacterData
     * @static
     * @param {ICharacterData} message CharacterData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CharacterData.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CharacterData message from the specified reader or buffer.
     * @function decode
     * @memberof CharacterData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CharacterData} CharacterData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CharacterData.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CharacterData();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.characterType = reader.int32();
                    break;
                }
            case 2: {
                    message.roleType = reader.int32();
                    break;
                }
            case 3: {
                    message.hp = reader.int32();
                    break;
                }
            case 4: {
                    message.weapon = reader.int32();
                    break;
                }
            case 5: {
                    message.stateInfo = $root.CharacterStateInfoData.decode(reader, reader.uint32());
                    break;
                }
            case 6: {
                    if (!(message.equips && message.equips.length))
                        message.equips = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.equips.push(reader.int32());
                    } else
                        message.equips.push(reader.int32());
                    break;
                }
            case 7: {
                    if (!(message.debuffs && message.debuffs.length))
                        message.debuffs = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.debuffs.push(reader.int32());
                    } else
                        message.debuffs.push(reader.int32());
                    break;
                }
            case 8: {
                    if (!(message.handCards && message.handCards.length))
                        message.handCards = [];
                    message.handCards.push($root.CardData.decode(reader, reader.uint32()));
                    break;
                }
            case 9: {
                    message.bbangCount = reader.int32();
                    break;
                }
            case 10: {
                    message.handCardsCount = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CharacterData message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CharacterData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CharacterData} CharacterData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CharacterData.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CharacterData message.
     * @function verify
     * @memberof CharacterData
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CharacterData.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.characterType != null && message.hasOwnProperty("characterType"))
            switch (message.characterType) {
            default:
                return "characterType: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
                break;
            }
        if (message.roleType != null && message.hasOwnProperty("roleType"))
            switch (message.roleType) {
            default:
                return "roleType: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
                break;
            }
        if (message.hp != null && message.hasOwnProperty("hp"))
            if (!$util.isInteger(message.hp))
                return "hp: integer expected";
        if (message.weapon != null && message.hasOwnProperty("weapon"))
            if (!$util.isInteger(message.weapon))
                return "weapon: integer expected";
        if (message.stateInfo != null && message.hasOwnProperty("stateInfo")) {
            var error = $root.CharacterStateInfoData.verify(message.stateInfo);
            if (error)
                return "stateInfo." + error;
        }
        if (message.equips != null && message.hasOwnProperty("equips")) {
            if (!Array.isArray(message.equips))
                return "equips: array expected";
            for (var i = 0; i < message.equips.length; ++i)
                if (!$util.isInteger(message.equips[i]))
                    return "equips: integer[] expected";
        }
        if (message.debuffs != null && message.hasOwnProperty("debuffs")) {
            if (!Array.isArray(message.debuffs))
                return "debuffs: array expected";
            for (var i = 0; i < message.debuffs.length; ++i)
                if (!$util.isInteger(message.debuffs[i]))
                    return "debuffs: integer[] expected";
        }
        if (message.handCards != null && message.hasOwnProperty("handCards")) {
            if (!Array.isArray(message.handCards))
                return "handCards: array expected";
            for (var i = 0; i < message.handCards.length; ++i) {
                var error = $root.CardData.verify(message.handCards[i]);
                if (error)
                    return "handCards." + error;
            }
        }
        if (message.bbangCount != null && message.hasOwnProperty("bbangCount"))
            if (!$util.isInteger(message.bbangCount))
                return "bbangCount: integer expected";
        if (message.handCardsCount != null && message.hasOwnProperty("handCardsCount"))
            if (!$util.isInteger(message.handCardsCount))
                return "handCardsCount: integer expected";
        return null;
    };

    /**
     * Creates a CharacterData message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CharacterData
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CharacterData} CharacterData
     */
    CharacterData.fromObject = function fromObject(object) {
        if (object instanceof $root.CharacterData)
            return object;
        var message = new $root.CharacterData();
        switch (object.characterType) {
        default:
            if (typeof object.characterType === "number") {
                message.characterType = object.characterType;
                break;
            }
            break;
        case "NONE_CHARACTER":
        case 0:
            message.characterType = 0;
            break;
        case "RED":
        case 1:
            message.characterType = 1;
            break;
        case "BLUE":
        case 2:
            message.characterType = 2;
            break;
        case "SHARK":
        case 3:
            message.characterType = 3;
            break;
        case "KNIGHT":
        case 4:
            message.characterType = 4;
            break;
        case "MALANG":
        case 5:
            message.characterType = 5;
            break;
        case "DINO":
        case 6:
            message.characterType = 6;
            break;
        case "FROGGY":
        case 7:
            message.characterType = 7;
            break;
        case "PINK":
        case 8:
            message.characterType = 8;
            break;
        case "SWIM_GLASSES":
        case 9:
            message.characterType = 9;
            break;
        case "MASK":
        case 10:
            message.characterType = 10;
            break;
        case "SLIME":
        case 11:
            message.characterType = 11;
            break;
        case "DINOSAUR":
        case 12:
            message.characterType = 12;
            break;
        case "PINK_SLIME":
        case 13:
            message.characterType = 13;
            break;
        }
        switch (object.roleType) {
        default:
            if (typeof object.roleType === "number") {
                message.roleType = object.roleType;
                break;
            }
            break;
        case "NONE_ROLE":
        case 0:
            message.roleType = 0;
            break;
        case "TARGET":
        case 1:
            message.roleType = 1;
            break;
        case "BODYGUARD":
        case 2:
            message.roleType = 2;
            break;
        case "HITMAN":
        case 3:
            message.roleType = 3;
            break;
        case "PSYCHOPATH":
        case 4:
            message.roleType = 4;
            break;
        }
        if (object.hp != null)
            message.hp = object.hp | 0;
        if (object.weapon != null)
            message.weapon = object.weapon | 0;
        if (object.stateInfo != null) {
            if (typeof object.stateInfo !== "object")
                throw TypeError(".CharacterData.stateInfo: object expected");
            message.stateInfo = $root.CharacterStateInfoData.fromObject(object.stateInfo);
        }
        if (object.equips) {
            if (!Array.isArray(object.equips))
                throw TypeError(".CharacterData.equips: array expected");
            message.equips = [];
            for (var i = 0; i < object.equips.length; ++i)
                message.equips[i] = object.equips[i] | 0;
        }
        if (object.debuffs) {
            if (!Array.isArray(object.debuffs))
                throw TypeError(".CharacterData.debuffs: array expected");
            message.debuffs = [];
            for (var i = 0; i < object.debuffs.length; ++i)
                message.debuffs[i] = object.debuffs[i] | 0;
        }
        if (object.handCards) {
            if (!Array.isArray(object.handCards))
                throw TypeError(".CharacterData.handCards: array expected");
            message.handCards = [];
            for (var i = 0; i < object.handCards.length; ++i) {
                if (typeof object.handCards[i] !== "object")
                    throw TypeError(".CharacterData.handCards: object expected");
                message.handCards[i] = $root.CardData.fromObject(object.handCards[i]);
            }
        }
        if (object.bbangCount != null)
            message.bbangCount = object.bbangCount | 0;
        if (object.handCardsCount != null)
            message.handCardsCount = object.handCardsCount | 0;
        return message;
    };

    /**
     * Creates a plain object from a CharacterData message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CharacterData
     * @static
     * @param {CharacterData} message CharacterData
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CharacterData.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.equips = [];
            object.debuffs = [];
            object.handCards = [];
        }
        if (options.defaults) {
            object.characterType = options.enums === String ? "NONE_CHARACTER" : 0;
            object.roleType = options.enums === String ? "NONE_ROLE" : 0;
            object.hp = 0;
            object.weapon = 0;
            object.stateInfo = null;
            object.bbangCount = 0;
            object.handCardsCount = 0;
        }
        if (message.characterType != null && message.hasOwnProperty("characterType"))
            object.characterType = options.enums === String ? $root.CharacterType[message.characterType] === undefined ? message.characterType : $root.CharacterType[message.characterType] : message.characterType;
        if (message.roleType != null && message.hasOwnProperty("roleType"))
            object.roleType = options.enums === String ? $root.RoleType[message.roleType] === undefined ? message.roleType : $root.RoleType[message.roleType] : message.roleType;
        if (message.hp != null && message.hasOwnProperty("hp"))
            object.hp = message.hp;
        if (message.weapon != null && message.hasOwnProperty("weapon"))
            object.weapon = message.weapon;
        if (message.stateInfo != null && message.hasOwnProperty("stateInfo"))
            object.stateInfo = $root.CharacterStateInfoData.toObject(message.stateInfo, options);
        if (message.equips && message.equips.length) {
            object.equips = [];
            for (var j = 0; j < message.equips.length; ++j)
                object.equips[j] = message.equips[j];
        }
        if (message.debuffs && message.debuffs.length) {
            object.debuffs = [];
            for (var j = 0; j < message.debuffs.length; ++j)
                object.debuffs[j] = message.debuffs[j];
        }
        if (message.handCards && message.handCards.length) {
            object.handCards = [];
            for (var j = 0; j < message.handCards.length; ++j)
                object.handCards[j] = $root.CardData.toObject(message.handCards[j], options);
        }
        if (message.bbangCount != null && message.hasOwnProperty("bbangCount"))
            object.bbangCount = message.bbangCount;
        if (message.handCardsCount != null && message.hasOwnProperty("handCardsCount"))
            object.handCardsCount = message.handCardsCount;
        return object;
    };

    /**
     * Converts this CharacterData to JSON.
     * @function toJSON
     * @memberof CharacterData
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CharacterData.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for CharacterData
     * @function getTypeUrl
     * @memberof CharacterData
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    CharacterData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/CharacterData";
    };

    return CharacterData;
})();

$root.CharacterPositionData = (function() {

    /**
     * Properties of a CharacterPositionData.
     * @exports ICharacterPositionData
     * @interface ICharacterPositionData
     * @property {string|null} [id] CharacterPositionData id
     * @property {number|null} [x] CharacterPositionData x
     * @property {number|null} [y] CharacterPositionData y
     */

    /**
     * Constructs a new CharacterPositionData.
     * @exports CharacterPositionData
     * @classdesc Represents a CharacterPositionData.
     * @implements ICharacterPositionData
     * @constructor
     * @param {ICharacterPositionData=} [properties] Properties to set
     */
    function CharacterPositionData(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CharacterPositionData id.
     * @member {string} id
     * @memberof CharacterPositionData
     * @instance
     */
    CharacterPositionData.prototype.id = "";

    /**
     * CharacterPositionData x.
     * @member {number} x
     * @memberof CharacterPositionData
     * @instance
     */
    CharacterPositionData.prototype.x = 0;

    /**
     * CharacterPositionData y.
     * @member {number} y
     * @memberof CharacterPositionData
     * @instance
     */
    CharacterPositionData.prototype.y = 0;

    /**
     * Creates a new CharacterPositionData instance using the specified properties.
     * @function create
     * @memberof CharacterPositionData
     * @static
     * @param {ICharacterPositionData=} [properties] Properties to set
     * @returns {CharacterPositionData} CharacterPositionData instance
     */
    CharacterPositionData.create = function create(properties) {
        return new CharacterPositionData(properties);
    };

    /**
     * Encodes the specified CharacterPositionData message. Does not implicitly {@link CharacterPositionData.verify|verify} messages.
     * @function encode
     * @memberof CharacterPositionData
     * @static
     * @param {ICharacterPositionData} message CharacterPositionData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CharacterPositionData.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.x != null && Object.hasOwnProperty.call(message, "x"))
            writer.uint32(/* id 2, wireType 1 =*/17).double(message.x);
        if (message.y != null && Object.hasOwnProperty.call(message, "y"))
            writer.uint32(/* id 3, wireType 1 =*/25).double(message.y);
        return writer;
    };

    /**
     * Encodes the specified CharacterPositionData message, length delimited. Does not implicitly {@link CharacterPositionData.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CharacterPositionData
     * @static
     * @param {ICharacterPositionData} message CharacterPositionData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CharacterPositionData.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CharacterPositionData message from the specified reader or buffer.
     * @function decode
     * @memberof CharacterPositionData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CharacterPositionData} CharacterPositionData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CharacterPositionData.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CharacterPositionData();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.id = reader.string();
                    break;
                }
            case 2: {
                    message.x = reader.double();
                    break;
                }
            case 3: {
                    message.y = reader.double();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CharacterPositionData message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CharacterPositionData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CharacterPositionData} CharacterPositionData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CharacterPositionData.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CharacterPositionData message.
     * @function verify
     * @memberof CharacterPositionData
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CharacterPositionData.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.x != null && message.hasOwnProperty("x"))
            if (typeof message.x !== "number")
                return "x: number expected";
        if (message.y != null && message.hasOwnProperty("y"))
            if (typeof message.y !== "number")
                return "y: number expected";
        return null;
    };

    /**
     * Creates a CharacterPositionData message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CharacterPositionData
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CharacterPositionData} CharacterPositionData
     */
    CharacterPositionData.fromObject = function fromObject(object) {
        if (object instanceof $root.CharacterPositionData)
            return object;
        var message = new $root.CharacterPositionData();
        if (object.id != null)
            message.id = String(object.id);
        if (object.x != null)
            message.x = Number(object.x);
        if (object.y != null)
            message.y = Number(object.y);
        return message;
    };

    /**
     * Creates a plain object from a CharacterPositionData message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CharacterPositionData
     * @static
     * @param {CharacterPositionData} message CharacterPositionData
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CharacterPositionData.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = "";
            object.x = 0;
            object.y = 0;
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.x != null && message.hasOwnProperty("x"))
            object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
        if (message.y != null && message.hasOwnProperty("y"))
            object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
        return object;
    };

    /**
     * Converts this CharacterPositionData to JSON.
     * @function toJSON
     * @memberof CharacterPositionData
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CharacterPositionData.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for CharacterPositionData
     * @function getTypeUrl
     * @memberof CharacterPositionData
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    CharacterPositionData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/CharacterPositionData";
    };

    return CharacterPositionData;
})();

$root.CardData = (function() {

    /**
     * Properties of a CardData.
     * @exports ICardData
     * @interface ICardData
     * @property {CardType|null} [type] CardData type
     * @property {number|null} [count] CardData count
     */

    /**
     * Constructs a new CardData.
     * @exports CardData
     * @classdesc Represents a CardData.
     * @implements ICardData
     * @constructor
     * @param {ICardData=} [properties] Properties to set
     */
    function CardData(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CardData type.
     * @member {CardType} type
     * @memberof CardData
     * @instance
     */
    CardData.prototype.type = 0;

    /**
     * CardData count.
     * @member {number} count
     * @memberof CardData
     * @instance
     */
    CardData.prototype.count = 0;

    /**
     * Creates a new CardData instance using the specified properties.
     * @function create
     * @memberof CardData
     * @static
     * @param {ICardData=} [properties] Properties to set
     * @returns {CardData} CardData instance
     */
    CardData.create = function create(properties) {
        return new CardData(properties);
    };

    /**
     * Encodes the specified CardData message. Does not implicitly {@link CardData.verify|verify} messages.
     * @function encode
     * @memberof CardData
     * @static
     * @param {ICardData} message CardData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CardData.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.type != null && Object.hasOwnProperty.call(message, "type"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
        if (message.count != null && Object.hasOwnProperty.call(message, "count"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.count);
        return writer;
    };

    /**
     * Encodes the specified CardData message, length delimited. Does not implicitly {@link CardData.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CardData
     * @static
     * @param {ICardData} message CardData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CardData.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CardData message from the specified reader or buffer.
     * @function decode
     * @memberof CardData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CardData} CardData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CardData.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CardData();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.type = reader.int32();
                    break;
                }
            case 2: {
                    message.count = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CardData message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CardData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CardData} CardData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CardData.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CardData message.
     * @function verify
     * @memberof CardData
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CardData.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.type != null && message.hasOwnProperty("type"))
            switch (message.type) {
            default:
                return "type: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
            case 20:
            case 21:
            case 22:
            case 23:
                break;
            }
        if (message.count != null && message.hasOwnProperty("count"))
            if (!$util.isInteger(message.count))
                return "count: integer expected";
        return null;
    };

    /**
     * Creates a CardData message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CardData
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CardData} CardData
     */
    CardData.fromObject = function fromObject(object) {
        if (object instanceof $root.CardData)
            return object;
        var message = new $root.CardData();
        switch (object.type) {
        default:
            if (typeof object.type === "number") {
                message.type = object.type;
                break;
            }
            break;
        case "NONE":
        case 0:
            message.type = 0;
            break;
        case "BBANG":
        case 1:
            message.type = 1;
            break;
        case "BIG_BBANG":
        case 2:
            message.type = 2;
            break;
        case "SHIELD":
        case 3:
            message.type = 3;
            break;
        case "VACCINE":
        case 4:
            message.type = 4;
            break;
        case "CALL_119":
        case 5:
            message.type = 5;
            break;
        case "DEATH_MATCH":
        case 6:
            message.type = 6;
            break;
        case "GUERRILLA":
        case 7:
            message.type = 7;
            break;
        case "ABSORB":
        case 8:
            message.type = 8;
            break;
        case "HALLUCINATION":
        case 9:
            message.type = 9;
            break;
        case "FLEA_MARKET":
        case 10:
            message.type = 10;
            break;
        case "MATURED_SAVINGS":
        case 11:
            message.type = 11;
            break;
        case "WIN_LOTTERY":
        case 12:
            message.type = 12;
            break;
        case "SNIPER_GUN":
        case 13:
            message.type = 13;
            break;
        case "HAND_GUN":
        case 14:
            message.type = 14;
            break;
        case "DESERT_EAGLE":
        case 15:
            message.type = 15;
            break;
        case "AUTO_RIFLE":
        case 16:
            message.type = 16;
            break;
        case "LASER_POINTER":
        case 17:
            message.type = 17;
            break;
        case "RADAR":
        case 18:
            message.type = 18;
            break;
        case "AUTO_SHIELD":
        case 19:
            message.type = 19;
            break;
        case "STEALTH_SUIT":
        case 20:
            message.type = 20;
            break;
        case "CONTAINMENT_UNIT":
        case 21:
            message.type = 21;
            break;
        case "SATELLITE_TARGET":
        case 22:
            message.type = 22;
            break;
        case "BOMB":
        case 23:
            message.type = 23;
            break;
        }
        if (object.count != null)
            message.count = object.count | 0;
        return message;
    };

    /**
     * Creates a plain object from a CardData message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CardData
     * @static
     * @param {CardData} message CardData
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CardData.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.type = options.enums === String ? "NONE" : 0;
            object.count = 0;
        }
        if (message.type != null && message.hasOwnProperty("type"))
            object.type = options.enums === String ? $root.CardType[message.type] === undefined ? message.type : $root.CardType[message.type] : message.type;
        if (message.count != null && message.hasOwnProperty("count"))
            object.count = message.count;
        return object;
    };

    /**
     * Converts this CardData to JSON.
     * @function toJSON
     * @memberof CardData
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CardData.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for CardData
     * @function getTypeUrl
     * @memberof CardData
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    CardData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/CardData";
    };

    return CardData;
})();

$root.GameStateData = (function() {

    /**
     * Properties of a GameStateData.
     * @exports IGameStateData
     * @interface IGameStateData
     * @property {PhaseType|null} [phaseType] GameStateData phaseType
     * @property {number|Long|null} [nextPhaseAt] GameStateData nextPhaseAt
     */

    /**
     * Constructs a new GameStateData.
     * @exports GameStateData
     * @classdesc Represents a GameStateData.
     * @implements IGameStateData
     * @constructor
     * @param {IGameStateData=} [properties] Properties to set
     */
    function GameStateData(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GameStateData phaseType.
     * @member {PhaseType} phaseType
     * @memberof GameStateData
     * @instance
     */
    GameStateData.prototype.phaseType = 0;

    /**
     * GameStateData nextPhaseAt.
     * @member {number|Long} nextPhaseAt
     * @memberof GameStateData
     * @instance
     */
    GameStateData.prototype.nextPhaseAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new GameStateData instance using the specified properties.
     * @function create
     * @memberof GameStateData
     * @static
     * @param {IGameStateData=} [properties] Properties to set
     * @returns {GameStateData} GameStateData instance
     */
    GameStateData.create = function create(properties) {
        return new GameStateData(properties);
    };

    /**
     * Encodes the specified GameStateData message. Does not implicitly {@link GameStateData.verify|verify} messages.
     * @function encode
     * @memberof GameStateData
     * @static
     * @param {IGameStateData} message GameStateData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GameStateData.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.phaseType != null && Object.hasOwnProperty.call(message, "phaseType"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.phaseType);
        if (message.nextPhaseAt != null && Object.hasOwnProperty.call(message, "nextPhaseAt"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.nextPhaseAt);
        return writer;
    };

    /**
     * Encodes the specified GameStateData message, length delimited. Does not implicitly {@link GameStateData.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GameStateData
     * @static
     * @param {IGameStateData} message GameStateData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GameStateData.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GameStateData message from the specified reader or buffer.
     * @function decode
     * @memberof GameStateData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GameStateData} GameStateData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GameStateData.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GameStateData();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.phaseType = reader.int32();
                    break;
                }
            case 2: {
                    message.nextPhaseAt = reader.int64();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GameStateData message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GameStateData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GameStateData} GameStateData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GameStateData.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GameStateData message.
     * @function verify
     * @memberof GameStateData
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GameStateData.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.phaseType != null && message.hasOwnProperty("phaseType"))
            switch (message.phaseType) {
            default:
                return "phaseType: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
                break;
            }
        if (message.nextPhaseAt != null && message.hasOwnProperty("nextPhaseAt"))
            if (!$util.isInteger(message.nextPhaseAt) && !(message.nextPhaseAt && $util.isInteger(message.nextPhaseAt.low) && $util.isInteger(message.nextPhaseAt.high)))
                return "nextPhaseAt: integer|Long expected";
        return null;
    };

    /**
     * Creates a GameStateData message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GameStateData
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GameStateData} GameStateData
     */
    GameStateData.fromObject = function fromObject(object) {
        if (object instanceof $root.GameStateData)
            return object;
        var message = new $root.GameStateData();
        switch (object.phaseType) {
        default:
            if (typeof object.phaseType === "number") {
                message.phaseType = object.phaseType;
                break;
            }
            break;
        case "NONE_PHASE":
        case 0:
            message.phaseType = 0;
            break;
        case "DAY":
        case 1:
            message.phaseType = 1;
            break;
        case "EVENING":
        case 2:
            message.phaseType = 2;
            break;
        case "END":
        case 3:
            message.phaseType = 3;
            break;
        }
        if (object.nextPhaseAt != null)
            if ($util.Long)
                (message.nextPhaseAt = $util.Long.fromValue(object.nextPhaseAt)).unsigned = false;
            else if (typeof object.nextPhaseAt === "string")
                message.nextPhaseAt = parseInt(object.nextPhaseAt, 10);
            else if (typeof object.nextPhaseAt === "number")
                message.nextPhaseAt = object.nextPhaseAt;
            else if (typeof object.nextPhaseAt === "object")
                message.nextPhaseAt = new $util.LongBits(object.nextPhaseAt.low >>> 0, object.nextPhaseAt.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a GameStateData message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GameStateData
     * @static
     * @param {GameStateData} message GameStateData
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GameStateData.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.phaseType = options.enums === String ? "NONE_PHASE" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.nextPhaseAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.nextPhaseAt = options.longs === String ? "0" : 0;
        }
        if (message.phaseType != null && message.hasOwnProperty("phaseType"))
            object.phaseType = options.enums === String ? $root.PhaseType[message.phaseType] === undefined ? message.phaseType : $root.PhaseType[message.phaseType] : message.phaseType;
        if (message.nextPhaseAt != null && message.hasOwnProperty("nextPhaseAt"))
            if (typeof message.nextPhaseAt === "number")
                object.nextPhaseAt = options.longs === String ? String(message.nextPhaseAt) : message.nextPhaseAt;
            else
                object.nextPhaseAt = options.longs === String ? $util.Long.prototype.toString.call(message.nextPhaseAt) : options.longs === Number ? new $util.LongBits(message.nextPhaseAt.low >>> 0, message.nextPhaseAt.high >>> 0).toNumber() : message.nextPhaseAt;
        return object;
    };

    /**
     * Converts this GameStateData to JSON.
     * @function toJSON
     * @memberof GameStateData
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GameStateData.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for GameStateData
     * @function getTypeUrl
     * @memberof GameStateData
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    GameStateData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/GameStateData";
    };

    return GameStateData;
})();

$root.CharacterStateInfoData = (function() {

    /**
     * Properties of a CharacterStateInfoData.
     * @exports ICharacterStateInfoData
     * @interface ICharacterStateInfoData
     * @property {CharacterStateType|null} [state] CharacterStateInfoData state
     * @property {CharacterStateType|null} [nextState] CharacterStateInfoData nextState
     * @property {number|Long|null} [nextStateAt] CharacterStateInfoData nextStateAt
     * @property {string|null} [stateTargetUserId] CharacterStateInfoData stateTargetUserId
     */

    /**
     * Constructs a new CharacterStateInfoData.
     * @exports CharacterStateInfoData
     * @classdesc Represents a CharacterStateInfoData.
     * @implements ICharacterStateInfoData
     * @constructor
     * @param {ICharacterStateInfoData=} [properties] Properties to set
     */
    function CharacterStateInfoData(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CharacterStateInfoData state.
     * @member {CharacterStateType} state
     * @memberof CharacterStateInfoData
     * @instance
     */
    CharacterStateInfoData.prototype.state = 0;

    /**
     * CharacterStateInfoData nextState.
     * @member {CharacterStateType} nextState
     * @memberof CharacterStateInfoData
     * @instance
     */
    CharacterStateInfoData.prototype.nextState = 0;

    /**
     * CharacterStateInfoData nextStateAt.
     * @member {number|Long} nextStateAt
     * @memberof CharacterStateInfoData
     * @instance
     */
    CharacterStateInfoData.prototype.nextStateAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * CharacterStateInfoData stateTargetUserId.
     * @member {string} stateTargetUserId
     * @memberof CharacterStateInfoData
     * @instance
     */
    CharacterStateInfoData.prototype.stateTargetUserId = "";

    /**
     * Creates a new CharacterStateInfoData instance using the specified properties.
     * @function create
     * @memberof CharacterStateInfoData
     * @static
     * @param {ICharacterStateInfoData=} [properties] Properties to set
     * @returns {CharacterStateInfoData} CharacterStateInfoData instance
     */
    CharacterStateInfoData.create = function create(properties) {
        return new CharacterStateInfoData(properties);
    };

    /**
     * Encodes the specified CharacterStateInfoData message. Does not implicitly {@link CharacterStateInfoData.verify|verify} messages.
     * @function encode
     * @memberof CharacterStateInfoData
     * @static
     * @param {ICharacterStateInfoData} message CharacterStateInfoData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CharacterStateInfoData.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.state != null && Object.hasOwnProperty.call(message, "state"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.state);
        if (message.nextState != null && Object.hasOwnProperty.call(message, "nextState"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nextState);
        if (message.nextStateAt != null && Object.hasOwnProperty.call(message, "nextStateAt"))
            writer.uint32(/* id 3, wireType 0 =*/24).int64(message.nextStateAt);
        if (message.stateTargetUserId != null && Object.hasOwnProperty.call(message, "stateTargetUserId"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.stateTargetUserId);
        return writer;
    };

    /**
     * Encodes the specified CharacterStateInfoData message, length delimited. Does not implicitly {@link CharacterStateInfoData.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CharacterStateInfoData
     * @static
     * @param {ICharacterStateInfoData} message CharacterStateInfoData message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CharacterStateInfoData.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CharacterStateInfoData message from the specified reader or buffer.
     * @function decode
     * @memberof CharacterStateInfoData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CharacterStateInfoData} CharacterStateInfoData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CharacterStateInfoData.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.CharacterStateInfoData();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.state = reader.int32();
                    break;
                }
            case 2: {
                    message.nextState = reader.int32();
                    break;
                }
            case 3: {
                    message.nextStateAt = reader.int64();
                    break;
                }
            case 4: {
                    message.stateTargetUserId = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CharacterStateInfoData message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CharacterStateInfoData
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CharacterStateInfoData} CharacterStateInfoData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CharacterStateInfoData.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CharacterStateInfoData message.
     * @function verify
     * @memberof CharacterStateInfoData
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CharacterStateInfoData.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.state != null && message.hasOwnProperty("state"))
            switch (message.state) {
            default:
                return "state: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
                break;
            }
        if (message.nextState != null && message.hasOwnProperty("nextState"))
            switch (message.nextState) {
            default:
                return "nextState: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
                break;
            }
        if (message.nextStateAt != null && message.hasOwnProperty("nextStateAt"))
            if (!$util.isInteger(message.nextStateAt) && !(message.nextStateAt && $util.isInteger(message.nextStateAt.low) && $util.isInteger(message.nextStateAt.high)))
                return "nextStateAt: integer|Long expected";
        if (message.stateTargetUserId != null && message.hasOwnProperty("stateTargetUserId"))
            if (!$util.isString(message.stateTargetUserId))
                return "stateTargetUserId: string expected";
        return null;
    };

    /**
     * Creates a CharacterStateInfoData message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CharacterStateInfoData
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CharacterStateInfoData} CharacterStateInfoData
     */
    CharacterStateInfoData.fromObject = function fromObject(object) {
        if (object instanceof $root.CharacterStateInfoData)
            return object;
        var message = new $root.CharacterStateInfoData();
        switch (object.state) {
        default:
            if (typeof object.state === "number") {
                message.state = object.state;
                break;
            }
            break;
        case "NONE_CHARACTER_STATE":
        case 0:
            message.state = 0;
            break;
        case "BBANG_SHOOTER":
        case 1:
            message.state = 1;
            break;
        case "BBANG_TARGET":
        case 2:
            message.state = 2;
            break;
        case "DEATH_MATCH_STATE":
        case 3:
            message.state = 3;
            break;
        case "DEATH_MATCH_TURN_STATE":
        case 4:
            message.state = 4;
            break;
        case "FLEA_MARKET_TURN":
        case 5:
            message.state = 5;
            break;
        case "FLEA_MARKET_WAIT":
        case 6:
            message.state = 6;
            break;
        case "GUERRILLA_SHOOTER":
        case 7:
            message.state = 7;
            break;
        case "GUERRILLA_TARGET":
        case 8:
            message.state = 8;
            break;
        case "BIG_BBANG_SHOOTER":
        case 9:
            message.state = 9;
            break;
        case "BIG_BBANG_TARGET":
        case 10:
            message.state = 10;
            break;
        case "ABSORBING":
        case 11:
            message.state = 11;
            break;
        case "ABSORB_TARGET":
        case 12:
            message.state = 12;
            break;
        case "HALLUCINATING":
        case 13:
            message.state = 13;
            break;
        case "HALLUCINATION_TARGET":
        case 14:
            message.state = 14;
            break;
        case "CONTAINED":
        case 15:
            message.state = 15;
            break;
        }
        switch (object.nextState) {
        default:
            if (typeof object.nextState === "number") {
                message.nextState = object.nextState;
                break;
            }
            break;
        case "NONE_CHARACTER_STATE":
        case 0:
            message.nextState = 0;
            break;
        case "BBANG_SHOOTER":
        case 1:
            message.nextState = 1;
            break;
        case "BBANG_TARGET":
        case 2:
            message.nextState = 2;
            break;
        case "DEATH_MATCH_STATE":
        case 3:
            message.nextState = 3;
            break;
        case "DEATH_MATCH_TURN_STATE":
        case 4:
            message.nextState = 4;
            break;
        case "FLEA_MARKET_TURN":
        case 5:
            message.nextState = 5;
            break;
        case "FLEA_MARKET_WAIT":
        case 6:
            message.nextState = 6;
            break;
        case "GUERRILLA_SHOOTER":
        case 7:
            message.nextState = 7;
            break;
        case "GUERRILLA_TARGET":
        case 8:
            message.nextState = 8;
            break;
        case "BIG_BBANG_SHOOTER":
        case 9:
            message.nextState = 9;
            break;
        case "BIG_BBANG_TARGET":
        case 10:
            message.nextState = 10;
            break;
        case "ABSORBING":
        case 11:
            message.nextState = 11;
            break;
        case "ABSORB_TARGET":
        case 12:
            message.nextState = 12;
            break;
        case "HALLUCINATING":
        case 13:
            message.nextState = 13;
            break;
        case "HALLUCINATION_TARGET":
        case 14:
            message.nextState = 14;
            break;
        case "CONTAINED":
        case 15:
            message.nextState = 15;
            break;
        }
        if (object.nextStateAt != null)
            if ($util.Long)
                (message.nextStateAt = $util.Long.fromValue(object.nextStateAt)).unsigned = false;
            else if (typeof object.nextStateAt === "string")
                message.nextStateAt = parseInt(object.nextStateAt, 10);
            else if (typeof object.nextStateAt === "number")
                message.nextStateAt = object.nextStateAt;
            else if (typeof object.nextStateAt === "object")
                message.nextStateAt = new $util.LongBits(object.nextStateAt.low >>> 0, object.nextStateAt.high >>> 0).toNumber();
        if (object.stateTargetUserId != null)
            message.stateTargetUserId = String(object.stateTargetUserId);
        return message;
    };

    /**
     * Creates a plain object from a CharacterStateInfoData message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CharacterStateInfoData
     * @static
     * @param {CharacterStateInfoData} message CharacterStateInfoData
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CharacterStateInfoData.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.state = options.enums === String ? "NONE_CHARACTER_STATE" : 0;
            object.nextState = options.enums === String ? "NONE_CHARACTER_STATE" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.nextStateAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.nextStateAt = options.longs === String ? "0" : 0;
            object.stateTargetUserId = "";
        }
        if (message.state != null && message.hasOwnProperty("state"))
            object.state = options.enums === String ? $root.CharacterStateType[message.state] === undefined ? message.state : $root.CharacterStateType[message.state] : message.state;
        if (message.nextState != null && message.hasOwnProperty("nextState"))
            object.nextState = options.enums === String ? $root.CharacterStateType[message.nextState] === undefined ? message.nextState : $root.CharacterStateType[message.nextState] : message.nextState;
        if (message.nextStateAt != null && message.hasOwnProperty("nextStateAt"))
            if (typeof message.nextStateAt === "number")
                object.nextStateAt = options.longs === String ? String(message.nextStateAt) : message.nextStateAt;
            else
                object.nextStateAt = options.longs === String ? $util.Long.prototype.toString.call(message.nextStateAt) : options.longs === Number ? new $util.LongBits(message.nextStateAt.low >>> 0, message.nextStateAt.high >>> 0).toNumber() : message.nextStateAt;
        if (message.stateTargetUserId != null && message.hasOwnProperty("stateTargetUserId"))
            object.stateTargetUserId = message.stateTargetUserId;
        return object;
    };

    /**
     * Converts this CharacterStateInfoData to JSON.
     * @function toJSON
     * @memberof CharacterStateInfoData
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CharacterStateInfoData.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for CharacterStateInfoData
     * @function getTypeUrl
     * @memberof CharacterStateInfoData
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    CharacterStateInfoData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/CharacterStateInfoData";
    };

    return CharacterStateInfoData;
})();

$root.C2SRegisterRequest = (function() {

    /**
     * Properties of a C2SRegisterRequest.
     * @exports IC2SRegisterRequest
     * @interface IC2SRegisterRequest
     * @property {string|null} [id] C2SRegisterRequest id
     * @property {string|null} [password] C2SRegisterRequest password
     * @property {string|null} [email] C2SRegisterRequest email
     */

    /**
     * Constructs a new C2SRegisterRequest.
     * @exports C2SRegisterRequest
     * @classdesc Represents a C2SRegisterRequest.
     * @implements IC2SRegisterRequest
     * @constructor
     * @param {IC2SRegisterRequest=} [properties] Properties to set
     */
    function C2SRegisterRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * C2SRegisterRequest id.
     * @member {string} id
     * @memberof C2SRegisterRequest
     * @instance
     */
    C2SRegisterRequest.prototype.id = "";

    /**
     * C2SRegisterRequest password.
     * @member {string} password
     * @memberof C2SRegisterRequest
     * @instance
     */
    C2SRegisterRequest.prototype.password = "";

    /**
     * C2SRegisterRequest email.
     * @member {string} email
     * @memberof C2SRegisterRequest
     * @instance
     */
    C2SRegisterRequest.prototype.email = "";

    /**
     * Creates a new C2SRegisterRequest instance using the specified properties.
     * @function create
     * @memberof C2SRegisterRequest
     * @static
     * @param {IC2SRegisterRequest=} [properties] Properties to set
     * @returns {C2SRegisterRequest} C2SRegisterRequest instance
     */
    C2SRegisterRequest.create = function create(properties) {
        return new C2SRegisterRequest(properties);
    };

    /**
     * Encodes the specified C2SRegisterRequest message. Does not implicitly {@link C2SRegisterRequest.verify|verify} messages.
     * @function encode
     * @memberof C2SRegisterRequest
     * @static
     * @param {IC2SRegisterRequest} message C2SRegisterRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SRegisterRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.password != null && Object.hasOwnProperty.call(message, "password"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
        if (message.email != null && Object.hasOwnProperty.call(message, "email"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.email);
        return writer;
    };

    /**
     * Encodes the specified C2SRegisterRequest message, length delimited. Does not implicitly {@link C2SRegisterRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof C2SRegisterRequest
     * @static
     * @param {IC2SRegisterRequest} message C2SRegisterRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SRegisterRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a C2SRegisterRequest message from the specified reader or buffer.
     * @function decode
     * @memberof C2SRegisterRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {C2SRegisterRequest} C2SRegisterRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SRegisterRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2SRegisterRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.id = reader.string();
                    break;
                }
            case 2: {
                    message.password = reader.string();
                    break;
                }
            case 3: {
                    message.email = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a C2SRegisterRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof C2SRegisterRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {C2SRegisterRequest} C2SRegisterRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SRegisterRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a C2SRegisterRequest message.
     * @function verify
     * @memberof C2SRegisterRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    C2SRegisterRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.password != null && message.hasOwnProperty("password"))
            if (!$util.isString(message.password))
                return "password: string expected";
        if (message.email != null && message.hasOwnProperty("email"))
            if (!$util.isString(message.email))
                return "email: string expected";
        return null;
    };

    /**
     * Creates a C2SRegisterRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof C2SRegisterRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {C2SRegisterRequest} C2SRegisterRequest
     */
    C2SRegisterRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.C2SRegisterRequest)
            return object;
        var message = new $root.C2SRegisterRequest();
        if (object.id != null)
            message.id = String(object.id);
        if (object.password != null)
            message.password = String(object.password);
        if (object.email != null)
            message.email = String(object.email);
        return message;
    };

    /**
     * Creates a plain object from a C2SRegisterRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof C2SRegisterRequest
     * @static
     * @param {C2SRegisterRequest} message C2SRegisterRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    C2SRegisterRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = "";
            object.password = "";
            object.email = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.password != null && message.hasOwnProperty("password"))
            object.password = message.password;
        if (message.email != null && message.hasOwnProperty("email"))
            object.email = message.email;
        return object;
    };

    /**
     * Converts this C2SRegisterRequest to JSON.
     * @function toJSON
     * @memberof C2SRegisterRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    C2SRegisterRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for C2SRegisterRequest
     * @function getTypeUrl
     * @memberof C2SRegisterRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    C2SRegisterRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/C2SRegisterRequest";
    };

    return C2SRegisterRequest;
})();

$root.S2CRegisterResponse = (function() {

    /**
     * Properties of a S2CRegisterResponse.
     * @exports IS2CRegisterResponse
     * @interface IS2CRegisterResponse
     * @property {boolean|null} [success] S2CRegisterResponse success
     * @property {string|null} [message] S2CRegisterResponse message
     * @property {GlobalFailCode|null} [failCode] S2CRegisterResponse failCode
     */

    /**
     * Constructs a new S2CRegisterResponse.
     * @exports S2CRegisterResponse
     * @classdesc Represents a S2CRegisterResponse.
     * @implements IS2CRegisterResponse
     * @constructor
     * @param {IS2CRegisterResponse=} [properties] Properties to set
     */
    function S2CRegisterResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2CRegisterResponse success.
     * @member {boolean} success
     * @memberof S2CRegisterResponse
     * @instance
     */
    S2CRegisterResponse.prototype.success = false;

    /**
     * S2CRegisterResponse message.
     * @member {string} message
     * @memberof S2CRegisterResponse
     * @instance
     */
    S2CRegisterResponse.prototype.message = "";

    /**
     * S2CRegisterResponse failCode.
     * @member {GlobalFailCode} failCode
     * @memberof S2CRegisterResponse
     * @instance
     */
    S2CRegisterResponse.prototype.failCode = 0;

    /**
     * Creates a new S2CRegisterResponse instance using the specified properties.
     * @function create
     * @memberof S2CRegisterResponse
     * @static
     * @param {IS2CRegisterResponse=} [properties] Properties to set
     * @returns {S2CRegisterResponse} S2CRegisterResponse instance
     */
    S2CRegisterResponse.create = function create(properties) {
        return new S2CRegisterResponse(properties);
    };

    /**
     * Encodes the specified S2CRegisterResponse message. Does not implicitly {@link S2CRegisterResponse.verify|verify} messages.
     * @function encode
     * @memberof S2CRegisterResponse
     * @static
     * @param {IS2CRegisterResponse} message S2CRegisterResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CRegisterResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.success != null && Object.hasOwnProperty.call(message, "success"))
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
        if (message.message != null && Object.hasOwnProperty.call(message, "message"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
        if (message.failCode != null && Object.hasOwnProperty.call(message, "failCode"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.failCode);
        return writer;
    };

    /**
     * Encodes the specified S2CRegisterResponse message, length delimited. Does not implicitly {@link S2CRegisterResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2CRegisterResponse
     * @static
     * @param {IS2CRegisterResponse} message S2CRegisterResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CRegisterResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2CRegisterResponse message from the specified reader or buffer.
     * @function decode
     * @memberof S2CRegisterResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2CRegisterResponse} S2CRegisterResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CRegisterResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2CRegisterResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.success = reader.bool();
                    break;
                }
            case 2: {
                    message.message = reader.string();
                    break;
                }
            case 3: {
                    message.failCode = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2CRegisterResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2CRegisterResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2CRegisterResponse} S2CRegisterResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CRegisterResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2CRegisterResponse message.
     * @function verify
     * @memberof S2CRegisterResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2CRegisterResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.success != null && message.hasOwnProperty("success"))
            if (typeof message.success !== "boolean")
                return "success: boolean expected";
        if (message.message != null && message.hasOwnProperty("message"))
            if (!$util.isString(message.message))
                return "message: string expected";
        if (message.failCode != null && message.hasOwnProperty("failCode"))
            switch (message.failCode) {
            default:
                return "failCode: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
                break;
            }
        return null;
    };

    /**
     * Creates a S2CRegisterResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2CRegisterResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2CRegisterResponse} S2CRegisterResponse
     */
    S2CRegisterResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.S2CRegisterResponse)
            return object;
        var message = new $root.S2CRegisterResponse();
        if (object.success != null)
            message.success = Boolean(object.success);
        if (object.message != null)
            message.message = String(object.message);
        switch (object.failCode) {
        default:
            if (typeof object.failCode === "number") {
                message.failCode = object.failCode;
                break;
            }
            break;
        case "NONE_FAILCODE":
        case 0:
            message.failCode = 0;
            break;
        case "UNKNOWN_ERROR":
        case 1:
            message.failCode = 1;
            break;
        case "INVALID_REQUEST":
        case 2:
            message.failCode = 2;
            break;
        case "AUTHENTICATION_FAILED":
        case 3:
            message.failCode = 3;
            break;
        case "CREATE_ROOM_FAILED":
        case 4:
            message.failCode = 4;
            break;
        case "JOIN_ROOM_FAILED":
        case 5:
            message.failCode = 5;
            break;
        case "LEAVE_ROOM_FAILED":
        case 6:
            message.failCode = 6;
            break;
        case "REGISTER_FAILED":
        case 7:
            message.failCode = 7;
            break;
        case "ROOM_NOT_FOUND":
        case 8:
            message.failCode = 8;
            break;
        case "CHARACTER_NOT_FOUND":
        case 9:
            message.failCode = 9;
            break;
        case "CHARACTER_STATE_ERROR":
        case 10:
            message.failCode = 10;
            break;
        case "CHARACTER_NO_CARD":
        case 11:
            message.failCode = 11;
            break;
        case "INVALID_ROOM_STATE":
        case 12:
            message.failCode = 12;
            break;
        case "NOT_ROOM_OWNER":
        case 13:
            message.failCode = 13;
            break;
        case "ALREADY_USED_BBANG":
        case 14:
            message.failCode = 14;
            break;
        case "INVALID_PHASE":
        case 15:
            message.failCode = 15;
            break;
        case "CHARACTER_CONTAINED":
        case 16:
            message.failCode = 16;
            break;
        }
        return message;
    };

    /**
     * Creates a plain object from a S2CRegisterResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2CRegisterResponse
     * @static
     * @param {S2CRegisterResponse} message S2CRegisterResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2CRegisterResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.success = false;
            object.message = "";
            object.failCode = options.enums === String ? "NONE_FAILCODE" : 0;
        }
        if (message.success != null && message.hasOwnProperty("success"))
            object.success = message.success;
        if (message.message != null && message.hasOwnProperty("message"))
            object.message = message.message;
        if (message.failCode != null && message.hasOwnProperty("failCode"))
            object.failCode = options.enums === String ? $root.GlobalFailCode[message.failCode] === undefined ? message.failCode : $root.GlobalFailCode[message.failCode] : message.failCode;
        return object;
    };

    /**
     * Converts this S2CRegisterResponse to JSON.
     * @function toJSON
     * @memberof S2CRegisterResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2CRegisterResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for S2CRegisterResponse
     * @function getTypeUrl
     * @memberof S2CRegisterResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    S2CRegisterResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/S2CRegisterResponse";
    };

    return S2CRegisterResponse;
})();

$root.C2SLoginRequest = (function() {

    /**
     * Properties of a C2SLoginRequest.
     * @exports IC2SLoginRequest
     * @interface IC2SLoginRequest
     * @property {string|null} [id] C2SLoginRequest id
     * @property {string|null} [password] C2SLoginRequest password
     */

    /**
     * Constructs a new C2SLoginRequest.
     * @exports C2SLoginRequest
     * @classdesc Represents a C2SLoginRequest.
     * @implements IC2SLoginRequest
     * @constructor
     * @param {IC2SLoginRequest=} [properties] Properties to set
     */
    function C2SLoginRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * C2SLoginRequest id.
     * @member {string} id
     * @memberof C2SLoginRequest
     * @instance
     */
    C2SLoginRequest.prototype.id = "";

    /**
     * C2SLoginRequest password.
     * @member {string} password
     * @memberof C2SLoginRequest
     * @instance
     */
    C2SLoginRequest.prototype.password = "";

    /**
     * Creates a new C2SLoginRequest instance using the specified properties.
     * @function create
     * @memberof C2SLoginRequest
     * @static
     * @param {IC2SLoginRequest=} [properties] Properties to set
     * @returns {C2SLoginRequest} C2SLoginRequest instance
     */
    C2SLoginRequest.create = function create(properties) {
        return new C2SLoginRequest(properties);
    };

    /**
     * Encodes the specified C2SLoginRequest message. Does not implicitly {@link C2SLoginRequest.verify|verify} messages.
     * @function encode
     * @memberof C2SLoginRequest
     * @static
     * @param {IC2SLoginRequest} message C2SLoginRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SLoginRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.id);
        if (message.password != null && Object.hasOwnProperty.call(message, "password"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.password);
        return writer;
    };

    /**
     * Encodes the specified C2SLoginRequest message, length delimited. Does not implicitly {@link C2SLoginRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof C2SLoginRequest
     * @static
     * @param {IC2SLoginRequest} message C2SLoginRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SLoginRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a C2SLoginRequest message from the specified reader or buffer.
     * @function decode
     * @memberof C2SLoginRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {C2SLoginRequest} C2SLoginRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SLoginRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2SLoginRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.id = reader.string();
                    break;
                }
            case 2: {
                    message.password = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a C2SLoginRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof C2SLoginRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {C2SLoginRequest} C2SLoginRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SLoginRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a C2SLoginRequest message.
     * @function verify
     * @memberof C2SLoginRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    C2SLoginRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.id != null && message.hasOwnProperty("id"))
            if (!$util.isString(message.id))
                return "id: string expected";
        if (message.password != null && message.hasOwnProperty("password"))
            if (!$util.isString(message.password))
                return "password: string expected";
        return null;
    };

    /**
     * Creates a C2SLoginRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof C2SLoginRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {C2SLoginRequest} C2SLoginRequest
     */
    C2SLoginRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.C2SLoginRequest)
            return object;
        var message = new $root.C2SLoginRequest();
        if (object.id != null)
            message.id = String(object.id);
        if (object.password != null)
            message.password = String(object.password);
        return message;
    };

    /**
     * Creates a plain object from a C2SLoginRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof C2SLoginRequest
     * @static
     * @param {C2SLoginRequest} message C2SLoginRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    C2SLoginRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.id = "";
            object.password = "";
        }
        if (message.id != null && message.hasOwnProperty("id"))
            object.id = message.id;
        if (message.password != null && message.hasOwnProperty("password"))
            object.password = message.password;
        return object;
    };

    /**
     * Converts this C2SLoginRequest to JSON.
     * @function toJSON
     * @memberof C2SLoginRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    C2SLoginRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for C2SLoginRequest
     * @function getTypeUrl
     * @memberof C2SLoginRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    C2SLoginRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/C2SLoginRequest";
    };

    return C2SLoginRequest;
})();

$root.S2CLoginResponse = (function() {

    /**
     * Properties of a S2CLoginResponse.
     * @exports IS2CLoginResponse
     * @interface IS2CLoginResponse
     * @property {boolean|null} [success] S2CLoginResponse success
     * @property {string|null} [message] S2CLoginResponse message
     * @property {string|null} [token] S2CLoginResponse token
     * @property {IUserData|null} [myInfo] S2CLoginResponse myInfo
     * @property {GlobalFailCode|null} [failCode] S2CLoginResponse failCode
     */

    /**
     * Constructs a new S2CLoginResponse.
     * @exports S2CLoginResponse
     * @classdesc Represents a S2CLoginResponse.
     * @implements IS2CLoginResponse
     * @constructor
     * @param {IS2CLoginResponse=} [properties] Properties to set
     */
    function S2CLoginResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2CLoginResponse success.
     * @member {boolean} success
     * @memberof S2CLoginResponse
     * @instance
     */
    S2CLoginResponse.prototype.success = false;

    /**
     * S2CLoginResponse message.
     * @member {string} message
     * @memberof S2CLoginResponse
     * @instance
     */
    S2CLoginResponse.prototype.message = "";

    /**
     * S2CLoginResponse token.
     * @member {string} token
     * @memberof S2CLoginResponse
     * @instance
     */
    S2CLoginResponse.prototype.token = "";

    /**
     * S2CLoginResponse myInfo.
     * @member {IUserData|null|undefined} myInfo
     * @memberof S2CLoginResponse
     * @instance
     */
    S2CLoginResponse.prototype.myInfo = null;

    /**
     * S2CLoginResponse failCode.
     * @member {GlobalFailCode} failCode
     * @memberof S2CLoginResponse
     * @instance
     */
    S2CLoginResponse.prototype.failCode = 0;

    /**
     * Creates a new S2CLoginResponse instance using the specified properties.
     * @function create
     * @memberof S2CLoginResponse
     * @static
     * @param {IS2CLoginResponse=} [properties] Properties to set
     * @returns {S2CLoginResponse} S2CLoginResponse instance
     */
    S2CLoginResponse.create = function create(properties) {
        return new S2CLoginResponse(properties);
    };

    /**
     * Encodes the specified S2CLoginResponse message. Does not implicitly {@link S2CLoginResponse.verify|verify} messages.
     * @function encode
     * @memberof S2CLoginResponse
     * @static
     * @param {IS2CLoginResponse} message S2CLoginResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CLoginResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.success != null && Object.hasOwnProperty.call(message, "success"))
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
        if (message.message != null && Object.hasOwnProperty.call(message, "message"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.message);
        if (message.token != null && Object.hasOwnProperty.call(message, "token"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.token);
        if (message.myInfo != null && Object.hasOwnProperty.call(message, "myInfo"))
            $root.UserData.encode(message.myInfo, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.failCode != null && Object.hasOwnProperty.call(message, "failCode"))
            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.failCode);
        return writer;
    };

    /**
     * Encodes the specified S2CLoginResponse message, length delimited. Does not implicitly {@link S2CLoginResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2CLoginResponse
     * @static
     * @param {IS2CLoginResponse} message S2CLoginResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CLoginResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2CLoginResponse message from the specified reader or buffer.
     * @function decode
     * @memberof S2CLoginResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2CLoginResponse} S2CLoginResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CLoginResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2CLoginResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.success = reader.bool();
                    break;
                }
            case 2: {
                    message.message = reader.string();
                    break;
                }
            case 3: {
                    message.token = reader.string();
                    break;
                }
            case 4: {
                    message.myInfo = $root.UserData.decode(reader, reader.uint32());
                    break;
                }
            case 5: {
                    message.failCode = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2CLoginResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2CLoginResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2CLoginResponse} S2CLoginResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CLoginResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2CLoginResponse message.
     * @function verify
     * @memberof S2CLoginResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2CLoginResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.success != null && message.hasOwnProperty("success"))
            if (typeof message.success !== "boolean")
                return "success: boolean expected";
        if (message.message != null && message.hasOwnProperty("message"))
            if (!$util.isString(message.message))
                return "message: string expected";
        if (message.token != null && message.hasOwnProperty("token"))
            if (!$util.isString(message.token))
                return "token: string expected";
        if (message.myInfo != null && message.hasOwnProperty("myInfo")) {
            var error = $root.UserData.verify(message.myInfo);
            if (error)
                return "myInfo." + error;
        }
        if (message.failCode != null && message.hasOwnProperty("failCode"))
            switch (message.failCode) {
            default:
                return "failCode: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
                break;
            }
        return null;
    };

    /**
     * Creates a S2CLoginResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2CLoginResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2CLoginResponse} S2CLoginResponse
     */
    S2CLoginResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.S2CLoginResponse)
            return object;
        var message = new $root.S2CLoginResponse();
        if (object.success != null)
            message.success = Boolean(object.success);
        if (object.message != null)
            message.message = String(object.message);
        if (object.token != null)
            message.token = String(object.token);
        if (object.myInfo != null) {
            if (typeof object.myInfo !== "object")
                throw TypeError(".S2CLoginResponse.myInfo: object expected");
            message.myInfo = $root.UserData.fromObject(object.myInfo);
        }
        switch (object.failCode) {
        default:
            if (typeof object.failCode === "number") {
                message.failCode = object.failCode;
                break;
            }
            break;
        case "NONE_FAILCODE":
        case 0:
            message.failCode = 0;
            break;
        case "UNKNOWN_ERROR":
        case 1:
            message.failCode = 1;
            break;
        case "INVALID_REQUEST":
        case 2:
            message.failCode = 2;
            break;
        case "AUTHENTICATION_FAILED":
        case 3:
            message.failCode = 3;
            break;
        case "CREATE_ROOM_FAILED":
        case 4:
            message.failCode = 4;
            break;
        case "JOIN_ROOM_FAILED":
        case 5:
            message.failCode = 5;
            break;
        case "LEAVE_ROOM_FAILED":
        case 6:
            message.failCode = 6;
            break;
        case "REGISTER_FAILED":
        case 7:
            message.failCode = 7;
            break;
        case "ROOM_NOT_FOUND":
        case 8:
            message.failCode = 8;
            break;
        case "CHARACTER_NOT_FOUND":
        case 9:
            message.failCode = 9;
            break;
        case "CHARACTER_STATE_ERROR":
        case 10:
            message.failCode = 10;
            break;
        case "CHARACTER_NO_CARD":
        case 11:
            message.failCode = 11;
            break;
        case "INVALID_ROOM_STATE":
        case 12:
            message.failCode = 12;
            break;
        case "NOT_ROOM_OWNER":
        case 13:
            message.failCode = 13;
            break;
        case "ALREADY_USED_BBANG":
        case 14:
            message.failCode = 14;
            break;
        case "INVALID_PHASE":
        case 15:
            message.failCode = 15;
            break;
        case "CHARACTER_CONTAINED":
        case 16:
            message.failCode = 16;
            break;
        }
        return message;
    };

    /**
     * Creates a plain object from a S2CLoginResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2CLoginResponse
     * @static
     * @param {S2CLoginResponse} message S2CLoginResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2CLoginResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.success = false;
            object.message = "";
            object.token = "";
            object.myInfo = null;
            object.failCode = options.enums === String ? "NONE_FAILCODE" : 0;
        }
        if (message.success != null && message.hasOwnProperty("success"))
            object.success = message.success;
        if (message.message != null && message.hasOwnProperty("message"))
            object.message = message.message;
        if (message.token != null && message.hasOwnProperty("token"))
            object.token = message.token;
        if (message.myInfo != null && message.hasOwnProperty("myInfo"))
            object.myInfo = $root.UserData.toObject(message.myInfo, options);
        if (message.failCode != null && message.hasOwnProperty("failCode"))
            object.failCode = options.enums === String ? $root.GlobalFailCode[message.failCode] === undefined ? message.failCode : $root.GlobalFailCode[message.failCode] : message.failCode;
        return object;
    };

    /**
     * Converts this S2CLoginResponse to JSON.
     * @function toJSON
     * @memberof S2CLoginResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2CLoginResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for S2CLoginResponse
     * @function getTypeUrl
     * @memberof S2CLoginResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    S2CLoginResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/S2CLoginResponse";
    };

    return S2CLoginResponse;
})();

$root.C2SCreateRoomRequest = (function() {

    /**
     * Properties of a C2SCreateRoomRequest.
     * @exports IC2SCreateRoomRequest
     * @interface IC2SCreateRoomRequest
     * @property {string|null} [name] C2SCreateRoomRequest name
     * @property {number|null} [maxUserNum] C2SCreateRoomRequest maxUserNum
     */

    /**
     * Constructs a new C2SCreateRoomRequest.
     * @exports C2SCreateRoomRequest
     * @classdesc Represents a C2SCreateRoomRequest.
     * @implements IC2SCreateRoomRequest
     * @constructor
     * @param {IC2SCreateRoomRequest=} [properties] Properties to set
     */
    function C2SCreateRoomRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * C2SCreateRoomRequest name.
     * @member {string} name
     * @memberof C2SCreateRoomRequest
     * @instance
     */
    C2SCreateRoomRequest.prototype.name = "";

    /**
     * C2SCreateRoomRequest maxUserNum.
     * @member {number} maxUserNum
     * @memberof C2SCreateRoomRequest
     * @instance
     */
    C2SCreateRoomRequest.prototype.maxUserNum = 0;

    /**
     * Creates a new C2SCreateRoomRequest instance using the specified properties.
     * @function create
     * @memberof C2SCreateRoomRequest
     * @static
     * @param {IC2SCreateRoomRequest=} [properties] Properties to set
     * @returns {C2SCreateRoomRequest} C2SCreateRoomRequest instance
     */
    C2SCreateRoomRequest.create = function create(properties) {
        return new C2SCreateRoomRequest(properties);
    };

    /**
     * Encodes the specified C2SCreateRoomRequest message. Does not implicitly {@link C2SCreateRoomRequest.verify|verify} messages.
     * @function encode
     * @memberof C2SCreateRoomRequest
     * @static
     * @param {IC2SCreateRoomRequest} message C2SCreateRoomRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SCreateRoomRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.name != null && Object.hasOwnProperty.call(message, "name"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
        if (message.maxUserNum != null && Object.hasOwnProperty.call(message, "maxUserNum"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.maxUserNum);
        return writer;
    };

    /**
     * Encodes the specified C2SCreateRoomRequest message, length delimited. Does not implicitly {@link C2SCreateRoomRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof C2SCreateRoomRequest
     * @static
     * @param {IC2SCreateRoomRequest} message C2SCreateRoomRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SCreateRoomRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a C2SCreateRoomRequest message from the specified reader or buffer.
     * @function decode
     * @memberof C2SCreateRoomRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {C2SCreateRoomRequest} C2SCreateRoomRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SCreateRoomRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2SCreateRoomRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.name = reader.string();
                    break;
                }
            case 2: {
                    message.maxUserNum = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a C2SCreateRoomRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof C2SCreateRoomRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {C2SCreateRoomRequest} C2SCreateRoomRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SCreateRoomRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a C2SCreateRoomRequest message.
     * @function verify
     * @memberof C2SCreateRoomRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    C2SCreateRoomRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.name != null && message.hasOwnProperty("name"))
            if (!$util.isString(message.name))
                return "name: string expected";
        if (message.maxUserNum != null && message.hasOwnProperty("maxUserNum"))
            if (!$util.isInteger(message.maxUserNum))
                return "maxUserNum: integer expected";
        return null;
    };

    /**
     * Creates a C2SCreateRoomRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof C2SCreateRoomRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {C2SCreateRoomRequest} C2SCreateRoomRequest
     */
    C2SCreateRoomRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.C2SCreateRoomRequest)
            return object;
        var message = new $root.C2SCreateRoomRequest();
        if (object.name != null)
            message.name = String(object.name);
        if (object.maxUserNum != null)
            message.maxUserNum = object.maxUserNum | 0;
        return message;
    };

    /**
     * Creates a plain object from a C2SCreateRoomRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof C2SCreateRoomRequest
     * @static
     * @param {C2SCreateRoomRequest} message C2SCreateRoomRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    C2SCreateRoomRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.name = "";
            object.maxUserNum = 0;
        }
        if (message.name != null && message.hasOwnProperty("name"))
            object.name = message.name;
        if (message.maxUserNum != null && message.hasOwnProperty("maxUserNum"))
            object.maxUserNum = message.maxUserNum;
        return object;
    };

    /**
     * Converts this C2SCreateRoomRequest to JSON.
     * @function toJSON
     * @memberof C2SCreateRoomRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    C2SCreateRoomRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for C2SCreateRoomRequest
     * @function getTypeUrl
     * @memberof C2SCreateRoomRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    C2SCreateRoomRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/C2SCreateRoomRequest";
    };

    return C2SCreateRoomRequest;
})();

$root.S2CCreateRoomResponse = (function() {

    /**
     * Properties of a S2CCreateRoomResponse.
     * @exports IS2CCreateRoomResponse
     * @interface IS2CCreateRoomResponse
     * @property {boolean|null} [success] S2CCreateRoomResponse success
     * @property {IRoomData|null} [room] S2CCreateRoomResponse room
     * @property {GlobalFailCode|null} [failCode] S2CCreateRoomResponse failCode
     */

    /**
     * Constructs a new S2CCreateRoomResponse.
     * @exports S2CCreateRoomResponse
     * @classdesc Represents a S2CCreateRoomResponse.
     * @implements IS2CCreateRoomResponse
     * @constructor
     * @param {IS2CCreateRoomResponse=} [properties] Properties to set
     */
    function S2CCreateRoomResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2CCreateRoomResponse success.
     * @member {boolean} success
     * @memberof S2CCreateRoomResponse
     * @instance
     */
    S2CCreateRoomResponse.prototype.success = false;

    /**
     * S2CCreateRoomResponse room.
     * @member {IRoomData|null|undefined} room
     * @memberof S2CCreateRoomResponse
     * @instance
     */
    S2CCreateRoomResponse.prototype.room = null;

    /**
     * S2CCreateRoomResponse failCode.
     * @member {GlobalFailCode} failCode
     * @memberof S2CCreateRoomResponse
     * @instance
     */
    S2CCreateRoomResponse.prototype.failCode = 0;

    /**
     * Creates a new S2CCreateRoomResponse instance using the specified properties.
     * @function create
     * @memberof S2CCreateRoomResponse
     * @static
     * @param {IS2CCreateRoomResponse=} [properties] Properties to set
     * @returns {S2CCreateRoomResponse} S2CCreateRoomResponse instance
     */
    S2CCreateRoomResponse.create = function create(properties) {
        return new S2CCreateRoomResponse(properties);
    };

    /**
     * Encodes the specified S2CCreateRoomResponse message. Does not implicitly {@link S2CCreateRoomResponse.verify|verify} messages.
     * @function encode
     * @memberof S2CCreateRoomResponse
     * @static
     * @param {IS2CCreateRoomResponse} message S2CCreateRoomResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CCreateRoomResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.success != null && Object.hasOwnProperty.call(message, "success"))
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
        if (message.room != null && Object.hasOwnProperty.call(message, "room"))
            $root.RoomData.encode(message.room, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.failCode != null && Object.hasOwnProperty.call(message, "failCode"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.failCode);
        return writer;
    };

    /**
     * Encodes the specified S2CCreateRoomResponse message, length delimited. Does not implicitly {@link S2CCreateRoomResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2CCreateRoomResponse
     * @static
     * @param {IS2CCreateRoomResponse} message S2CCreateRoomResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CCreateRoomResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2CCreateRoomResponse message from the specified reader or buffer.
     * @function decode
     * @memberof S2CCreateRoomResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2CCreateRoomResponse} S2CCreateRoomResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CCreateRoomResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2CCreateRoomResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.success = reader.bool();
                    break;
                }
            case 2: {
                    message.room = $root.RoomData.decode(reader, reader.uint32());
                    break;
                }
            case 3: {
                    message.failCode = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2CCreateRoomResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2CCreateRoomResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2CCreateRoomResponse} S2CCreateRoomResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CCreateRoomResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2CCreateRoomResponse message.
     * @function verify
     * @memberof S2CCreateRoomResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2CCreateRoomResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.success != null && message.hasOwnProperty("success"))
            if (typeof message.success !== "boolean")
                return "success: boolean expected";
        if (message.room != null && message.hasOwnProperty("room")) {
            var error = $root.RoomData.verify(message.room);
            if (error)
                return "room." + error;
        }
        if (message.failCode != null && message.hasOwnProperty("failCode"))
            switch (message.failCode) {
            default:
                return "failCode: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
                break;
            }
        return null;
    };

    /**
     * Creates a S2CCreateRoomResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2CCreateRoomResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2CCreateRoomResponse} S2CCreateRoomResponse
     */
    S2CCreateRoomResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.S2CCreateRoomResponse)
            return object;
        var message = new $root.S2CCreateRoomResponse();
        if (object.success != null)
            message.success = Boolean(object.success);
        if (object.room != null) {
            if (typeof object.room !== "object")
                throw TypeError(".S2CCreateRoomResponse.room: object expected");
            message.room = $root.RoomData.fromObject(object.room);
        }
        switch (object.failCode) {
        default:
            if (typeof object.failCode === "number") {
                message.failCode = object.failCode;
                break;
            }
            break;
        case "NONE_FAILCODE":
        case 0:
            message.failCode = 0;
            break;
        case "UNKNOWN_ERROR":
        case 1:
            message.failCode = 1;
            break;
        case "INVALID_REQUEST":
        case 2:
            message.failCode = 2;
            break;
        case "AUTHENTICATION_FAILED":
        case 3:
            message.failCode = 3;
            break;
        case "CREATE_ROOM_FAILED":
        case 4:
            message.failCode = 4;
            break;
        case "JOIN_ROOM_FAILED":
        case 5:
            message.failCode = 5;
            break;
        case "LEAVE_ROOM_FAILED":
        case 6:
            message.failCode = 6;
            break;
        case "REGISTER_FAILED":
        case 7:
            message.failCode = 7;
            break;
        case "ROOM_NOT_FOUND":
        case 8:
            message.failCode = 8;
            break;
        case "CHARACTER_NOT_FOUND":
        case 9:
            message.failCode = 9;
            break;
        case "CHARACTER_STATE_ERROR":
        case 10:
            message.failCode = 10;
            break;
        case "CHARACTER_NO_CARD":
        case 11:
            message.failCode = 11;
            break;
        case "INVALID_ROOM_STATE":
        case 12:
            message.failCode = 12;
            break;
        case "NOT_ROOM_OWNER":
        case 13:
            message.failCode = 13;
            break;
        case "ALREADY_USED_BBANG":
        case 14:
            message.failCode = 14;
            break;
        case "INVALID_PHASE":
        case 15:
            message.failCode = 15;
            break;
        case "CHARACTER_CONTAINED":
        case 16:
            message.failCode = 16;
            break;
        }
        return message;
    };

    /**
     * Creates a plain object from a S2CCreateRoomResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2CCreateRoomResponse
     * @static
     * @param {S2CCreateRoomResponse} message S2CCreateRoomResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2CCreateRoomResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.success = false;
            object.room = null;
            object.failCode = options.enums === String ? "NONE_FAILCODE" : 0;
        }
        if (message.success != null && message.hasOwnProperty("success"))
            object.success = message.success;
        if (message.room != null && message.hasOwnProperty("room"))
            object.room = $root.RoomData.toObject(message.room, options);
        if (message.failCode != null && message.hasOwnProperty("failCode"))
            object.failCode = options.enums === String ? $root.GlobalFailCode[message.failCode] === undefined ? message.failCode : $root.GlobalFailCode[message.failCode] : message.failCode;
        return object;
    };

    /**
     * Converts this S2CCreateRoomResponse to JSON.
     * @function toJSON
     * @memberof S2CCreateRoomResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2CCreateRoomResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for S2CCreateRoomResponse
     * @function getTypeUrl
     * @memberof S2CCreateRoomResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    S2CCreateRoomResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/S2CCreateRoomResponse";
    };

    return S2CCreateRoomResponse;
})();

$root.C2SGetRoomListRequest = (function() {

    /**
     * Properties of a C2SGetRoomListRequest.
     * @exports IC2SGetRoomListRequest
     * @interface IC2SGetRoomListRequest
     */

    /**
     * Constructs a new C2SGetRoomListRequest.
     * @exports C2SGetRoomListRequest
     * @classdesc Represents a C2SGetRoomListRequest.
     * @implements IC2SGetRoomListRequest
     * @constructor
     * @param {IC2SGetRoomListRequest=} [properties] Properties to set
     */
    function C2SGetRoomListRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new C2SGetRoomListRequest instance using the specified properties.
     * @function create
     * @memberof C2SGetRoomListRequest
     * @static
     * @param {IC2SGetRoomListRequest=} [properties] Properties to set
     * @returns {C2SGetRoomListRequest} C2SGetRoomListRequest instance
     */
    C2SGetRoomListRequest.create = function create(properties) {
        return new C2SGetRoomListRequest(properties);
    };

    /**
     * Encodes the specified C2SGetRoomListRequest message. Does not implicitly {@link C2SGetRoomListRequest.verify|verify} messages.
     * @function encode
     * @memberof C2SGetRoomListRequest
     * @static
     * @param {IC2SGetRoomListRequest} message C2SGetRoomListRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SGetRoomListRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified C2SGetRoomListRequest message, length delimited. Does not implicitly {@link C2SGetRoomListRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof C2SGetRoomListRequest
     * @static
     * @param {IC2SGetRoomListRequest} message C2SGetRoomListRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SGetRoomListRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a C2SGetRoomListRequest message from the specified reader or buffer.
     * @function decode
     * @memberof C2SGetRoomListRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {C2SGetRoomListRequest} C2SGetRoomListRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SGetRoomListRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2SGetRoomListRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a C2SGetRoomListRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof C2SGetRoomListRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {C2SGetRoomListRequest} C2SGetRoomListRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SGetRoomListRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a C2SGetRoomListRequest message.
     * @function verify
     * @memberof C2SGetRoomListRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    C2SGetRoomListRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a C2SGetRoomListRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof C2SGetRoomListRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {C2SGetRoomListRequest} C2SGetRoomListRequest
     */
    C2SGetRoomListRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.C2SGetRoomListRequest)
            return object;
        return new $root.C2SGetRoomListRequest();
    };

    /**
     * Creates a plain object from a C2SGetRoomListRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof C2SGetRoomListRequest
     * @static
     * @param {C2SGetRoomListRequest} message C2SGetRoomListRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    C2SGetRoomListRequest.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this C2SGetRoomListRequest to JSON.
     * @function toJSON
     * @memberof C2SGetRoomListRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    C2SGetRoomListRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for C2SGetRoomListRequest
     * @function getTypeUrl
     * @memberof C2SGetRoomListRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    C2SGetRoomListRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/C2SGetRoomListRequest";
    };

    return C2SGetRoomListRequest;
})();

$root.S2CGetRoomListResponse = (function() {

    /**
     * Properties of a S2CGetRoomListResponse.
     * @exports IS2CGetRoomListResponse
     * @interface IS2CGetRoomListResponse
     * @property {Array.<IRoomData>|null} [rooms] S2CGetRoomListResponse rooms
     */

    /**
     * Constructs a new S2CGetRoomListResponse.
     * @exports S2CGetRoomListResponse
     * @classdesc Represents a S2CGetRoomListResponse.
     * @implements IS2CGetRoomListResponse
     * @constructor
     * @param {IS2CGetRoomListResponse=} [properties] Properties to set
     */
    function S2CGetRoomListResponse(properties) {
        this.rooms = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2CGetRoomListResponse rooms.
     * @member {Array.<IRoomData>} rooms
     * @memberof S2CGetRoomListResponse
     * @instance
     */
    S2CGetRoomListResponse.prototype.rooms = $util.emptyArray;

    /**
     * Creates a new S2CGetRoomListResponse instance using the specified properties.
     * @function create
     * @memberof S2CGetRoomListResponse
     * @static
     * @param {IS2CGetRoomListResponse=} [properties] Properties to set
     * @returns {S2CGetRoomListResponse} S2CGetRoomListResponse instance
     */
    S2CGetRoomListResponse.create = function create(properties) {
        return new S2CGetRoomListResponse(properties);
    };

    /**
     * Encodes the specified S2CGetRoomListResponse message. Does not implicitly {@link S2CGetRoomListResponse.verify|verify} messages.
     * @function encode
     * @memberof S2CGetRoomListResponse
     * @static
     * @param {IS2CGetRoomListResponse} message S2CGetRoomListResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CGetRoomListResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.rooms != null && message.rooms.length)
            for (var i = 0; i < message.rooms.length; ++i)
                $root.RoomData.encode(message.rooms[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified S2CGetRoomListResponse message, length delimited. Does not implicitly {@link S2CGetRoomListResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2CGetRoomListResponse
     * @static
     * @param {IS2CGetRoomListResponse} message S2CGetRoomListResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CGetRoomListResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2CGetRoomListResponse message from the specified reader or buffer.
     * @function decode
     * @memberof S2CGetRoomListResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2CGetRoomListResponse} S2CGetRoomListResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CGetRoomListResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2CGetRoomListResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    if (!(message.rooms && message.rooms.length))
                        message.rooms = [];
                    message.rooms.push($root.RoomData.decode(reader, reader.uint32()));
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2CGetRoomListResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2CGetRoomListResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2CGetRoomListResponse} S2CGetRoomListResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CGetRoomListResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2CGetRoomListResponse message.
     * @function verify
     * @memberof S2CGetRoomListResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2CGetRoomListResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.rooms != null && message.hasOwnProperty("rooms")) {
            if (!Array.isArray(message.rooms))
                return "rooms: array expected";
            for (var i = 0; i < message.rooms.length; ++i) {
                var error = $root.RoomData.verify(message.rooms[i]);
                if (error)
                    return "rooms." + error;
            }
        }
        return null;
    };

    /**
     * Creates a S2CGetRoomListResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2CGetRoomListResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2CGetRoomListResponse} S2CGetRoomListResponse
     */
    S2CGetRoomListResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.S2CGetRoomListResponse)
            return object;
        var message = new $root.S2CGetRoomListResponse();
        if (object.rooms) {
            if (!Array.isArray(object.rooms))
                throw TypeError(".S2CGetRoomListResponse.rooms: array expected");
            message.rooms = [];
            for (var i = 0; i < object.rooms.length; ++i) {
                if (typeof object.rooms[i] !== "object")
                    throw TypeError(".S2CGetRoomListResponse.rooms: object expected");
                message.rooms[i] = $root.RoomData.fromObject(object.rooms[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a S2CGetRoomListResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2CGetRoomListResponse
     * @static
     * @param {S2CGetRoomListResponse} message S2CGetRoomListResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2CGetRoomListResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.rooms = [];
        if (message.rooms && message.rooms.length) {
            object.rooms = [];
            for (var j = 0; j < message.rooms.length; ++j)
                object.rooms[j] = $root.RoomData.toObject(message.rooms[j], options);
        }
        return object;
    };

    /**
     * Converts this S2CGetRoomListResponse to JSON.
     * @function toJSON
     * @memberof S2CGetRoomListResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2CGetRoomListResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for S2CGetRoomListResponse
     * @function getTypeUrl
     * @memberof S2CGetRoomListResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    S2CGetRoomListResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/S2CGetRoomListResponse";
    };

    return S2CGetRoomListResponse;
})();

$root.C2SJoinRoomRequest = (function() {

    /**
     * Properties of a C2SJoinRoomRequest.
     * @exports IC2SJoinRoomRequest
     * @interface IC2SJoinRoomRequest
     * @property {number|null} [roomId] C2SJoinRoomRequest roomId
     */

    /**
     * Constructs a new C2SJoinRoomRequest.
     * @exports C2SJoinRoomRequest
     * @classdesc Represents a C2SJoinRoomRequest.
     * @implements IC2SJoinRoomRequest
     * @constructor
     * @param {IC2SJoinRoomRequest=} [properties] Properties to set
     */
    function C2SJoinRoomRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * C2SJoinRoomRequest roomId.
     * @member {number} roomId
     * @memberof C2SJoinRoomRequest
     * @instance
     */
    C2SJoinRoomRequest.prototype.roomId = 0;

    /**
     * Creates a new C2SJoinRoomRequest instance using the specified properties.
     * @function create
     * @memberof C2SJoinRoomRequest
     * @static
     * @param {IC2SJoinRoomRequest=} [properties] Properties to set
     * @returns {C2SJoinRoomRequest} C2SJoinRoomRequest instance
     */
    C2SJoinRoomRequest.create = function create(properties) {
        return new C2SJoinRoomRequest(properties);
    };

    /**
     * Encodes the specified C2SJoinRoomRequest message. Does not implicitly {@link C2SJoinRoomRequest.verify|verify} messages.
     * @function encode
     * @memberof C2SJoinRoomRequest
     * @static
     * @param {IC2SJoinRoomRequest} message C2SJoinRoomRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SJoinRoomRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.roomId);
        return writer;
    };

    /**
     * Encodes the specified C2SJoinRoomRequest message, length delimited. Does not implicitly {@link C2SJoinRoomRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof C2SJoinRoomRequest
     * @static
     * @param {IC2SJoinRoomRequest} message C2SJoinRoomRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SJoinRoomRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a C2SJoinRoomRequest message from the specified reader or buffer.
     * @function decode
     * @memberof C2SJoinRoomRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {C2SJoinRoomRequest} C2SJoinRoomRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SJoinRoomRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2SJoinRoomRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.roomId = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a C2SJoinRoomRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof C2SJoinRoomRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {C2SJoinRoomRequest} C2SJoinRoomRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SJoinRoomRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a C2SJoinRoomRequest message.
     * @function verify
     * @memberof C2SJoinRoomRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    C2SJoinRoomRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.roomId != null && message.hasOwnProperty("roomId"))
            if (!$util.isInteger(message.roomId))
                return "roomId: integer expected";
        return null;
    };

    /**
     * Creates a C2SJoinRoomRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof C2SJoinRoomRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {C2SJoinRoomRequest} C2SJoinRoomRequest
     */
    C2SJoinRoomRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.C2SJoinRoomRequest)
            return object;
        var message = new $root.C2SJoinRoomRequest();
        if (object.roomId != null)
            message.roomId = object.roomId | 0;
        return message;
    };

    /**
     * Creates a plain object from a C2SJoinRoomRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof C2SJoinRoomRequest
     * @static
     * @param {C2SJoinRoomRequest} message C2SJoinRoomRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    C2SJoinRoomRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.roomId = 0;
        if (message.roomId != null && message.hasOwnProperty("roomId"))
            object.roomId = message.roomId;
        return object;
    };

    /**
     * Converts this C2SJoinRoomRequest to JSON.
     * @function toJSON
     * @memberof C2SJoinRoomRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    C2SJoinRoomRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for C2SJoinRoomRequest
     * @function getTypeUrl
     * @memberof C2SJoinRoomRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    C2SJoinRoomRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/C2SJoinRoomRequest";
    };

    return C2SJoinRoomRequest;
})();

$root.S2CJoinRoomResponse = (function() {

    /**
     * Properties of a S2CJoinRoomResponse.
     * @exports IS2CJoinRoomResponse
     * @interface IS2CJoinRoomResponse
     * @property {boolean|null} [success] S2CJoinRoomResponse success
     * @property {IRoomData|null} [room] S2CJoinRoomResponse room
     * @property {GlobalFailCode|null} [failCode] S2CJoinRoomResponse failCode
     */

    /**
     * Constructs a new S2CJoinRoomResponse.
     * @exports S2CJoinRoomResponse
     * @classdesc Represents a S2CJoinRoomResponse.
     * @implements IS2CJoinRoomResponse
     * @constructor
     * @param {IS2CJoinRoomResponse=} [properties] Properties to set
     */
    function S2CJoinRoomResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2CJoinRoomResponse success.
     * @member {boolean} success
     * @memberof S2CJoinRoomResponse
     * @instance
     */
    S2CJoinRoomResponse.prototype.success = false;

    /**
     * S2CJoinRoomResponse room.
     * @member {IRoomData|null|undefined} room
     * @memberof S2CJoinRoomResponse
     * @instance
     */
    S2CJoinRoomResponse.prototype.room = null;

    /**
     * S2CJoinRoomResponse failCode.
     * @member {GlobalFailCode} failCode
     * @memberof S2CJoinRoomResponse
     * @instance
     */
    S2CJoinRoomResponse.prototype.failCode = 0;

    /**
     * Creates a new S2CJoinRoomResponse instance using the specified properties.
     * @function create
     * @memberof S2CJoinRoomResponse
     * @static
     * @param {IS2CJoinRoomResponse=} [properties] Properties to set
     * @returns {S2CJoinRoomResponse} S2CJoinRoomResponse instance
     */
    S2CJoinRoomResponse.create = function create(properties) {
        return new S2CJoinRoomResponse(properties);
    };

    /**
     * Encodes the specified S2CJoinRoomResponse message. Does not implicitly {@link S2CJoinRoomResponse.verify|verify} messages.
     * @function encode
     * @memberof S2CJoinRoomResponse
     * @static
     * @param {IS2CJoinRoomResponse} message S2CJoinRoomResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CJoinRoomResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.success != null && Object.hasOwnProperty.call(message, "success"))
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
        if (message.room != null && Object.hasOwnProperty.call(message, "room"))
            $root.RoomData.encode(message.room, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.failCode != null && Object.hasOwnProperty.call(message, "failCode"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.failCode);
        return writer;
    };

    /**
     * Encodes the specified S2CJoinRoomResponse message, length delimited. Does not implicitly {@link S2CJoinRoomResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2CJoinRoomResponse
     * @static
     * @param {IS2CJoinRoomResponse} message S2CJoinRoomResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CJoinRoomResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2CJoinRoomResponse message from the specified reader or buffer.
     * @function decode
     * @memberof S2CJoinRoomResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2CJoinRoomResponse} S2CJoinRoomResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CJoinRoomResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2CJoinRoomResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.success = reader.bool();
                    break;
                }
            case 2: {
                    message.room = $root.RoomData.decode(reader, reader.uint32());
                    break;
                }
            case 3: {
                    message.failCode = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2CJoinRoomResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2CJoinRoomResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2CJoinRoomResponse} S2CJoinRoomResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CJoinRoomResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2CJoinRoomResponse message.
     * @function verify
     * @memberof S2CJoinRoomResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2CJoinRoomResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.success != null && message.hasOwnProperty("success"))
            if (typeof message.success !== "boolean")
                return "success: boolean expected";
        if (message.room != null && message.hasOwnProperty("room")) {
            var error = $root.RoomData.verify(message.room);
            if (error)
                return "room." + error;
        }
        if (message.failCode != null && message.hasOwnProperty("failCode"))
            switch (message.failCode) {
            default:
                return "failCode: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
                break;
            }
        return null;
    };

    /**
     * Creates a S2CJoinRoomResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2CJoinRoomResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2CJoinRoomResponse} S2CJoinRoomResponse
     */
    S2CJoinRoomResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.S2CJoinRoomResponse)
            return object;
        var message = new $root.S2CJoinRoomResponse();
        if (object.success != null)
            message.success = Boolean(object.success);
        if (object.room != null) {
            if (typeof object.room !== "object")
                throw TypeError(".S2CJoinRoomResponse.room: object expected");
            message.room = $root.RoomData.fromObject(object.room);
        }
        switch (object.failCode) {
        default:
            if (typeof object.failCode === "number") {
                message.failCode = object.failCode;
                break;
            }
            break;
        case "NONE_FAILCODE":
        case 0:
            message.failCode = 0;
            break;
        case "UNKNOWN_ERROR":
        case 1:
            message.failCode = 1;
            break;
        case "INVALID_REQUEST":
        case 2:
            message.failCode = 2;
            break;
        case "AUTHENTICATION_FAILED":
        case 3:
            message.failCode = 3;
            break;
        case "CREATE_ROOM_FAILED":
        case 4:
            message.failCode = 4;
            break;
        case "JOIN_ROOM_FAILED":
        case 5:
            message.failCode = 5;
            break;
        case "LEAVE_ROOM_FAILED":
        case 6:
            message.failCode = 6;
            break;
        case "REGISTER_FAILED":
        case 7:
            message.failCode = 7;
            break;
        case "ROOM_NOT_FOUND":
        case 8:
            message.failCode = 8;
            break;
        case "CHARACTER_NOT_FOUND":
        case 9:
            message.failCode = 9;
            break;
        case "CHARACTER_STATE_ERROR":
        case 10:
            message.failCode = 10;
            break;
        case "CHARACTER_NO_CARD":
        case 11:
            message.failCode = 11;
            break;
        case "INVALID_ROOM_STATE":
        case 12:
            message.failCode = 12;
            break;
        case "NOT_ROOM_OWNER":
        case 13:
            message.failCode = 13;
            break;
        case "ALREADY_USED_BBANG":
        case 14:
            message.failCode = 14;
            break;
        case "INVALID_PHASE":
        case 15:
            message.failCode = 15;
            break;
        case "CHARACTER_CONTAINED":
        case 16:
            message.failCode = 16;
            break;
        }
        return message;
    };

    /**
     * Creates a plain object from a S2CJoinRoomResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2CJoinRoomResponse
     * @static
     * @param {S2CJoinRoomResponse} message S2CJoinRoomResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2CJoinRoomResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.success = false;
            object.room = null;
            object.failCode = options.enums === String ? "NONE_FAILCODE" : 0;
        }
        if (message.success != null && message.hasOwnProperty("success"))
            object.success = message.success;
        if (message.room != null && message.hasOwnProperty("room"))
            object.room = $root.RoomData.toObject(message.room, options);
        if (message.failCode != null && message.hasOwnProperty("failCode"))
            object.failCode = options.enums === String ? $root.GlobalFailCode[message.failCode] === undefined ? message.failCode : $root.GlobalFailCode[message.failCode] : message.failCode;
        return object;
    };

    /**
     * Converts this S2CJoinRoomResponse to JSON.
     * @function toJSON
     * @memberof S2CJoinRoomResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2CJoinRoomResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for S2CJoinRoomResponse
     * @function getTypeUrl
     * @memberof S2CJoinRoomResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    S2CJoinRoomResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/S2CJoinRoomResponse";
    };

    return S2CJoinRoomResponse;
})();

$root.C2SJoinRandomRoomRequest = (function() {

    /**
     * Properties of a C2SJoinRandomRoomRequest.
     * @exports IC2SJoinRandomRoomRequest
     * @interface IC2SJoinRandomRoomRequest
     * @property {number|null} [roomId] C2SJoinRandomRoomRequest roomId
     */

    /**
     * Constructs a new C2SJoinRandomRoomRequest.
     * @exports C2SJoinRandomRoomRequest
     * @classdesc Represents a C2SJoinRandomRoomRequest.
     * @implements IC2SJoinRandomRoomRequest
     * @constructor
     * @param {IC2SJoinRandomRoomRequest=} [properties] Properties to set
     */
    function C2SJoinRandomRoomRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * C2SJoinRandomRoomRequest roomId.
     * @member {number} roomId
     * @memberof C2SJoinRandomRoomRequest
     * @instance
     */
    C2SJoinRandomRoomRequest.prototype.roomId = 0;

    /**
     * Creates a new C2SJoinRandomRoomRequest instance using the specified properties.
     * @function create
     * @memberof C2SJoinRandomRoomRequest
     * @static
     * @param {IC2SJoinRandomRoomRequest=} [properties] Properties to set
     * @returns {C2SJoinRandomRoomRequest} C2SJoinRandomRoomRequest instance
     */
    C2SJoinRandomRoomRequest.create = function create(properties) {
        return new C2SJoinRandomRoomRequest(properties);
    };

    /**
     * Encodes the specified C2SJoinRandomRoomRequest message. Does not implicitly {@link C2SJoinRandomRoomRequest.verify|verify} messages.
     * @function encode
     * @memberof C2SJoinRandomRoomRequest
     * @static
     * @param {IC2SJoinRandomRoomRequest} message C2SJoinRandomRoomRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SJoinRandomRoomRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.roomId != null && Object.hasOwnProperty.call(message, "roomId"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.roomId);
        return writer;
    };

    /**
     * Encodes the specified C2SJoinRandomRoomRequest message, length delimited. Does not implicitly {@link C2SJoinRandomRoomRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof C2SJoinRandomRoomRequest
     * @static
     * @param {IC2SJoinRandomRoomRequest} message C2SJoinRandomRoomRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SJoinRandomRoomRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a C2SJoinRandomRoomRequest message from the specified reader or buffer.
     * @function decode
     * @memberof C2SJoinRandomRoomRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {C2SJoinRandomRoomRequest} C2SJoinRandomRoomRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SJoinRandomRoomRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2SJoinRandomRoomRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.roomId = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a C2SJoinRandomRoomRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof C2SJoinRandomRoomRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {C2SJoinRandomRoomRequest} C2SJoinRandomRoomRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SJoinRandomRoomRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a C2SJoinRandomRoomRequest message.
     * @function verify
     * @memberof C2SJoinRandomRoomRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    C2SJoinRandomRoomRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.roomId != null && message.hasOwnProperty("roomId"))
            if (!$util.isInteger(message.roomId))
                return "roomId: integer expected";
        return null;
    };

    /**
     * Creates a C2SJoinRandomRoomRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof C2SJoinRandomRoomRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {C2SJoinRandomRoomRequest} C2SJoinRandomRoomRequest
     */
    C2SJoinRandomRoomRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.C2SJoinRandomRoomRequest)
            return object;
        var message = new $root.C2SJoinRandomRoomRequest();
        if (object.roomId != null)
            message.roomId = object.roomId | 0;
        return message;
    };

    /**
     * Creates a plain object from a C2SJoinRandomRoomRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof C2SJoinRandomRoomRequest
     * @static
     * @param {C2SJoinRandomRoomRequest} message C2SJoinRandomRoomRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    C2SJoinRandomRoomRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.roomId = 0;
        if (message.roomId != null && message.hasOwnProperty("roomId"))
            object.roomId = message.roomId;
        return object;
    };

    /**
     * Converts this C2SJoinRandomRoomRequest to JSON.
     * @function toJSON
     * @memberof C2SJoinRandomRoomRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    C2SJoinRandomRoomRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for C2SJoinRandomRoomRequest
     * @function getTypeUrl
     * @memberof C2SJoinRandomRoomRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    C2SJoinRandomRoomRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/C2SJoinRandomRoomRequest";
    };

    return C2SJoinRandomRoomRequest;
})();

$root.S2CJoinRandomRoomResponse = (function() {

    /**
     * Properties of a S2CJoinRandomRoomResponse.
     * @exports IS2CJoinRandomRoomResponse
     * @interface IS2CJoinRandomRoomResponse
     * @property {boolean|null} [success] S2CJoinRandomRoomResponse success
     * @property {IRoomData|null} [room] S2CJoinRandomRoomResponse room
     * @property {GlobalFailCode|null} [failCode] S2CJoinRandomRoomResponse failCode
     */

    /**
     * Constructs a new S2CJoinRandomRoomResponse.
     * @exports S2CJoinRandomRoomResponse
     * @classdesc Represents a S2CJoinRandomRoomResponse.
     * @implements IS2CJoinRandomRoomResponse
     * @constructor
     * @param {IS2CJoinRandomRoomResponse=} [properties] Properties to set
     */
    function S2CJoinRandomRoomResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2CJoinRandomRoomResponse success.
     * @member {boolean} success
     * @memberof S2CJoinRandomRoomResponse
     * @instance
     */
    S2CJoinRandomRoomResponse.prototype.success = false;

    /**
     * S2CJoinRandomRoomResponse room.
     * @member {IRoomData|null|undefined} room
     * @memberof S2CJoinRandomRoomResponse
     * @instance
     */
    S2CJoinRandomRoomResponse.prototype.room = null;

    /**
     * S2CJoinRandomRoomResponse failCode.
     * @member {GlobalFailCode} failCode
     * @memberof S2CJoinRandomRoomResponse
     * @instance
     */
    S2CJoinRandomRoomResponse.prototype.failCode = 0;

    /**
     * Creates a new S2CJoinRandomRoomResponse instance using the specified properties.
     * @function create
     * @memberof S2CJoinRandomRoomResponse
     * @static
     * @param {IS2CJoinRandomRoomResponse=} [properties] Properties to set
     * @returns {S2CJoinRandomRoomResponse} S2CJoinRandomRoomResponse instance
     */
    S2CJoinRandomRoomResponse.create = function create(properties) {
        return new S2CJoinRandomRoomResponse(properties);
    };

    /**
     * Encodes the specified S2CJoinRandomRoomResponse message. Does not implicitly {@link S2CJoinRandomRoomResponse.verify|verify} messages.
     * @function encode
     * @memberof S2CJoinRandomRoomResponse
     * @static
     * @param {IS2CJoinRandomRoomResponse} message S2CJoinRandomRoomResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CJoinRandomRoomResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.success != null && Object.hasOwnProperty.call(message, "success"))
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
        if (message.room != null && Object.hasOwnProperty.call(message, "room"))
            $root.RoomData.encode(message.room, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.failCode != null && Object.hasOwnProperty.call(message, "failCode"))
            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.failCode);
        return writer;
    };

    /**
     * Encodes the specified S2CJoinRandomRoomResponse message, length delimited. Does not implicitly {@link S2CJoinRandomRoomResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2CJoinRandomRoomResponse
     * @static
     * @param {IS2CJoinRandomRoomResponse} message S2CJoinRandomRoomResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CJoinRandomRoomResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2CJoinRandomRoomResponse message from the specified reader or buffer.
     * @function decode
     * @memberof S2CJoinRandomRoomResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2CJoinRandomRoomResponse} S2CJoinRandomRoomResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CJoinRandomRoomResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2CJoinRandomRoomResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.success = reader.bool();
                    break;
                }
            case 2: {
                    message.room = $root.RoomData.decode(reader, reader.uint32());
                    break;
                }
            case 3: {
                    message.failCode = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2CJoinRandomRoomResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2CJoinRandomRoomResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2CJoinRandomRoomResponse} S2CJoinRandomRoomResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CJoinRandomRoomResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2CJoinRandomRoomResponse message.
     * @function verify
     * @memberof S2CJoinRandomRoomResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2CJoinRandomRoomResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.success != null && message.hasOwnProperty("success"))
            if (typeof message.success !== "boolean")
                return "success: boolean expected";
        if (message.room != null && message.hasOwnProperty("room")) {
            var error = $root.RoomData.verify(message.room);
            if (error)
                return "room." + error;
        }
        if (message.failCode != null && message.hasOwnProperty("failCode"))
            switch (message.failCode) {
            default:
                return "failCode: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
                break;
            }
        return null;
    };

    /**
     * Creates a S2CJoinRandomRoomResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2CJoinRandomRoomResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2CJoinRandomRoomResponse} S2CJoinRandomRoomResponse
     */
    S2CJoinRandomRoomResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.S2CJoinRandomRoomResponse)
            return object;
        var message = new $root.S2CJoinRandomRoomResponse();
        if (object.success != null)
            message.success = Boolean(object.success);
        if (object.room != null) {
            if (typeof object.room !== "object")
                throw TypeError(".S2CJoinRandomRoomResponse.room: object expected");
            message.room = $root.RoomData.fromObject(object.room);
        }
        switch (object.failCode) {
        default:
            if (typeof object.failCode === "number") {
                message.failCode = object.failCode;
                break;
            }
            break;
        case "NONE_FAILCODE":
        case 0:
            message.failCode = 0;
            break;
        case "UNKNOWN_ERROR":
        case 1:
            message.failCode = 1;
            break;
        case "INVALID_REQUEST":
        case 2:
            message.failCode = 2;
            break;
        case "AUTHENTICATION_FAILED":
        case 3:
            message.failCode = 3;
            break;
        case "CREATE_ROOM_FAILED":
        case 4:
            message.failCode = 4;
            break;
        case "JOIN_ROOM_FAILED":
        case 5:
            message.failCode = 5;
            break;
        case "LEAVE_ROOM_FAILED":
        case 6:
            message.failCode = 6;
            break;
        case "REGISTER_FAILED":
        case 7:
            message.failCode = 7;
            break;
        case "ROOM_NOT_FOUND":
        case 8:
            message.failCode = 8;
            break;
        case "CHARACTER_NOT_FOUND":
        case 9:
            message.failCode = 9;
            break;
        case "CHARACTER_STATE_ERROR":
        case 10:
            message.failCode = 10;
            break;
        case "CHARACTER_NO_CARD":
        case 11:
            message.failCode = 11;
            break;
        case "INVALID_ROOM_STATE":
        case 12:
            message.failCode = 12;
            break;
        case "NOT_ROOM_OWNER":
        case 13:
            message.failCode = 13;
            break;
        case "ALREADY_USED_BBANG":
        case 14:
            message.failCode = 14;
            break;
        case "INVALID_PHASE":
        case 15:
            message.failCode = 15;
            break;
        case "CHARACTER_CONTAINED":
        case 16:
            message.failCode = 16;
            break;
        }
        return message;
    };

    /**
     * Creates a plain object from a S2CJoinRandomRoomResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2CJoinRandomRoomResponse
     * @static
     * @param {S2CJoinRandomRoomResponse} message S2CJoinRandomRoomResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2CJoinRandomRoomResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.success = false;
            object.room = null;
            object.failCode = options.enums === String ? "NONE_FAILCODE" : 0;
        }
        if (message.success != null && message.hasOwnProperty("success"))
            object.success = message.success;
        if (message.room != null && message.hasOwnProperty("room"))
            object.room = $root.RoomData.toObject(message.room, options);
        if (message.failCode != null && message.hasOwnProperty("failCode"))
            object.failCode = options.enums === String ? $root.GlobalFailCode[message.failCode] === undefined ? message.failCode : $root.GlobalFailCode[message.failCode] : message.failCode;
        return object;
    };

    /**
     * Converts this S2CJoinRandomRoomResponse to JSON.
     * @function toJSON
     * @memberof S2CJoinRandomRoomResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2CJoinRandomRoomResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for S2CJoinRandomRoomResponse
     * @function getTypeUrl
     * @memberof S2CJoinRandomRoomResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    S2CJoinRandomRoomResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/S2CJoinRandomRoomResponse";
    };

    return S2CJoinRandomRoomResponse;
})();

$root.S2CJoinRoomNotification = (function() {

    /**
     * Properties of a S2CJoinRoomNotification.
     * @exports IS2CJoinRoomNotification
     * @interface IS2CJoinRoomNotification
     * @property {IUserData|null} [joinUser] S2CJoinRoomNotification joinUser
     */

    /**
     * Constructs a new S2CJoinRoomNotification.
     * @exports S2CJoinRoomNotification
     * @classdesc Represents a S2CJoinRoomNotification.
     * @implements IS2CJoinRoomNotification
     * @constructor
     * @param {IS2CJoinRoomNotification=} [properties] Properties to set
     */
    function S2CJoinRoomNotification(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2CJoinRoomNotification joinUser.
     * @member {IUserData|null|undefined} joinUser
     * @memberof S2CJoinRoomNotification
     * @instance
     */
    S2CJoinRoomNotification.prototype.joinUser = null;

    /**
     * Creates a new S2CJoinRoomNotification instance using the specified properties.
     * @function create
     * @memberof S2CJoinRoomNotification
     * @static
     * @param {IS2CJoinRoomNotification=} [properties] Properties to set
     * @returns {S2CJoinRoomNotification} S2CJoinRoomNotification instance
     */
    S2CJoinRoomNotification.create = function create(properties) {
        return new S2CJoinRoomNotification(properties);
    };

    /**
     * Encodes the specified S2CJoinRoomNotification message. Does not implicitly {@link S2CJoinRoomNotification.verify|verify} messages.
     * @function encode
     * @memberof S2CJoinRoomNotification
     * @static
     * @param {IS2CJoinRoomNotification} message S2CJoinRoomNotification message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CJoinRoomNotification.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.joinUser != null && Object.hasOwnProperty.call(message, "joinUser"))
            $root.UserData.encode(message.joinUser, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified S2CJoinRoomNotification message, length delimited. Does not implicitly {@link S2CJoinRoomNotification.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2CJoinRoomNotification
     * @static
     * @param {IS2CJoinRoomNotification} message S2CJoinRoomNotification message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CJoinRoomNotification.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2CJoinRoomNotification message from the specified reader or buffer.
     * @function decode
     * @memberof S2CJoinRoomNotification
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2CJoinRoomNotification} S2CJoinRoomNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CJoinRoomNotification.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2CJoinRoomNotification();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.joinUser = $root.UserData.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2CJoinRoomNotification message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2CJoinRoomNotification
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2CJoinRoomNotification} S2CJoinRoomNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CJoinRoomNotification.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2CJoinRoomNotification message.
     * @function verify
     * @memberof S2CJoinRoomNotification
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2CJoinRoomNotification.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.joinUser != null && message.hasOwnProperty("joinUser")) {
            var error = $root.UserData.verify(message.joinUser);
            if (error)
                return "joinUser." + error;
        }
        return null;
    };

    /**
     * Creates a S2CJoinRoomNotification message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2CJoinRoomNotification
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2CJoinRoomNotification} S2CJoinRoomNotification
     */
    S2CJoinRoomNotification.fromObject = function fromObject(object) {
        if (object instanceof $root.S2CJoinRoomNotification)
            return object;
        var message = new $root.S2CJoinRoomNotification();
        if (object.joinUser != null) {
            if (typeof object.joinUser !== "object")
                throw TypeError(".S2CJoinRoomNotification.joinUser: object expected");
            message.joinUser = $root.UserData.fromObject(object.joinUser);
        }
        return message;
    };

    /**
     * Creates a plain object from a S2CJoinRoomNotification message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2CJoinRoomNotification
     * @static
     * @param {S2CJoinRoomNotification} message S2CJoinRoomNotification
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2CJoinRoomNotification.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.joinUser = null;
        if (message.joinUser != null && message.hasOwnProperty("joinUser"))
            object.joinUser = $root.UserData.toObject(message.joinUser, options);
        return object;
    };

    /**
     * Converts this S2CJoinRoomNotification to JSON.
     * @function toJSON
     * @memberof S2CJoinRoomNotification
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2CJoinRoomNotification.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for S2CJoinRoomNotification
     * @function getTypeUrl
     * @memberof S2CJoinRoomNotification
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    S2CJoinRoomNotification.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/S2CJoinRoomNotification";
    };

    return S2CJoinRoomNotification;
})();

$root.C2SLeaveRoomRequest = (function() {

    /**
     * Properties of a C2SLeaveRoomRequest.
     * @exports IC2SLeaveRoomRequest
     * @interface IC2SLeaveRoomRequest
     */

    /**
     * Constructs a new C2SLeaveRoomRequest.
     * @exports C2SLeaveRoomRequest
     * @classdesc Represents a C2SLeaveRoomRequest.
     * @implements IC2SLeaveRoomRequest
     * @constructor
     * @param {IC2SLeaveRoomRequest=} [properties] Properties to set
     */
    function C2SLeaveRoomRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new C2SLeaveRoomRequest instance using the specified properties.
     * @function create
     * @memberof C2SLeaveRoomRequest
     * @static
     * @param {IC2SLeaveRoomRequest=} [properties] Properties to set
     * @returns {C2SLeaveRoomRequest} C2SLeaveRoomRequest instance
     */
    C2SLeaveRoomRequest.create = function create(properties) {
        return new C2SLeaveRoomRequest(properties);
    };

    /**
     * Encodes the specified C2SLeaveRoomRequest message. Does not implicitly {@link C2SLeaveRoomRequest.verify|verify} messages.
     * @function encode
     * @memberof C2SLeaveRoomRequest
     * @static
     * @param {IC2SLeaveRoomRequest} message C2SLeaveRoomRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SLeaveRoomRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified C2SLeaveRoomRequest message, length delimited. Does not implicitly {@link C2SLeaveRoomRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof C2SLeaveRoomRequest
     * @static
     * @param {IC2SLeaveRoomRequest} message C2SLeaveRoomRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SLeaveRoomRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a C2SLeaveRoomRequest message from the specified reader or buffer.
     * @function decode
     * @memberof C2SLeaveRoomRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {C2SLeaveRoomRequest} C2SLeaveRoomRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SLeaveRoomRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2SLeaveRoomRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a C2SLeaveRoomRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof C2SLeaveRoomRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {C2SLeaveRoomRequest} C2SLeaveRoomRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SLeaveRoomRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a C2SLeaveRoomRequest message.
     * @function verify
     * @memberof C2SLeaveRoomRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    C2SLeaveRoomRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a C2SLeaveRoomRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof C2SLeaveRoomRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {C2SLeaveRoomRequest} C2SLeaveRoomRequest
     */
    C2SLeaveRoomRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.C2SLeaveRoomRequest)
            return object;
        return new $root.C2SLeaveRoomRequest();
    };

    /**
     * Creates a plain object from a C2SLeaveRoomRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof C2SLeaveRoomRequest
     * @static
     * @param {C2SLeaveRoomRequest} message C2SLeaveRoomRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    C2SLeaveRoomRequest.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this C2SLeaveRoomRequest to JSON.
     * @function toJSON
     * @memberof C2SLeaveRoomRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    C2SLeaveRoomRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for C2SLeaveRoomRequest
     * @function getTypeUrl
     * @memberof C2SLeaveRoomRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    C2SLeaveRoomRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/C2SLeaveRoomRequest";
    };

    return C2SLeaveRoomRequest;
})();

$root.S2CLeaveRoomResponse = (function() {

    /**
     * Properties of a S2CLeaveRoomResponse.
     * @exports IS2CLeaveRoomResponse
     * @interface IS2CLeaveRoomResponse
     * @property {boolean|null} [success] S2CLeaveRoomResponse success
     * @property {GlobalFailCode|null} [failCode] S2CLeaveRoomResponse failCode
     */

    /**
     * Constructs a new S2CLeaveRoomResponse.
     * @exports S2CLeaveRoomResponse
     * @classdesc Represents a S2CLeaveRoomResponse.
     * @implements IS2CLeaveRoomResponse
     * @constructor
     * @param {IS2CLeaveRoomResponse=} [properties] Properties to set
     */
    function S2CLeaveRoomResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2CLeaveRoomResponse success.
     * @member {boolean} success
     * @memberof S2CLeaveRoomResponse
     * @instance
     */
    S2CLeaveRoomResponse.prototype.success = false;

    /**
     * S2CLeaveRoomResponse failCode.
     * @member {GlobalFailCode} failCode
     * @memberof S2CLeaveRoomResponse
     * @instance
     */
    S2CLeaveRoomResponse.prototype.failCode = 0;

    /**
     * Creates a new S2CLeaveRoomResponse instance using the specified properties.
     * @function create
     * @memberof S2CLeaveRoomResponse
     * @static
     * @param {IS2CLeaveRoomResponse=} [properties] Properties to set
     * @returns {S2CLeaveRoomResponse} S2CLeaveRoomResponse instance
     */
    S2CLeaveRoomResponse.create = function create(properties) {
        return new S2CLeaveRoomResponse(properties);
    };

    /**
     * Encodes the specified S2CLeaveRoomResponse message. Does not implicitly {@link S2CLeaveRoomResponse.verify|verify} messages.
     * @function encode
     * @memberof S2CLeaveRoomResponse
     * @static
     * @param {IS2CLeaveRoomResponse} message S2CLeaveRoomResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CLeaveRoomResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.success != null && Object.hasOwnProperty.call(message, "success"))
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
        if (message.failCode != null && Object.hasOwnProperty.call(message, "failCode"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.failCode);
        return writer;
    };

    /**
     * Encodes the specified S2CLeaveRoomResponse message, length delimited. Does not implicitly {@link S2CLeaveRoomResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2CLeaveRoomResponse
     * @static
     * @param {IS2CLeaveRoomResponse} message S2CLeaveRoomResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CLeaveRoomResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2CLeaveRoomResponse message from the specified reader or buffer.
     * @function decode
     * @memberof S2CLeaveRoomResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2CLeaveRoomResponse} S2CLeaveRoomResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CLeaveRoomResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2CLeaveRoomResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.success = reader.bool();
                    break;
                }
            case 2: {
                    message.failCode = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2CLeaveRoomResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2CLeaveRoomResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2CLeaveRoomResponse} S2CLeaveRoomResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CLeaveRoomResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2CLeaveRoomResponse message.
     * @function verify
     * @memberof S2CLeaveRoomResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2CLeaveRoomResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.success != null && message.hasOwnProperty("success"))
            if (typeof message.success !== "boolean")
                return "success: boolean expected";
        if (message.failCode != null && message.hasOwnProperty("failCode"))
            switch (message.failCode) {
            default:
                return "failCode: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
                break;
            }
        return null;
    };

    /**
     * Creates a S2CLeaveRoomResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2CLeaveRoomResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2CLeaveRoomResponse} S2CLeaveRoomResponse
     */
    S2CLeaveRoomResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.S2CLeaveRoomResponse)
            return object;
        var message = new $root.S2CLeaveRoomResponse();
        if (object.success != null)
            message.success = Boolean(object.success);
        switch (object.failCode) {
        default:
            if (typeof object.failCode === "number") {
                message.failCode = object.failCode;
                break;
            }
            break;
        case "NONE_FAILCODE":
        case 0:
            message.failCode = 0;
            break;
        case "UNKNOWN_ERROR":
        case 1:
            message.failCode = 1;
            break;
        case "INVALID_REQUEST":
        case 2:
            message.failCode = 2;
            break;
        case "AUTHENTICATION_FAILED":
        case 3:
            message.failCode = 3;
            break;
        case "CREATE_ROOM_FAILED":
        case 4:
            message.failCode = 4;
            break;
        case "JOIN_ROOM_FAILED":
        case 5:
            message.failCode = 5;
            break;
        case "LEAVE_ROOM_FAILED":
        case 6:
            message.failCode = 6;
            break;
        case "REGISTER_FAILED":
        case 7:
            message.failCode = 7;
            break;
        case "ROOM_NOT_FOUND":
        case 8:
            message.failCode = 8;
            break;
        case "CHARACTER_NOT_FOUND":
        case 9:
            message.failCode = 9;
            break;
        case "CHARACTER_STATE_ERROR":
        case 10:
            message.failCode = 10;
            break;
        case "CHARACTER_NO_CARD":
        case 11:
            message.failCode = 11;
            break;
        case "INVALID_ROOM_STATE":
        case 12:
            message.failCode = 12;
            break;
        case "NOT_ROOM_OWNER":
        case 13:
            message.failCode = 13;
            break;
        case "ALREADY_USED_BBANG":
        case 14:
            message.failCode = 14;
            break;
        case "INVALID_PHASE":
        case 15:
            message.failCode = 15;
            break;
        case "CHARACTER_CONTAINED":
        case 16:
            message.failCode = 16;
            break;
        }
        return message;
    };

    /**
     * Creates a plain object from a S2CLeaveRoomResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2CLeaveRoomResponse
     * @static
     * @param {S2CLeaveRoomResponse} message S2CLeaveRoomResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2CLeaveRoomResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.success = false;
            object.failCode = options.enums === String ? "NONE_FAILCODE" : 0;
        }
        if (message.success != null && message.hasOwnProperty("success"))
            object.success = message.success;
        if (message.failCode != null && message.hasOwnProperty("failCode"))
            object.failCode = options.enums === String ? $root.GlobalFailCode[message.failCode] === undefined ? message.failCode : $root.GlobalFailCode[message.failCode] : message.failCode;
        return object;
    };

    /**
     * Converts this S2CLeaveRoomResponse to JSON.
     * @function toJSON
     * @memberof S2CLeaveRoomResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2CLeaveRoomResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for S2CLeaveRoomResponse
     * @function getTypeUrl
     * @memberof S2CLeaveRoomResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    S2CLeaveRoomResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/S2CLeaveRoomResponse";
    };

    return S2CLeaveRoomResponse;
})();

$root.S2CLeaveRoomNotification = (function() {

    /**
     * Properties of a S2CLeaveRoomNotification.
     * @exports IS2CLeaveRoomNotification
     * @interface IS2CLeaveRoomNotification
     * @property {string|null} [userId] S2CLeaveRoomNotification userId
     */

    /**
     * Constructs a new S2CLeaveRoomNotification.
     * @exports S2CLeaveRoomNotification
     * @classdesc Represents a S2CLeaveRoomNotification.
     * @implements IS2CLeaveRoomNotification
     * @constructor
     * @param {IS2CLeaveRoomNotification=} [properties] Properties to set
     */
    function S2CLeaveRoomNotification(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2CLeaveRoomNotification userId.
     * @member {string} userId
     * @memberof S2CLeaveRoomNotification
     * @instance
     */
    S2CLeaveRoomNotification.prototype.userId = "";

    /**
     * Creates a new S2CLeaveRoomNotification instance using the specified properties.
     * @function create
     * @memberof S2CLeaveRoomNotification
     * @static
     * @param {IS2CLeaveRoomNotification=} [properties] Properties to set
     * @returns {S2CLeaveRoomNotification} S2CLeaveRoomNotification instance
     */
    S2CLeaveRoomNotification.create = function create(properties) {
        return new S2CLeaveRoomNotification(properties);
    };

    /**
     * Encodes the specified S2CLeaveRoomNotification message. Does not implicitly {@link S2CLeaveRoomNotification.verify|verify} messages.
     * @function encode
     * @memberof S2CLeaveRoomNotification
     * @static
     * @param {IS2CLeaveRoomNotification} message S2CLeaveRoomNotification message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CLeaveRoomNotification.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.userId);
        return writer;
    };

    /**
     * Encodes the specified S2CLeaveRoomNotification message, length delimited. Does not implicitly {@link S2CLeaveRoomNotification.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2CLeaveRoomNotification
     * @static
     * @param {IS2CLeaveRoomNotification} message S2CLeaveRoomNotification message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CLeaveRoomNotification.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2CLeaveRoomNotification message from the specified reader or buffer.
     * @function decode
     * @memberof S2CLeaveRoomNotification
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2CLeaveRoomNotification} S2CLeaveRoomNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CLeaveRoomNotification.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2CLeaveRoomNotification();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.userId = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2CLeaveRoomNotification message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2CLeaveRoomNotification
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2CLeaveRoomNotification} S2CLeaveRoomNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CLeaveRoomNotification.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2CLeaveRoomNotification message.
     * @function verify
     * @memberof S2CLeaveRoomNotification
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2CLeaveRoomNotification.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.userId != null && message.hasOwnProperty("userId"))
            if (!$util.isString(message.userId))
                return "userId: string expected";
        return null;
    };

    /**
     * Creates a S2CLeaveRoomNotification message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2CLeaveRoomNotification
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2CLeaveRoomNotification} S2CLeaveRoomNotification
     */
    S2CLeaveRoomNotification.fromObject = function fromObject(object) {
        if (object instanceof $root.S2CLeaveRoomNotification)
            return object;
        var message = new $root.S2CLeaveRoomNotification();
        if (object.userId != null)
            message.userId = String(object.userId);
        return message;
    };

    /**
     * Creates a plain object from a S2CLeaveRoomNotification message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2CLeaveRoomNotification
     * @static
     * @param {S2CLeaveRoomNotification} message S2CLeaveRoomNotification
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2CLeaveRoomNotification.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.userId = "";
        if (message.userId != null && message.hasOwnProperty("userId"))
            object.userId = message.userId;
        return object;
    };

    /**
     * Converts this S2CLeaveRoomNotification to JSON.
     * @function toJSON
     * @memberof S2CLeaveRoomNotification
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2CLeaveRoomNotification.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for S2CLeaveRoomNotification
     * @function getTypeUrl
     * @memberof S2CLeaveRoomNotification
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    S2CLeaveRoomNotification.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/S2CLeaveRoomNotification";
    };

    return S2CLeaveRoomNotification;
})();

$root.C2SGamePrepareRequest = (function() {

    /**
     * Properties of a C2SGamePrepareRequest.
     * @exports IC2SGamePrepareRequest
     * @interface IC2SGamePrepareRequest
     */

    /**
     * Constructs a new C2SGamePrepareRequest.
     * @exports C2SGamePrepareRequest
     * @classdesc Represents a C2SGamePrepareRequest.
     * @implements IC2SGamePrepareRequest
     * @constructor
     * @param {IC2SGamePrepareRequest=} [properties] Properties to set
     */
    function C2SGamePrepareRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new C2SGamePrepareRequest instance using the specified properties.
     * @function create
     * @memberof C2SGamePrepareRequest
     * @static
     * @param {IC2SGamePrepareRequest=} [properties] Properties to set
     * @returns {C2SGamePrepareRequest} C2SGamePrepareRequest instance
     */
    C2SGamePrepareRequest.create = function create(properties) {
        return new C2SGamePrepareRequest(properties);
    };

    /**
     * Encodes the specified C2SGamePrepareRequest message. Does not implicitly {@link C2SGamePrepareRequest.verify|verify} messages.
     * @function encode
     * @memberof C2SGamePrepareRequest
     * @static
     * @param {IC2SGamePrepareRequest} message C2SGamePrepareRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SGamePrepareRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified C2SGamePrepareRequest message, length delimited. Does not implicitly {@link C2SGamePrepareRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof C2SGamePrepareRequest
     * @static
     * @param {IC2SGamePrepareRequest} message C2SGamePrepareRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SGamePrepareRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a C2SGamePrepareRequest message from the specified reader or buffer.
     * @function decode
     * @memberof C2SGamePrepareRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {C2SGamePrepareRequest} C2SGamePrepareRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SGamePrepareRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2SGamePrepareRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a C2SGamePrepareRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof C2SGamePrepareRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {C2SGamePrepareRequest} C2SGamePrepareRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SGamePrepareRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a C2SGamePrepareRequest message.
     * @function verify
     * @memberof C2SGamePrepareRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    C2SGamePrepareRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a C2SGamePrepareRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof C2SGamePrepareRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {C2SGamePrepareRequest} C2SGamePrepareRequest
     */
    C2SGamePrepareRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.C2SGamePrepareRequest)
            return object;
        return new $root.C2SGamePrepareRequest();
    };

    /**
     * Creates a plain object from a C2SGamePrepareRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof C2SGamePrepareRequest
     * @static
     * @param {C2SGamePrepareRequest} message C2SGamePrepareRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    C2SGamePrepareRequest.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this C2SGamePrepareRequest to JSON.
     * @function toJSON
     * @memberof C2SGamePrepareRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    C2SGamePrepareRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for C2SGamePrepareRequest
     * @function getTypeUrl
     * @memberof C2SGamePrepareRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    C2SGamePrepareRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/C2SGamePrepareRequest";
    };

    return C2SGamePrepareRequest;
})();

$root.S2CGamePrepareResponse = (function() {

    /**
     * Properties of a S2CGamePrepareResponse.
     * @exports IS2CGamePrepareResponse
     * @interface IS2CGamePrepareResponse
     * @property {boolean|null} [success] S2CGamePrepareResponse success
     * @property {GlobalFailCode|null} [failCode] S2CGamePrepareResponse failCode
     */

    /**
     * Constructs a new S2CGamePrepareResponse.
     * @exports S2CGamePrepareResponse
     * @classdesc Represents a S2CGamePrepareResponse.
     * @implements IS2CGamePrepareResponse
     * @constructor
     * @param {IS2CGamePrepareResponse=} [properties] Properties to set
     */
    function S2CGamePrepareResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2CGamePrepareResponse success.
     * @member {boolean} success
     * @memberof S2CGamePrepareResponse
     * @instance
     */
    S2CGamePrepareResponse.prototype.success = false;

    /**
     * S2CGamePrepareResponse failCode.
     * @member {GlobalFailCode} failCode
     * @memberof S2CGamePrepareResponse
     * @instance
     */
    S2CGamePrepareResponse.prototype.failCode = 0;

    /**
     * Creates a new S2CGamePrepareResponse instance using the specified properties.
     * @function create
     * @memberof S2CGamePrepareResponse
     * @static
     * @param {IS2CGamePrepareResponse=} [properties] Properties to set
     * @returns {S2CGamePrepareResponse} S2CGamePrepareResponse instance
     */
    S2CGamePrepareResponse.create = function create(properties) {
        return new S2CGamePrepareResponse(properties);
    };

    /**
     * Encodes the specified S2CGamePrepareResponse message. Does not implicitly {@link S2CGamePrepareResponse.verify|verify} messages.
     * @function encode
     * @memberof S2CGamePrepareResponse
     * @static
     * @param {IS2CGamePrepareResponse} message S2CGamePrepareResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CGamePrepareResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.success != null && Object.hasOwnProperty.call(message, "success"))
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
        if (message.failCode != null && Object.hasOwnProperty.call(message, "failCode"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.failCode);
        return writer;
    };

    /**
     * Encodes the specified S2CGamePrepareResponse message, length delimited. Does not implicitly {@link S2CGamePrepareResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2CGamePrepareResponse
     * @static
     * @param {IS2CGamePrepareResponse} message S2CGamePrepareResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CGamePrepareResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2CGamePrepareResponse message from the specified reader or buffer.
     * @function decode
     * @memberof S2CGamePrepareResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2CGamePrepareResponse} S2CGamePrepareResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CGamePrepareResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2CGamePrepareResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.success = reader.bool();
                    break;
                }
            case 2: {
                    message.failCode = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2CGamePrepareResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2CGamePrepareResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2CGamePrepareResponse} S2CGamePrepareResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CGamePrepareResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2CGamePrepareResponse message.
     * @function verify
     * @memberof S2CGamePrepareResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2CGamePrepareResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.success != null && message.hasOwnProperty("success"))
            if (typeof message.success !== "boolean")
                return "success: boolean expected";
        if (message.failCode != null && message.hasOwnProperty("failCode"))
            switch (message.failCode) {
            default:
                return "failCode: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
                break;
            }
        return null;
    };

    /**
     * Creates a S2CGamePrepareResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2CGamePrepareResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2CGamePrepareResponse} S2CGamePrepareResponse
     */
    S2CGamePrepareResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.S2CGamePrepareResponse)
            return object;
        var message = new $root.S2CGamePrepareResponse();
        if (object.success != null)
            message.success = Boolean(object.success);
        switch (object.failCode) {
        default:
            if (typeof object.failCode === "number") {
                message.failCode = object.failCode;
                break;
            }
            break;
        case "NONE_FAILCODE":
        case 0:
            message.failCode = 0;
            break;
        case "UNKNOWN_ERROR":
        case 1:
            message.failCode = 1;
            break;
        case "INVALID_REQUEST":
        case 2:
            message.failCode = 2;
            break;
        case "AUTHENTICATION_FAILED":
        case 3:
            message.failCode = 3;
            break;
        case "CREATE_ROOM_FAILED":
        case 4:
            message.failCode = 4;
            break;
        case "JOIN_ROOM_FAILED":
        case 5:
            message.failCode = 5;
            break;
        case "LEAVE_ROOM_FAILED":
        case 6:
            message.failCode = 6;
            break;
        case "REGISTER_FAILED":
        case 7:
            message.failCode = 7;
            break;
        case "ROOM_NOT_FOUND":
        case 8:
            message.failCode = 8;
            break;
        case "CHARACTER_NOT_FOUND":
        case 9:
            message.failCode = 9;
            break;
        case "CHARACTER_STATE_ERROR":
        case 10:
            message.failCode = 10;
            break;
        case "CHARACTER_NO_CARD":
        case 11:
            message.failCode = 11;
            break;
        case "INVALID_ROOM_STATE":
        case 12:
            message.failCode = 12;
            break;
        case "NOT_ROOM_OWNER":
        case 13:
            message.failCode = 13;
            break;
        case "ALREADY_USED_BBANG":
        case 14:
            message.failCode = 14;
            break;
        case "INVALID_PHASE":
        case 15:
            message.failCode = 15;
            break;
        case "CHARACTER_CONTAINED":
        case 16:
            message.failCode = 16;
            break;
        }
        return message;
    };

    /**
     * Creates a plain object from a S2CGamePrepareResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2CGamePrepareResponse
     * @static
     * @param {S2CGamePrepareResponse} message S2CGamePrepareResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2CGamePrepareResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.success = false;
            object.failCode = options.enums === String ? "NONE_FAILCODE" : 0;
        }
        if (message.success != null && message.hasOwnProperty("success"))
            object.success = message.success;
        if (message.failCode != null && message.hasOwnProperty("failCode"))
            object.failCode = options.enums === String ? $root.GlobalFailCode[message.failCode] === undefined ? message.failCode : $root.GlobalFailCode[message.failCode] : message.failCode;
        return object;
    };

    /**
     * Converts this S2CGamePrepareResponse to JSON.
     * @function toJSON
     * @memberof S2CGamePrepareResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2CGamePrepareResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for S2CGamePrepareResponse
     * @function getTypeUrl
     * @memberof S2CGamePrepareResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    S2CGamePrepareResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/S2CGamePrepareResponse";
    };

    return S2CGamePrepareResponse;
})();

$root.S2CGamePrepareNotification = (function() {

    /**
     * Properties of a S2CGamePrepareNotification.
     * @exports IS2CGamePrepareNotification
     * @interface IS2CGamePrepareNotification
     * @property {IRoomData|null} [room] S2CGamePrepareNotification room
     */

    /**
     * Constructs a new S2CGamePrepareNotification.
     * @exports S2CGamePrepareNotification
     * @classdesc Represents a S2CGamePrepareNotification.
     * @implements IS2CGamePrepareNotification
     * @constructor
     * @param {IS2CGamePrepareNotification=} [properties] Properties to set
     */
    function S2CGamePrepareNotification(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2CGamePrepareNotification room.
     * @member {IRoomData|null|undefined} room
     * @memberof S2CGamePrepareNotification
     * @instance
     */
    S2CGamePrepareNotification.prototype.room = null;

    /**
     * Creates a new S2CGamePrepareNotification instance using the specified properties.
     * @function create
     * @memberof S2CGamePrepareNotification
     * @static
     * @param {IS2CGamePrepareNotification=} [properties] Properties to set
     * @returns {S2CGamePrepareNotification} S2CGamePrepareNotification instance
     */
    S2CGamePrepareNotification.create = function create(properties) {
        return new S2CGamePrepareNotification(properties);
    };

    /**
     * Encodes the specified S2CGamePrepareNotification message. Does not implicitly {@link S2CGamePrepareNotification.verify|verify} messages.
     * @function encode
     * @memberof S2CGamePrepareNotification
     * @static
     * @param {IS2CGamePrepareNotification} message S2CGamePrepareNotification message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CGamePrepareNotification.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.room != null && Object.hasOwnProperty.call(message, "room"))
            $root.RoomData.encode(message.room, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified S2CGamePrepareNotification message, length delimited. Does not implicitly {@link S2CGamePrepareNotification.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2CGamePrepareNotification
     * @static
     * @param {IS2CGamePrepareNotification} message S2CGamePrepareNotification message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CGamePrepareNotification.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2CGamePrepareNotification message from the specified reader or buffer.
     * @function decode
     * @memberof S2CGamePrepareNotification
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2CGamePrepareNotification} S2CGamePrepareNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CGamePrepareNotification.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2CGamePrepareNotification();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.room = $root.RoomData.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2CGamePrepareNotification message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2CGamePrepareNotification
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2CGamePrepareNotification} S2CGamePrepareNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CGamePrepareNotification.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2CGamePrepareNotification message.
     * @function verify
     * @memberof S2CGamePrepareNotification
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2CGamePrepareNotification.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.room != null && message.hasOwnProperty("room")) {
            var error = $root.RoomData.verify(message.room);
            if (error)
                return "room." + error;
        }
        return null;
    };

    /**
     * Creates a S2CGamePrepareNotification message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2CGamePrepareNotification
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2CGamePrepareNotification} S2CGamePrepareNotification
     */
    S2CGamePrepareNotification.fromObject = function fromObject(object) {
        if (object instanceof $root.S2CGamePrepareNotification)
            return object;
        var message = new $root.S2CGamePrepareNotification();
        if (object.room != null) {
            if (typeof object.room !== "object")
                throw TypeError(".S2CGamePrepareNotification.room: object expected");
            message.room = $root.RoomData.fromObject(object.room);
        }
        return message;
    };

    /**
     * Creates a plain object from a S2CGamePrepareNotification message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2CGamePrepareNotification
     * @static
     * @param {S2CGamePrepareNotification} message S2CGamePrepareNotification
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2CGamePrepareNotification.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.room = null;
        if (message.room != null && message.hasOwnProperty("room"))
            object.room = $root.RoomData.toObject(message.room, options);
        return object;
    };

    /**
     * Converts this S2CGamePrepareNotification to JSON.
     * @function toJSON
     * @memberof S2CGamePrepareNotification
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2CGamePrepareNotification.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for S2CGamePrepareNotification
     * @function getTypeUrl
     * @memberof S2CGamePrepareNotification
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    S2CGamePrepareNotification.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/S2CGamePrepareNotification";
    };

    return S2CGamePrepareNotification;
})();

$root.C2SGameStartRequest = (function() {

    /**
     * Properties of a C2SGameStartRequest.
     * @exports IC2SGameStartRequest
     * @interface IC2SGameStartRequest
     */

    /**
     * Constructs a new C2SGameStartRequest.
     * @exports C2SGameStartRequest
     * @classdesc Represents a C2SGameStartRequest.
     * @implements IC2SGameStartRequest
     * @constructor
     * @param {IC2SGameStartRequest=} [properties] Properties to set
     */
    function C2SGameStartRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new C2SGameStartRequest instance using the specified properties.
     * @function create
     * @memberof C2SGameStartRequest
     * @static
     * @param {IC2SGameStartRequest=} [properties] Properties to set
     * @returns {C2SGameStartRequest} C2SGameStartRequest instance
     */
    C2SGameStartRequest.create = function create(properties) {
        return new C2SGameStartRequest(properties);
    };

    /**
     * Encodes the specified C2SGameStartRequest message. Does not implicitly {@link C2SGameStartRequest.verify|verify} messages.
     * @function encode
     * @memberof C2SGameStartRequest
     * @static
     * @param {IC2SGameStartRequest} message C2SGameStartRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SGameStartRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified C2SGameStartRequest message, length delimited. Does not implicitly {@link C2SGameStartRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof C2SGameStartRequest
     * @static
     * @param {IC2SGameStartRequest} message C2SGameStartRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SGameStartRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a C2SGameStartRequest message from the specified reader or buffer.
     * @function decode
     * @memberof C2SGameStartRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {C2SGameStartRequest} C2SGameStartRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SGameStartRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2SGameStartRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a C2SGameStartRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof C2SGameStartRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {C2SGameStartRequest} C2SGameStartRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SGameStartRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a C2SGameStartRequest message.
     * @function verify
     * @memberof C2SGameStartRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    C2SGameStartRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a C2SGameStartRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof C2SGameStartRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {C2SGameStartRequest} C2SGameStartRequest
     */
    C2SGameStartRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.C2SGameStartRequest)
            return object;
        return new $root.C2SGameStartRequest();
    };

    /**
     * Creates a plain object from a C2SGameStartRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof C2SGameStartRequest
     * @static
     * @param {C2SGameStartRequest} message C2SGameStartRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    C2SGameStartRequest.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this C2SGameStartRequest to JSON.
     * @function toJSON
     * @memberof C2SGameStartRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    C2SGameStartRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for C2SGameStartRequest
     * @function getTypeUrl
     * @memberof C2SGameStartRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    C2SGameStartRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/C2SGameStartRequest";
    };

    return C2SGameStartRequest;
})();

$root.S2CGameStartResponse = (function() {

    /**
     * Properties of a S2CGameStartResponse.
     * @exports IS2CGameStartResponse
     * @interface IS2CGameStartResponse
     * @property {boolean|null} [success] S2CGameStartResponse success
     * @property {GlobalFailCode|null} [failCode] S2CGameStartResponse failCode
     */

    /**
     * Constructs a new S2CGameStartResponse.
     * @exports S2CGameStartResponse
     * @classdesc Represents a S2CGameStartResponse.
     * @implements IS2CGameStartResponse
     * @constructor
     * @param {IS2CGameStartResponse=} [properties] Properties to set
     */
    function S2CGameStartResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2CGameStartResponse success.
     * @member {boolean} success
     * @memberof S2CGameStartResponse
     * @instance
     */
    S2CGameStartResponse.prototype.success = false;

    /**
     * S2CGameStartResponse failCode.
     * @member {GlobalFailCode} failCode
     * @memberof S2CGameStartResponse
     * @instance
     */
    S2CGameStartResponse.prototype.failCode = 0;

    /**
     * Creates a new S2CGameStartResponse instance using the specified properties.
     * @function create
     * @memberof S2CGameStartResponse
     * @static
     * @param {IS2CGameStartResponse=} [properties] Properties to set
     * @returns {S2CGameStartResponse} S2CGameStartResponse instance
     */
    S2CGameStartResponse.create = function create(properties) {
        return new S2CGameStartResponse(properties);
    };

    /**
     * Encodes the specified S2CGameStartResponse message. Does not implicitly {@link S2CGameStartResponse.verify|verify} messages.
     * @function encode
     * @memberof S2CGameStartResponse
     * @static
     * @param {IS2CGameStartResponse} message S2CGameStartResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CGameStartResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.success != null && Object.hasOwnProperty.call(message, "success"))
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
        if (message.failCode != null && Object.hasOwnProperty.call(message, "failCode"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.failCode);
        return writer;
    };

    /**
     * Encodes the specified S2CGameStartResponse message, length delimited. Does not implicitly {@link S2CGameStartResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2CGameStartResponse
     * @static
     * @param {IS2CGameStartResponse} message S2CGameStartResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CGameStartResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2CGameStartResponse message from the specified reader or buffer.
     * @function decode
     * @memberof S2CGameStartResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2CGameStartResponse} S2CGameStartResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CGameStartResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2CGameStartResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.success = reader.bool();
                    break;
                }
            case 2: {
                    message.failCode = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2CGameStartResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2CGameStartResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2CGameStartResponse} S2CGameStartResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CGameStartResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2CGameStartResponse message.
     * @function verify
     * @memberof S2CGameStartResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2CGameStartResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.success != null && message.hasOwnProperty("success"))
            if (typeof message.success !== "boolean")
                return "success: boolean expected";
        if (message.failCode != null && message.hasOwnProperty("failCode"))
            switch (message.failCode) {
            default:
                return "failCode: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
                break;
            }
        return null;
    };

    /**
     * Creates a S2CGameStartResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2CGameStartResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2CGameStartResponse} S2CGameStartResponse
     */
    S2CGameStartResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.S2CGameStartResponse)
            return object;
        var message = new $root.S2CGameStartResponse();
        if (object.success != null)
            message.success = Boolean(object.success);
        switch (object.failCode) {
        default:
            if (typeof object.failCode === "number") {
                message.failCode = object.failCode;
                break;
            }
            break;
        case "NONE_FAILCODE":
        case 0:
            message.failCode = 0;
            break;
        case "UNKNOWN_ERROR":
        case 1:
            message.failCode = 1;
            break;
        case "INVALID_REQUEST":
        case 2:
            message.failCode = 2;
            break;
        case "AUTHENTICATION_FAILED":
        case 3:
            message.failCode = 3;
            break;
        case "CREATE_ROOM_FAILED":
        case 4:
            message.failCode = 4;
            break;
        case "JOIN_ROOM_FAILED":
        case 5:
            message.failCode = 5;
            break;
        case "LEAVE_ROOM_FAILED":
        case 6:
            message.failCode = 6;
            break;
        case "REGISTER_FAILED":
        case 7:
            message.failCode = 7;
            break;
        case "ROOM_NOT_FOUND":
        case 8:
            message.failCode = 8;
            break;
        case "CHARACTER_NOT_FOUND":
        case 9:
            message.failCode = 9;
            break;
        case "CHARACTER_STATE_ERROR":
        case 10:
            message.failCode = 10;
            break;
        case "CHARACTER_NO_CARD":
        case 11:
            message.failCode = 11;
            break;
        case "INVALID_ROOM_STATE":
        case 12:
            message.failCode = 12;
            break;
        case "NOT_ROOM_OWNER":
        case 13:
            message.failCode = 13;
            break;
        case "ALREADY_USED_BBANG":
        case 14:
            message.failCode = 14;
            break;
        case "INVALID_PHASE":
        case 15:
            message.failCode = 15;
            break;
        case "CHARACTER_CONTAINED":
        case 16:
            message.failCode = 16;
            break;
        }
        return message;
    };

    /**
     * Creates a plain object from a S2CGameStartResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2CGameStartResponse
     * @static
     * @param {S2CGameStartResponse} message S2CGameStartResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2CGameStartResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.success = false;
            object.failCode = options.enums === String ? "NONE_FAILCODE" : 0;
        }
        if (message.success != null && message.hasOwnProperty("success"))
            object.success = message.success;
        if (message.failCode != null && message.hasOwnProperty("failCode"))
            object.failCode = options.enums === String ? $root.GlobalFailCode[message.failCode] === undefined ? message.failCode : $root.GlobalFailCode[message.failCode] : message.failCode;
        return object;
    };

    /**
     * Converts this S2CGameStartResponse to JSON.
     * @function toJSON
     * @memberof S2CGameStartResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2CGameStartResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for S2CGameStartResponse
     * @function getTypeUrl
     * @memberof S2CGameStartResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    S2CGameStartResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/S2CGameStartResponse";
    };

    return S2CGameStartResponse;
})();

$root.S2CGameStartNotification = (function() {

    /**
     * Properties of a S2CGameStartNotification.
     * @exports IS2CGameStartNotification
     * @interface IS2CGameStartNotification
     * @property {IGameStateData|null} [gameState] S2CGameStartNotification gameState
     * @property {Array.<IUserData>|null} [users] S2CGameStartNotification users
     * @property {Array.<ICharacterPositionData>|null} [characterPositions] S2CGameStartNotification characterPositions
     */

    /**
     * Constructs a new S2CGameStartNotification.
     * @exports S2CGameStartNotification
     * @classdesc Represents a S2CGameStartNotification.
     * @implements IS2CGameStartNotification
     * @constructor
     * @param {IS2CGameStartNotification=} [properties] Properties to set
     */
    function S2CGameStartNotification(properties) {
        this.users = [];
        this.characterPositions = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2CGameStartNotification gameState.
     * @member {IGameStateData|null|undefined} gameState
     * @memberof S2CGameStartNotification
     * @instance
     */
    S2CGameStartNotification.prototype.gameState = null;

    /**
     * S2CGameStartNotification users.
     * @member {Array.<IUserData>} users
     * @memberof S2CGameStartNotification
     * @instance
     */
    S2CGameStartNotification.prototype.users = $util.emptyArray;

    /**
     * S2CGameStartNotification characterPositions.
     * @member {Array.<ICharacterPositionData>} characterPositions
     * @memberof S2CGameStartNotification
     * @instance
     */
    S2CGameStartNotification.prototype.characterPositions = $util.emptyArray;

    /**
     * Creates a new S2CGameStartNotification instance using the specified properties.
     * @function create
     * @memberof S2CGameStartNotification
     * @static
     * @param {IS2CGameStartNotification=} [properties] Properties to set
     * @returns {S2CGameStartNotification} S2CGameStartNotification instance
     */
    S2CGameStartNotification.create = function create(properties) {
        return new S2CGameStartNotification(properties);
    };

    /**
     * Encodes the specified S2CGameStartNotification message. Does not implicitly {@link S2CGameStartNotification.verify|verify} messages.
     * @function encode
     * @memberof S2CGameStartNotification
     * @static
     * @param {IS2CGameStartNotification} message S2CGameStartNotification message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CGameStartNotification.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.gameState != null && Object.hasOwnProperty.call(message, "gameState"))
            $root.GameStateData.encode(message.gameState, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.users != null && message.users.length)
            for (var i = 0; i < message.users.length; ++i)
                $root.UserData.encode(message.users[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.characterPositions != null && message.characterPositions.length)
            for (var i = 0; i < message.characterPositions.length; ++i)
                $root.CharacterPositionData.encode(message.characterPositions[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified S2CGameStartNotification message, length delimited. Does not implicitly {@link S2CGameStartNotification.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2CGameStartNotification
     * @static
     * @param {IS2CGameStartNotification} message S2CGameStartNotification message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CGameStartNotification.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2CGameStartNotification message from the specified reader or buffer.
     * @function decode
     * @memberof S2CGameStartNotification
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2CGameStartNotification} S2CGameStartNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CGameStartNotification.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2CGameStartNotification();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.gameState = $root.GameStateData.decode(reader, reader.uint32());
                    break;
                }
            case 2: {
                    if (!(message.users && message.users.length))
                        message.users = [];
                    message.users.push($root.UserData.decode(reader, reader.uint32()));
                    break;
                }
            case 3: {
                    if (!(message.characterPositions && message.characterPositions.length))
                        message.characterPositions = [];
                    message.characterPositions.push($root.CharacterPositionData.decode(reader, reader.uint32()));
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2CGameStartNotification message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2CGameStartNotification
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2CGameStartNotification} S2CGameStartNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CGameStartNotification.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2CGameStartNotification message.
     * @function verify
     * @memberof S2CGameStartNotification
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2CGameStartNotification.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.gameState != null && message.hasOwnProperty("gameState")) {
            var error = $root.GameStateData.verify(message.gameState);
            if (error)
                return "gameState." + error;
        }
        if (message.users != null && message.hasOwnProperty("users")) {
            if (!Array.isArray(message.users))
                return "users: array expected";
            for (var i = 0; i < message.users.length; ++i) {
                var error = $root.UserData.verify(message.users[i]);
                if (error)
                    return "users." + error;
            }
        }
        if (message.characterPositions != null && message.hasOwnProperty("characterPositions")) {
            if (!Array.isArray(message.characterPositions))
                return "characterPositions: array expected";
            for (var i = 0; i < message.characterPositions.length; ++i) {
                var error = $root.CharacterPositionData.verify(message.characterPositions[i]);
                if (error)
                    return "characterPositions." + error;
            }
        }
        return null;
    };

    /**
     * Creates a S2CGameStartNotification message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2CGameStartNotification
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2CGameStartNotification} S2CGameStartNotification
     */
    S2CGameStartNotification.fromObject = function fromObject(object) {
        if (object instanceof $root.S2CGameStartNotification)
            return object;
        var message = new $root.S2CGameStartNotification();
        if (object.gameState != null) {
            if (typeof object.gameState !== "object")
                throw TypeError(".S2CGameStartNotification.gameState: object expected");
            message.gameState = $root.GameStateData.fromObject(object.gameState);
        }
        if (object.users) {
            if (!Array.isArray(object.users))
                throw TypeError(".S2CGameStartNotification.users: array expected");
            message.users = [];
            for (var i = 0; i < object.users.length; ++i) {
                if (typeof object.users[i] !== "object")
                    throw TypeError(".S2CGameStartNotification.users: object expected");
                message.users[i] = $root.UserData.fromObject(object.users[i]);
            }
        }
        if (object.characterPositions) {
            if (!Array.isArray(object.characterPositions))
                throw TypeError(".S2CGameStartNotification.characterPositions: array expected");
            message.characterPositions = [];
            for (var i = 0; i < object.characterPositions.length; ++i) {
                if (typeof object.characterPositions[i] !== "object")
                    throw TypeError(".S2CGameStartNotification.characterPositions: object expected");
                message.characterPositions[i] = $root.CharacterPositionData.fromObject(object.characterPositions[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a S2CGameStartNotification message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2CGameStartNotification
     * @static
     * @param {S2CGameStartNotification} message S2CGameStartNotification
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2CGameStartNotification.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.users = [];
            object.characterPositions = [];
        }
        if (options.defaults)
            object.gameState = null;
        if (message.gameState != null && message.hasOwnProperty("gameState"))
            object.gameState = $root.GameStateData.toObject(message.gameState, options);
        if (message.users && message.users.length) {
            object.users = [];
            for (var j = 0; j < message.users.length; ++j)
                object.users[j] = $root.UserData.toObject(message.users[j], options);
        }
        if (message.characterPositions && message.characterPositions.length) {
            object.characterPositions = [];
            for (var j = 0; j < message.characterPositions.length; ++j)
                object.characterPositions[j] = $root.CharacterPositionData.toObject(message.characterPositions[j], options);
        }
        return object;
    };

    /**
     * Converts this S2CGameStartNotification to JSON.
     * @function toJSON
     * @memberof S2CGameStartNotification
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2CGameStartNotification.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for S2CGameStartNotification
     * @function getTypeUrl
     * @memberof S2CGameStartNotification
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    S2CGameStartNotification.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/S2CGameStartNotification";
    };

    return S2CGameStartNotification;
})();

$root.C2SPositionUpdateRequest = (function() {

    /**
     * Properties of a C2SPositionUpdateRequest.
     * @exports IC2SPositionUpdateRequest
     * @interface IC2SPositionUpdateRequest
     * @property {number|null} [x] C2SPositionUpdateRequest x
     * @property {number|null} [y] C2SPositionUpdateRequest y
     */

    /**
     * Constructs a new C2SPositionUpdateRequest.
     * @exports C2SPositionUpdateRequest
     * @classdesc Represents a C2SPositionUpdateRequest.
     * @implements IC2SPositionUpdateRequest
     * @constructor
     * @param {IC2SPositionUpdateRequest=} [properties] Properties to set
     */
    function C2SPositionUpdateRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * C2SPositionUpdateRequest x.
     * @member {number} x
     * @memberof C2SPositionUpdateRequest
     * @instance
     */
    C2SPositionUpdateRequest.prototype.x = 0;

    /**
     * C2SPositionUpdateRequest y.
     * @member {number} y
     * @memberof C2SPositionUpdateRequest
     * @instance
     */
    C2SPositionUpdateRequest.prototype.y = 0;

    /**
     * Creates a new C2SPositionUpdateRequest instance using the specified properties.
     * @function create
     * @memberof C2SPositionUpdateRequest
     * @static
     * @param {IC2SPositionUpdateRequest=} [properties] Properties to set
     * @returns {C2SPositionUpdateRequest} C2SPositionUpdateRequest instance
     */
    C2SPositionUpdateRequest.create = function create(properties) {
        return new C2SPositionUpdateRequest(properties);
    };

    /**
     * Encodes the specified C2SPositionUpdateRequest message. Does not implicitly {@link C2SPositionUpdateRequest.verify|verify} messages.
     * @function encode
     * @memberof C2SPositionUpdateRequest
     * @static
     * @param {IC2SPositionUpdateRequest} message C2SPositionUpdateRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SPositionUpdateRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.x != null && Object.hasOwnProperty.call(message, "x"))
            writer.uint32(/* id 1, wireType 1 =*/9).double(message.x);
        if (message.y != null && Object.hasOwnProperty.call(message, "y"))
            writer.uint32(/* id 2, wireType 1 =*/17).double(message.y);
        return writer;
    };

    /**
     * Encodes the specified C2SPositionUpdateRequest message, length delimited. Does not implicitly {@link C2SPositionUpdateRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof C2SPositionUpdateRequest
     * @static
     * @param {IC2SPositionUpdateRequest} message C2SPositionUpdateRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SPositionUpdateRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a C2SPositionUpdateRequest message from the specified reader or buffer.
     * @function decode
     * @memberof C2SPositionUpdateRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {C2SPositionUpdateRequest} C2SPositionUpdateRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SPositionUpdateRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2SPositionUpdateRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.x = reader.double();
                    break;
                }
            case 2: {
                    message.y = reader.double();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a C2SPositionUpdateRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof C2SPositionUpdateRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {C2SPositionUpdateRequest} C2SPositionUpdateRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SPositionUpdateRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a C2SPositionUpdateRequest message.
     * @function verify
     * @memberof C2SPositionUpdateRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    C2SPositionUpdateRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.x != null && message.hasOwnProperty("x"))
            if (typeof message.x !== "number")
                return "x: number expected";
        if (message.y != null && message.hasOwnProperty("y"))
            if (typeof message.y !== "number")
                return "y: number expected";
        return null;
    };

    /**
     * Creates a C2SPositionUpdateRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof C2SPositionUpdateRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {C2SPositionUpdateRequest} C2SPositionUpdateRequest
     */
    C2SPositionUpdateRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.C2SPositionUpdateRequest)
            return object;
        var message = new $root.C2SPositionUpdateRequest();
        if (object.x != null)
            message.x = Number(object.x);
        if (object.y != null)
            message.y = Number(object.y);
        return message;
    };

    /**
     * Creates a plain object from a C2SPositionUpdateRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof C2SPositionUpdateRequest
     * @static
     * @param {C2SPositionUpdateRequest} message C2SPositionUpdateRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    C2SPositionUpdateRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.x = 0;
            object.y = 0;
        }
        if (message.x != null && message.hasOwnProperty("x"))
            object.x = options.json && !isFinite(message.x) ? String(message.x) : message.x;
        if (message.y != null && message.hasOwnProperty("y"))
            object.y = options.json && !isFinite(message.y) ? String(message.y) : message.y;
        return object;
    };

    /**
     * Converts this C2SPositionUpdateRequest to JSON.
     * @function toJSON
     * @memberof C2SPositionUpdateRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    C2SPositionUpdateRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for C2SPositionUpdateRequest
     * @function getTypeUrl
     * @memberof C2SPositionUpdateRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    C2SPositionUpdateRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/C2SPositionUpdateRequest";
    };

    return C2SPositionUpdateRequest;
})();

$root.S2CPositionUpdateResponse = (function() {

    /**
     * Properties of a S2CPositionUpdateResponse.
     * @exports IS2CPositionUpdateResponse
     * @interface IS2CPositionUpdateResponse
     * @property {boolean|null} [success] S2CPositionUpdateResponse success
     * @property {GlobalFailCode|null} [failCode] S2CPositionUpdateResponse failCode
     */

    /**
     * Constructs a new S2CPositionUpdateResponse.
     * @exports S2CPositionUpdateResponse
     * @classdesc Represents a S2CPositionUpdateResponse.
     * @implements IS2CPositionUpdateResponse
     * @constructor
     * @param {IS2CPositionUpdateResponse=} [properties] Properties to set
     */
    function S2CPositionUpdateResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2CPositionUpdateResponse success.
     * @member {boolean} success
     * @memberof S2CPositionUpdateResponse
     * @instance
     */
    S2CPositionUpdateResponse.prototype.success = false;

    /**
     * S2CPositionUpdateResponse failCode.
     * @member {GlobalFailCode} failCode
     * @memberof S2CPositionUpdateResponse
     * @instance
     */
    S2CPositionUpdateResponse.prototype.failCode = 0;

    /**
     * Creates a new S2CPositionUpdateResponse instance using the specified properties.
     * @function create
     * @memberof S2CPositionUpdateResponse
     * @static
     * @param {IS2CPositionUpdateResponse=} [properties] Properties to set
     * @returns {S2CPositionUpdateResponse} S2CPositionUpdateResponse instance
     */
    S2CPositionUpdateResponse.create = function create(properties) {
        return new S2CPositionUpdateResponse(properties);
    };

    /**
     * Encodes the specified S2CPositionUpdateResponse message. Does not implicitly {@link S2CPositionUpdateResponse.verify|verify} messages.
     * @function encode
     * @memberof S2CPositionUpdateResponse
     * @static
     * @param {IS2CPositionUpdateResponse} message S2CPositionUpdateResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CPositionUpdateResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.success != null && Object.hasOwnProperty.call(message, "success"))
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
        if (message.failCode != null && Object.hasOwnProperty.call(message, "failCode"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.failCode);
        return writer;
    };

    /**
     * Encodes the specified S2CPositionUpdateResponse message, length delimited. Does not implicitly {@link S2CPositionUpdateResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2CPositionUpdateResponse
     * @static
     * @param {IS2CPositionUpdateResponse} message S2CPositionUpdateResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CPositionUpdateResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2CPositionUpdateResponse message from the specified reader or buffer.
     * @function decode
     * @memberof S2CPositionUpdateResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2CPositionUpdateResponse} S2CPositionUpdateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CPositionUpdateResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2CPositionUpdateResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.success = reader.bool();
                    break;
                }
            case 2: {
                    message.failCode = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2CPositionUpdateResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2CPositionUpdateResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2CPositionUpdateResponse} S2CPositionUpdateResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CPositionUpdateResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2CPositionUpdateResponse message.
     * @function verify
     * @memberof S2CPositionUpdateResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2CPositionUpdateResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.success != null && message.hasOwnProperty("success"))
            if (typeof message.success !== "boolean")
                return "success: boolean expected";
        if (message.failCode != null && message.hasOwnProperty("failCode"))
            switch (message.failCode) {
            default:
                return "failCode: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
                break;
            }
        return null;
    };

    /**
     * Creates a S2CPositionUpdateResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2CPositionUpdateResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2CPositionUpdateResponse} S2CPositionUpdateResponse
     */
    S2CPositionUpdateResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.S2CPositionUpdateResponse)
            return object;
        var message = new $root.S2CPositionUpdateResponse();
        if (object.success != null)
            message.success = Boolean(object.success);
        switch (object.failCode) {
        default:
            if (typeof object.failCode === "number") {
                message.failCode = object.failCode;
                break;
            }
            break;
        case "NONE_FAILCODE":
        case 0:
            message.failCode = 0;
            break;
        case "UNKNOWN_ERROR":
        case 1:
            message.failCode = 1;
            break;
        case "INVALID_REQUEST":
        case 2:
            message.failCode = 2;
            break;
        case "AUTHENTICATION_FAILED":
        case 3:
            message.failCode = 3;
            break;
        case "CREATE_ROOM_FAILED":
        case 4:
            message.failCode = 4;
            break;
        case "JOIN_ROOM_FAILED":
        case 5:
            message.failCode = 5;
            break;
        case "LEAVE_ROOM_FAILED":
        case 6:
            message.failCode = 6;
            break;
        case "REGISTER_FAILED":
        case 7:
            message.failCode = 7;
            break;
        case "ROOM_NOT_FOUND":
        case 8:
            message.failCode = 8;
            break;
        case "CHARACTER_NOT_FOUND":
        case 9:
            message.failCode = 9;
            break;
        case "CHARACTER_STATE_ERROR":
        case 10:
            message.failCode = 10;
            break;
        case "CHARACTER_NO_CARD":
        case 11:
            message.failCode = 11;
            break;
        case "INVALID_ROOM_STATE":
        case 12:
            message.failCode = 12;
            break;
        case "NOT_ROOM_OWNER":
        case 13:
            message.failCode = 13;
            break;
        case "ALREADY_USED_BBANG":
        case 14:
            message.failCode = 14;
            break;
        case "INVALID_PHASE":
        case 15:
            message.failCode = 15;
            break;
        case "CHARACTER_CONTAINED":
        case 16:
            message.failCode = 16;
            break;
        }
        return message;
    };

    /**
     * Creates a plain object from a S2CPositionUpdateResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2CPositionUpdateResponse
     * @static
     * @param {S2CPositionUpdateResponse} message S2CPositionUpdateResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2CPositionUpdateResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.success = false;
            object.failCode = options.enums === String ? "NONE_FAILCODE" : 0;
        }
        if (message.success != null && message.hasOwnProperty("success"))
            object.success = message.success;
        if (message.failCode != null && message.hasOwnProperty("failCode"))
            object.failCode = options.enums === String ? $root.GlobalFailCode[message.failCode] === undefined ? message.failCode : $root.GlobalFailCode[message.failCode] : message.failCode;
        return object;
    };

    /**
     * Converts this S2CPositionUpdateResponse to JSON.
     * @function toJSON
     * @memberof S2CPositionUpdateResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2CPositionUpdateResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for S2CPositionUpdateResponse
     * @function getTypeUrl
     * @memberof S2CPositionUpdateResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    S2CPositionUpdateResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/S2CPositionUpdateResponse";
    };

    return S2CPositionUpdateResponse;
})();

$root.S2CPositionUpdateNotification = (function() {

    /**
     * Properties of a S2CPositionUpdateNotification.
     * @exports IS2CPositionUpdateNotification
     * @interface IS2CPositionUpdateNotification
     * @property {Array.<ICharacterPositionData>|null} [characterPositions] S2CPositionUpdateNotification characterPositions
     */

    /**
     * Constructs a new S2CPositionUpdateNotification.
     * @exports S2CPositionUpdateNotification
     * @classdesc Represents a S2CPositionUpdateNotification.
     * @implements IS2CPositionUpdateNotification
     * @constructor
     * @param {IS2CPositionUpdateNotification=} [properties] Properties to set
     */
    function S2CPositionUpdateNotification(properties) {
        this.characterPositions = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2CPositionUpdateNotification characterPositions.
     * @member {Array.<ICharacterPositionData>} characterPositions
     * @memberof S2CPositionUpdateNotification
     * @instance
     */
    S2CPositionUpdateNotification.prototype.characterPositions = $util.emptyArray;

    /**
     * Creates a new S2CPositionUpdateNotification instance using the specified properties.
     * @function create
     * @memberof S2CPositionUpdateNotification
     * @static
     * @param {IS2CPositionUpdateNotification=} [properties] Properties to set
     * @returns {S2CPositionUpdateNotification} S2CPositionUpdateNotification instance
     */
    S2CPositionUpdateNotification.create = function create(properties) {
        return new S2CPositionUpdateNotification(properties);
    };

    /**
     * Encodes the specified S2CPositionUpdateNotification message. Does not implicitly {@link S2CPositionUpdateNotification.verify|verify} messages.
     * @function encode
     * @memberof S2CPositionUpdateNotification
     * @static
     * @param {IS2CPositionUpdateNotification} message S2CPositionUpdateNotification message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CPositionUpdateNotification.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.characterPositions != null && message.characterPositions.length)
            for (var i = 0; i < message.characterPositions.length; ++i)
                $root.CharacterPositionData.encode(message.characterPositions[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified S2CPositionUpdateNotification message, length delimited. Does not implicitly {@link S2CPositionUpdateNotification.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2CPositionUpdateNotification
     * @static
     * @param {IS2CPositionUpdateNotification} message S2CPositionUpdateNotification message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CPositionUpdateNotification.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2CPositionUpdateNotification message from the specified reader or buffer.
     * @function decode
     * @memberof S2CPositionUpdateNotification
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2CPositionUpdateNotification} S2CPositionUpdateNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CPositionUpdateNotification.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2CPositionUpdateNotification();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    if (!(message.characterPositions && message.characterPositions.length))
                        message.characterPositions = [];
                    message.characterPositions.push($root.CharacterPositionData.decode(reader, reader.uint32()));
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2CPositionUpdateNotification message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2CPositionUpdateNotification
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2CPositionUpdateNotification} S2CPositionUpdateNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CPositionUpdateNotification.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2CPositionUpdateNotification message.
     * @function verify
     * @memberof S2CPositionUpdateNotification
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2CPositionUpdateNotification.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.characterPositions != null && message.hasOwnProperty("characterPositions")) {
            if (!Array.isArray(message.characterPositions))
                return "characterPositions: array expected";
            for (var i = 0; i < message.characterPositions.length; ++i) {
                var error = $root.CharacterPositionData.verify(message.characterPositions[i]);
                if (error)
                    return "characterPositions." + error;
            }
        }
        return null;
    };

    /**
     * Creates a S2CPositionUpdateNotification message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2CPositionUpdateNotification
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2CPositionUpdateNotification} S2CPositionUpdateNotification
     */
    S2CPositionUpdateNotification.fromObject = function fromObject(object) {
        if (object instanceof $root.S2CPositionUpdateNotification)
            return object;
        var message = new $root.S2CPositionUpdateNotification();
        if (object.characterPositions) {
            if (!Array.isArray(object.characterPositions))
                throw TypeError(".S2CPositionUpdateNotification.characterPositions: array expected");
            message.characterPositions = [];
            for (var i = 0; i < object.characterPositions.length; ++i) {
                if (typeof object.characterPositions[i] !== "object")
                    throw TypeError(".S2CPositionUpdateNotification.characterPositions: object expected");
                message.characterPositions[i] = $root.CharacterPositionData.fromObject(object.characterPositions[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a S2CPositionUpdateNotification message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2CPositionUpdateNotification
     * @static
     * @param {S2CPositionUpdateNotification} message S2CPositionUpdateNotification
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2CPositionUpdateNotification.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.characterPositions = [];
        if (message.characterPositions && message.characterPositions.length) {
            object.characterPositions = [];
            for (var j = 0; j < message.characterPositions.length; ++j)
                object.characterPositions[j] = $root.CharacterPositionData.toObject(message.characterPositions[j], options);
        }
        return object;
    };

    /**
     * Converts this S2CPositionUpdateNotification to JSON.
     * @function toJSON
     * @memberof S2CPositionUpdateNotification
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2CPositionUpdateNotification.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for S2CPositionUpdateNotification
     * @function getTypeUrl
     * @memberof S2CPositionUpdateNotification
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    S2CPositionUpdateNotification.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/S2CPositionUpdateNotification";
    };

    return S2CPositionUpdateNotification;
})();

$root.C2SUseCardRequest = (function() {

    /**
     * Properties of a C2SUseCardRequest.
     * @exports IC2SUseCardRequest
     * @interface IC2SUseCardRequest
     * @property {CardType|null} [cardType] C2SUseCardRequest cardType
     * @property {string|null} [targetUserId] C2SUseCardRequest targetUserId
     */

    /**
     * Constructs a new C2SUseCardRequest.
     * @exports C2SUseCardRequest
     * @classdesc Represents a C2SUseCardRequest.
     * @implements IC2SUseCardRequest
     * @constructor
     * @param {IC2SUseCardRequest=} [properties] Properties to set
     */
    function C2SUseCardRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * C2SUseCardRequest cardType.
     * @member {CardType} cardType
     * @memberof C2SUseCardRequest
     * @instance
     */
    C2SUseCardRequest.prototype.cardType = 0;

    /**
     * C2SUseCardRequest targetUserId.
     * @member {string} targetUserId
     * @memberof C2SUseCardRequest
     * @instance
     */
    C2SUseCardRequest.prototype.targetUserId = "";

    /**
     * Creates a new C2SUseCardRequest instance using the specified properties.
     * @function create
     * @memberof C2SUseCardRequest
     * @static
     * @param {IC2SUseCardRequest=} [properties] Properties to set
     * @returns {C2SUseCardRequest} C2SUseCardRequest instance
     */
    C2SUseCardRequest.create = function create(properties) {
        return new C2SUseCardRequest(properties);
    };

    /**
     * Encodes the specified C2SUseCardRequest message. Does not implicitly {@link C2SUseCardRequest.verify|verify} messages.
     * @function encode
     * @memberof C2SUseCardRequest
     * @static
     * @param {IC2SUseCardRequest} message C2SUseCardRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SUseCardRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.cardType != null && Object.hasOwnProperty.call(message, "cardType"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cardType);
        if (message.targetUserId != null && Object.hasOwnProperty.call(message, "targetUserId"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.targetUserId);
        return writer;
    };

    /**
     * Encodes the specified C2SUseCardRequest message, length delimited. Does not implicitly {@link C2SUseCardRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof C2SUseCardRequest
     * @static
     * @param {IC2SUseCardRequest} message C2SUseCardRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SUseCardRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a C2SUseCardRequest message from the specified reader or buffer.
     * @function decode
     * @memberof C2SUseCardRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {C2SUseCardRequest} C2SUseCardRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SUseCardRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2SUseCardRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.cardType = reader.int32();
                    break;
                }
            case 2: {
                    message.targetUserId = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a C2SUseCardRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof C2SUseCardRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {C2SUseCardRequest} C2SUseCardRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SUseCardRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a C2SUseCardRequest message.
     * @function verify
     * @memberof C2SUseCardRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    C2SUseCardRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.cardType != null && message.hasOwnProperty("cardType"))
            switch (message.cardType) {
            default:
                return "cardType: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
            case 20:
            case 21:
            case 22:
            case 23:
                break;
            }
        if (message.targetUserId != null && message.hasOwnProperty("targetUserId"))
            if (!$util.isString(message.targetUserId))
                return "targetUserId: string expected";
        return null;
    };

    /**
     * Creates a C2SUseCardRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof C2SUseCardRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {C2SUseCardRequest} C2SUseCardRequest
     */
    C2SUseCardRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.C2SUseCardRequest)
            return object;
        var message = new $root.C2SUseCardRequest();
        switch (object.cardType) {
        default:
            if (typeof object.cardType === "number") {
                message.cardType = object.cardType;
                break;
            }
            break;
        case "NONE":
        case 0:
            message.cardType = 0;
            break;
        case "BBANG":
        case 1:
            message.cardType = 1;
            break;
        case "BIG_BBANG":
        case 2:
            message.cardType = 2;
            break;
        case "SHIELD":
        case 3:
            message.cardType = 3;
            break;
        case "VACCINE":
        case 4:
            message.cardType = 4;
            break;
        case "CALL_119":
        case 5:
            message.cardType = 5;
            break;
        case "DEATH_MATCH":
        case 6:
            message.cardType = 6;
            break;
        case "GUERRILLA":
        case 7:
            message.cardType = 7;
            break;
        case "ABSORB":
        case 8:
            message.cardType = 8;
            break;
        case "HALLUCINATION":
        case 9:
            message.cardType = 9;
            break;
        case "FLEA_MARKET":
        case 10:
            message.cardType = 10;
            break;
        case "MATURED_SAVINGS":
        case 11:
            message.cardType = 11;
            break;
        case "WIN_LOTTERY":
        case 12:
            message.cardType = 12;
            break;
        case "SNIPER_GUN":
        case 13:
            message.cardType = 13;
            break;
        case "HAND_GUN":
        case 14:
            message.cardType = 14;
            break;
        case "DESERT_EAGLE":
        case 15:
            message.cardType = 15;
            break;
        case "AUTO_RIFLE":
        case 16:
            message.cardType = 16;
            break;
        case "LASER_POINTER":
        case 17:
            message.cardType = 17;
            break;
        case "RADAR":
        case 18:
            message.cardType = 18;
            break;
        case "AUTO_SHIELD":
        case 19:
            message.cardType = 19;
            break;
        case "STEALTH_SUIT":
        case 20:
            message.cardType = 20;
            break;
        case "CONTAINMENT_UNIT":
        case 21:
            message.cardType = 21;
            break;
        case "SATELLITE_TARGET":
        case 22:
            message.cardType = 22;
            break;
        case "BOMB":
        case 23:
            message.cardType = 23;
            break;
        }
        if (object.targetUserId != null)
            message.targetUserId = String(object.targetUserId);
        return message;
    };

    /**
     * Creates a plain object from a C2SUseCardRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof C2SUseCardRequest
     * @static
     * @param {C2SUseCardRequest} message C2SUseCardRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    C2SUseCardRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.cardType = options.enums === String ? "NONE" : 0;
            object.targetUserId = "";
        }
        if (message.cardType != null && message.hasOwnProperty("cardType"))
            object.cardType = options.enums === String ? $root.CardType[message.cardType] === undefined ? message.cardType : $root.CardType[message.cardType] : message.cardType;
        if (message.targetUserId != null && message.hasOwnProperty("targetUserId"))
            object.targetUserId = message.targetUserId;
        return object;
    };

    /**
     * Converts this C2SUseCardRequest to JSON.
     * @function toJSON
     * @memberof C2SUseCardRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    C2SUseCardRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for C2SUseCardRequest
     * @function getTypeUrl
     * @memberof C2SUseCardRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    C2SUseCardRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/C2SUseCardRequest";
    };

    return C2SUseCardRequest;
})();

$root.S2CUseCardResponse = (function() {

    /**
     * Properties of a S2CUseCardResponse.
     * @exports IS2CUseCardResponse
     * @interface IS2CUseCardResponse
     * @property {boolean|null} [success] S2CUseCardResponse success
     * @property {GlobalFailCode|null} [failCode] S2CUseCardResponse failCode
     */

    /**
     * Constructs a new S2CUseCardResponse.
     * @exports S2CUseCardResponse
     * @classdesc Represents a S2CUseCardResponse.
     * @implements IS2CUseCardResponse
     * @constructor
     * @param {IS2CUseCardResponse=} [properties] Properties to set
     */
    function S2CUseCardResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2CUseCardResponse success.
     * @member {boolean} success
     * @memberof S2CUseCardResponse
     * @instance
     */
    S2CUseCardResponse.prototype.success = false;

    /**
     * S2CUseCardResponse failCode.
     * @member {GlobalFailCode} failCode
     * @memberof S2CUseCardResponse
     * @instance
     */
    S2CUseCardResponse.prototype.failCode = 0;

    /**
     * Creates a new S2CUseCardResponse instance using the specified properties.
     * @function create
     * @memberof S2CUseCardResponse
     * @static
     * @param {IS2CUseCardResponse=} [properties] Properties to set
     * @returns {S2CUseCardResponse} S2CUseCardResponse instance
     */
    S2CUseCardResponse.create = function create(properties) {
        return new S2CUseCardResponse(properties);
    };

    /**
     * Encodes the specified S2CUseCardResponse message. Does not implicitly {@link S2CUseCardResponse.verify|verify} messages.
     * @function encode
     * @memberof S2CUseCardResponse
     * @static
     * @param {IS2CUseCardResponse} message S2CUseCardResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CUseCardResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.success != null && Object.hasOwnProperty.call(message, "success"))
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
        if (message.failCode != null && Object.hasOwnProperty.call(message, "failCode"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.failCode);
        return writer;
    };

    /**
     * Encodes the specified S2CUseCardResponse message, length delimited. Does not implicitly {@link S2CUseCardResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2CUseCardResponse
     * @static
     * @param {IS2CUseCardResponse} message S2CUseCardResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CUseCardResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2CUseCardResponse message from the specified reader or buffer.
     * @function decode
     * @memberof S2CUseCardResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2CUseCardResponse} S2CUseCardResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CUseCardResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2CUseCardResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.success = reader.bool();
                    break;
                }
            case 2: {
                    message.failCode = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2CUseCardResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2CUseCardResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2CUseCardResponse} S2CUseCardResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CUseCardResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2CUseCardResponse message.
     * @function verify
     * @memberof S2CUseCardResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2CUseCardResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.success != null && message.hasOwnProperty("success"))
            if (typeof message.success !== "boolean")
                return "success: boolean expected";
        if (message.failCode != null && message.hasOwnProperty("failCode"))
            switch (message.failCode) {
            default:
                return "failCode: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
                break;
            }
        return null;
    };

    /**
     * Creates a S2CUseCardResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2CUseCardResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2CUseCardResponse} S2CUseCardResponse
     */
    S2CUseCardResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.S2CUseCardResponse)
            return object;
        var message = new $root.S2CUseCardResponse();
        if (object.success != null)
            message.success = Boolean(object.success);
        switch (object.failCode) {
        default:
            if (typeof object.failCode === "number") {
                message.failCode = object.failCode;
                break;
            }
            break;
        case "NONE_FAILCODE":
        case 0:
            message.failCode = 0;
            break;
        case "UNKNOWN_ERROR":
        case 1:
            message.failCode = 1;
            break;
        case "INVALID_REQUEST":
        case 2:
            message.failCode = 2;
            break;
        case "AUTHENTICATION_FAILED":
        case 3:
            message.failCode = 3;
            break;
        case "CREATE_ROOM_FAILED":
        case 4:
            message.failCode = 4;
            break;
        case "JOIN_ROOM_FAILED":
        case 5:
            message.failCode = 5;
            break;
        case "LEAVE_ROOM_FAILED":
        case 6:
            message.failCode = 6;
            break;
        case "REGISTER_FAILED":
        case 7:
            message.failCode = 7;
            break;
        case "ROOM_NOT_FOUND":
        case 8:
            message.failCode = 8;
            break;
        case "CHARACTER_NOT_FOUND":
        case 9:
            message.failCode = 9;
            break;
        case "CHARACTER_STATE_ERROR":
        case 10:
            message.failCode = 10;
            break;
        case "CHARACTER_NO_CARD":
        case 11:
            message.failCode = 11;
            break;
        case "INVALID_ROOM_STATE":
        case 12:
            message.failCode = 12;
            break;
        case "NOT_ROOM_OWNER":
        case 13:
            message.failCode = 13;
            break;
        case "ALREADY_USED_BBANG":
        case 14:
            message.failCode = 14;
            break;
        case "INVALID_PHASE":
        case 15:
            message.failCode = 15;
            break;
        case "CHARACTER_CONTAINED":
        case 16:
            message.failCode = 16;
            break;
        }
        return message;
    };

    /**
     * Creates a plain object from a S2CUseCardResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2CUseCardResponse
     * @static
     * @param {S2CUseCardResponse} message S2CUseCardResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2CUseCardResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.success = false;
            object.failCode = options.enums === String ? "NONE_FAILCODE" : 0;
        }
        if (message.success != null && message.hasOwnProperty("success"))
            object.success = message.success;
        if (message.failCode != null && message.hasOwnProperty("failCode"))
            object.failCode = options.enums === String ? $root.GlobalFailCode[message.failCode] === undefined ? message.failCode : $root.GlobalFailCode[message.failCode] : message.failCode;
        return object;
    };

    /**
     * Converts this S2CUseCardResponse to JSON.
     * @function toJSON
     * @memberof S2CUseCardResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2CUseCardResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for S2CUseCardResponse
     * @function getTypeUrl
     * @memberof S2CUseCardResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    S2CUseCardResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/S2CUseCardResponse";
    };

    return S2CUseCardResponse;
})();

$root.S2CUseCardNotification = (function() {

    /**
     * Properties of a S2CUseCardNotification.
     * @exports IS2CUseCardNotification
     * @interface IS2CUseCardNotification
     * @property {CardType|null} [cardType] S2CUseCardNotification cardType
     * @property {string|null} [userId] S2CUseCardNotification userId
     * @property {string|null} [targetUserId] S2CUseCardNotification targetUserId
     */

    /**
     * Constructs a new S2CUseCardNotification.
     * @exports S2CUseCardNotification
     * @classdesc Represents a S2CUseCardNotification.
     * @implements IS2CUseCardNotification
     * @constructor
     * @param {IS2CUseCardNotification=} [properties] Properties to set
     */
    function S2CUseCardNotification(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2CUseCardNotification cardType.
     * @member {CardType} cardType
     * @memberof S2CUseCardNotification
     * @instance
     */
    S2CUseCardNotification.prototype.cardType = 0;

    /**
     * S2CUseCardNotification userId.
     * @member {string} userId
     * @memberof S2CUseCardNotification
     * @instance
     */
    S2CUseCardNotification.prototype.userId = "";

    /**
     * S2CUseCardNotification targetUserId.
     * @member {string} targetUserId
     * @memberof S2CUseCardNotification
     * @instance
     */
    S2CUseCardNotification.prototype.targetUserId = "";

    /**
     * Creates a new S2CUseCardNotification instance using the specified properties.
     * @function create
     * @memberof S2CUseCardNotification
     * @static
     * @param {IS2CUseCardNotification=} [properties] Properties to set
     * @returns {S2CUseCardNotification} S2CUseCardNotification instance
     */
    S2CUseCardNotification.create = function create(properties) {
        return new S2CUseCardNotification(properties);
    };

    /**
     * Encodes the specified S2CUseCardNotification message. Does not implicitly {@link S2CUseCardNotification.verify|verify} messages.
     * @function encode
     * @memberof S2CUseCardNotification
     * @static
     * @param {IS2CUseCardNotification} message S2CUseCardNotification message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CUseCardNotification.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.cardType != null && Object.hasOwnProperty.call(message, "cardType"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cardType);
        if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.userId);
        if (message.targetUserId != null && Object.hasOwnProperty.call(message, "targetUserId"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.targetUserId);
        return writer;
    };

    /**
     * Encodes the specified S2CUseCardNotification message, length delimited. Does not implicitly {@link S2CUseCardNotification.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2CUseCardNotification
     * @static
     * @param {IS2CUseCardNotification} message S2CUseCardNotification message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CUseCardNotification.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2CUseCardNotification message from the specified reader or buffer.
     * @function decode
     * @memberof S2CUseCardNotification
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2CUseCardNotification} S2CUseCardNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CUseCardNotification.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2CUseCardNotification();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.cardType = reader.int32();
                    break;
                }
            case 2: {
                    message.userId = reader.string();
                    break;
                }
            case 3: {
                    message.targetUserId = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2CUseCardNotification message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2CUseCardNotification
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2CUseCardNotification} S2CUseCardNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CUseCardNotification.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2CUseCardNotification message.
     * @function verify
     * @memberof S2CUseCardNotification
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2CUseCardNotification.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.cardType != null && message.hasOwnProperty("cardType"))
            switch (message.cardType) {
            default:
                return "cardType: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
            case 20:
            case 21:
            case 22:
            case 23:
                break;
            }
        if (message.userId != null && message.hasOwnProperty("userId"))
            if (!$util.isString(message.userId))
                return "userId: string expected";
        if (message.targetUserId != null && message.hasOwnProperty("targetUserId"))
            if (!$util.isString(message.targetUserId))
                return "targetUserId: string expected";
        return null;
    };

    /**
     * Creates a S2CUseCardNotification message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2CUseCardNotification
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2CUseCardNotification} S2CUseCardNotification
     */
    S2CUseCardNotification.fromObject = function fromObject(object) {
        if (object instanceof $root.S2CUseCardNotification)
            return object;
        var message = new $root.S2CUseCardNotification();
        switch (object.cardType) {
        default:
            if (typeof object.cardType === "number") {
                message.cardType = object.cardType;
                break;
            }
            break;
        case "NONE":
        case 0:
            message.cardType = 0;
            break;
        case "BBANG":
        case 1:
            message.cardType = 1;
            break;
        case "BIG_BBANG":
        case 2:
            message.cardType = 2;
            break;
        case "SHIELD":
        case 3:
            message.cardType = 3;
            break;
        case "VACCINE":
        case 4:
            message.cardType = 4;
            break;
        case "CALL_119":
        case 5:
            message.cardType = 5;
            break;
        case "DEATH_MATCH":
        case 6:
            message.cardType = 6;
            break;
        case "GUERRILLA":
        case 7:
            message.cardType = 7;
            break;
        case "ABSORB":
        case 8:
            message.cardType = 8;
            break;
        case "HALLUCINATION":
        case 9:
            message.cardType = 9;
            break;
        case "FLEA_MARKET":
        case 10:
            message.cardType = 10;
            break;
        case "MATURED_SAVINGS":
        case 11:
            message.cardType = 11;
            break;
        case "WIN_LOTTERY":
        case 12:
            message.cardType = 12;
            break;
        case "SNIPER_GUN":
        case 13:
            message.cardType = 13;
            break;
        case "HAND_GUN":
        case 14:
            message.cardType = 14;
            break;
        case "DESERT_EAGLE":
        case 15:
            message.cardType = 15;
            break;
        case "AUTO_RIFLE":
        case 16:
            message.cardType = 16;
            break;
        case "LASER_POINTER":
        case 17:
            message.cardType = 17;
            break;
        case "RADAR":
        case 18:
            message.cardType = 18;
            break;
        case "AUTO_SHIELD":
        case 19:
            message.cardType = 19;
            break;
        case "STEALTH_SUIT":
        case 20:
            message.cardType = 20;
            break;
        case "CONTAINMENT_UNIT":
        case 21:
            message.cardType = 21;
            break;
        case "SATELLITE_TARGET":
        case 22:
            message.cardType = 22;
            break;
        case "BOMB":
        case 23:
            message.cardType = 23;
            break;
        }
        if (object.userId != null)
            message.userId = String(object.userId);
        if (object.targetUserId != null)
            message.targetUserId = String(object.targetUserId);
        return message;
    };

    /**
     * Creates a plain object from a S2CUseCardNotification message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2CUseCardNotification
     * @static
     * @param {S2CUseCardNotification} message S2CUseCardNotification
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2CUseCardNotification.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.cardType = options.enums === String ? "NONE" : 0;
            object.userId = "";
            object.targetUserId = "";
        }
        if (message.cardType != null && message.hasOwnProperty("cardType"))
            object.cardType = options.enums === String ? $root.CardType[message.cardType] === undefined ? message.cardType : $root.CardType[message.cardType] : message.cardType;
        if (message.userId != null && message.hasOwnProperty("userId"))
            object.userId = message.userId;
        if (message.targetUserId != null && message.hasOwnProperty("targetUserId"))
            object.targetUserId = message.targetUserId;
        return object;
    };

    /**
     * Converts this S2CUseCardNotification to JSON.
     * @function toJSON
     * @memberof S2CUseCardNotification
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2CUseCardNotification.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for S2CUseCardNotification
     * @function getTypeUrl
     * @memberof S2CUseCardNotification
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    S2CUseCardNotification.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/S2CUseCardNotification";
    };

    return S2CUseCardNotification;
})();

$root.S2CEquipCardNotification = (function() {

    /**
     * Properties of a S2CEquipCardNotification.
     * @exports IS2CEquipCardNotification
     * @interface IS2CEquipCardNotification
     * @property {CardType|null} [cardType] S2CEquipCardNotification cardType
     * @property {string|null} [userId] S2CEquipCardNotification userId
     */

    /**
     * Constructs a new S2CEquipCardNotification.
     * @exports S2CEquipCardNotification
     * @classdesc Represents a S2CEquipCardNotification.
     * @implements IS2CEquipCardNotification
     * @constructor
     * @param {IS2CEquipCardNotification=} [properties] Properties to set
     */
    function S2CEquipCardNotification(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2CEquipCardNotification cardType.
     * @member {CardType} cardType
     * @memberof S2CEquipCardNotification
     * @instance
     */
    S2CEquipCardNotification.prototype.cardType = 0;

    /**
     * S2CEquipCardNotification userId.
     * @member {string} userId
     * @memberof S2CEquipCardNotification
     * @instance
     */
    S2CEquipCardNotification.prototype.userId = "";

    /**
     * Creates a new S2CEquipCardNotification instance using the specified properties.
     * @function create
     * @memberof S2CEquipCardNotification
     * @static
     * @param {IS2CEquipCardNotification=} [properties] Properties to set
     * @returns {S2CEquipCardNotification} S2CEquipCardNotification instance
     */
    S2CEquipCardNotification.create = function create(properties) {
        return new S2CEquipCardNotification(properties);
    };

    /**
     * Encodes the specified S2CEquipCardNotification message. Does not implicitly {@link S2CEquipCardNotification.verify|verify} messages.
     * @function encode
     * @memberof S2CEquipCardNotification
     * @static
     * @param {IS2CEquipCardNotification} message S2CEquipCardNotification message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CEquipCardNotification.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.cardType != null && Object.hasOwnProperty.call(message, "cardType"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cardType);
        if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.userId);
        return writer;
    };

    /**
     * Encodes the specified S2CEquipCardNotification message, length delimited. Does not implicitly {@link S2CEquipCardNotification.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2CEquipCardNotification
     * @static
     * @param {IS2CEquipCardNotification} message S2CEquipCardNotification message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CEquipCardNotification.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2CEquipCardNotification message from the specified reader or buffer.
     * @function decode
     * @memberof S2CEquipCardNotification
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2CEquipCardNotification} S2CEquipCardNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CEquipCardNotification.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2CEquipCardNotification();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.cardType = reader.int32();
                    break;
                }
            case 2: {
                    message.userId = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2CEquipCardNotification message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2CEquipCardNotification
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2CEquipCardNotification} S2CEquipCardNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CEquipCardNotification.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2CEquipCardNotification message.
     * @function verify
     * @memberof S2CEquipCardNotification
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2CEquipCardNotification.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.cardType != null && message.hasOwnProperty("cardType"))
            switch (message.cardType) {
            default:
                return "cardType: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
            case 20:
            case 21:
            case 22:
            case 23:
                break;
            }
        if (message.userId != null && message.hasOwnProperty("userId"))
            if (!$util.isString(message.userId))
                return "userId: string expected";
        return null;
    };

    /**
     * Creates a S2CEquipCardNotification message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2CEquipCardNotification
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2CEquipCardNotification} S2CEquipCardNotification
     */
    S2CEquipCardNotification.fromObject = function fromObject(object) {
        if (object instanceof $root.S2CEquipCardNotification)
            return object;
        var message = new $root.S2CEquipCardNotification();
        switch (object.cardType) {
        default:
            if (typeof object.cardType === "number") {
                message.cardType = object.cardType;
                break;
            }
            break;
        case "NONE":
        case 0:
            message.cardType = 0;
            break;
        case "BBANG":
        case 1:
            message.cardType = 1;
            break;
        case "BIG_BBANG":
        case 2:
            message.cardType = 2;
            break;
        case "SHIELD":
        case 3:
            message.cardType = 3;
            break;
        case "VACCINE":
        case 4:
            message.cardType = 4;
            break;
        case "CALL_119":
        case 5:
            message.cardType = 5;
            break;
        case "DEATH_MATCH":
        case 6:
            message.cardType = 6;
            break;
        case "GUERRILLA":
        case 7:
            message.cardType = 7;
            break;
        case "ABSORB":
        case 8:
            message.cardType = 8;
            break;
        case "HALLUCINATION":
        case 9:
            message.cardType = 9;
            break;
        case "FLEA_MARKET":
        case 10:
            message.cardType = 10;
            break;
        case "MATURED_SAVINGS":
        case 11:
            message.cardType = 11;
            break;
        case "WIN_LOTTERY":
        case 12:
            message.cardType = 12;
            break;
        case "SNIPER_GUN":
        case 13:
            message.cardType = 13;
            break;
        case "HAND_GUN":
        case 14:
            message.cardType = 14;
            break;
        case "DESERT_EAGLE":
        case 15:
            message.cardType = 15;
            break;
        case "AUTO_RIFLE":
        case 16:
            message.cardType = 16;
            break;
        case "LASER_POINTER":
        case 17:
            message.cardType = 17;
            break;
        case "RADAR":
        case 18:
            message.cardType = 18;
            break;
        case "AUTO_SHIELD":
        case 19:
            message.cardType = 19;
            break;
        case "STEALTH_SUIT":
        case 20:
            message.cardType = 20;
            break;
        case "CONTAINMENT_UNIT":
        case 21:
            message.cardType = 21;
            break;
        case "SATELLITE_TARGET":
        case 22:
            message.cardType = 22;
            break;
        case "BOMB":
        case 23:
            message.cardType = 23;
            break;
        }
        if (object.userId != null)
            message.userId = String(object.userId);
        return message;
    };

    /**
     * Creates a plain object from a S2CEquipCardNotification message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2CEquipCardNotification
     * @static
     * @param {S2CEquipCardNotification} message S2CEquipCardNotification
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2CEquipCardNotification.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.cardType = options.enums === String ? "NONE" : 0;
            object.userId = "";
        }
        if (message.cardType != null && message.hasOwnProperty("cardType"))
            object.cardType = options.enums === String ? $root.CardType[message.cardType] === undefined ? message.cardType : $root.CardType[message.cardType] : message.cardType;
        if (message.userId != null && message.hasOwnProperty("userId"))
            object.userId = message.userId;
        return object;
    };

    /**
     * Converts this S2CEquipCardNotification to JSON.
     * @function toJSON
     * @memberof S2CEquipCardNotification
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2CEquipCardNotification.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for S2CEquipCardNotification
     * @function getTypeUrl
     * @memberof S2CEquipCardNotification
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    S2CEquipCardNotification.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/S2CEquipCardNotification";
    };

    return S2CEquipCardNotification;
})();

$root.S2CCardEffectNotification = (function() {

    /**
     * Properties of a S2CCardEffectNotification.
     * @exports IS2CCardEffectNotification
     * @interface IS2CCardEffectNotification
     * @property {CardType|null} [cardType] S2CCardEffectNotification cardType
     * @property {string|null} [userId] S2CCardEffectNotification userId
     * @property {boolean|null} [success] S2CCardEffectNotification success
     */

    /**
     * Constructs a new S2CCardEffectNotification.
     * @exports S2CCardEffectNotification
     * @classdesc Represents a S2CCardEffectNotification.
     * @implements IS2CCardEffectNotification
     * @constructor
     * @param {IS2CCardEffectNotification=} [properties] Properties to set
     */
    function S2CCardEffectNotification(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2CCardEffectNotification cardType.
     * @member {CardType} cardType
     * @memberof S2CCardEffectNotification
     * @instance
     */
    S2CCardEffectNotification.prototype.cardType = 0;

    /**
     * S2CCardEffectNotification userId.
     * @member {string} userId
     * @memberof S2CCardEffectNotification
     * @instance
     */
    S2CCardEffectNotification.prototype.userId = "";

    /**
     * S2CCardEffectNotification success.
     * @member {boolean} success
     * @memberof S2CCardEffectNotification
     * @instance
     */
    S2CCardEffectNotification.prototype.success = false;

    /**
     * Creates a new S2CCardEffectNotification instance using the specified properties.
     * @function create
     * @memberof S2CCardEffectNotification
     * @static
     * @param {IS2CCardEffectNotification=} [properties] Properties to set
     * @returns {S2CCardEffectNotification} S2CCardEffectNotification instance
     */
    S2CCardEffectNotification.create = function create(properties) {
        return new S2CCardEffectNotification(properties);
    };

    /**
     * Encodes the specified S2CCardEffectNotification message. Does not implicitly {@link S2CCardEffectNotification.verify|verify} messages.
     * @function encode
     * @memberof S2CCardEffectNotification
     * @static
     * @param {IS2CCardEffectNotification} message S2CCardEffectNotification message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CCardEffectNotification.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.cardType != null && Object.hasOwnProperty.call(message, "cardType"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.cardType);
        if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.userId);
        if (message.success != null && Object.hasOwnProperty.call(message, "success"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.success);
        return writer;
    };

    /**
     * Encodes the specified S2CCardEffectNotification message, length delimited. Does not implicitly {@link S2CCardEffectNotification.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2CCardEffectNotification
     * @static
     * @param {IS2CCardEffectNotification} message S2CCardEffectNotification message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CCardEffectNotification.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2CCardEffectNotification message from the specified reader or buffer.
     * @function decode
     * @memberof S2CCardEffectNotification
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2CCardEffectNotification} S2CCardEffectNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CCardEffectNotification.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2CCardEffectNotification();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.cardType = reader.int32();
                    break;
                }
            case 2: {
                    message.userId = reader.string();
                    break;
                }
            case 3: {
                    message.success = reader.bool();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2CCardEffectNotification message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2CCardEffectNotification
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2CCardEffectNotification} S2CCardEffectNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CCardEffectNotification.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2CCardEffectNotification message.
     * @function verify
     * @memberof S2CCardEffectNotification
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2CCardEffectNotification.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.cardType != null && message.hasOwnProperty("cardType"))
            switch (message.cardType) {
            default:
                return "cardType: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
            case 20:
            case 21:
            case 22:
            case 23:
                break;
            }
        if (message.userId != null && message.hasOwnProperty("userId"))
            if (!$util.isString(message.userId))
                return "userId: string expected";
        if (message.success != null && message.hasOwnProperty("success"))
            if (typeof message.success !== "boolean")
                return "success: boolean expected";
        return null;
    };

    /**
     * Creates a S2CCardEffectNotification message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2CCardEffectNotification
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2CCardEffectNotification} S2CCardEffectNotification
     */
    S2CCardEffectNotification.fromObject = function fromObject(object) {
        if (object instanceof $root.S2CCardEffectNotification)
            return object;
        var message = new $root.S2CCardEffectNotification();
        switch (object.cardType) {
        default:
            if (typeof object.cardType === "number") {
                message.cardType = object.cardType;
                break;
            }
            break;
        case "NONE":
        case 0:
            message.cardType = 0;
            break;
        case "BBANG":
        case 1:
            message.cardType = 1;
            break;
        case "BIG_BBANG":
        case 2:
            message.cardType = 2;
            break;
        case "SHIELD":
        case 3:
            message.cardType = 3;
            break;
        case "VACCINE":
        case 4:
            message.cardType = 4;
            break;
        case "CALL_119":
        case 5:
            message.cardType = 5;
            break;
        case "DEATH_MATCH":
        case 6:
            message.cardType = 6;
            break;
        case "GUERRILLA":
        case 7:
            message.cardType = 7;
            break;
        case "ABSORB":
        case 8:
            message.cardType = 8;
            break;
        case "HALLUCINATION":
        case 9:
            message.cardType = 9;
            break;
        case "FLEA_MARKET":
        case 10:
            message.cardType = 10;
            break;
        case "MATURED_SAVINGS":
        case 11:
            message.cardType = 11;
            break;
        case "WIN_LOTTERY":
        case 12:
            message.cardType = 12;
            break;
        case "SNIPER_GUN":
        case 13:
            message.cardType = 13;
            break;
        case "HAND_GUN":
        case 14:
            message.cardType = 14;
            break;
        case "DESERT_EAGLE":
        case 15:
            message.cardType = 15;
            break;
        case "AUTO_RIFLE":
        case 16:
            message.cardType = 16;
            break;
        case "LASER_POINTER":
        case 17:
            message.cardType = 17;
            break;
        case "RADAR":
        case 18:
            message.cardType = 18;
            break;
        case "AUTO_SHIELD":
        case 19:
            message.cardType = 19;
            break;
        case "STEALTH_SUIT":
        case 20:
            message.cardType = 20;
            break;
        case "CONTAINMENT_UNIT":
        case 21:
            message.cardType = 21;
            break;
        case "SATELLITE_TARGET":
        case 22:
            message.cardType = 22;
            break;
        case "BOMB":
        case 23:
            message.cardType = 23;
            break;
        }
        if (object.userId != null)
            message.userId = String(object.userId);
        if (object.success != null)
            message.success = Boolean(object.success);
        return message;
    };

    /**
     * Creates a plain object from a S2CCardEffectNotification message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2CCardEffectNotification
     * @static
     * @param {S2CCardEffectNotification} message S2CCardEffectNotification
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2CCardEffectNotification.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.cardType = options.enums === String ? "NONE" : 0;
            object.userId = "";
            object.success = false;
        }
        if (message.cardType != null && message.hasOwnProperty("cardType"))
            object.cardType = options.enums === String ? $root.CardType[message.cardType] === undefined ? message.cardType : $root.CardType[message.cardType] : message.cardType;
        if (message.userId != null && message.hasOwnProperty("userId"))
            object.userId = message.userId;
        if (message.success != null && message.hasOwnProperty("success"))
            object.success = message.success;
        return object;
    };

    /**
     * Converts this S2CCardEffectNotification to JSON.
     * @function toJSON
     * @memberof S2CCardEffectNotification
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2CCardEffectNotification.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for S2CCardEffectNotification
     * @function getTypeUrl
     * @memberof S2CCardEffectNotification
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    S2CCardEffectNotification.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/S2CCardEffectNotification";
    };

    return S2CCardEffectNotification;
})();

$root.S2CFleaMarketNotification = (function() {

    /**
     * Properties of a S2CFleaMarketNotification.
     * @exports IS2CFleaMarketNotification
     * @interface IS2CFleaMarketNotification
     * @property {Array.<CardType>|null} [cardTypes] S2CFleaMarketNotification cardTypes
     * @property {Array.<number>|null} [pickIndex] S2CFleaMarketNotification pickIndex
     */

    /**
     * Constructs a new S2CFleaMarketNotification.
     * @exports S2CFleaMarketNotification
     * @classdesc Represents a S2CFleaMarketNotification.
     * @implements IS2CFleaMarketNotification
     * @constructor
     * @param {IS2CFleaMarketNotification=} [properties] Properties to set
     */
    function S2CFleaMarketNotification(properties) {
        this.cardTypes = [];
        this.pickIndex = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2CFleaMarketNotification cardTypes.
     * @member {Array.<CardType>} cardTypes
     * @memberof S2CFleaMarketNotification
     * @instance
     */
    S2CFleaMarketNotification.prototype.cardTypes = $util.emptyArray;

    /**
     * S2CFleaMarketNotification pickIndex.
     * @member {Array.<number>} pickIndex
     * @memberof S2CFleaMarketNotification
     * @instance
     */
    S2CFleaMarketNotification.prototype.pickIndex = $util.emptyArray;

    /**
     * Creates a new S2CFleaMarketNotification instance using the specified properties.
     * @function create
     * @memberof S2CFleaMarketNotification
     * @static
     * @param {IS2CFleaMarketNotification=} [properties] Properties to set
     * @returns {S2CFleaMarketNotification} S2CFleaMarketNotification instance
     */
    S2CFleaMarketNotification.create = function create(properties) {
        return new S2CFleaMarketNotification(properties);
    };

    /**
     * Encodes the specified S2CFleaMarketNotification message. Does not implicitly {@link S2CFleaMarketNotification.verify|verify} messages.
     * @function encode
     * @memberof S2CFleaMarketNotification
     * @static
     * @param {IS2CFleaMarketNotification} message S2CFleaMarketNotification message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CFleaMarketNotification.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.cardTypes != null && message.cardTypes.length) {
            writer.uint32(/* id 1, wireType 2 =*/10).fork();
            for (var i = 0; i < message.cardTypes.length; ++i)
                writer.int32(message.cardTypes[i]);
            writer.ldelim();
        }
        if (message.pickIndex != null && message.pickIndex.length) {
            writer.uint32(/* id 2, wireType 2 =*/18).fork();
            for (var i = 0; i < message.pickIndex.length; ++i)
                writer.int32(message.pickIndex[i]);
            writer.ldelim();
        }
        return writer;
    };

    /**
     * Encodes the specified S2CFleaMarketNotification message, length delimited. Does not implicitly {@link S2CFleaMarketNotification.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2CFleaMarketNotification
     * @static
     * @param {IS2CFleaMarketNotification} message S2CFleaMarketNotification message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CFleaMarketNotification.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2CFleaMarketNotification message from the specified reader or buffer.
     * @function decode
     * @memberof S2CFleaMarketNotification
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2CFleaMarketNotification} S2CFleaMarketNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CFleaMarketNotification.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2CFleaMarketNotification();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    if (!(message.cardTypes && message.cardTypes.length))
                        message.cardTypes = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.cardTypes.push(reader.int32());
                    } else
                        message.cardTypes.push(reader.int32());
                    break;
                }
            case 2: {
                    if (!(message.pickIndex && message.pickIndex.length))
                        message.pickIndex = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.pickIndex.push(reader.int32());
                    } else
                        message.pickIndex.push(reader.int32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2CFleaMarketNotification message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2CFleaMarketNotification
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2CFleaMarketNotification} S2CFleaMarketNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CFleaMarketNotification.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2CFleaMarketNotification message.
     * @function verify
     * @memberof S2CFleaMarketNotification
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2CFleaMarketNotification.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.cardTypes != null && message.hasOwnProperty("cardTypes")) {
            if (!Array.isArray(message.cardTypes))
                return "cardTypes: array expected";
            for (var i = 0; i < message.cardTypes.length; ++i)
                switch (message.cardTypes[i]) {
                default:
                    return "cardTypes: enum value[] expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                case 11:
                case 12:
                case 13:
                case 14:
                case 15:
                case 16:
                case 17:
                case 18:
                case 19:
                case 20:
                case 21:
                case 22:
                case 23:
                    break;
                }
        }
        if (message.pickIndex != null && message.hasOwnProperty("pickIndex")) {
            if (!Array.isArray(message.pickIndex))
                return "pickIndex: array expected";
            for (var i = 0; i < message.pickIndex.length; ++i)
                if (!$util.isInteger(message.pickIndex[i]))
                    return "pickIndex: integer[] expected";
        }
        return null;
    };

    /**
     * Creates a S2CFleaMarketNotification message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2CFleaMarketNotification
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2CFleaMarketNotification} S2CFleaMarketNotification
     */
    S2CFleaMarketNotification.fromObject = function fromObject(object) {
        if (object instanceof $root.S2CFleaMarketNotification)
            return object;
        var message = new $root.S2CFleaMarketNotification();
        if (object.cardTypes) {
            if (!Array.isArray(object.cardTypes))
                throw TypeError(".S2CFleaMarketNotification.cardTypes: array expected");
            message.cardTypes = [];
            for (var i = 0; i < object.cardTypes.length; ++i)
                switch (object.cardTypes[i]) {
                default:
                    if (typeof object.cardTypes[i] === "number") {
                        message.cardTypes[i] = object.cardTypes[i];
                        break;
                    }
                case "NONE":
                case 0:
                    message.cardTypes[i] = 0;
                    break;
                case "BBANG":
                case 1:
                    message.cardTypes[i] = 1;
                    break;
                case "BIG_BBANG":
                case 2:
                    message.cardTypes[i] = 2;
                    break;
                case "SHIELD":
                case 3:
                    message.cardTypes[i] = 3;
                    break;
                case "VACCINE":
                case 4:
                    message.cardTypes[i] = 4;
                    break;
                case "CALL_119":
                case 5:
                    message.cardTypes[i] = 5;
                    break;
                case "DEATH_MATCH":
                case 6:
                    message.cardTypes[i] = 6;
                    break;
                case "GUERRILLA":
                case 7:
                    message.cardTypes[i] = 7;
                    break;
                case "ABSORB":
                case 8:
                    message.cardTypes[i] = 8;
                    break;
                case "HALLUCINATION":
                case 9:
                    message.cardTypes[i] = 9;
                    break;
                case "FLEA_MARKET":
                case 10:
                    message.cardTypes[i] = 10;
                    break;
                case "MATURED_SAVINGS":
                case 11:
                    message.cardTypes[i] = 11;
                    break;
                case "WIN_LOTTERY":
                case 12:
                    message.cardTypes[i] = 12;
                    break;
                case "SNIPER_GUN":
                case 13:
                    message.cardTypes[i] = 13;
                    break;
                case "HAND_GUN":
                case 14:
                    message.cardTypes[i] = 14;
                    break;
                case "DESERT_EAGLE":
                case 15:
                    message.cardTypes[i] = 15;
                    break;
                case "AUTO_RIFLE":
                case 16:
                    message.cardTypes[i] = 16;
                    break;
                case "LASER_POINTER":
                case 17:
                    message.cardTypes[i] = 17;
                    break;
                case "RADAR":
                case 18:
                    message.cardTypes[i] = 18;
                    break;
                case "AUTO_SHIELD":
                case 19:
                    message.cardTypes[i] = 19;
                    break;
                case "STEALTH_SUIT":
                case 20:
                    message.cardTypes[i] = 20;
                    break;
                case "CONTAINMENT_UNIT":
                case 21:
                    message.cardTypes[i] = 21;
                    break;
                case "SATELLITE_TARGET":
                case 22:
                    message.cardTypes[i] = 22;
                    break;
                case "BOMB":
                case 23:
                    message.cardTypes[i] = 23;
                    break;
                }
        }
        if (object.pickIndex) {
            if (!Array.isArray(object.pickIndex))
                throw TypeError(".S2CFleaMarketNotification.pickIndex: array expected");
            message.pickIndex = [];
            for (var i = 0; i < object.pickIndex.length; ++i)
                message.pickIndex[i] = object.pickIndex[i] | 0;
        }
        return message;
    };

    /**
     * Creates a plain object from a S2CFleaMarketNotification message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2CFleaMarketNotification
     * @static
     * @param {S2CFleaMarketNotification} message S2CFleaMarketNotification
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2CFleaMarketNotification.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults) {
            object.cardTypes = [];
            object.pickIndex = [];
        }
        if (message.cardTypes && message.cardTypes.length) {
            object.cardTypes = [];
            for (var j = 0; j < message.cardTypes.length; ++j)
                object.cardTypes[j] = options.enums === String ? $root.CardType[message.cardTypes[j]] === undefined ? message.cardTypes[j] : $root.CardType[message.cardTypes[j]] : message.cardTypes[j];
        }
        if (message.pickIndex && message.pickIndex.length) {
            object.pickIndex = [];
            for (var j = 0; j < message.pickIndex.length; ++j)
                object.pickIndex[j] = message.pickIndex[j];
        }
        return object;
    };

    /**
     * Converts this S2CFleaMarketNotification to JSON.
     * @function toJSON
     * @memberof S2CFleaMarketNotification
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2CFleaMarketNotification.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for S2CFleaMarketNotification
     * @function getTypeUrl
     * @memberof S2CFleaMarketNotification
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    S2CFleaMarketNotification.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/S2CFleaMarketNotification";
    };

    return S2CFleaMarketNotification;
})();

$root.C2SFleaMarketPickRequest = (function() {

    /**
     * Properties of a C2SFleaMarketPickRequest.
     * @exports IC2SFleaMarketPickRequest
     * @interface IC2SFleaMarketPickRequest
     * @property {number|null} [pickIndex] C2SFleaMarketPickRequest pickIndex
     */

    /**
     * Constructs a new C2SFleaMarketPickRequest.
     * @exports C2SFleaMarketPickRequest
     * @classdesc Represents a C2SFleaMarketPickRequest.
     * @implements IC2SFleaMarketPickRequest
     * @constructor
     * @param {IC2SFleaMarketPickRequest=} [properties] Properties to set
     */
    function C2SFleaMarketPickRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * C2SFleaMarketPickRequest pickIndex.
     * @member {number} pickIndex
     * @memberof C2SFleaMarketPickRequest
     * @instance
     */
    C2SFleaMarketPickRequest.prototype.pickIndex = 0;

    /**
     * Creates a new C2SFleaMarketPickRequest instance using the specified properties.
     * @function create
     * @memberof C2SFleaMarketPickRequest
     * @static
     * @param {IC2SFleaMarketPickRequest=} [properties] Properties to set
     * @returns {C2SFleaMarketPickRequest} C2SFleaMarketPickRequest instance
     */
    C2SFleaMarketPickRequest.create = function create(properties) {
        return new C2SFleaMarketPickRequest(properties);
    };

    /**
     * Encodes the specified C2SFleaMarketPickRequest message. Does not implicitly {@link C2SFleaMarketPickRequest.verify|verify} messages.
     * @function encode
     * @memberof C2SFleaMarketPickRequest
     * @static
     * @param {IC2SFleaMarketPickRequest} message C2SFleaMarketPickRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SFleaMarketPickRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.pickIndex != null && Object.hasOwnProperty.call(message, "pickIndex"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.pickIndex);
        return writer;
    };

    /**
     * Encodes the specified C2SFleaMarketPickRequest message, length delimited. Does not implicitly {@link C2SFleaMarketPickRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof C2SFleaMarketPickRequest
     * @static
     * @param {IC2SFleaMarketPickRequest} message C2SFleaMarketPickRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SFleaMarketPickRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a C2SFleaMarketPickRequest message from the specified reader or buffer.
     * @function decode
     * @memberof C2SFleaMarketPickRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {C2SFleaMarketPickRequest} C2SFleaMarketPickRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SFleaMarketPickRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2SFleaMarketPickRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.pickIndex = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a C2SFleaMarketPickRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof C2SFleaMarketPickRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {C2SFleaMarketPickRequest} C2SFleaMarketPickRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SFleaMarketPickRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a C2SFleaMarketPickRequest message.
     * @function verify
     * @memberof C2SFleaMarketPickRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    C2SFleaMarketPickRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.pickIndex != null && message.hasOwnProperty("pickIndex"))
            if (!$util.isInteger(message.pickIndex))
                return "pickIndex: integer expected";
        return null;
    };

    /**
     * Creates a C2SFleaMarketPickRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof C2SFleaMarketPickRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {C2SFleaMarketPickRequest} C2SFleaMarketPickRequest
     */
    C2SFleaMarketPickRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.C2SFleaMarketPickRequest)
            return object;
        var message = new $root.C2SFleaMarketPickRequest();
        if (object.pickIndex != null)
            message.pickIndex = object.pickIndex | 0;
        return message;
    };

    /**
     * Creates a plain object from a C2SFleaMarketPickRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof C2SFleaMarketPickRequest
     * @static
     * @param {C2SFleaMarketPickRequest} message C2SFleaMarketPickRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    C2SFleaMarketPickRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.pickIndex = 0;
        if (message.pickIndex != null && message.hasOwnProperty("pickIndex"))
            object.pickIndex = message.pickIndex;
        return object;
    };

    /**
     * Converts this C2SFleaMarketPickRequest to JSON.
     * @function toJSON
     * @memberof C2SFleaMarketPickRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    C2SFleaMarketPickRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for C2SFleaMarketPickRequest
     * @function getTypeUrl
     * @memberof C2SFleaMarketPickRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    C2SFleaMarketPickRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/C2SFleaMarketPickRequest";
    };

    return C2SFleaMarketPickRequest;
})();

$root.S2CFleaMarketPickResponse = (function() {

    /**
     * Properties of a S2CFleaMarketPickResponse.
     * @exports IS2CFleaMarketPickResponse
     * @interface IS2CFleaMarketPickResponse
     * @property {boolean|null} [success] S2CFleaMarketPickResponse success
     * @property {GlobalFailCode|null} [failCode] S2CFleaMarketPickResponse failCode
     */

    /**
     * Constructs a new S2CFleaMarketPickResponse.
     * @exports S2CFleaMarketPickResponse
     * @classdesc Represents a S2CFleaMarketPickResponse.
     * @implements IS2CFleaMarketPickResponse
     * @constructor
     * @param {IS2CFleaMarketPickResponse=} [properties] Properties to set
     */
    function S2CFleaMarketPickResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2CFleaMarketPickResponse success.
     * @member {boolean} success
     * @memberof S2CFleaMarketPickResponse
     * @instance
     */
    S2CFleaMarketPickResponse.prototype.success = false;

    /**
     * S2CFleaMarketPickResponse failCode.
     * @member {GlobalFailCode} failCode
     * @memberof S2CFleaMarketPickResponse
     * @instance
     */
    S2CFleaMarketPickResponse.prototype.failCode = 0;

    /**
     * Creates a new S2CFleaMarketPickResponse instance using the specified properties.
     * @function create
     * @memberof S2CFleaMarketPickResponse
     * @static
     * @param {IS2CFleaMarketPickResponse=} [properties] Properties to set
     * @returns {S2CFleaMarketPickResponse} S2CFleaMarketPickResponse instance
     */
    S2CFleaMarketPickResponse.create = function create(properties) {
        return new S2CFleaMarketPickResponse(properties);
    };

    /**
     * Encodes the specified S2CFleaMarketPickResponse message. Does not implicitly {@link S2CFleaMarketPickResponse.verify|verify} messages.
     * @function encode
     * @memberof S2CFleaMarketPickResponse
     * @static
     * @param {IS2CFleaMarketPickResponse} message S2CFleaMarketPickResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CFleaMarketPickResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.success != null && Object.hasOwnProperty.call(message, "success"))
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
        if (message.failCode != null && Object.hasOwnProperty.call(message, "failCode"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.failCode);
        return writer;
    };

    /**
     * Encodes the specified S2CFleaMarketPickResponse message, length delimited. Does not implicitly {@link S2CFleaMarketPickResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2CFleaMarketPickResponse
     * @static
     * @param {IS2CFleaMarketPickResponse} message S2CFleaMarketPickResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CFleaMarketPickResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2CFleaMarketPickResponse message from the specified reader or buffer.
     * @function decode
     * @memberof S2CFleaMarketPickResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2CFleaMarketPickResponse} S2CFleaMarketPickResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CFleaMarketPickResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2CFleaMarketPickResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.success = reader.bool();
                    break;
                }
            case 2: {
                    message.failCode = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2CFleaMarketPickResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2CFleaMarketPickResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2CFleaMarketPickResponse} S2CFleaMarketPickResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CFleaMarketPickResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2CFleaMarketPickResponse message.
     * @function verify
     * @memberof S2CFleaMarketPickResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2CFleaMarketPickResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.success != null && message.hasOwnProperty("success"))
            if (typeof message.success !== "boolean")
                return "success: boolean expected";
        if (message.failCode != null && message.hasOwnProperty("failCode"))
            switch (message.failCode) {
            default:
                return "failCode: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
                break;
            }
        return null;
    };

    /**
     * Creates a S2CFleaMarketPickResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2CFleaMarketPickResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2CFleaMarketPickResponse} S2CFleaMarketPickResponse
     */
    S2CFleaMarketPickResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.S2CFleaMarketPickResponse)
            return object;
        var message = new $root.S2CFleaMarketPickResponse();
        if (object.success != null)
            message.success = Boolean(object.success);
        switch (object.failCode) {
        default:
            if (typeof object.failCode === "number") {
                message.failCode = object.failCode;
                break;
            }
            break;
        case "NONE_FAILCODE":
        case 0:
            message.failCode = 0;
            break;
        case "UNKNOWN_ERROR":
        case 1:
            message.failCode = 1;
            break;
        case "INVALID_REQUEST":
        case 2:
            message.failCode = 2;
            break;
        case "AUTHENTICATION_FAILED":
        case 3:
            message.failCode = 3;
            break;
        case "CREATE_ROOM_FAILED":
        case 4:
            message.failCode = 4;
            break;
        case "JOIN_ROOM_FAILED":
        case 5:
            message.failCode = 5;
            break;
        case "LEAVE_ROOM_FAILED":
        case 6:
            message.failCode = 6;
            break;
        case "REGISTER_FAILED":
        case 7:
            message.failCode = 7;
            break;
        case "ROOM_NOT_FOUND":
        case 8:
            message.failCode = 8;
            break;
        case "CHARACTER_NOT_FOUND":
        case 9:
            message.failCode = 9;
            break;
        case "CHARACTER_STATE_ERROR":
        case 10:
            message.failCode = 10;
            break;
        case "CHARACTER_NO_CARD":
        case 11:
            message.failCode = 11;
            break;
        case "INVALID_ROOM_STATE":
        case 12:
            message.failCode = 12;
            break;
        case "NOT_ROOM_OWNER":
        case 13:
            message.failCode = 13;
            break;
        case "ALREADY_USED_BBANG":
        case 14:
            message.failCode = 14;
            break;
        case "INVALID_PHASE":
        case 15:
            message.failCode = 15;
            break;
        case "CHARACTER_CONTAINED":
        case 16:
            message.failCode = 16;
            break;
        }
        return message;
    };

    /**
     * Creates a plain object from a S2CFleaMarketPickResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2CFleaMarketPickResponse
     * @static
     * @param {S2CFleaMarketPickResponse} message S2CFleaMarketPickResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2CFleaMarketPickResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.success = false;
            object.failCode = options.enums === String ? "NONE_FAILCODE" : 0;
        }
        if (message.success != null && message.hasOwnProperty("success"))
            object.success = message.success;
        if (message.failCode != null && message.hasOwnProperty("failCode"))
            object.failCode = options.enums === String ? $root.GlobalFailCode[message.failCode] === undefined ? message.failCode : $root.GlobalFailCode[message.failCode] : message.failCode;
        return object;
    };

    /**
     * Converts this S2CFleaMarketPickResponse to JSON.
     * @function toJSON
     * @memberof S2CFleaMarketPickResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2CFleaMarketPickResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for S2CFleaMarketPickResponse
     * @function getTypeUrl
     * @memberof S2CFleaMarketPickResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    S2CFleaMarketPickResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/S2CFleaMarketPickResponse";
    };

    return S2CFleaMarketPickResponse;
})();

$root.S2CUserUpdateNotification = (function() {

    /**
     * Properties of a S2CUserUpdateNotification.
     * @exports IS2CUserUpdateNotification
     * @interface IS2CUserUpdateNotification
     * @property {Array.<IUserData>|null} [user] S2CUserUpdateNotification user
     */

    /**
     * Constructs a new S2CUserUpdateNotification.
     * @exports S2CUserUpdateNotification
     * @classdesc Represents a S2CUserUpdateNotification.
     * @implements IS2CUserUpdateNotification
     * @constructor
     * @param {IS2CUserUpdateNotification=} [properties] Properties to set
     */
    function S2CUserUpdateNotification(properties) {
        this.user = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2CUserUpdateNotification user.
     * @member {Array.<IUserData>} user
     * @memberof S2CUserUpdateNotification
     * @instance
     */
    S2CUserUpdateNotification.prototype.user = $util.emptyArray;

    /**
     * Creates a new S2CUserUpdateNotification instance using the specified properties.
     * @function create
     * @memberof S2CUserUpdateNotification
     * @static
     * @param {IS2CUserUpdateNotification=} [properties] Properties to set
     * @returns {S2CUserUpdateNotification} S2CUserUpdateNotification instance
     */
    S2CUserUpdateNotification.create = function create(properties) {
        return new S2CUserUpdateNotification(properties);
    };

    /**
     * Encodes the specified S2CUserUpdateNotification message. Does not implicitly {@link S2CUserUpdateNotification.verify|verify} messages.
     * @function encode
     * @memberof S2CUserUpdateNotification
     * @static
     * @param {IS2CUserUpdateNotification} message S2CUserUpdateNotification message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CUserUpdateNotification.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.user != null && message.user.length)
            for (var i = 0; i < message.user.length; ++i)
                $root.UserData.encode(message.user[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified S2CUserUpdateNotification message, length delimited. Does not implicitly {@link S2CUserUpdateNotification.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2CUserUpdateNotification
     * @static
     * @param {IS2CUserUpdateNotification} message S2CUserUpdateNotification message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CUserUpdateNotification.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2CUserUpdateNotification message from the specified reader or buffer.
     * @function decode
     * @memberof S2CUserUpdateNotification
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2CUserUpdateNotification} S2CUserUpdateNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CUserUpdateNotification.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2CUserUpdateNotification();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    if (!(message.user && message.user.length))
                        message.user = [];
                    message.user.push($root.UserData.decode(reader, reader.uint32()));
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2CUserUpdateNotification message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2CUserUpdateNotification
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2CUserUpdateNotification} S2CUserUpdateNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CUserUpdateNotification.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2CUserUpdateNotification message.
     * @function verify
     * @memberof S2CUserUpdateNotification
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2CUserUpdateNotification.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.user != null && message.hasOwnProperty("user")) {
            if (!Array.isArray(message.user))
                return "user: array expected";
            for (var i = 0; i < message.user.length; ++i) {
                var error = $root.UserData.verify(message.user[i]);
                if (error)
                    return "user." + error;
            }
        }
        return null;
    };

    /**
     * Creates a S2CUserUpdateNotification message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2CUserUpdateNotification
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2CUserUpdateNotification} S2CUserUpdateNotification
     */
    S2CUserUpdateNotification.fromObject = function fromObject(object) {
        if (object instanceof $root.S2CUserUpdateNotification)
            return object;
        var message = new $root.S2CUserUpdateNotification();
        if (object.user) {
            if (!Array.isArray(object.user))
                throw TypeError(".S2CUserUpdateNotification.user: array expected");
            message.user = [];
            for (var i = 0; i < object.user.length; ++i) {
                if (typeof object.user[i] !== "object")
                    throw TypeError(".S2CUserUpdateNotification.user: object expected");
                message.user[i] = $root.UserData.fromObject(object.user[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a S2CUserUpdateNotification message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2CUserUpdateNotification
     * @static
     * @param {S2CUserUpdateNotification} message S2CUserUpdateNotification
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2CUserUpdateNotification.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.user = [];
        if (message.user && message.user.length) {
            object.user = [];
            for (var j = 0; j < message.user.length; ++j)
                object.user[j] = $root.UserData.toObject(message.user[j], options);
        }
        return object;
    };

    /**
     * Converts this S2CUserUpdateNotification to JSON.
     * @function toJSON
     * @memberof S2CUserUpdateNotification
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2CUserUpdateNotification.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for S2CUserUpdateNotification
     * @function getTypeUrl
     * @memberof S2CUserUpdateNotification
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    S2CUserUpdateNotification.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/S2CUserUpdateNotification";
    };

    return S2CUserUpdateNotification;
})();

$root.S2CPhaseUpdateNotification = (function() {

    /**
     * Properties of a S2CPhaseUpdateNotification.
     * @exports IS2CPhaseUpdateNotification
     * @interface IS2CPhaseUpdateNotification
     * @property {PhaseType|null} [phaseType] S2CPhaseUpdateNotification phaseType
     * @property {number|Long|null} [nextPhaseAt] S2CPhaseUpdateNotification nextPhaseAt
     */

    /**
     * Constructs a new S2CPhaseUpdateNotification.
     * @exports S2CPhaseUpdateNotification
     * @classdesc Represents a S2CPhaseUpdateNotification.
     * @implements IS2CPhaseUpdateNotification
     * @constructor
     * @param {IS2CPhaseUpdateNotification=} [properties] Properties to set
     */
    function S2CPhaseUpdateNotification(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2CPhaseUpdateNotification phaseType.
     * @member {PhaseType} phaseType
     * @memberof S2CPhaseUpdateNotification
     * @instance
     */
    S2CPhaseUpdateNotification.prototype.phaseType = 0;

    /**
     * S2CPhaseUpdateNotification nextPhaseAt.
     * @member {number|Long} nextPhaseAt
     * @memberof S2CPhaseUpdateNotification
     * @instance
     */
    S2CPhaseUpdateNotification.prototype.nextPhaseAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new S2CPhaseUpdateNotification instance using the specified properties.
     * @function create
     * @memberof S2CPhaseUpdateNotification
     * @static
     * @param {IS2CPhaseUpdateNotification=} [properties] Properties to set
     * @returns {S2CPhaseUpdateNotification} S2CPhaseUpdateNotification instance
     */
    S2CPhaseUpdateNotification.create = function create(properties) {
        return new S2CPhaseUpdateNotification(properties);
    };

    /**
     * Encodes the specified S2CPhaseUpdateNotification message. Does not implicitly {@link S2CPhaseUpdateNotification.verify|verify} messages.
     * @function encode
     * @memberof S2CPhaseUpdateNotification
     * @static
     * @param {IS2CPhaseUpdateNotification} message S2CPhaseUpdateNotification message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CPhaseUpdateNotification.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.phaseType != null && Object.hasOwnProperty.call(message, "phaseType"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.phaseType);
        if (message.nextPhaseAt != null && Object.hasOwnProperty.call(message, "nextPhaseAt"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.nextPhaseAt);
        return writer;
    };

    /**
     * Encodes the specified S2CPhaseUpdateNotification message, length delimited. Does not implicitly {@link S2CPhaseUpdateNotification.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2CPhaseUpdateNotification
     * @static
     * @param {IS2CPhaseUpdateNotification} message S2CPhaseUpdateNotification message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CPhaseUpdateNotification.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2CPhaseUpdateNotification message from the specified reader or buffer.
     * @function decode
     * @memberof S2CPhaseUpdateNotification
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2CPhaseUpdateNotification} S2CPhaseUpdateNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CPhaseUpdateNotification.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2CPhaseUpdateNotification();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.phaseType = reader.int32();
                    break;
                }
            case 2: {
                    message.nextPhaseAt = reader.int64();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2CPhaseUpdateNotification message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2CPhaseUpdateNotification
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2CPhaseUpdateNotification} S2CPhaseUpdateNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CPhaseUpdateNotification.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2CPhaseUpdateNotification message.
     * @function verify
     * @memberof S2CPhaseUpdateNotification
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2CPhaseUpdateNotification.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.phaseType != null && message.hasOwnProperty("phaseType"))
            switch (message.phaseType) {
            default:
                return "phaseType: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
                break;
            }
        if (message.nextPhaseAt != null && message.hasOwnProperty("nextPhaseAt"))
            if (!$util.isInteger(message.nextPhaseAt) && !(message.nextPhaseAt && $util.isInteger(message.nextPhaseAt.low) && $util.isInteger(message.nextPhaseAt.high)))
                return "nextPhaseAt: integer|Long expected";
        return null;
    };

    /**
     * Creates a S2CPhaseUpdateNotification message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2CPhaseUpdateNotification
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2CPhaseUpdateNotification} S2CPhaseUpdateNotification
     */
    S2CPhaseUpdateNotification.fromObject = function fromObject(object) {
        if (object instanceof $root.S2CPhaseUpdateNotification)
            return object;
        var message = new $root.S2CPhaseUpdateNotification();
        switch (object.phaseType) {
        default:
            if (typeof object.phaseType === "number") {
                message.phaseType = object.phaseType;
                break;
            }
            break;
        case "NONE_PHASE":
        case 0:
            message.phaseType = 0;
            break;
        case "DAY":
        case 1:
            message.phaseType = 1;
            break;
        case "EVENING":
        case 2:
            message.phaseType = 2;
            break;
        case "END":
        case 3:
            message.phaseType = 3;
            break;
        }
        if (object.nextPhaseAt != null)
            if ($util.Long)
                (message.nextPhaseAt = $util.Long.fromValue(object.nextPhaseAt)).unsigned = false;
            else if (typeof object.nextPhaseAt === "string")
                message.nextPhaseAt = parseInt(object.nextPhaseAt, 10);
            else if (typeof object.nextPhaseAt === "number")
                message.nextPhaseAt = object.nextPhaseAt;
            else if (typeof object.nextPhaseAt === "object")
                message.nextPhaseAt = new $util.LongBits(object.nextPhaseAt.low >>> 0, object.nextPhaseAt.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a S2CPhaseUpdateNotification message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2CPhaseUpdateNotification
     * @static
     * @param {S2CPhaseUpdateNotification} message S2CPhaseUpdateNotification
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2CPhaseUpdateNotification.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.phaseType = options.enums === String ? "NONE_PHASE" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.nextPhaseAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.nextPhaseAt = options.longs === String ? "0" : 0;
        }
        if (message.phaseType != null && message.hasOwnProperty("phaseType"))
            object.phaseType = options.enums === String ? $root.PhaseType[message.phaseType] === undefined ? message.phaseType : $root.PhaseType[message.phaseType] : message.phaseType;
        if (message.nextPhaseAt != null && message.hasOwnProperty("nextPhaseAt"))
            if (typeof message.nextPhaseAt === "number")
                object.nextPhaseAt = options.longs === String ? String(message.nextPhaseAt) : message.nextPhaseAt;
            else
                object.nextPhaseAt = options.longs === String ? $util.Long.prototype.toString.call(message.nextPhaseAt) : options.longs === Number ? new $util.LongBits(message.nextPhaseAt.low >>> 0, message.nextPhaseAt.high >>> 0).toNumber() : message.nextPhaseAt;
        return object;
    };

    /**
     * Converts this S2CPhaseUpdateNotification to JSON.
     * @function toJSON
     * @memberof S2CPhaseUpdateNotification
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2CPhaseUpdateNotification.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for S2CPhaseUpdateNotification
     * @function getTypeUrl
     * @memberof S2CPhaseUpdateNotification
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    S2CPhaseUpdateNotification.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/S2CPhaseUpdateNotification";
    };

    return S2CPhaseUpdateNotification;
})();

$root.C2SReactionRequest = (function() {

    /**
     * Properties of a C2SReactionRequest.
     * @exports IC2SReactionRequest
     * @interface IC2SReactionRequest
     * @property {ReactionType|null} [reactionType] C2SReactionRequest reactionType
     */

    /**
     * Constructs a new C2SReactionRequest.
     * @exports C2SReactionRequest
     * @classdesc Represents a C2SReactionRequest.
     * @implements IC2SReactionRequest
     * @constructor
     * @param {IC2SReactionRequest=} [properties] Properties to set
     */
    function C2SReactionRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * C2SReactionRequest reactionType.
     * @member {ReactionType} reactionType
     * @memberof C2SReactionRequest
     * @instance
     */
    C2SReactionRequest.prototype.reactionType = 0;

    /**
     * Creates a new C2SReactionRequest instance using the specified properties.
     * @function create
     * @memberof C2SReactionRequest
     * @static
     * @param {IC2SReactionRequest=} [properties] Properties to set
     * @returns {C2SReactionRequest} C2SReactionRequest instance
     */
    C2SReactionRequest.create = function create(properties) {
        return new C2SReactionRequest(properties);
    };

    /**
     * Encodes the specified C2SReactionRequest message. Does not implicitly {@link C2SReactionRequest.verify|verify} messages.
     * @function encode
     * @memberof C2SReactionRequest
     * @static
     * @param {IC2SReactionRequest} message C2SReactionRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SReactionRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.reactionType != null && Object.hasOwnProperty.call(message, "reactionType"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.reactionType);
        return writer;
    };

    /**
     * Encodes the specified C2SReactionRequest message, length delimited. Does not implicitly {@link C2SReactionRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof C2SReactionRequest
     * @static
     * @param {IC2SReactionRequest} message C2SReactionRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SReactionRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a C2SReactionRequest message from the specified reader or buffer.
     * @function decode
     * @memberof C2SReactionRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {C2SReactionRequest} C2SReactionRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SReactionRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2SReactionRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.reactionType = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a C2SReactionRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof C2SReactionRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {C2SReactionRequest} C2SReactionRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SReactionRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a C2SReactionRequest message.
     * @function verify
     * @memberof C2SReactionRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    C2SReactionRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.reactionType != null && message.hasOwnProperty("reactionType"))
            switch (message.reactionType) {
            default:
                return "reactionType: enum value expected";
            case 0:
            case 1:
                break;
            }
        return null;
    };

    /**
     * Creates a C2SReactionRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof C2SReactionRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {C2SReactionRequest} C2SReactionRequest
     */
    C2SReactionRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.C2SReactionRequest)
            return object;
        var message = new $root.C2SReactionRequest();
        switch (object.reactionType) {
        default:
            if (typeof object.reactionType === "number") {
                message.reactionType = object.reactionType;
                break;
            }
            break;
        case "NONE_REACTION":
        case 0:
            message.reactionType = 0;
            break;
        case "NOT_USE_CARD":
        case 1:
            message.reactionType = 1;
            break;
        }
        return message;
    };

    /**
     * Creates a plain object from a C2SReactionRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof C2SReactionRequest
     * @static
     * @param {C2SReactionRequest} message C2SReactionRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    C2SReactionRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults)
            object.reactionType = options.enums === String ? "NONE_REACTION" : 0;
        if (message.reactionType != null && message.hasOwnProperty("reactionType"))
            object.reactionType = options.enums === String ? $root.ReactionType[message.reactionType] === undefined ? message.reactionType : $root.ReactionType[message.reactionType] : message.reactionType;
        return object;
    };

    /**
     * Converts this C2SReactionRequest to JSON.
     * @function toJSON
     * @memberof C2SReactionRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    C2SReactionRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for C2SReactionRequest
     * @function getTypeUrl
     * @memberof C2SReactionRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    C2SReactionRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/C2SReactionRequest";
    };

    return C2SReactionRequest;
})();

$root.S2CReactionResponse = (function() {

    /**
     * Properties of a S2CReactionResponse.
     * @exports IS2CReactionResponse
     * @interface IS2CReactionResponse
     * @property {boolean|null} [success] S2CReactionResponse success
     * @property {GlobalFailCode|null} [failCode] S2CReactionResponse failCode
     */

    /**
     * Constructs a new S2CReactionResponse.
     * @exports S2CReactionResponse
     * @classdesc Represents a S2CReactionResponse.
     * @implements IS2CReactionResponse
     * @constructor
     * @param {IS2CReactionResponse=} [properties] Properties to set
     */
    function S2CReactionResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2CReactionResponse success.
     * @member {boolean} success
     * @memberof S2CReactionResponse
     * @instance
     */
    S2CReactionResponse.prototype.success = false;

    /**
     * S2CReactionResponse failCode.
     * @member {GlobalFailCode} failCode
     * @memberof S2CReactionResponse
     * @instance
     */
    S2CReactionResponse.prototype.failCode = 0;

    /**
     * Creates a new S2CReactionResponse instance using the specified properties.
     * @function create
     * @memberof S2CReactionResponse
     * @static
     * @param {IS2CReactionResponse=} [properties] Properties to set
     * @returns {S2CReactionResponse} S2CReactionResponse instance
     */
    S2CReactionResponse.create = function create(properties) {
        return new S2CReactionResponse(properties);
    };

    /**
     * Encodes the specified S2CReactionResponse message. Does not implicitly {@link S2CReactionResponse.verify|verify} messages.
     * @function encode
     * @memberof S2CReactionResponse
     * @static
     * @param {IS2CReactionResponse} message S2CReactionResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CReactionResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.success != null && Object.hasOwnProperty.call(message, "success"))
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
        if (message.failCode != null && Object.hasOwnProperty.call(message, "failCode"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.failCode);
        return writer;
    };

    /**
     * Encodes the specified S2CReactionResponse message, length delimited. Does not implicitly {@link S2CReactionResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2CReactionResponse
     * @static
     * @param {IS2CReactionResponse} message S2CReactionResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CReactionResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2CReactionResponse message from the specified reader or buffer.
     * @function decode
     * @memberof S2CReactionResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2CReactionResponse} S2CReactionResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CReactionResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2CReactionResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.success = reader.bool();
                    break;
                }
            case 2: {
                    message.failCode = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2CReactionResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2CReactionResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2CReactionResponse} S2CReactionResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CReactionResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2CReactionResponse message.
     * @function verify
     * @memberof S2CReactionResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2CReactionResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.success != null && message.hasOwnProperty("success"))
            if (typeof message.success !== "boolean")
                return "success: boolean expected";
        if (message.failCode != null && message.hasOwnProperty("failCode"))
            switch (message.failCode) {
            default:
                return "failCode: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
                break;
            }
        return null;
    };

    /**
     * Creates a S2CReactionResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2CReactionResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2CReactionResponse} S2CReactionResponse
     */
    S2CReactionResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.S2CReactionResponse)
            return object;
        var message = new $root.S2CReactionResponse();
        if (object.success != null)
            message.success = Boolean(object.success);
        switch (object.failCode) {
        default:
            if (typeof object.failCode === "number") {
                message.failCode = object.failCode;
                break;
            }
            break;
        case "NONE_FAILCODE":
        case 0:
            message.failCode = 0;
            break;
        case "UNKNOWN_ERROR":
        case 1:
            message.failCode = 1;
            break;
        case "INVALID_REQUEST":
        case 2:
            message.failCode = 2;
            break;
        case "AUTHENTICATION_FAILED":
        case 3:
            message.failCode = 3;
            break;
        case "CREATE_ROOM_FAILED":
        case 4:
            message.failCode = 4;
            break;
        case "JOIN_ROOM_FAILED":
        case 5:
            message.failCode = 5;
            break;
        case "LEAVE_ROOM_FAILED":
        case 6:
            message.failCode = 6;
            break;
        case "REGISTER_FAILED":
        case 7:
            message.failCode = 7;
            break;
        case "ROOM_NOT_FOUND":
        case 8:
            message.failCode = 8;
            break;
        case "CHARACTER_NOT_FOUND":
        case 9:
            message.failCode = 9;
            break;
        case "CHARACTER_STATE_ERROR":
        case 10:
            message.failCode = 10;
            break;
        case "CHARACTER_NO_CARD":
        case 11:
            message.failCode = 11;
            break;
        case "INVALID_ROOM_STATE":
        case 12:
            message.failCode = 12;
            break;
        case "NOT_ROOM_OWNER":
        case 13:
            message.failCode = 13;
            break;
        case "ALREADY_USED_BBANG":
        case 14:
            message.failCode = 14;
            break;
        case "INVALID_PHASE":
        case 15:
            message.failCode = 15;
            break;
        case "CHARACTER_CONTAINED":
        case 16:
            message.failCode = 16;
            break;
        }
        return message;
    };

    /**
     * Creates a plain object from a S2CReactionResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2CReactionResponse
     * @static
     * @param {S2CReactionResponse} message S2CReactionResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2CReactionResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.success = false;
            object.failCode = options.enums === String ? "NONE_FAILCODE" : 0;
        }
        if (message.success != null && message.hasOwnProperty("success"))
            object.success = message.success;
        if (message.failCode != null && message.hasOwnProperty("failCode"))
            object.failCode = options.enums === String ? $root.GlobalFailCode[message.failCode] === undefined ? message.failCode : $root.GlobalFailCode[message.failCode] : message.failCode;
        return object;
    };

    /**
     * Converts this S2CReactionResponse to JSON.
     * @function toJSON
     * @memberof S2CReactionResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2CReactionResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for S2CReactionResponse
     * @function getTypeUrl
     * @memberof S2CReactionResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    S2CReactionResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/S2CReactionResponse";
    };

    return S2CReactionResponse;
})();

$root.C2SDestroyCardRequest = (function() {

    /**
     * Properties of a C2SDestroyCardRequest.
     * @exports IC2SDestroyCardRequest
     * @interface IC2SDestroyCardRequest
     * @property {Array.<ICardData>|null} [destroyCards] C2SDestroyCardRequest destroyCards
     */

    /**
     * Constructs a new C2SDestroyCardRequest.
     * @exports C2SDestroyCardRequest
     * @classdesc Represents a C2SDestroyCardRequest.
     * @implements IC2SDestroyCardRequest
     * @constructor
     * @param {IC2SDestroyCardRequest=} [properties] Properties to set
     */
    function C2SDestroyCardRequest(properties) {
        this.destroyCards = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * C2SDestroyCardRequest destroyCards.
     * @member {Array.<ICardData>} destroyCards
     * @memberof C2SDestroyCardRequest
     * @instance
     */
    C2SDestroyCardRequest.prototype.destroyCards = $util.emptyArray;

    /**
     * Creates a new C2SDestroyCardRequest instance using the specified properties.
     * @function create
     * @memberof C2SDestroyCardRequest
     * @static
     * @param {IC2SDestroyCardRequest=} [properties] Properties to set
     * @returns {C2SDestroyCardRequest} C2SDestroyCardRequest instance
     */
    C2SDestroyCardRequest.create = function create(properties) {
        return new C2SDestroyCardRequest(properties);
    };

    /**
     * Encodes the specified C2SDestroyCardRequest message. Does not implicitly {@link C2SDestroyCardRequest.verify|verify} messages.
     * @function encode
     * @memberof C2SDestroyCardRequest
     * @static
     * @param {IC2SDestroyCardRequest} message C2SDestroyCardRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SDestroyCardRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.destroyCards != null && message.destroyCards.length)
            for (var i = 0; i < message.destroyCards.length; ++i)
                $root.CardData.encode(message.destroyCards[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified C2SDestroyCardRequest message, length delimited. Does not implicitly {@link C2SDestroyCardRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof C2SDestroyCardRequest
     * @static
     * @param {IC2SDestroyCardRequest} message C2SDestroyCardRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SDestroyCardRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a C2SDestroyCardRequest message from the specified reader or buffer.
     * @function decode
     * @memberof C2SDestroyCardRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {C2SDestroyCardRequest} C2SDestroyCardRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SDestroyCardRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2SDestroyCardRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    if (!(message.destroyCards && message.destroyCards.length))
                        message.destroyCards = [];
                    message.destroyCards.push($root.CardData.decode(reader, reader.uint32()));
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a C2SDestroyCardRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof C2SDestroyCardRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {C2SDestroyCardRequest} C2SDestroyCardRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SDestroyCardRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a C2SDestroyCardRequest message.
     * @function verify
     * @memberof C2SDestroyCardRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    C2SDestroyCardRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.destroyCards != null && message.hasOwnProperty("destroyCards")) {
            if (!Array.isArray(message.destroyCards))
                return "destroyCards: array expected";
            for (var i = 0; i < message.destroyCards.length; ++i) {
                var error = $root.CardData.verify(message.destroyCards[i]);
                if (error)
                    return "destroyCards." + error;
            }
        }
        return null;
    };

    /**
     * Creates a C2SDestroyCardRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof C2SDestroyCardRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {C2SDestroyCardRequest} C2SDestroyCardRequest
     */
    C2SDestroyCardRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.C2SDestroyCardRequest)
            return object;
        var message = new $root.C2SDestroyCardRequest();
        if (object.destroyCards) {
            if (!Array.isArray(object.destroyCards))
                throw TypeError(".C2SDestroyCardRequest.destroyCards: array expected");
            message.destroyCards = [];
            for (var i = 0; i < object.destroyCards.length; ++i) {
                if (typeof object.destroyCards[i] !== "object")
                    throw TypeError(".C2SDestroyCardRequest.destroyCards: object expected");
                message.destroyCards[i] = $root.CardData.fromObject(object.destroyCards[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a C2SDestroyCardRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof C2SDestroyCardRequest
     * @static
     * @param {C2SDestroyCardRequest} message C2SDestroyCardRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    C2SDestroyCardRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.destroyCards = [];
        if (message.destroyCards && message.destroyCards.length) {
            object.destroyCards = [];
            for (var j = 0; j < message.destroyCards.length; ++j)
                object.destroyCards[j] = $root.CardData.toObject(message.destroyCards[j], options);
        }
        return object;
    };

    /**
     * Converts this C2SDestroyCardRequest to JSON.
     * @function toJSON
     * @memberof C2SDestroyCardRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    C2SDestroyCardRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for C2SDestroyCardRequest
     * @function getTypeUrl
     * @memberof C2SDestroyCardRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    C2SDestroyCardRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/C2SDestroyCardRequest";
    };

    return C2SDestroyCardRequest;
})();

$root.S2CDestroyCardResponse = (function() {

    /**
     * Properties of a S2CDestroyCardResponse.
     * @exports IS2CDestroyCardResponse
     * @interface IS2CDestroyCardResponse
     * @property {Array.<ICardData>|null} [handCards] S2CDestroyCardResponse handCards
     */

    /**
     * Constructs a new S2CDestroyCardResponse.
     * @exports S2CDestroyCardResponse
     * @classdesc Represents a S2CDestroyCardResponse.
     * @implements IS2CDestroyCardResponse
     * @constructor
     * @param {IS2CDestroyCardResponse=} [properties] Properties to set
     */
    function S2CDestroyCardResponse(properties) {
        this.handCards = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2CDestroyCardResponse handCards.
     * @member {Array.<ICardData>} handCards
     * @memberof S2CDestroyCardResponse
     * @instance
     */
    S2CDestroyCardResponse.prototype.handCards = $util.emptyArray;

    /**
     * Creates a new S2CDestroyCardResponse instance using the specified properties.
     * @function create
     * @memberof S2CDestroyCardResponse
     * @static
     * @param {IS2CDestroyCardResponse=} [properties] Properties to set
     * @returns {S2CDestroyCardResponse} S2CDestroyCardResponse instance
     */
    S2CDestroyCardResponse.create = function create(properties) {
        return new S2CDestroyCardResponse(properties);
    };

    /**
     * Encodes the specified S2CDestroyCardResponse message. Does not implicitly {@link S2CDestroyCardResponse.verify|verify} messages.
     * @function encode
     * @memberof S2CDestroyCardResponse
     * @static
     * @param {IS2CDestroyCardResponse} message S2CDestroyCardResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CDestroyCardResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.handCards != null && message.handCards.length)
            for (var i = 0; i < message.handCards.length; ++i)
                $root.CardData.encode(message.handCards[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified S2CDestroyCardResponse message, length delimited. Does not implicitly {@link S2CDestroyCardResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2CDestroyCardResponse
     * @static
     * @param {IS2CDestroyCardResponse} message S2CDestroyCardResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CDestroyCardResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2CDestroyCardResponse message from the specified reader or buffer.
     * @function decode
     * @memberof S2CDestroyCardResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2CDestroyCardResponse} S2CDestroyCardResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CDestroyCardResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2CDestroyCardResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    if (!(message.handCards && message.handCards.length))
                        message.handCards = [];
                    message.handCards.push($root.CardData.decode(reader, reader.uint32()));
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2CDestroyCardResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2CDestroyCardResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2CDestroyCardResponse} S2CDestroyCardResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CDestroyCardResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2CDestroyCardResponse message.
     * @function verify
     * @memberof S2CDestroyCardResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2CDestroyCardResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.handCards != null && message.hasOwnProperty("handCards")) {
            if (!Array.isArray(message.handCards))
                return "handCards: array expected";
            for (var i = 0; i < message.handCards.length; ++i) {
                var error = $root.CardData.verify(message.handCards[i]);
                if (error)
                    return "handCards." + error;
            }
        }
        return null;
    };

    /**
     * Creates a S2CDestroyCardResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2CDestroyCardResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2CDestroyCardResponse} S2CDestroyCardResponse
     */
    S2CDestroyCardResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.S2CDestroyCardResponse)
            return object;
        var message = new $root.S2CDestroyCardResponse();
        if (object.handCards) {
            if (!Array.isArray(object.handCards))
                throw TypeError(".S2CDestroyCardResponse.handCards: array expected");
            message.handCards = [];
            for (var i = 0; i < object.handCards.length; ++i) {
                if (typeof object.handCards[i] !== "object")
                    throw TypeError(".S2CDestroyCardResponse.handCards: object expected");
                message.handCards[i] = $root.CardData.fromObject(object.handCards[i]);
            }
        }
        return message;
    };

    /**
     * Creates a plain object from a S2CDestroyCardResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2CDestroyCardResponse
     * @static
     * @param {S2CDestroyCardResponse} message S2CDestroyCardResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2CDestroyCardResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.handCards = [];
        if (message.handCards && message.handCards.length) {
            object.handCards = [];
            for (var j = 0; j < message.handCards.length; ++j)
                object.handCards[j] = $root.CardData.toObject(message.handCards[j], options);
        }
        return object;
    };

    /**
     * Converts this S2CDestroyCardResponse to JSON.
     * @function toJSON
     * @memberof S2CDestroyCardResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2CDestroyCardResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for S2CDestroyCardResponse
     * @function getTypeUrl
     * @memberof S2CDestroyCardResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    S2CDestroyCardResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/S2CDestroyCardResponse";
    };

    return S2CDestroyCardResponse;
})();

$root.S2CGameEndNotification = (function() {

    /**
     * Properties of a S2CGameEndNotification.
     * @exports IS2CGameEndNotification
     * @interface IS2CGameEndNotification
     * @property {Array.<string>|null} [winners] S2CGameEndNotification winners
     * @property {WinType|null} [winType] S2CGameEndNotification winType
     */

    /**
     * Constructs a new S2CGameEndNotification.
     * @exports S2CGameEndNotification
     * @classdesc Represents a S2CGameEndNotification.
     * @implements IS2CGameEndNotification
     * @constructor
     * @param {IS2CGameEndNotification=} [properties] Properties to set
     */
    function S2CGameEndNotification(properties) {
        this.winners = [];
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2CGameEndNotification winners.
     * @member {Array.<string>} winners
     * @memberof S2CGameEndNotification
     * @instance
     */
    S2CGameEndNotification.prototype.winners = $util.emptyArray;

    /**
     * S2CGameEndNotification winType.
     * @member {WinType} winType
     * @memberof S2CGameEndNotification
     * @instance
     */
    S2CGameEndNotification.prototype.winType = 0;

    /**
     * Creates a new S2CGameEndNotification instance using the specified properties.
     * @function create
     * @memberof S2CGameEndNotification
     * @static
     * @param {IS2CGameEndNotification=} [properties] Properties to set
     * @returns {S2CGameEndNotification} S2CGameEndNotification instance
     */
    S2CGameEndNotification.create = function create(properties) {
        return new S2CGameEndNotification(properties);
    };

    /**
     * Encodes the specified S2CGameEndNotification message. Does not implicitly {@link S2CGameEndNotification.verify|verify} messages.
     * @function encode
     * @memberof S2CGameEndNotification
     * @static
     * @param {IS2CGameEndNotification} message S2CGameEndNotification message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CGameEndNotification.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.winners != null && message.winners.length)
            for (var i = 0; i < message.winners.length; ++i)
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.winners[i]);
        if (message.winType != null && Object.hasOwnProperty.call(message, "winType"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.winType);
        return writer;
    };

    /**
     * Encodes the specified S2CGameEndNotification message, length delimited. Does not implicitly {@link S2CGameEndNotification.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2CGameEndNotification
     * @static
     * @param {IS2CGameEndNotification} message S2CGameEndNotification message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CGameEndNotification.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2CGameEndNotification message from the specified reader or buffer.
     * @function decode
     * @memberof S2CGameEndNotification
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2CGameEndNotification} S2CGameEndNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CGameEndNotification.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2CGameEndNotification();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    if (!(message.winners && message.winners.length))
                        message.winners = [];
                    message.winners.push(reader.string());
                    break;
                }
            case 2: {
                    message.winType = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2CGameEndNotification message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2CGameEndNotification
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2CGameEndNotification} S2CGameEndNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CGameEndNotification.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2CGameEndNotification message.
     * @function verify
     * @memberof S2CGameEndNotification
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2CGameEndNotification.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.winners != null && message.hasOwnProperty("winners")) {
            if (!Array.isArray(message.winners))
                return "winners: array expected";
            for (var i = 0; i < message.winners.length; ++i)
                if (!$util.isString(message.winners[i]))
                    return "winners: string[] expected";
        }
        if (message.winType != null && message.hasOwnProperty("winType"))
            switch (message.winType) {
            default:
                return "winType: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
        return null;
    };

    /**
     * Creates a S2CGameEndNotification message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2CGameEndNotification
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2CGameEndNotification} S2CGameEndNotification
     */
    S2CGameEndNotification.fromObject = function fromObject(object) {
        if (object instanceof $root.S2CGameEndNotification)
            return object;
        var message = new $root.S2CGameEndNotification();
        if (object.winners) {
            if (!Array.isArray(object.winners))
                throw TypeError(".S2CGameEndNotification.winners: array expected");
            message.winners = [];
            for (var i = 0; i < object.winners.length; ++i)
                message.winners[i] = String(object.winners[i]);
        }
        switch (object.winType) {
        default:
            if (typeof object.winType === "number") {
                message.winType = object.winType;
                break;
            }
            break;
        case "TARGET_AND_BODYGUARD_WIN":
        case 0:
            message.winType = 0;
            break;
        case "HITMAN_WIN":
        case 1:
            message.winType = 1;
            break;
        case "PSYCHOPATH_WIN":
        case 2:
            message.winType = 2;
            break;
        }
        return message;
    };

    /**
     * Creates a plain object from a S2CGameEndNotification message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2CGameEndNotification
     * @static
     * @param {S2CGameEndNotification} message S2CGameEndNotification
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2CGameEndNotification.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.arrays || options.defaults)
            object.winners = [];
        if (options.defaults)
            object.winType = options.enums === String ? "TARGET_AND_BODYGUARD_WIN" : 0;
        if (message.winners && message.winners.length) {
            object.winners = [];
            for (var j = 0; j < message.winners.length; ++j)
                object.winners[j] = message.winners[j];
        }
        if (message.winType != null && message.hasOwnProperty("winType"))
            object.winType = options.enums === String ? $root.WinType[message.winType] === undefined ? message.winType : $root.WinType[message.winType] : message.winType;
        return object;
    };

    /**
     * Converts this S2CGameEndNotification to JSON.
     * @function toJSON
     * @memberof S2CGameEndNotification
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2CGameEndNotification.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for S2CGameEndNotification
     * @function getTypeUrl
     * @memberof S2CGameEndNotification
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    S2CGameEndNotification.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/S2CGameEndNotification";
    };

    return S2CGameEndNotification;
})();

$root.C2SCardSelectRequest = (function() {

    /**
     * Properties of a C2SCardSelectRequest.
     * @exports IC2SCardSelectRequest
     * @interface IC2SCardSelectRequest
     * @property {SelectCardType|null} [selectType] C2SCardSelectRequest selectType
     * @property {CardType|null} [selectCardType] C2SCardSelectRequest selectCardType
     */

    /**
     * Constructs a new C2SCardSelectRequest.
     * @exports C2SCardSelectRequest
     * @classdesc Represents a C2SCardSelectRequest.
     * @implements IC2SCardSelectRequest
     * @constructor
     * @param {IC2SCardSelectRequest=} [properties] Properties to set
     */
    function C2SCardSelectRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * C2SCardSelectRequest selectType.
     * @member {SelectCardType} selectType
     * @memberof C2SCardSelectRequest
     * @instance
     */
    C2SCardSelectRequest.prototype.selectType = 0;

    /**
     * C2SCardSelectRequest selectCardType.
     * @member {CardType} selectCardType
     * @memberof C2SCardSelectRequest
     * @instance
     */
    C2SCardSelectRequest.prototype.selectCardType = 0;

    /**
     * Creates a new C2SCardSelectRequest instance using the specified properties.
     * @function create
     * @memberof C2SCardSelectRequest
     * @static
     * @param {IC2SCardSelectRequest=} [properties] Properties to set
     * @returns {C2SCardSelectRequest} C2SCardSelectRequest instance
     */
    C2SCardSelectRequest.create = function create(properties) {
        return new C2SCardSelectRequest(properties);
    };

    /**
     * Encodes the specified C2SCardSelectRequest message. Does not implicitly {@link C2SCardSelectRequest.verify|verify} messages.
     * @function encode
     * @memberof C2SCardSelectRequest
     * @static
     * @param {IC2SCardSelectRequest} message C2SCardSelectRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SCardSelectRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.selectType != null && Object.hasOwnProperty.call(message, "selectType"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.selectType);
        if (message.selectCardType != null && Object.hasOwnProperty.call(message, "selectCardType"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.selectCardType);
        return writer;
    };

    /**
     * Encodes the specified C2SCardSelectRequest message, length delimited. Does not implicitly {@link C2SCardSelectRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof C2SCardSelectRequest
     * @static
     * @param {IC2SCardSelectRequest} message C2SCardSelectRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SCardSelectRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a C2SCardSelectRequest message from the specified reader or buffer.
     * @function decode
     * @memberof C2SCardSelectRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {C2SCardSelectRequest} C2SCardSelectRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SCardSelectRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2SCardSelectRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.selectType = reader.int32();
                    break;
                }
            case 2: {
                    message.selectCardType = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a C2SCardSelectRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof C2SCardSelectRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {C2SCardSelectRequest} C2SCardSelectRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SCardSelectRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a C2SCardSelectRequest message.
     * @function verify
     * @memberof C2SCardSelectRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    C2SCardSelectRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.selectType != null && message.hasOwnProperty("selectType"))
            switch (message.selectType) {
            default:
                return "selectType: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
                break;
            }
        if (message.selectCardType != null && message.hasOwnProperty("selectCardType"))
            switch (message.selectCardType) {
            default:
                return "selectCardType: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
            case 20:
            case 21:
            case 22:
            case 23:
                break;
            }
        return null;
    };

    /**
     * Creates a C2SCardSelectRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof C2SCardSelectRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {C2SCardSelectRequest} C2SCardSelectRequest
     */
    C2SCardSelectRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.C2SCardSelectRequest)
            return object;
        var message = new $root.C2SCardSelectRequest();
        switch (object.selectType) {
        default:
            if (typeof object.selectType === "number") {
                message.selectType = object.selectType;
                break;
            }
            break;
        case "HAND":
        case 0:
            message.selectType = 0;
            break;
        case "EQUIP":
        case 1:
            message.selectType = 1;
            break;
        case "WEAPON":
        case 2:
            message.selectType = 2;
            break;
        case "DEBUFF":
        case 3:
            message.selectType = 3;
            break;
        }
        switch (object.selectCardType) {
        default:
            if (typeof object.selectCardType === "number") {
                message.selectCardType = object.selectCardType;
                break;
            }
            break;
        case "NONE":
        case 0:
            message.selectCardType = 0;
            break;
        case "BBANG":
        case 1:
            message.selectCardType = 1;
            break;
        case "BIG_BBANG":
        case 2:
            message.selectCardType = 2;
            break;
        case "SHIELD":
        case 3:
            message.selectCardType = 3;
            break;
        case "VACCINE":
        case 4:
            message.selectCardType = 4;
            break;
        case "CALL_119":
        case 5:
            message.selectCardType = 5;
            break;
        case "DEATH_MATCH":
        case 6:
            message.selectCardType = 6;
            break;
        case "GUERRILLA":
        case 7:
            message.selectCardType = 7;
            break;
        case "ABSORB":
        case 8:
            message.selectCardType = 8;
            break;
        case "HALLUCINATION":
        case 9:
            message.selectCardType = 9;
            break;
        case "FLEA_MARKET":
        case 10:
            message.selectCardType = 10;
            break;
        case "MATURED_SAVINGS":
        case 11:
            message.selectCardType = 11;
            break;
        case "WIN_LOTTERY":
        case 12:
            message.selectCardType = 12;
            break;
        case "SNIPER_GUN":
        case 13:
            message.selectCardType = 13;
            break;
        case "HAND_GUN":
        case 14:
            message.selectCardType = 14;
            break;
        case "DESERT_EAGLE":
        case 15:
            message.selectCardType = 15;
            break;
        case "AUTO_RIFLE":
        case 16:
            message.selectCardType = 16;
            break;
        case "LASER_POINTER":
        case 17:
            message.selectCardType = 17;
            break;
        case "RADAR":
        case 18:
            message.selectCardType = 18;
            break;
        case "AUTO_SHIELD":
        case 19:
            message.selectCardType = 19;
            break;
        case "STEALTH_SUIT":
        case 20:
            message.selectCardType = 20;
            break;
        case "CONTAINMENT_UNIT":
        case 21:
            message.selectCardType = 21;
            break;
        case "SATELLITE_TARGET":
        case 22:
            message.selectCardType = 22;
            break;
        case "BOMB":
        case 23:
            message.selectCardType = 23;
            break;
        }
        return message;
    };

    /**
     * Creates a plain object from a C2SCardSelectRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof C2SCardSelectRequest
     * @static
     * @param {C2SCardSelectRequest} message C2SCardSelectRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    C2SCardSelectRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.selectType = options.enums === String ? "HAND" : 0;
            object.selectCardType = options.enums === String ? "NONE" : 0;
        }
        if (message.selectType != null && message.hasOwnProperty("selectType"))
            object.selectType = options.enums === String ? $root.SelectCardType[message.selectType] === undefined ? message.selectType : $root.SelectCardType[message.selectType] : message.selectType;
        if (message.selectCardType != null && message.hasOwnProperty("selectCardType"))
            object.selectCardType = options.enums === String ? $root.CardType[message.selectCardType] === undefined ? message.selectCardType : $root.CardType[message.selectCardType] : message.selectCardType;
        return object;
    };

    /**
     * Converts this C2SCardSelectRequest to JSON.
     * @function toJSON
     * @memberof C2SCardSelectRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    C2SCardSelectRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for C2SCardSelectRequest
     * @function getTypeUrl
     * @memberof C2SCardSelectRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    C2SCardSelectRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/C2SCardSelectRequest";
    };

    return C2SCardSelectRequest;
})();

$root.S2CCardSelectResponse = (function() {

    /**
     * Properties of a S2CCardSelectResponse.
     * @exports IS2CCardSelectResponse
     * @interface IS2CCardSelectResponse
     * @property {boolean|null} [success] S2CCardSelectResponse success
     * @property {GlobalFailCode|null} [failCode] S2CCardSelectResponse failCode
     */

    /**
     * Constructs a new S2CCardSelectResponse.
     * @exports S2CCardSelectResponse
     * @classdesc Represents a S2CCardSelectResponse.
     * @implements IS2CCardSelectResponse
     * @constructor
     * @param {IS2CCardSelectResponse=} [properties] Properties to set
     */
    function S2CCardSelectResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2CCardSelectResponse success.
     * @member {boolean} success
     * @memberof S2CCardSelectResponse
     * @instance
     */
    S2CCardSelectResponse.prototype.success = false;

    /**
     * S2CCardSelectResponse failCode.
     * @member {GlobalFailCode} failCode
     * @memberof S2CCardSelectResponse
     * @instance
     */
    S2CCardSelectResponse.prototype.failCode = 0;

    /**
     * Creates a new S2CCardSelectResponse instance using the specified properties.
     * @function create
     * @memberof S2CCardSelectResponse
     * @static
     * @param {IS2CCardSelectResponse=} [properties] Properties to set
     * @returns {S2CCardSelectResponse} S2CCardSelectResponse instance
     */
    S2CCardSelectResponse.create = function create(properties) {
        return new S2CCardSelectResponse(properties);
    };

    /**
     * Encodes the specified S2CCardSelectResponse message. Does not implicitly {@link S2CCardSelectResponse.verify|verify} messages.
     * @function encode
     * @memberof S2CCardSelectResponse
     * @static
     * @param {IS2CCardSelectResponse} message S2CCardSelectResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CCardSelectResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.success != null && Object.hasOwnProperty.call(message, "success"))
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
        if (message.failCode != null && Object.hasOwnProperty.call(message, "failCode"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.failCode);
        return writer;
    };

    /**
     * Encodes the specified S2CCardSelectResponse message, length delimited. Does not implicitly {@link S2CCardSelectResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2CCardSelectResponse
     * @static
     * @param {IS2CCardSelectResponse} message S2CCardSelectResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CCardSelectResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2CCardSelectResponse message from the specified reader or buffer.
     * @function decode
     * @memberof S2CCardSelectResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2CCardSelectResponse} S2CCardSelectResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CCardSelectResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2CCardSelectResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.success = reader.bool();
                    break;
                }
            case 2: {
                    message.failCode = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2CCardSelectResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2CCardSelectResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2CCardSelectResponse} S2CCardSelectResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CCardSelectResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2CCardSelectResponse message.
     * @function verify
     * @memberof S2CCardSelectResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2CCardSelectResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.success != null && message.hasOwnProperty("success"))
            if (typeof message.success !== "boolean")
                return "success: boolean expected";
        if (message.failCode != null && message.hasOwnProperty("failCode"))
            switch (message.failCode) {
            default:
                return "failCode: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
                break;
            }
        return null;
    };

    /**
     * Creates a S2CCardSelectResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2CCardSelectResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2CCardSelectResponse} S2CCardSelectResponse
     */
    S2CCardSelectResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.S2CCardSelectResponse)
            return object;
        var message = new $root.S2CCardSelectResponse();
        if (object.success != null)
            message.success = Boolean(object.success);
        switch (object.failCode) {
        default:
            if (typeof object.failCode === "number") {
                message.failCode = object.failCode;
                break;
            }
            break;
        case "NONE_FAILCODE":
        case 0:
            message.failCode = 0;
            break;
        case "UNKNOWN_ERROR":
        case 1:
            message.failCode = 1;
            break;
        case "INVALID_REQUEST":
        case 2:
            message.failCode = 2;
            break;
        case "AUTHENTICATION_FAILED":
        case 3:
            message.failCode = 3;
            break;
        case "CREATE_ROOM_FAILED":
        case 4:
            message.failCode = 4;
            break;
        case "JOIN_ROOM_FAILED":
        case 5:
            message.failCode = 5;
            break;
        case "LEAVE_ROOM_FAILED":
        case 6:
            message.failCode = 6;
            break;
        case "REGISTER_FAILED":
        case 7:
            message.failCode = 7;
            break;
        case "ROOM_NOT_FOUND":
        case 8:
            message.failCode = 8;
            break;
        case "CHARACTER_NOT_FOUND":
        case 9:
            message.failCode = 9;
            break;
        case "CHARACTER_STATE_ERROR":
        case 10:
            message.failCode = 10;
            break;
        case "CHARACTER_NO_CARD":
        case 11:
            message.failCode = 11;
            break;
        case "INVALID_ROOM_STATE":
        case 12:
            message.failCode = 12;
            break;
        case "NOT_ROOM_OWNER":
        case 13:
            message.failCode = 13;
            break;
        case "ALREADY_USED_BBANG":
        case 14:
            message.failCode = 14;
            break;
        case "INVALID_PHASE":
        case 15:
            message.failCode = 15;
            break;
        case "CHARACTER_CONTAINED":
        case 16:
            message.failCode = 16;
            break;
        }
        return message;
    };

    /**
     * Creates a plain object from a S2CCardSelectResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2CCardSelectResponse
     * @static
     * @param {S2CCardSelectResponse} message S2CCardSelectResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2CCardSelectResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.success = false;
            object.failCode = options.enums === String ? "NONE_FAILCODE" : 0;
        }
        if (message.success != null && message.hasOwnProperty("success"))
            object.success = message.success;
        if (message.failCode != null && message.hasOwnProperty("failCode"))
            object.failCode = options.enums === String ? $root.GlobalFailCode[message.failCode] === undefined ? message.failCode : $root.GlobalFailCode[message.failCode] : message.failCode;
        return object;
    };

    /**
     * Converts this S2CCardSelectResponse to JSON.
     * @function toJSON
     * @memberof S2CCardSelectResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2CCardSelectResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for S2CCardSelectResponse
     * @function getTypeUrl
     * @memberof S2CCardSelectResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    S2CCardSelectResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/S2CCardSelectResponse";
    };

    return S2CCardSelectResponse;
})();

$root.C2SPassDebuffRequest = (function() {

    /**
     * Properties of a C2SPassDebuffRequest.
     * @exports IC2SPassDebuffRequest
     * @interface IC2SPassDebuffRequest
     * @property {string|null} [targetUserId] C2SPassDebuffRequest targetUserId
     * @property {CardType|null} [debuffCardType] C2SPassDebuffRequest debuffCardType
     */

    /**
     * Constructs a new C2SPassDebuffRequest.
     * @exports C2SPassDebuffRequest
     * @classdesc Represents a C2SPassDebuffRequest.
     * @implements IC2SPassDebuffRequest
     * @constructor
     * @param {IC2SPassDebuffRequest=} [properties] Properties to set
     */
    function C2SPassDebuffRequest(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * C2SPassDebuffRequest targetUserId.
     * @member {string} targetUserId
     * @memberof C2SPassDebuffRequest
     * @instance
     */
    C2SPassDebuffRequest.prototype.targetUserId = "";

    /**
     * C2SPassDebuffRequest debuffCardType.
     * @member {CardType} debuffCardType
     * @memberof C2SPassDebuffRequest
     * @instance
     */
    C2SPassDebuffRequest.prototype.debuffCardType = 0;

    /**
     * Creates a new C2SPassDebuffRequest instance using the specified properties.
     * @function create
     * @memberof C2SPassDebuffRequest
     * @static
     * @param {IC2SPassDebuffRequest=} [properties] Properties to set
     * @returns {C2SPassDebuffRequest} C2SPassDebuffRequest instance
     */
    C2SPassDebuffRequest.create = function create(properties) {
        return new C2SPassDebuffRequest(properties);
    };

    /**
     * Encodes the specified C2SPassDebuffRequest message. Does not implicitly {@link C2SPassDebuffRequest.verify|verify} messages.
     * @function encode
     * @memberof C2SPassDebuffRequest
     * @static
     * @param {IC2SPassDebuffRequest} message C2SPassDebuffRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SPassDebuffRequest.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.targetUserId != null && Object.hasOwnProperty.call(message, "targetUserId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.targetUserId);
        if (message.debuffCardType != null && Object.hasOwnProperty.call(message, "debuffCardType"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.debuffCardType);
        return writer;
    };

    /**
     * Encodes the specified C2SPassDebuffRequest message, length delimited. Does not implicitly {@link C2SPassDebuffRequest.verify|verify} messages.
     * @function encodeDelimited
     * @memberof C2SPassDebuffRequest
     * @static
     * @param {IC2SPassDebuffRequest} message C2SPassDebuffRequest message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    C2SPassDebuffRequest.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a C2SPassDebuffRequest message from the specified reader or buffer.
     * @function decode
     * @memberof C2SPassDebuffRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {C2SPassDebuffRequest} C2SPassDebuffRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SPassDebuffRequest.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.C2SPassDebuffRequest();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.targetUserId = reader.string();
                    break;
                }
            case 2: {
                    message.debuffCardType = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a C2SPassDebuffRequest message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof C2SPassDebuffRequest
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {C2SPassDebuffRequest} C2SPassDebuffRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    C2SPassDebuffRequest.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a C2SPassDebuffRequest message.
     * @function verify
     * @memberof C2SPassDebuffRequest
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    C2SPassDebuffRequest.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.targetUserId != null && message.hasOwnProperty("targetUserId"))
            if (!$util.isString(message.targetUserId))
                return "targetUserId: string expected";
        if (message.debuffCardType != null && message.hasOwnProperty("debuffCardType"))
            switch (message.debuffCardType) {
            default:
                return "debuffCardType: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
            case 17:
            case 18:
            case 19:
            case 20:
            case 21:
            case 22:
            case 23:
                break;
            }
        return null;
    };

    /**
     * Creates a C2SPassDebuffRequest message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof C2SPassDebuffRequest
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {C2SPassDebuffRequest} C2SPassDebuffRequest
     */
    C2SPassDebuffRequest.fromObject = function fromObject(object) {
        if (object instanceof $root.C2SPassDebuffRequest)
            return object;
        var message = new $root.C2SPassDebuffRequest();
        if (object.targetUserId != null)
            message.targetUserId = String(object.targetUserId);
        switch (object.debuffCardType) {
        default:
            if (typeof object.debuffCardType === "number") {
                message.debuffCardType = object.debuffCardType;
                break;
            }
            break;
        case "NONE":
        case 0:
            message.debuffCardType = 0;
            break;
        case "BBANG":
        case 1:
            message.debuffCardType = 1;
            break;
        case "BIG_BBANG":
        case 2:
            message.debuffCardType = 2;
            break;
        case "SHIELD":
        case 3:
            message.debuffCardType = 3;
            break;
        case "VACCINE":
        case 4:
            message.debuffCardType = 4;
            break;
        case "CALL_119":
        case 5:
            message.debuffCardType = 5;
            break;
        case "DEATH_MATCH":
        case 6:
            message.debuffCardType = 6;
            break;
        case "GUERRILLA":
        case 7:
            message.debuffCardType = 7;
            break;
        case "ABSORB":
        case 8:
            message.debuffCardType = 8;
            break;
        case "HALLUCINATION":
        case 9:
            message.debuffCardType = 9;
            break;
        case "FLEA_MARKET":
        case 10:
            message.debuffCardType = 10;
            break;
        case "MATURED_SAVINGS":
        case 11:
            message.debuffCardType = 11;
            break;
        case "WIN_LOTTERY":
        case 12:
            message.debuffCardType = 12;
            break;
        case "SNIPER_GUN":
        case 13:
            message.debuffCardType = 13;
            break;
        case "HAND_GUN":
        case 14:
            message.debuffCardType = 14;
            break;
        case "DESERT_EAGLE":
        case 15:
            message.debuffCardType = 15;
            break;
        case "AUTO_RIFLE":
        case 16:
            message.debuffCardType = 16;
            break;
        case "LASER_POINTER":
        case 17:
            message.debuffCardType = 17;
            break;
        case "RADAR":
        case 18:
            message.debuffCardType = 18;
            break;
        case "AUTO_SHIELD":
        case 19:
            message.debuffCardType = 19;
            break;
        case "STEALTH_SUIT":
        case 20:
            message.debuffCardType = 20;
            break;
        case "CONTAINMENT_UNIT":
        case 21:
            message.debuffCardType = 21;
            break;
        case "SATELLITE_TARGET":
        case 22:
            message.debuffCardType = 22;
            break;
        case "BOMB":
        case 23:
            message.debuffCardType = 23;
            break;
        }
        return message;
    };

    /**
     * Creates a plain object from a C2SPassDebuffRequest message. Also converts values to other types if specified.
     * @function toObject
     * @memberof C2SPassDebuffRequest
     * @static
     * @param {C2SPassDebuffRequest} message C2SPassDebuffRequest
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    C2SPassDebuffRequest.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.targetUserId = "";
            object.debuffCardType = options.enums === String ? "NONE" : 0;
        }
        if (message.targetUserId != null && message.hasOwnProperty("targetUserId"))
            object.targetUserId = message.targetUserId;
        if (message.debuffCardType != null && message.hasOwnProperty("debuffCardType"))
            object.debuffCardType = options.enums === String ? $root.CardType[message.debuffCardType] === undefined ? message.debuffCardType : $root.CardType[message.debuffCardType] : message.debuffCardType;
        return object;
    };

    /**
     * Converts this C2SPassDebuffRequest to JSON.
     * @function toJSON
     * @memberof C2SPassDebuffRequest
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    C2SPassDebuffRequest.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for C2SPassDebuffRequest
     * @function getTypeUrl
     * @memberof C2SPassDebuffRequest
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    C2SPassDebuffRequest.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/C2SPassDebuffRequest";
    };

    return C2SPassDebuffRequest;
})();

$root.S2CPassDebuffResponse = (function() {

    /**
     * Properties of a S2CPassDebuffResponse.
     * @exports IS2CPassDebuffResponse
     * @interface IS2CPassDebuffResponse
     * @property {boolean|null} [success] S2CPassDebuffResponse success
     * @property {GlobalFailCode|null} [failCode] S2CPassDebuffResponse failCode
     */

    /**
     * Constructs a new S2CPassDebuffResponse.
     * @exports S2CPassDebuffResponse
     * @classdesc Represents a S2CPassDebuffResponse.
     * @implements IS2CPassDebuffResponse
     * @constructor
     * @param {IS2CPassDebuffResponse=} [properties] Properties to set
     */
    function S2CPassDebuffResponse(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2CPassDebuffResponse success.
     * @member {boolean} success
     * @memberof S2CPassDebuffResponse
     * @instance
     */
    S2CPassDebuffResponse.prototype.success = false;

    /**
     * S2CPassDebuffResponse failCode.
     * @member {GlobalFailCode} failCode
     * @memberof S2CPassDebuffResponse
     * @instance
     */
    S2CPassDebuffResponse.prototype.failCode = 0;

    /**
     * Creates a new S2CPassDebuffResponse instance using the specified properties.
     * @function create
     * @memberof S2CPassDebuffResponse
     * @static
     * @param {IS2CPassDebuffResponse=} [properties] Properties to set
     * @returns {S2CPassDebuffResponse} S2CPassDebuffResponse instance
     */
    S2CPassDebuffResponse.create = function create(properties) {
        return new S2CPassDebuffResponse(properties);
    };

    /**
     * Encodes the specified S2CPassDebuffResponse message. Does not implicitly {@link S2CPassDebuffResponse.verify|verify} messages.
     * @function encode
     * @memberof S2CPassDebuffResponse
     * @static
     * @param {IS2CPassDebuffResponse} message S2CPassDebuffResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CPassDebuffResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.success != null && Object.hasOwnProperty.call(message, "success"))
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
        if (message.failCode != null && Object.hasOwnProperty.call(message, "failCode"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.failCode);
        return writer;
    };

    /**
     * Encodes the specified S2CPassDebuffResponse message, length delimited. Does not implicitly {@link S2CPassDebuffResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2CPassDebuffResponse
     * @static
     * @param {IS2CPassDebuffResponse} message S2CPassDebuffResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CPassDebuffResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2CPassDebuffResponse message from the specified reader or buffer.
     * @function decode
     * @memberof S2CPassDebuffResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2CPassDebuffResponse} S2CPassDebuffResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CPassDebuffResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2CPassDebuffResponse();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.success = reader.bool();
                    break;
                }
            case 2: {
                    message.failCode = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2CPassDebuffResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2CPassDebuffResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2CPassDebuffResponse} S2CPassDebuffResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CPassDebuffResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2CPassDebuffResponse message.
     * @function verify
     * @memberof S2CPassDebuffResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2CPassDebuffResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.success != null && message.hasOwnProperty("success"))
            if (typeof message.success !== "boolean")
                return "success: boolean expected";
        if (message.failCode != null && message.hasOwnProperty("failCode"))
            switch (message.failCode) {
            default:
                return "failCode: enum value expected";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
            case 15:
            case 16:
                break;
            }
        return null;
    };

    /**
     * Creates a S2CPassDebuffResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2CPassDebuffResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2CPassDebuffResponse} S2CPassDebuffResponse
     */
    S2CPassDebuffResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.S2CPassDebuffResponse)
            return object;
        var message = new $root.S2CPassDebuffResponse();
        if (object.success != null)
            message.success = Boolean(object.success);
        switch (object.failCode) {
        default:
            if (typeof object.failCode === "number") {
                message.failCode = object.failCode;
                break;
            }
            break;
        case "NONE_FAILCODE":
        case 0:
            message.failCode = 0;
            break;
        case "UNKNOWN_ERROR":
        case 1:
            message.failCode = 1;
            break;
        case "INVALID_REQUEST":
        case 2:
            message.failCode = 2;
            break;
        case "AUTHENTICATION_FAILED":
        case 3:
            message.failCode = 3;
            break;
        case "CREATE_ROOM_FAILED":
        case 4:
            message.failCode = 4;
            break;
        case "JOIN_ROOM_FAILED":
        case 5:
            message.failCode = 5;
            break;
        case "LEAVE_ROOM_FAILED":
        case 6:
            message.failCode = 6;
            break;
        case "REGISTER_FAILED":
        case 7:
            message.failCode = 7;
            break;
        case "ROOM_NOT_FOUND":
        case 8:
            message.failCode = 8;
            break;
        case "CHARACTER_NOT_FOUND":
        case 9:
            message.failCode = 9;
            break;
        case "CHARACTER_STATE_ERROR":
        case 10:
            message.failCode = 10;
            break;
        case "CHARACTER_NO_CARD":
        case 11:
            message.failCode = 11;
            break;
        case "INVALID_ROOM_STATE":
        case 12:
            message.failCode = 12;
            break;
        case "NOT_ROOM_OWNER":
        case 13:
            message.failCode = 13;
            break;
        case "ALREADY_USED_BBANG":
        case 14:
            message.failCode = 14;
            break;
        case "INVALID_PHASE":
        case 15:
            message.failCode = 15;
            break;
        case "CHARACTER_CONTAINED":
        case 16:
            message.failCode = 16;
            break;
        }
        return message;
    };

    /**
     * Creates a plain object from a S2CPassDebuffResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2CPassDebuffResponse
     * @static
     * @param {S2CPassDebuffResponse} message S2CPassDebuffResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2CPassDebuffResponse.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.success = false;
            object.failCode = options.enums === String ? "NONE_FAILCODE" : 0;
        }
        if (message.success != null && message.hasOwnProperty("success"))
            object.success = message.success;
        if (message.failCode != null && message.hasOwnProperty("failCode"))
            object.failCode = options.enums === String ? $root.GlobalFailCode[message.failCode] === undefined ? message.failCode : $root.GlobalFailCode[message.failCode] : message.failCode;
        return object;
    };

    /**
     * Converts this S2CPassDebuffResponse to JSON.
     * @function toJSON
     * @memberof S2CPassDebuffResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2CPassDebuffResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for S2CPassDebuffResponse
     * @function getTypeUrl
     * @memberof S2CPassDebuffResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    S2CPassDebuffResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/S2CPassDebuffResponse";
    };

    return S2CPassDebuffResponse;
})();

$root.S2CWarningNotification = (function() {

    /**
     * Properties of a S2CWarningNotification.
     * @exports IS2CWarningNotification
     * @interface IS2CWarningNotification
     * @property {WarningType|null} [warningType] S2CWarningNotification warningType
     * @property {number|Long|null} [expectedAt] S2CWarningNotification expectedAt
     */

    /**
     * Constructs a new S2CWarningNotification.
     * @exports S2CWarningNotification
     * @classdesc Represents a S2CWarningNotification.
     * @implements IS2CWarningNotification
     * @constructor
     * @param {IS2CWarningNotification=} [properties] Properties to set
     */
    function S2CWarningNotification(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2CWarningNotification warningType.
     * @member {WarningType} warningType
     * @memberof S2CWarningNotification
     * @instance
     */
    S2CWarningNotification.prototype.warningType = 0;

    /**
     * S2CWarningNotification expectedAt.
     * @member {number|Long} expectedAt
     * @memberof S2CWarningNotification
     * @instance
     */
    S2CWarningNotification.prototype.expectedAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new S2CWarningNotification instance using the specified properties.
     * @function create
     * @memberof S2CWarningNotification
     * @static
     * @param {IS2CWarningNotification=} [properties] Properties to set
     * @returns {S2CWarningNotification} S2CWarningNotification instance
     */
    S2CWarningNotification.create = function create(properties) {
        return new S2CWarningNotification(properties);
    };

    /**
     * Encodes the specified S2CWarningNotification message. Does not implicitly {@link S2CWarningNotification.verify|verify} messages.
     * @function encode
     * @memberof S2CWarningNotification
     * @static
     * @param {IS2CWarningNotification} message S2CWarningNotification message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CWarningNotification.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.warningType != null && Object.hasOwnProperty.call(message, "warningType"))
            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.warningType);
        if (message.expectedAt != null && Object.hasOwnProperty.call(message, "expectedAt"))
            writer.uint32(/* id 2, wireType 0 =*/16).int64(message.expectedAt);
        return writer;
    };

    /**
     * Encodes the specified S2CWarningNotification message, length delimited. Does not implicitly {@link S2CWarningNotification.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2CWarningNotification
     * @static
     * @param {IS2CWarningNotification} message S2CWarningNotification message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CWarningNotification.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2CWarningNotification message from the specified reader or buffer.
     * @function decode
     * @memberof S2CWarningNotification
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2CWarningNotification} S2CWarningNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CWarningNotification.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2CWarningNotification();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.warningType = reader.int32();
                    break;
                }
            case 2: {
                    message.expectedAt = reader.int64();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2CWarningNotification message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2CWarningNotification
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2CWarningNotification} S2CWarningNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CWarningNotification.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2CWarningNotification message.
     * @function verify
     * @memberof S2CWarningNotification
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2CWarningNotification.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.warningType != null && message.hasOwnProperty("warningType"))
            switch (message.warningType) {
            default:
                return "warningType: enum value expected";
            case 0:
            case 1:
                break;
            }
        if (message.expectedAt != null && message.hasOwnProperty("expectedAt"))
            if (!$util.isInteger(message.expectedAt) && !(message.expectedAt && $util.isInteger(message.expectedAt.low) && $util.isInteger(message.expectedAt.high)))
                return "expectedAt: integer|Long expected";
        return null;
    };

    /**
     * Creates a S2CWarningNotification message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2CWarningNotification
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2CWarningNotification} S2CWarningNotification
     */
    S2CWarningNotification.fromObject = function fromObject(object) {
        if (object instanceof $root.S2CWarningNotification)
            return object;
        var message = new $root.S2CWarningNotification();
        switch (object.warningType) {
        default:
            if (typeof object.warningType === "number") {
                message.warningType = object.warningType;
                break;
            }
            break;
        case "NO_WARNING":
        case 0:
            message.warningType = 0;
            break;
        case "BOMB_WANING":
        case 1:
            message.warningType = 1;
            break;
        }
        if (object.expectedAt != null)
            if ($util.Long)
                (message.expectedAt = $util.Long.fromValue(object.expectedAt)).unsigned = false;
            else if (typeof object.expectedAt === "string")
                message.expectedAt = parseInt(object.expectedAt, 10);
            else if (typeof object.expectedAt === "number")
                message.expectedAt = object.expectedAt;
            else if (typeof object.expectedAt === "object")
                message.expectedAt = new $util.LongBits(object.expectedAt.low >>> 0, object.expectedAt.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a S2CWarningNotification message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2CWarningNotification
     * @static
     * @param {S2CWarningNotification} message S2CWarningNotification
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2CWarningNotification.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.warningType = options.enums === String ? "NO_WARNING" : 0;
            if ($util.Long) {
                var long = new $util.Long(0, 0, false);
                object.expectedAt = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.expectedAt = options.longs === String ? "0" : 0;
        }
        if (message.warningType != null && message.hasOwnProperty("warningType"))
            object.warningType = options.enums === String ? $root.WarningType[message.warningType] === undefined ? message.warningType : $root.WarningType[message.warningType] : message.warningType;
        if (message.expectedAt != null && message.hasOwnProperty("expectedAt"))
            if (typeof message.expectedAt === "number")
                object.expectedAt = options.longs === String ? String(message.expectedAt) : message.expectedAt;
            else
                object.expectedAt = options.longs === String ? $util.Long.prototype.toString.call(message.expectedAt) : options.longs === Number ? new $util.LongBits(message.expectedAt.low >>> 0, message.expectedAt.high >>> 0).toNumber() : message.expectedAt;
        return object;
    };

    /**
     * Converts this S2CWarningNotification to JSON.
     * @function toJSON
     * @memberof S2CWarningNotification
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2CWarningNotification.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for S2CWarningNotification
     * @function getTypeUrl
     * @memberof S2CWarningNotification
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    S2CWarningNotification.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/S2CWarningNotification";
    };

    return S2CWarningNotification;
})();

$root.S2CAnimationNotification = (function() {

    /**
     * Properties of a S2CAnimationNotification.
     * @exports IS2CAnimationNotification
     * @interface IS2CAnimationNotification
     * @property {string|null} [userId] S2CAnimationNotification userId
     * @property {AnimationType|null} [animationType] S2CAnimationNotification animationType
     */

    /**
     * Constructs a new S2CAnimationNotification.
     * @exports S2CAnimationNotification
     * @classdesc Represents a S2CAnimationNotification.
     * @implements IS2CAnimationNotification
     * @constructor
     * @param {IS2CAnimationNotification=} [properties] Properties to set
     */
    function S2CAnimationNotification(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * S2CAnimationNotification userId.
     * @member {string} userId
     * @memberof S2CAnimationNotification
     * @instance
     */
    S2CAnimationNotification.prototype.userId = "";

    /**
     * S2CAnimationNotification animationType.
     * @member {AnimationType} animationType
     * @memberof S2CAnimationNotification
     * @instance
     */
    S2CAnimationNotification.prototype.animationType = 0;

    /**
     * Creates a new S2CAnimationNotification instance using the specified properties.
     * @function create
     * @memberof S2CAnimationNotification
     * @static
     * @param {IS2CAnimationNotification=} [properties] Properties to set
     * @returns {S2CAnimationNotification} S2CAnimationNotification instance
     */
    S2CAnimationNotification.create = function create(properties) {
        return new S2CAnimationNotification(properties);
    };

    /**
     * Encodes the specified S2CAnimationNotification message. Does not implicitly {@link S2CAnimationNotification.verify|verify} messages.
     * @function encode
     * @memberof S2CAnimationNotification
     * @static
     * @param {IS2CAnimationNotification} message S2CAnimationNotification message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CAnimationNotification.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.userId != null && Object.hasOwnProperty.call(message, "userId"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.userId);
        if (message.animationType != null && Object.hasOwnProperty.call(message, "animationType"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.animationType);
        return writer;
    };

    /**
     * Encodes the specified S2CAnimationNotification message, length delimited. Does not implicitly {@link S2CAnimationNotification.verify|verify} messages.
     * @function encodeDelimited
     * @memberof S2CAnimationNotification
     * @static
     * @param {IS2CAnimationNotification} message S2CAnimationNotification message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    S2CAnimationNotification.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a S2CAnimationNotification message from the specified reader or buffer.
     * @function decode
     * @memberof S2CAnimationNotification
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {S2CAnimationNotification} S2CAnimationNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CAnimationNotification.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.S2CAnimationNotification();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.userId = reader.string();
                    break;
                }
            case 2: {
                    message.animationType = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a S2CAnimationNotification message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof S2CAnimationNotification
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {S2CAnimationNotification} S2CAnimationNotification
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    S2CAnimationNotification.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a S2CAnimationNotification message.
     * @function verify
     * @memberof S2CAnimationNotification
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    S2CAnimationNotification.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.userId != null && message.hasOwnProperty("userId"))
            if (!$util.isString(message.userId))
                return "userId: string expected";
        if (message.animationType != null && message.hasOwnProperty("animationType"))
            switch (message.animationType) {
            default:
                return "animationType: enum value expected";
            case 0:
            case 1:
            case 2:
                break;
            }
        return null;
    };

    /**
     * Creates a S2CAnimationNotification message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof S2CAnimationNotification
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {S2CAnimationNotification} S2CAnimationNotification
     */
    S2CAnimationNotification.fromObject = function fromObject(object) {
        if (object instanceof $root.S2CAnimationNotification)
            return object;
        var message = new $root.S2CAnimationNotification();
        if (object.userId != null)
            message.userId = String(object.userId);
        switch (object.animationType) {
        default:
            if (typeof object.animationType === "number") {
                message.animationType = object.animationType;
                break;
            }
            break;
        case "NO_ANIMATION":
        case 0:
            message.animationType = 0;
            break;
        case "SATELLITE_TARGET_ANIMATION":
        case 1:
            message.animationType = 1;
            break;
        case "BOMB_ANIMATION":
        case 2:
            message.animationType = 2;
            break;
        }
        return message;
    };

    /**
     * Creates a plain object from a S2CAnimationNotification message. Also converts values to other types if specified.
     * @function toObject
     * @memberof S2CAnimationNotification
     * @static
     * @param {S2CAnimationNotification} message S2CAnimationNotification
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    S2CAnimationNotification.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (options.defaults) {
            object.userId = "";
            object.animationType = options.enums === String ? "NO_ANIMATION" : 0;
        }
        if (message.userId != null && message.hasOwnProperty("userId"))
            object.userId = message.userId;
        if (message.animationType != null && message.hasOwnProperty("animationType"))
            object.animationType = options.enums === String ? $root.AnimationType[message.animationType] === undefined ? message.animationType : $root.AnimationType[message.animationType] : message.animationType;
        return object;
    };

    /**
     * Converts this S2CAnimationNotification to JSON.
     * @function toJSON
     * @memberof S2CAnimationNotification
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    S2CAnimationNotification.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for S2CAnimationNotification
     * @function getTypeUrl
     * @memberof S2CAnimationNotification
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    S2CAnimationNotification.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/S2CAnimationNotification";
    };

    return S2CAnimationNotification;
})();

$root.GamePacket = (function() {

    /**
     * Properties of a GamePacket.
     * @exports IGamePacket
     * @interface IGamePacket
     * @property {IC2SRegisterRequest|null} [registerRequest] GamePacket registerRequest
     * @property {IS2CRegisterResponse|null} [registerResponse] GamePacket registerResponse
     * @property {IC2SLoginRequest|null} [loginRequest] GamePacket loginRequest
     * @property {IS2CLoginResponse|null} [loginResponse] GamePacket loginResponse
     * @property {IC2SCreateRoomRequest|null} [createRoomRequest] GamePacket createRoomRequest
     * @property {IS2CCreateRoomResponse|null} [createRoomResponse] GamePacket createRoomResponse
     * @property {IC2SGetRoomListRequest|null} [getRoomListRequest] GamePacket getRoomListRequest
     * @property {IS2CGetRoomListResponse|null} [getRoomListResponse] GamePacket getRoomListResponse
     * @property {IC2SJoinRoomRequest|null} [joinRoomRequest] GamePacket joinRoomRequest
     * @property {IS2CJoinRoomResponse|null} [joinRoomResponse] GamePacket joinRoomResponse
     * @property {IC2SJoinRandomRoomRequest|null} [joinRandomRoomRequest] GamePacket joinRandomRoomRequest
     * @property {IS2CJoinRandomRoomResponse|null} [joinRandomRoomResponse] GamePacket joinRandomRoomResponse
     * @property {IS2CJoinRoomNotification|null} [joinRoomNotification] GamePacket joinRoomNotification
     * @property {IC2SLeaveRoomRequest|null} [leaveRoomRequest] GamePacket leaveRoomRequest
     * @property {IS2CLeaveRoomResponse|null} [leaveRoomResponse] GamePacket leaveRoomResponse
     * @property {IS2CLeaveRoomNotification|null} [leaveRoomNotification] GamePacket leaveRoomNotification
     * @property {IC2SGamePrepareRequest|null} [gamePrepareRequest] GamePacket gamePrepareRequest
     * @property {IS2CGamePrepareResponse|null} [gamePrepareResponse] GamePacket gamePrepareResponse
     * @property {IS2CGamePrepareNotification|null} [gamePrepareNotification] GamePacket gamePrepareNotification
     * @property {IC2SGameStartRequest|null} [gameStartRequest] GamePacket gameStartRequest
     * @property {IS2CGameStartResponse|null} [gameStartResponse] GamePacket gameStartResponse
     * @property {IS2CGameStartNotification|null} [gameStartNotification] GamePacket gameStartNotification
     * @property {IC2SPositionUpdateRequest|null} [positionUpdateRequest] GamePacket positionUpdateRequest
     * @property {IS2CPositionUpdateResponse|null} [positionUpdateResponse] GamePacket positionUpdateResponse
     * @property {IS2CPositionUpdateNotification|null} [positionUpdateNotification] GamePacket positionUpdateNotification
     * @property {IC2SUseCardRequest|null} [useCardRequest] GamePacket useCardRequest
     * @property {IS2CUseCardResponse|null} [useCardResponse] GamePacket useCardResponse
     * @property {IS2CUseCardNotification|null} [useCardNotification] GamePacket useCardNotification
     * @property {IS2CEquipCardNotification|null} [equipCardNotification] GamePacket equipCardNotification
     * @property {IS2CCardEffectNotification|null} [cardEffectNotification] GamePacket cardEffectNotification
     * @property {IS2CFleaMarketNotification|null} [fleaMarketNotification] GamePacket fleaMarketNotification
     * @property {IC2SFleaMarketPickRequest|null} [fleaMarketPickRequest] GamePacket fleaMarketPickRequest
     * @property {IS2CFleaMarketPickResponse|null} [fleaMarketPickResponse] GamePacket fleaMarketPickResponse
     * @property {IS2CUserUpdateNotification|null} [userUpdateNotification] GamePacket userUpdateNotification
     * @property {IS2CPhaseUpdateNotification|null} [phaseUpdateNotification] GamePacket phaseUpdateNotification
     * @property {IC2SReactionRequest|null} [reactionRequest] GamePacket reactionRequest
     * @property {IS2CReactionResponse|null} [reactionResponse] GamePacket reactionResponse
     * @property {IC2SDestroyCardRequest|null} [destroyCardRequest] GamePacket destroyCardRequest
     * @property {IS2CDestroyCardResponse|null} [destroyCardResponse] GamePacket destroyCardResponse
     * @property {IS2CGameEndNotification|null} [gameEndNotification] GamePacket gameEndNotification
     * @property {IC2SCardSelectRequest|null} [cardSelectRequest] GamePacket cardSelectRequest
     * @property {IS2CCardSelectResponse|null} [cardSelectResponse] GamePacket cardSelectResponse
     * @property {IC2SPassDebuffRequest|null} [passDebuffRequest] GamePacket passDebuffRequest
     * @property {IS2CPassDebuffResponse|null} [passDebuffResponse] GamePacket passDebuffResponse
     * @property {IS2CWarningNotification|null} [warningNotification] GamePacket warningNotification
     * @property {IS2CAnimationNotification|null} [animationNotification] GamePacket animationNotification
     */

    /**
     * Constructs a new GamePacket.
     * @exports GamePacket
     * @classdesc Represents a GamePacket.
     * @implements IGamePacket
     * @constructor
     * @param {IGamePacket=} [properties] Properties to set
     */
    function GamePacket(properties) {
        if (properties)
            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * GamePacket registerRequest.
     * @member {IC2SRegisterRequest|null|undefined} registerRequest
     * @memberof GamePacket
     * @instance
     */
    GamePacket.prototype.registerRequest = null;

    /**
     * GamePacket registerResponse.
     * @member {IS2CRegisterResponse|null|undefined} registerResponse
     * @memberof GamePacket
     * @instance
     */
    GamePacket.prototype.registerResponse = null;

    /**
     * GamePacket loginRequest.
     * @member {IC2SLoginRequest|null|undefined} loginRequest
     * @memberof GamePacket
     * @instance
     */
    GamePacket.prototype.loginRequest = null;

    /**
     * GamePacket loginResponse.
     * @member {IS2CLoginResponse|null|undefined} loginResponse
     * @memberof GamePacket
     * @instance
     */
    GamePacket.prototype.loginResponse = null;

    /**
     * GamePacket createRoomRequest.
     * @member {IC2SCreateRoomRequest|null|undefined} createRoomRequest
     * @memberof GamePacket
     * @instance
     */
    GamePacket.prototype.createRoomRequest = null;

    /**
     * GamePacket createRoomResponse.
     * @member {IS2CCreateRoomResponse|null|undefined} createRoomResponse
     * @memberof GamePacket
     * @instance
     */
    GamePacket.prototype.createRoomResponse = null;

    /**
     * GamePacket getRoomListRequest.
     * @member {IC2SGetRoomListRequest|null|undefined} getRoomListRequest
     * @memberof GamePacket
     * @instance
     */
    GamePacket.prototype.getRoomListRequest = null;

    /**
     * GamePacket getRoomListResponse.
     * @member {IS2CGetRoomListResponse|null|undefined} getRoomListResponse
     * @memberof GamePacket
     * @instance
     */
    GamePacket.prototype.getRoomListResponse = null;

    /**
     * GamePacket joinRoomRequest.
     * @member {IC2SJoinRoomRequest|null|undefined} joinRoomRequest
     * @memberof GamePacket
     * @instance
     */
    GamePacket.prototype.joinRoomRequest = null;

    /**
     * GamePacket joinRoomResponse.
     * @member {IS2CJoinRoomResponse|null|undefined} joinRoomResponse
     * @memberof GamePacket
     * @instance
     */
    GamePacket.prototype.joinRoomResponse = null;

    /**
     * GamePacket joinRandomRoomRequest.
     * @member {IC2SJoinRandomRoomRequest|null|undefined} joinRandomRoomRequest
     * @memberof GamePacket
     * @instance
     */
    GamePacket.prototype.joinRandomRoomRequest = null;

    /**
     * GamePacket joinRandomRoomResponse.
     * @member {IS2CJoinRandomRoomResponse|null|undefined} joinRandomRoomResponse
     * @memberof GamePacket
     * @instance
     */
    GamePacket.prototype.joinRandomRoomResponse = null;

    /**
     * GamePacket joinRoomNotification.
     * @member {IS2CJoinRoomNotification|null|undefined} joinRoomNotification
     * @memberof GamePacket
     * @instance
     */
    GamePacket.prototype.joinRoomNotification = null;

    /**
     * GamePacket leaveRoomRequest.
     * @member {IC2SLeaveRoomRequest|null|undefined} leaveRoomRequest
     * @memberof GamePacket
     * @instance
     */
    GamePacket.prototype.leaveRoomRequest = null;

    /**
     * GamePacket leaveRoomResponse.
     * @member {IS2CLeaveRoomResponse|null|undefined} leaveRoomResponse
     * @memberof GamePacket
     * @instance
     */
    GamePacket.prototype.leaveRoomResponse = null;

    /**
     * GamePacket leaveRoomNotification.
     * @member {IS2CLeaveRoomNotification|null|undefined} leaveRoomNotification
     * @memberof GamePacket
     * @instance
     */
    GamePacket.prototype.leaveRoomNotification = null;

    /**
     * GamePacket gamePrepareRequest.
     * @member {IC2SGamePrepareRequest|null|undefined} gamePrepareRequest
     * @memberof GamePacket
     * @instance
     */
    GamePacket.prototype.gamePrepareRequest = null;

    /**
     * GamePacket gamePrepareResponse.
     * @member {IS2CGamePrepareResponse|null|undefined} gamePrepareResponse
     * @memberof GamePacket
     * @instance
     */
    GamePacket.prototype.gamePrepareResponse = null;

    /**
     * GamePacket gamePrepareNotification.
     * @member {IS2CGamePrepareNotification|null|undefined} gamePrepareNotification
     * @memberof GamePacket
     * @instance
     */
    GamePacket.prototype.gamePrepareNotification = null;

    /**
     * GamePacket gameStartRequest.
     * @member {IC2SGameStartRequest|null|undefined} gameStartRequest
     * @memberof GamePacket
     * @instance
     */
    GamePacket.prototype.gameStartRequest = null;

    /**
     * GamePacket gameStartResponse.
     * @member {IS2CGameStartResponse|null|undefined} gameStartResponse
     * @memberof GamePacket
     * @instance
     */
    GamePacket.prototype.gameStartResponse = null;

    /**
     * GamePacket gameStartNotification.
     * @member {IS2CGameStartNotification|null|undefined} gameStartNotification
     * @memberof GamePacket
     * @instance
     */
    GamePacket.prototype.gameStartNotification = null;

    /**
     * GamePacket positionUpdateRequest.
     * @member {IC2SPositionUpdateRequest|null|undefined} positionUpdateRequest
     * @memberof GamePacket
     * @instance
     */
    GamePacket.prototype.positionUpdateRequest = null;

    /**
     * GamePacket positionUpdateResponse.
     * @member {IS2CPositionUpdateResponse|null|undefined} positionUpdateResponse
     * @memberof GamePacket
     * @instance
     */
    GamePacket.prototype.positionUpdateResponse = null;

    /**
     * GamePacket positionUpdateNotification.
     * @member {IS2CPositionUpdateNotification|null|undefined} positionUpdateNotification
     * @memberof GamePacket
     * @instance
     */
    GamePacket.prototype.positionUpdateNotification = null;

    /**
     * GamePacket useCardRequest.
     * @member {IC2SUseCardRequest|null|undefined} useCardRequest
     * @memberof GamePacket
     * @instance
     */
    GamePacket.prototype.useCardRequest = null;

    /**
     * GamePacket useCardResponse.
     * @member {IS2CUseCardResponse|null|undefined} useCardResponse
     * @memberof GamePacket
     * @instance
     */
    GamePacket.prototype.useCardResponse = null;

    /**
     * GamePacket useCardNotification.
     * @member {IS2CUseCardNotification|null|undefined} useCardNotification
     * @memberof GamePacket
     * @instance
     */
    GamePacket.prototype.useCardNotification = null;

    /**
     * GamePacket equipCardNotification.
     * @member {IS2CEquipCardNotification|null|undefined} equipCardNotification
     * @memberof GamePacket
     * @instance
     */
    GamePacket.prototype.equipCardNotification = null;

    /**
     * GamePacket cardEffectNotification.
     * @member {IS2CCardEffectNotification|null|undefined} cardEffectNotification
     * @memberof GamePacket
     * @instance
     */
    GamePacket.prototype.cardEffectNotification = null;

    /**
     * GamePacket fleaMarketNotification.
     * @member {IS2CFleaMarketNotification|null|undefined} fleaMarketNotification
     * @memberof GamePacket
     * @instance
     */
    GamePacket.prototype.fleaMarketNotification = null;

    /**
     * GamePacket fleaMarketPickRequest.
     * @member {IC2SFleaMarketPickRequest|null|undefined} fleaMarketPickRequest
     * @memberof GamePacket
     * @instance
     */
    GamePacket.prototype.fleaMarketPickRequest = null;

    /**
     * GamePacket fleaMarketPickResponse.
     * @member {IS2CFleaMarketPickResponse|null|undefined} fleaMarketPickResponse
     * @memberof GamePacket
     * @instance
     */
    GamePacket.prototype.fleaMarketPickResponse = null;

    /**
     * GamePacket userUpdateNotification.
     * @member {IS2CUserUpdateNotification|null|undefined} userUpdateNotification
     * @memberof GamePacket
     * @instance
     */
    GamePacket.prototype.userUpdateNotification = null;

    /**
     * GamePacket phaseUpdateNotification.
     * @member {IS2CPhaseUpdateNotification|null|undefined} phaseUpdateNotification
     * @memberof GamePacket
     * @instance
     */
    GamePacket.prototype.phaseUpdateNotification = null;

    /**
     * GamePacket reactionRequest.
     * @member {IC2SReactionRequest|null|undefined} reactionRequest
     * @memberof GamePacket
     * @instance
     */
    GamePacket.prototype.reactionRequest = null;

    /**
     * GamePacket reactionResponse.
     * @member {IS2CReactionResponse|null|undefined} reactionResponse
     * @memberof GamePacket
     * @instance
     */
    GamePacket.prototype.reactionResponse = null;

    /**
     * GamePacket destroyCardRequest.
     * @member {IC2SDestroyCardRequest|null|undefined} destroyCardRequest
     * @memberof GamePacket
     * @instance
     */
    GamePacket.prototype.destroyCardRequest = null;

    /**
     * GamePacket destroyCardResponse.
     * @member {IS2CDestroyCardResponse|null|undefined} destroyCardResponse
     * @memberof GamePacket
     * @instance
     */
    GamePacket.prototype.destroyCardResponse = null;

    /**
     * GamePacket gameEndNotification.
     * @member {IS2CGameEndNotification|null|undefined} gameEndNotification
     * @memberof GamePacket
     * @instance
     */
    GamePacket.prototype.gameEndNotification = null;

    /**
     * GamePacket cardSelectRequest.
     * @member {IC2SCardSelectRequest|null|undefined} cardSelectRequest
     * @memberof GamePacket
     * @instance
     */
    GamePacket.prototype.cardSelectRequest = null;

    /**
     * GamePacket cardSelectResponse.
     * @member {IS2CCardSelectResponse|null|undefined} cardSelectResponse
     * @memberof GamePacket
     * @instance
     */
    GamePacket.prototype.cardSelectResponse = null;

    /**
     * GamePacket passDebuffRequest.
     * @member {IC2SPassDebuffRequest|null|undefined} passDebuffRequest
     * @memberof GamePacket
     * @instance
     */
    GamePacket.prototype.passDebuffRequest = null;

    /**
     * GamePacket passDebuffResponse.
     * @member {IS2CPassDebuffResponse|null|undefined} passDebuffResponse
     * @memberof GamePacket
     * @instance
     */
    GamePacket.prototype.passDebuffResponse = null;

    /**
     * GamePacket warningNotification.
     * @member {IS2CWarningNotification|null|undefined} warningNotification
     * @memberof GamePacket
     * @instance
     */
    GamePacket.prototype.warningNotification = null;

    /**
     * GamePacket animationNotification.
     * @member {IS2CAnimationNotification|null|undefined} animationNotification
     * @memberof GamePacket
     * @instance
     */
    GamePacket.prototype.animationNotification = null;

    // OneOf field names bound to virtual getters and setters
    var $oneOfFields;

    /**
     * GamePacket payload.
     * @member {"registerRequest"|"registerResponse"|"loginRequest"|"loginResponse"|"createRoomRequest"|"createRoomResponse"|"getRoomListRequest"|"getRoomListResponse"|"joinRoomRequest"|"joinRoomResponse"|"joinRandomRoomRequest"|"joinRandomRoomResponse"|"joinRoomNotification"|"leaveRoomRequest"|"leaveRoomResponse"|"leaveRoomNotification"|"gamePrepareRequest"|"gamePrepareResponse"|"gamePrepareNotification"|"gameStartRequest"|"gameStartResponse"|"gameStartNotification"|"positionUpdateRequest"|"positionUpdateResponse"|"positionUpdateNotification"|"useCardRequest"|"useCardResponse"|"useCardNotification"|"equipCardNotification"|"cardEffectNotification"|"fleaMarketNotification"|"fleaMarketPickRequest"|"fleaMarketPickResponse"|"userUpdateNotification"|"phaseUpdateNotification"|"reactionRequest"|"reactionResponse"|"destroyCardRequest"|"destroyCardResponse"|"gameEndNotification"|"cardSelectRequest"|"cardSelectResponse"|"passDebuffRequest"|"passDebuffResponse"|"warningNotification"|"animationNotification"|undefined} payload
     * @memberof GamePacket
     * @instance
     */
    Object.defineProperty(GamePacket.prototype, "payload", {
        get: $util.oneOfGetter($oneOfFields = ["registerRequest", "registerResponse", "loginRequest", "loginResponse", "createRoomRequest", "createRoomResponse", "getRoomListRequest", "getRoomListResponse", "joinRoomRequest", "joinRoomResponse", "joinRandomRoomRequest", "joinRandomRoomResponse", "joinRoomNotification", "leaveRoomRequest", "leaveRoomResponse", "leaveRoomNotification", "gamePrepareRequest", "gamePrepareResponse", "gamePrepareNotification", "gameStartRequest", "gameStartResponse", "gameStartNotification", "positionUpdateRequest", "positionUpdateResponse", "positionUpdateNotification", "useCardRequest", "useCardResponse", "useCardNotification", "equipCardNotification", "cardEffectNotification", "fleaMarketNotification", "fleaMarketPickRequest", "fleaMarketPickResponse", "userUpdateNotification", "phaseUpdateNotification", "reactionRequest", "reactionResponse", "destroyCardRequest", "destroyCardResponse", "gameEndNotification", "cardSelectRequest", "cardSelectResponse", "passDebuffRequest", "passDebuffResponse", "warningNotification", "animationNotification"]),
        set: $util.oneOfSetter($oneOfFields)
    });

    /**
     * Creates a new GamePacket instance using the specified properties.
     * @function create
     * @memberof GamePacket
     * @static
     * @param {IGamePacket=} [properties] Properties to set
     * @returns {GamePacket} GamePacket instance
     */
    GamePacket.create = function create(properties) {
        return new GamePacket(properties);
    };

    /**
     * Encodes the specified GamePacket message. Does not implicitly {@link GamePacket.verify|verify} messages.
     * @function encode
     * @memberof GamePacket
     * @static
     * @param {IGamePacket} message GamePacket message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamePacket.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.registerRequest != null && Object.hasOwnProperty.call(message, "registerRequest"))
            $root.C2SRegisterRequest.encode(message.registerRequest, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
        if (message.registerResponse != null && Object.hasOwnProperty.call(message, "registerResponse"))
            $root.S2CRegisterResponse.encode(message.registerResponse, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        if (message.loginRequest != null && Object.hasOwnProperty.call(message, "loginRequest"))
            $root.C2SLoginRequest.encode(message.loginRequest, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
        if (message.loginResponse != null && Object.hasOwnProperty.call(message, "loginResponse"))
            $root.S2CLoginResponse.encode(message.loginResponse, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
        if (message.createRoomRequest != null && Object.hasOwnProperty.call(message, "createRoomRequest"))
            $root.C2SCreateRoomRequest.encode(message.createRoomRequest, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
        if (message.createRoomResponse != null && Object.hasOwnProperty.call(message, "createRoomResponse"))
            $root.S2CCreateRoomResponse.encode(message.createRoomResponse, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
        if (message.getRoomListRequest != null && Object.hasOwnProperty.call(message, "getRoomListRequest"))
            $root.C2SGetRoomListRequest.encode(message.getRoomListRequest, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
        if (message.getRoomListResponse != null && Object.hasOwnProperty.call(message, "getRoomListResponse"))
            $root.S2CGetRoomListResponse.encode(message.getRoomListResponse, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
        if (message.joinRoomRequest != null && Object.hasOwnProperty.call(message, "joinRoomRequest"))
            $root.C2SJoinRoomRequest.encode(message.joinRoomRequest, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
        if (message.joinRoomResponse != null && Object.hasOwnProperty.call(message, "joinRoomResponse"))
            $root.S2CJoinRoomResponse.encode(message.joinRoomResponse, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
        if (message.joinRandomRoomRequest != null && Object.hasOwnProperty.call(message, "joinRandomRoomRequest"))
            $root.C2SJoinRandomRoomRequest.encode(message.joinRandomRoomRequest, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
        if (message.joinRandomRoomResponse != null && Object.hasOwnProperty.call(message, "joinRandomRoomResponse"))
            $root.S2CJoinRandomRoomResponse.encode(message.joinRandomRoomResponse, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
        if (message.joinRoomNotification != null && Object.hasOwnProperty.call(message, "joinRoomNotification"))
            $root.S2CJoinRoomNotification.encode(message.joinRoomNotification, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
        if (message.leaveRoomRequest != null && Object.hasOwnProperty.call(message, "leaveRoomRequest"))
            $root.C2SLeaveRoomRequest.encode(message.leaveRoomRequest, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
        if (message.leaveRoomResponse != null && Object.hasOwnProperty.call(message, "leaveRoomResponse"))
            $root.S2CLeaveRoomResponse.encode(message.leaveRoomResponse, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
        if (message.leaveRoomNotification != null && Object.hasOwnProperty.call(message, "leaveRoomNotification"))
            $root.S2CLeaveRoomNotification.encode(message.leaveRoomNotification, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
        if (message.gamePrepareRequest != null && Object.hasOwnProperty.call(message, "gamePrepareRequest"))
            $root.C2SGamePrepareRequest.encode(message.gamePrepareRequest, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
        if (message.gamePrepareResponse != null && Object.hasOwnProperty.call(message, "gamePrepareResponse"))
            $root.S2CGamePrepareResponse.encode(message.gamePrepareResponse, writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
        if (message.gamePrepareNotification != null && Object.hasOwnProperty.call(message, "gamePrepareNotification"))
            $root.S2CGamePrepareNotification.encode(message.gamePrepareNotification, writer.uint32(/* id 19, wireType 2 =*/154).fork()).ldelim();
        if (message.gameStartRequest != null && Object.hasOwnProperty.call(message, "gameStartRequest"))
            $root.C2SGameStartRequest.encode(message.gameStartRequest, writer.uint32(/* id 20, wireType 2 =*/162).fork()).ldelim();
        if (message.gameStartResponse != null && Object.hasOwnProperty.call(message, "gameStartResponse"))
            $root.S2CGameStartResponse.encode(message.gameStartResponse, writer.uint32(/* id 21, wireType 2 =*/170).fork()).ldelim();
        if (message.gameStartNotification != null && Object.hasOwnProperty.call(message, "gameStartNotification"))
            $root.S2CGameStartNotification.encode(message.gameStartNotification, writer.uint32(/* id 22, wireType 2 =*/178).fork()).ldelim();
        if (message.positionUpdateRequest != null && Object.hasOwnProperty.call(message, "positionUpdateRequest"))
            $root.C2SPositionUpdateRequest.encode(message.positionUpdateRequest, writer.uint32(/* id 23, wireType 2 =*/186).fork()).ldelim();
        if (message.positionUpdateResponse != null && Object.hasOwnProperty.call(message, "positionUpdateResponse"))
            $root.S2CPositionUpdateResponse.encode(message.positionUpdateResponse, writer.uint32(/* id 24, wireType 2 =*/194).fork()).ldelim();
        if (message.positionUpdateNotification != null && Object.hasOwnProperty.call(message, "positionUpdateNotification"))
            $root.S2CPositionUpdateNotification.encode(message.positionUpdateNotification, writer.uint32(/* id 25, wireType 2 =*/202).fork()).ldelim();
        if (message.useCardRequest != null && Object.hasOwnProperty.call(message, "useCardRequest"))
            $root.C2SUseCardRequest.encode(message.useCardRequest, writer.uint32(/* id 26, wireType 2 =*/210).fork()).ldelim();
        if (message.useCardResponse != null && Object.hasOwnProperty.call(message, "useCardResponse"))
            $root.S2CUseCardResponse.encode(message.useCardResponse, writer.uint32(/* id 27, wireType 2 =*/218).fork()).ldelim();
        if (message.useCardNotification != null && Object.hasOwnProperty.call(message, "useCardNotification"))
            $root.S2CUseCardNotification.encode(message.useCardNotification, writer.uint32(/* id 28, wireType 2 =*/226).fork()).ldelim();
        if (message.equipCardNotification != null && Object.hasOwnProperty.call(message, "equipCardNotification"))
            $root.S2CEquipCardNotification.encode(message.equipCardNotification, writer.uint32(/* id 29, wireType 2 =*/234).fork()).ldelim();
        if (message.cardEffectNotification != null && Object.hasOwnProperty.call(message, "cardEffectNotification"))
            $root.S2CCardEffectNotification.encode(message.cardEffectNotification, writer.uint32(/* id 30, wireType 2 =*/242).fork()).ldelim();
        if (message.fleaMarketNotification != null && Object.hasOwnProperty.call(message, "fleaMarketNotification"))
            $root.S2CFleaMarketNotification.encode(message.fleaMarketNotification, writer.uint32(/* id 31, wireType 2 =*/250).fork()).ldelim();
        if (message.fleaMarketPickRequest != null && Object.hasOwnProperty.call(message, "fleaMarketPickRequest"))
            $root.C2SFleaMarketPickRequest.encode(message.fleaMarketPickRequest, writer.uint32(/* id 32, wireType 2 =*/258).fork()).ldelim();
        if (message.fleaMarketPickResponse != null && Object.hasOwnProperty.call(message, "fleaMarketPickResponse"))
            $root.S2CFleaMarketPickResponse.encode(message.fleaMarketPickResponse, writer.uint32(/* id 33, wireType 2 =*/266).fork()).ldelim();
        if (message.userUpdateNotification != null && Object.hasOwnProperty.call(message, "userUpdateNotification"))
            $root.S2CUserUpdateNotification.encode(message.userUpdateNotification, writer.uint32(/* id 34, wireType 2 =*/274).fork()).ldelim();
        if (message.phaseUpdateNotification != null && Object.hasOwnProperty.call(message, "phaseUpdateNotification"))
            $root.S2CPhaseUpdateNotification.encode(message.phaseUpdateNotification, writer.uint32(/* id 35, wireType 2 =*/282).fork()).ldelim();
        if (message.reactionRequest != null && Object.hasOwnProperty.call(message, "reactionRequest"))
            $root.C2SReactionRequest.encode(message.reactionRequest, writer.uint32(/* id 36, wireType 2 =*/290).fork()).ldelim();
        if (message.reactionResponse != null && Object.hasOwnProperty.call(message, "reactionResponse"))
            $root.S2CReactionResponse.encode(message.reactionResponse, writer.uint32(/* id 37, wireType 2 =*/298).fork()).ldelim();
        if (message.destroyCardRequest != null && Object.hasOwnProperty.call(message, "destroyCardRequest"))
            $root.C2SDestroyCardRequest.encode(message.destroyCardRequest, writer.uint32(/* id 38, wireType 2 =*/306).fork()).ldelim();
        if (message.destroyCardResponse != null && Object.hasOwnProperty.call(message, "destroyCardResponse"))
            $root.S2CDestroyCardResponse.encode(message.destroyCardResponse, writer.uint32(/* id 39, wireType 2 =*/314).fork()).ldelim();
        if (message.gameEndNotification != null && Object.hasOwnProperty.call(message, "gameEndNotification"))
            $root.S2CGameEndNotification.encode(message.gameEndNotification, writer.uint32(/* id 40, wireType 2 =*/322).fork()).ldelim();
        if (message.cardSelectRequest != null && Object.hasOwnProperty.call(message, "cardSelectRequest"))
            $root.C2SCardSelectRequest.encode(message.cardSelectRequest, writer.uint32(/* id 41, wireType 2 =*/330).fork()).ldelim();
        if (message.cardSelectResponse != null && Object.hasOwnProperty.call(message, "cardSelectResponse"))
            $root.S2CCardSelectResponse.encode(message.cardSelectResponse, writer.uint32(/* id 42, wireType 2 =*/338).fork()).ldelim();
        if (message.passDebuffRequest != null && Object.hasOwnProperty.call(message, "passDebuffRequest"))
            $root.C2SPassDebuffRequest.encode(message.passDebuffRequest, writer.uint32(/* id 43, wireType 2 =*/346).fork()).ldelim();
        if (message.passDebuffResponse != null && Object.hasOwnProperty.call(message, "passDebuffResponse"))
            $root.S2CPassDebuffResponse.encode(message.passDebuffResponse, writer.uint32(/* id 44, wireType 2 =*/354).fork()).ldelim();
        if (message.warningNotification != null && Object.hasOwnProperty.call(message, "warningNotification"))
            $root.S2CWarningNotification.encode(message.warningNotification, writer.uint32(/* id 45, wireType 2 =*/362).fork()).ldelim();
        if (message.animationNotification != null && Object.hasOwnProperty.call(message, "animationNotification"))
            $root.S2CAnimationNotification.encode(message.animationNotification, writer.uint32(/* id 46, wireType 2 =*/370).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified GamePacket message, length delimited. Does not implicitly {@link GamePacket.verify|verify} messages.
     * @function encodeDelimited
     * @memberof GamePacket
     * @static
     * @param {IGamePacket} message GamePacket message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    GamePacket.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a GamePacket message from the specified reader or buffer.
     * @function decode
     * @memberof GamePacket
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {GamePacket} GamePacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamePacket.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.GamePacket();
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.registerRequest = $root.C2SRegisterRequest.decode(reader, reader.uint32());
                    break;
                }
            case 2: {
                    message.registerResponse = $root.S2CRegisterResponse.decode(reader, reader.uint32());
                    break;
                }
            case 3: {
                    message.loginRequest = $root.C2SLoginRequest.decode(reader, reader.uint32());
                    break;
                }
            case 4: {
                    message.loginResponse = $root.S2CLoginResponse.decode(reader, reader.uint32());
                    break;
                }
            case 5: {
                    message.createRoomRequest = $root.C2SCreateRoomRequest.decode(reader, reader.uint32());
                    break;
                }
            case 6: {
                    message.createRoomResponse = $root.S2CCreateRoomResponse.decode(reader, reader.uint32());
                    break;
                }
            case 7: {
                    message.getRoomListRequest = $root.C2SGetRoomListRequest.decode(reader, reader.uint32());
                    break;
                }
            case 8: {
                    message.getRoomListResponse = $root.S2CGetRoomListResponse.decode(reader, reader.uint32());
                    break;
                }
            case 9: {
                    message.joinRoomRequest = $root.C2SJoinRoomRequest.decode(reader, reader.uint32());
                    break;
                }
            case 10: {
                    message.joinRoomResponse = $root.S2CJoinRoomResponse.decode(reader, reader.uint32());
                    break;
                }
            case 11: {
                    message.joinRandomRoomRequest = $root.C2SJoinRandomRoomRequest.decode(reader, reader.uint32());
                    break;
                }
            case 12: {
                    message.joinRandomRoomResponse = $root.S2CJoinRandomRoomResponse.decode(reader, reader.uint32());
                    break;
                }
            case 13: {
                    message.joinRoomNotification = $root.S2CJoinRoomNotification.decode(reader, reader.uint32());
                    break;
                }
            case 14: {
                    message.leaveRoomRequest = $root.C2SLeaveRoomRequest.decode(reader, reader.uint32());
                    break;
                }
            case 15: {
                    message.leaveRoomResponse = $root.S2CLeaveRoomResponse.decode(reader, reader.uint32());
                    break;
                }
            case 16: {
                    message.leaveRoomNotification = $root.S2CLeaveRoomNotification.decode(reader, reader.uint32());
                    break;
                }
            case 17: {
                    message.gamePrepareRequest = $root.C2SGamePrepareRequest.decode(reader, reader.uint32());
                    break;
                }
            case 18: {
                    message.gamePrepareResponse = $root.S2CGamePrepareResponse.decode(reader, reader.uint32());
                    break;
                }
            case 19: {
                    message.gamePrepareNotification = $root.S2CGamePrepareNotification.decode(reader, reader.uint32());
                    break;
                }
            case 20: {
                    message.gameStartRequest = $root.C2SGameStartRequest.decode(reader, reader.uint32());
                    break;
                }
            case 21: {
                    message.gameStartResponse = $root.S2CGameStartResponse.decode(reader, reader.uint32());
                    break;
                }
            case 22: {
                    message.gameStartNotification = $root.S2CGameStartNotification.decode(reader, reader.uint32());
                    break;
                }
            case 23: {
                    message.positionUpdateRequest = $root.C2SPositionUpdateRequest.decode(reader, reader.uint32());
                    break;
                }
            case 24: {
                    message.positionUpdateResponse = $root.S2CPositionUpdateResponse.decode(reader, reader.uint32());
                    break;
                }
            case 25: {
                    message.positionUpdateNotification = $root.S2CPositionUpdateNotification.decode(reader, reader.uint32());
                    break;
                }
            case 26: {
                    message.useCardRequest = $root.C2SUseCardRequest.decode(reader, reader.uint32());
                    break;
                }
            case 27: {
                    message.useCardResponse = $root.S2CUseCardResponse.decode(reader, reader.uint32());
                    break;
                }
            case 28: {
                    message.useCardNotification = $root.S2CUseCardNotification.decode(reader, reader.uint32());
                    break;
                }
            case 29: {
                    message.equipCardNotification = $root.S2CEquipCardNotification.decode(reader, reader.uint32());
                    break;
                }
            case 30: {
                    message.cardEffectNotification = $root.S2CCardEffectNotification.decode(reader, reader.uint32());
                    break;
                }
            case 31: {
                    message.fleaMarketNotification = $root.S2CFleaMarketNotification.decode(reader, reader.uint32());
                    break;
                }
            case 32: {
                    message.fleaMarketPickRequest = $root.C2SFleaMarketPickRequest.decode(reader, reader.uint32());
                    break;
                }
            case 33: {
                    message.fleaMarketPickResponse = $root.S2CFleaMarketPickResponse.decode(reader, reader.uint32());
                    break;
                }
            case 34: {
                    message.userUpdateNotification = $root.S2CUserUpdateNotification.decode(reader, reader.uint32());
                    break;
                }
            case 35: {
                    message.phaseUpdateNotification = $root.S2CPhaseUpdateNotification.decode(reader, reader.uint32());
                    break;
                }
            case 36: {
                    message.reactionRequest = $root.C2SReactionRequest.decode(reader, reader.uint32());
                    break;
                }
            case 37: {
                    message.reactionResponse = $root.S2CReactionResponse.decode(reader, reader.uint32());
                    break;
                }
            case 38: {
                    message.destroyCardRequest = $root.C2SDestroyCardRequest.decode(reader, reader.uint32());
                    break;
                }
            case 39: {
                    message.destroyCardResponse = $root.S2CDestroyCardResponse.decode(reader, reader.uint32());
                    break;
                }
            case 40: {
                    message.gameEndNotification = $root.S2CGameEndNotification.decode(reader, reader.uint32());
                    break;
                }
            case 41: {
                    message.cardSelectRequest = $root.C2SCardSelectRequest.decode(reader, reader.uint32());
                    break;
                }
            case 42: {
                    message.cardSelectResponse = $root.S2CCardSelectResponse.decode(reader, reader.uint32());
                    break;
                }
            case 43: {
                    message.passDebuffRequest = $root.C2SPassDebuffRequest.decode(reader, reader.uint32());
                    break;
                }
            case 44: {
                    message.passDebuffResponse = $root.S2CPassDebuffResponse.decode(reader, reader.uint32());
                    break;
                }
            case 45: {
                    message.warningNotification = $root.S2CWarningNotification.decode(reader, reader.uint32());
                    break;
                }
            case 46: {
                    message.animationNotification = $root.S2CAnimationNotification.decode(reader, reader.uint32());
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a GamePacket message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof GamePacket
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {GamePacket} GamePacket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    GamePacket.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a GamePacket message.
     * @function verify
     * @memberof GamePacket
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    GamePacket.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        var properties = {};
        if (message.registerRequest != null && message.hasOwnProperty("registerRequest")) {
            properties.payload = 1;
            {
                var error = $root.C2SRegisterRequest.verify(message.registerRequest);
                if (error)
                    return "registerRequest." + error;
            }
        }
        if (message.registerResponse != null && message.hasOwnProperty("registerResponse")) {
            if (properties.payload === 1)
                return "payload: multiple values";
            properties.payload = 1;
            {
                var error = $root.S2CRegisterResponse.verify(message.registerResponse);
                if (error)
                    return "registerResponse." + error;
            }
        }
        if (message.loginRequest != null && message.hasOwnProperty("loginRequest")) {
            if (properties.payload === 1)
                return "payload: multiple values";
            properties.payload = 1;
            {
                var error = $root.C2SLoginRequest.verify(message.loginRequest);
                if (error)
                    return "loginRequest." + error;
            }
        }
        if (message.loginResponse != null && message.hasOwnProperty("loginResponse")) {
            if (properties.payload === 1)
                return "payload: multiple values";
            properties.payload = 1;
            {
                var error = $root.S2CLoginResponse.verify(message.loginResponse);
                if (error)
                    return "loginResponse." + error;
            }
        }
        if (message.createRoomRequest != null && message.hasOwnProperty("createRoomRequest")) {
            if (properties.payload === 1)
                return "payload: multiple values";
            properties.payload = 1;
            {
                var error = $root.C2SCreateRoomRequest.verify(message.createRoomRequest);
                if (error)
                    return "createRoomRequest." + error;
            }
        }
        if (message.createRoomResponse != null && message.hasOwnProperty("createRoomResponse")) {
            if (properties.payload === 1)
                return "payload: multiple values";
            properties.payload = 1;
            {
                var error = $root.S2CCreateRoomResponse.verify(message.createRoomResponse);
                if (error)
                    return "createRoomResponse." + error;
            }
        }
        if (message.getRoomListRequest != null && message.hasOwnProperty("getRoomListRequest")) {
            if (properties.payload === 1)
                return "payload: multiple values";
            properties.payload = 1;
            {
                var error = $root.C2SGetRoomListRequest.verify(message.getRoomListRequest);
                if (error)
                    return "getRoomListRequest." + error;
            }
        }
        if (message.getRoomListResponse != null && message.hasOwnProperty("getRoomListResponse")) {
            if (properties.payload === 1)
                return "payload: multiple values";
            properties.payload = 1;
            {
                var error = $root.S2CGetRoomListResponse.verify(message.getRoomListResponse);
                if (error)
                    return "getRoomListResponse." + error;
            }
        }
        if (message.joinRoomRequest != null && message.hasOwnProperty("joinRoomRequest")) {
            if (properties.payload === 1)
                return "payload: multiple values";
            properties.payload = 1;
            {
                var error = $root.C2SJoinRoomRequest.verify(message.joinRoomRequest);
                if (error)
                    return "joinRoomRequest." + error;
            }
        }
        if (message.joinRoomResponse != null && message.hasOwnProperty("joinRoomResponse")) {
            if (properties.payload === 1)
                return "payload: multiple values";
            properties.payload = 1;
            {
                var error = $root.S2CJoinRoomResponse.verify(message.joinRoomResponse);
                if (error)
                    return "joinRoomResponse." + error;
            }
        }
        if (message.joinRandomRoomRequest != null && message.hasOwnProperty("joinRandomRoomRequest")) {
            if (properties.payload === 1)
                return "payload: multiple values";
            properties.payload = 1;
            {
                var error = $root.C2SJoinRandomRoomRequest.verify(message.joinRandomRoomRequest);
                if (error)
                    return "joinRandomRoomRequest." + error;
            }
        }
        if (message.joinRandomRoomResponse != null && message.hasOwnProperty("joinRandomRoomResponse")) {
            if (properties.payload === 1)
                return "payload: multiple values";
            properties.payload = 1;
            {
                var error = $root.S2CJoinRandomRoomResponse.verify(message.joinRandomRoomResponse);
                if (error)
                    return "joinRandomRoomResponse." + error;
            }
        }
        if (message.joinRoomNotification != null && message.hasOwnProperty("joinRoomNotification")) {
            if (properties.payload === 1)
                return "payload: multiple values";
            properties.payload = 1;
            {
                var error = $root.S2CJoinRoomNotification.verify(message.joinRoomNotification);
                if (error)
                    return "joinRoomNotification." + error;
            }
        }
        if (message.leaveRoomRequest != null && message.hasOwnProperty("leaveRoomRequest")) {
            if (properties.payload === 1)
                return "payload: multiple values";
            properties.payload = 1;
            {
                var error = $root.C2SLeaveRoomRequest.verify(message.leaveRoomRequest);
                if (error)
                    return "leaveRoomRequest." + error;
            }
        }
        if (message.leaveRoomResponse != null && message.hasOwnProperty("leaveRoomResponse")) {
            if (properties.payload === 1)
                return "payload: multiple values";
            properties.payload = 1;
            {
                var error = $root.S2CLeaveRoomResponse.verify(message.leaveRoomResponse);
                if (error)
                    return "leaveRoomResponse." + error;
            }
        }
        if (message.leaveRoomNotification != null && message.hasOwnProperty("leaveRoomNotification")) {
            if (properties.payload === 1)
                return "payload: multiple values";
            properties.payload = 1;
            {
                var error = $root.S2CLeaveRoomNotification.verify(message.leaveRoomNotification);
                if (error)
                    return "leaveRoomNotification." + error;
            }
        }
        if (message.gamePrepareRequest != null && message.hasOwnProperty("gamePrepareRequest")) {
            if (properties.payload === 1)
                return "payload: multiple values";
            properties.payload = 1;
            {
                var error = $root.C2SGamePrepareRequest.verify(message.gamePrepareRequest);
                if (error)
                    return "gamePrepareRequest." + error;
            }
        }
        if (message.gamePrepareResponse != null && message.hasOwnProperty("gamePrepareResponse")) {
            if (properties.payload === 1)
                return "payload: multiple values";
            properties.payload = 1;
            {
                var error = $root.S2CGamePrepareResponse.verify(message.gamePrepareResponse);
                if (error)
                    return "gamePrepareResponse." + error;
            }
        }
        if (message.gamePrepareNotification != null && message.hasOwnProperty("gamePrepareNotification")) {
            if (properties.payload === 1)
                return "payload: multiple values";
            properties.payload = 1;
            {
                var error = $root.S2CGamePrepareNotification.verify(message.gamePrepareNotification);
                if (error)
                    return "gamePrepareNotification." + error;
            }
        }
        if (message.gameStartRequest != null && message.hasOwnProperty("gameStartRequest")) {
            if (properties.payload === 1)
                return "payload: multiple values";
            properties.payload = 1;
            {
                var error = $root.C2SGameStartRequest.verify(message.gameStartRequest);
                if (error)
                    return "gameStartRequest." + error;
            }
        }
        if (message.gameStartResponse != null && message.hasOwnProperty("gameStartResponse")) {
            if (properties.payload === 1)
                return "payload: multiple values";
            properties.payload = 1;
            {
                var error = $root.S2CGameStartResponse.verify(message.gameStartResponse);
                if (error)
                    return "gameStartResponse." + error;
            }
        }
        if (message.gameStartNotification != null && message.hasOwnProperty("gameStartNotification")) {
            if (properties.payload === 1)
                return "payload: multiple values";
            properties.payload = 1;
            {
                var error = $root.S2CGameStartNotification.verify(message.gameStartNotification);
                if (error)
                    return "gameStartNotification." + error;
            }
        }
        if (message.positionUpdateRequest != null && message.hasOwnProperty("positionUpdateRequest")) {
            if (properties.payload === 1)
                return "payload: multiple values";
            properties.payload = 1;
            {
                var error = $root.C2SPositionUpdateRequest.verify(message.positionUpdateRequest);
                if (error)
                    return "positionUpdateRequest." + error;
            }
        }
        if (message.positionUpdateResponse != null && message.hasOwnProperty("positionUpdateResponse")) {
            if (properties.payload === 1)
                return "payload: multiple values";
            properties.payload = 1;
            {
                var error = $root.S2CPositionUpdateResponse.verify(message.positionUpdateResponse);
                if (error)
                    return "positionUpdateResponse." + error;
            }
        }
        if (message.positionUpdateNotification != null && message.hasOwnProperty("positionUpdateNotification")) {
            if (properties.payload === 1)
                return "payload: multiple values";
            properties.payload = 1;
            {
                var error = $root.S2CPositionUpdateNotification.verify(message.positionUpdateNotification);
                if (error)
                    return "positionUpdateNotification." + error;
            }
        }
        if (message.useCardRequest != null && message.hasOwnProperty("useCardRequest")) {
            if (properties.payload === 1)
                return "payload: multiple values";
            properties.payload = 1;
            {
                var error = $root.C2SUseCardRequest.verify(message.useCardRequest);
                if (error)
                    return "useCardRequest." + error;
            }
        }
        if (message.useCardResponse != null && message.hasOwnProperty("useCardResponse")) {
            if (properties.payload === 1)
                return "payload: multiple values";
            properties.payload = 1;
            {
                var error = $root.S2CUseCardResponse.verify(message.useCardResponse);
                if (error)
                    return "useCardResponse." + error;
            }
        }
        if (message.useCardNotification != null && message.hasOwnProperty("useCardNotification")) {
            if (properties.payload === 1)
                return "payload: multiple values";
            properties.payload = 1;
            {
                var error = $root.S2CUseCardNotification.verify(message.useCardNotification);
                if (error)
                    return "useCardNotification." + error;
            }
        }
        if (message.equipCardNotification != null && message.hasOwnProperty("equipCardNotification")) {
            if (properties.payload === 1)
                return "payload: multiple values";
            properties.payload = 1;
            {
                var error = $root.S2CEquipCardNotification.verify(message.equipCardNotification);
                if (error)
                    return "equipCardNotification." + error;
            }
        }
        if (message.cardEffectNotification != null && message.hasOwnProperty("cardEffectNotification")) {
            if (properties.payload === 1)
                return "payload: multiple values";
            properties.payload = 1;
            {
                var error = $root.S2CCardEffectNotification.verify(message.cardEffectNotification);
                if (error)
                    return "cardEffectNotification." + error;
            }
        }
        if (message.fleaMarketNotification != null && message.hasOwnProperty("fleaMarketNotification")) {
            if (properties.payload === 1)
                return "payload: multiple values";
            properties.payload = 1;
            {
                var error = $root.S2CFleaMarketNotification.verify(message.fleaMarketNotification);
                if (error)
                    return "fleaMarketNotification." + error;
            }
        }
        if (message.fleaMarketPickRequest != null && message.hasOwnProperty("fleaMarketPickRequest")) {
            if (properties.payload === 1)
                return "payload: multiple values";
            properties.payload = 1;
            {
                var error = $root.C2SFleaMarketPickRequest.verify(message.fleaMarketPickRequest);
                if (error)
                    return "fleaMarketPickRequest." + error;
            }
        }
        if (message.fleaMarketPickResponse != null && message.hasOwnProperty("fleaMarketPickResponse")) {
            if (properties.payload === 1)
                return "payload: multiple values";
            properties.payload = 1;
            {
                var error = $root.S2CFleaMarketPickResponse.verify(message.fleaMarketPickResponse);
                if (error)
                    return "fleaMarketPickResponse." + error;
            }
        }
        if (message.userUpdateNotification != null && message.hasOwnProperty("userUpdateNotification")) {
            if (properties.payload === 1)
                return "payload: multiple values";
            properties.payload = 1;
            {
                var error = $root.S2CUserUpdateNotification.verify(message.userUpdateNotification);
                if (error)
                    return "userUpdateNotification." + error;
            }
        }
        if (message.phaseUpdateNotification != null && message.hasOwnProperty("phaseUpdateNotification")) {
            if (properties.payload === 1)
                return "payload: multiple values";
            properties.payload = 1;
            {
                var error = $root.S2CPhaseUpdateNotification.verify(message.phaseUpdateNotification);
                if (error)
                    return "phaseUpdateNotification." + error;
            }
        }
        if (message.reactionRequest != null && message.hasOwnProperty("reactionRequest")) {
            if (properties.payload === 1)
                return "payload: multiple values";
            properties.payload = 1;
            {
                var error = $root.C2SReactionRequest.verify(message.reactionRequest);
                if (error)
                    return "reactionRequest." + error;
            }
        }
        if (message.reactionResponse != null && message.hasOwnProperty("reactionResponse")) {
            if (properties.payload === 1)
                return "payload: multiple values";
            properties.payload = 1;
            {
                var error = $root.S2CReactionResponse.verify(message.reactionResponse);
                if (error)
                    return "reactionResponse." + error;
            }
        }
        if (message.destroyCardRequest != null && message.hasOwnProperty("destroyCardRequest")) {
            if (properties.payload === 1)
                return "payload: multiple values";
            properties.payload = 1;
            {
                var error = $root.C2SDestroyCardRequest.verify(message.destroyCardRequest);
                if (error)
                    return "destroyCardRequest." + error;
            }
        }
        if (message.destroyCardResponse != null && message.hasOwnProperty("destroyCardResponse")) {
            if (properties.payload === 1)
                return "payload: multiple values";
            properties.payload = 1;
            {
                var error = $root.S2CDestroyCardResponse.verify(message.destroyCardResponse);
                if (error)
                    return "destroyCardResponse." + error;
            }
        }
        if (message.gameEndNotification != null && message.hasOwnProperty("gameEndNotification")) {
            if (properties.payload === 1)
                return "payload: multiple values";
            properties.payload = 1;
            {
                var error = $root.S2CGameEndNotification.verify(message.gameEndNotification);
                if (error)
                    return "gameEndNotification." + error;
            }
        }
        if (message.cardSelectRequest != null && message.hasOwnProperty("cardSelectRequest")) {
            if (properties.payload === 1)
                return "payload: multiple values";
            properties.payload = 1;
            {
                var error = $root.C2SCardSelectRequest.verify(message.cardSelectRequest);
                if (error)
                    return "cardSelectRequest." + error;
            }
        }
        if (message.cardSelectResponse != null && message.hasOwnProperty("cardSelectResponse")) {
            if (properties.payload === 1)
                return "payload: multiple values";
            properties.payload = 1;
            {
                var error = $root.S2CCardSelectResponse.verify(message.cardSelectResponse);
                if (error)
                    return "cardSelectResponse." + error;
            }
        }
        if (message.passDebuffRequest != null && message.hasOwnProperty("passDebuffRequest")) {
            if (properties.payload === 1)
                return "payload: multiple values";
            properties.payload = 1;
            {
                var error = $root.C2SPassDebuffRequest.verify(message.passDebuffRequest);
                if (error)
                    return "passDebuffRequest." + error;
            }
        }
        if (message.passDebuffResponse != null && message.hasOwnProperty("passDebuffResponse")) {
            if (properties.payload === 1)
                return "payload: multiple values";
            properties.payload = 1;
            {
                var error = $root.S2CPassDebuffResponse.verify(message.passDebuffResponse);
                if (error)
                    return "passDebuffResponse." + error;
            }
        }
        if (message.warningNotification != null && message.hasOwnProperty("warningNotification")) {
            if (properties.payload === 1)
                return "payload: multiple values";
            properties.payload = 1;
            {
                var error = $root.S2CWarningNotification.verify(message.warningNotification);
                if (error)
                    return "warningNotification." + error;
            }
        }
        if (message.animationNotification != null && message.hasOwnProperty("animationNotification")) {
            if (properties.payload === 1)
                return "payload: multiple values";
            properties.payload = 1;
            {
                var error = $root.S2CAnimationNotification.verify(message.animationNotification);
                if (error)
                    return "animationNotification." + error;
            }
        }
        return null;
    };

    /**
     * Creates a GamePacket message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof GamePacket
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {GamePacket} GamePacket
     */
    GamePacket.fromObject = function fromObject(object) {
        if (object instanceof $root.GamePacket)
            return object;
        var message = new $root.GamePacket();
        if (object.registerRequest != null) {
            if (typeof object.registerRequest !== "object")
                throw TypeError(".GamePacket.registerRequest: object expected");
            message.registerRequest = $root.C2SRegisterRequest.fromObject(object.registerRequest);
        }
        if (object.registerResponse != null) {
            if (typeof object.registerResponse !== "object")
                throw TypeError(".GamePacket.registerResponse: object expected");
            message.registerResponse = $root.S2CRegisterResponse.fromObject(object.registerResponse);
        }
        if (object.loginRequest != null) {
            if (typeof object.loginRequest !== "object")
                throw TypeError(".GamePacket.loginRequest: object expected");
            message.loginRequest = $root.C2SLoginRequest.fromObject(object.loginRequest);
        }
        if (object.loginResponse != null) {
            if (typeof object.loginResponse !== "object")
                throw TypeError(".GamePacket.loginResponse: object expected");
            message.loginResponse = $root.S2CLoginResponse.fromObject(object.loginResponse);
        }
        if (object.createRoomRequest != null) {
            if (typeof object.createRoomRequest !== "object")
                throw TypeError(".GamePacket.createRoomRequest: object expected");
            message.createRoomRequest = $root.C2SCreateRoomRequest.fromObject(object.createRoomRequest);
        }
        if (object.createRoomResponse != null) {
            if (typeof object.createRoomResponse !== "object")
                throw TypeError(".GamePacket.createRoomResponse: object expected");
            message.createRoomResponse = $root.S2CCreateRoomResponse.fromObject(object.createRoomResponse);
        }
        if (object.getRoomListRequest != null) {
            if (typeof object.getRoomListRequest !== "object")
                throw TypeError(".GamePacket.getRoomListRequest: object expected");
            message.getRoomListRequest = $root.C2SGetRoomListRequest.fromObject(object.getRoomListRequest);
        }
        if (object.getRoomListResponse != null) {
            if (typeof object.getRoomListResponse !== "object")
                throw TypeError(".GamePacket.getRoomListResponse: object expected");
            message.getRoomListResponse = $root.S2CGetRoomListResponse.fromObject(object.getRoomListResponse);
        }
        if (object.joinRoomRequest != null) {
            if (typeof object.joinRoomRequest !== "object")
                throw TypeError(".GamePacket.joinRoomRequest: object expected");
            message.joinRoomRequest = $root.C2SJoinRoomRequest.fromObject(object.joinRoomRequest);
        }
        if (object.joinRoomResponse != null) {
            if (typeof object.joinRoomResponse !== "object")
                throw TypeError(".GamePacket.joinRoomResponse: object expected");
            message.joinRoomResponse = $root.S2CJoinRoomResponse.fromObject(object.joinRoomResponse);
        }
        if (object.joinRandomRoomRequest != null) {
            if (typeof object.joinRandomRoomRequest !== "object")
                throw TypeError(".GamePacket.joinRandomRoomRequest: object expected");
            message.joinRandomRoomRequest = $root.C2SJoinRandomRoomRequest.fromObject(object.joinRandomRoomRequest);
        }
        if (object.joinRandomRoomResponse != null) {
            if (typeof object.joinRandomRoomResponse !== "object")
                throw TypeError(".GamePacket.joinRandomRoomResponse: object expected");
            message.joinRandomRoomResponse = $root.S2CJoinRandomRoomResponse.fromObject(object.joinRandomRoomResponse);
        }
        if (object.joinRoomNotification != null) {
            if (typeof object.joinRoomNotification !== "object")
                throw TypeError(".GamePacket.joinRoomNotification: object expected");
            message.joinRoomNotification = $root.S2CJoinRoomNotification.fromObject(object.joinRoomNotification);
        }
        if (object.leaveRoomRequest != null) {
            if (typeof object.leaveRoomRequest !== "object")
                throw TypeError(".GamePacket.leaveRoomRequest: object expected");
            message.leaveRoomRequest = $root.C2SLeaveRoomRequest.fromObject(object.leaveRoomRequest);
        }
        if (object.leaveRoomResponse != null) {
            if (typeof object.leaveRoomResponse !== "object")
                throw TypeError(".GamePacket.leaveRoomResponse: object expected");
            message.leaveRoomResponse = $root.S2CLeaveRoomResponse.fromObject(object.leaveRoomResponse);
        }
        if (object.leaveRoomNotification != null) {
            if (typeof object.leaveRoomNotification !== "object")
                throw TypeError(".GamePacket.leaveRoomNotification: object expected");
            message.leaveRoomNotification = $root.S2CLeaveRoomNotification.fromObject(object.leaveRoomNotification);
        }
        if (object.gamePrepareRequest != null) {
            if (typeof object.gamePrepareRequest !== "object")
                throw TypeError(".GamePacket.gamePrepareRequest: object expected");
            message.gamePrepareRequest = $root.C2SGamePrepareRequest.fromObject(object.gamePrepareRequest);
        }
        if (object.gamePrepareResponse != null) {
            if (typeof object.gamePrepareResponse !== "object")
                throw TypeError(".GamePacket.gamePrepareResponse: object expected");
            message.gamePrepareResponse = $root.S2CGamePrepareResponse.fromObject(object.gamePrepareResponse);
        }
        if (object.gamePrepareNotification != null) {
            if (typeof object.gamePrepareNotification !== "object")
                throw TypeError(".GamePacket.gamePrepareNotification: object expected");
            message.gamePrepareNotification = $root.S2CGamePrepareNotification.fromObject(object.gamePrepareNotification);
        }
        if (object.gameStartRequest != null) {
            if (typeof object.gameStartRequest !== "object")
                throw TypeError(".GamePacket.gameStartRequest: object expected");
            message.gameStartRequest = $root.C2SGameStartRequest.fromObject(object.gameStartRequest);
        }
        if (object.gameStartResponse != null) {
            if (typeof object.gameStartResponse !== "object")
                throw TypeError(".GamePacket.gameStartResponse: object expected");
            message.gameStartResponse = $root.S2CGameStartResponse.fromObject(object.gameStartResponse);
        }
        if (object.gameStartNotification != null) {
            if (typeof object.gameStartNotification !== "object")
                throw TypeError(".GamePacket.gameStartNotification: object expected");
            message.gameStartNotification = $root.S2CGameStartNotification.fromObject(object.gameStartNotification);
        }
        if (object.positionUpdateRequest != null) {
            if (typeof object.positionUpdateRequest !== "object")
                throw TypeError(".GamePacket.positionUpdateRequest: object expected");
            message.positionUpdateRequest = $root.C2SPositionUpdateRequest.fromObject(object.positionUpdateRequest);
        }
        if (object.positionUpdateResponse != null) {
            if (typeof object.positionUpdateResponse !== "object")
                throw TypeError(".GamePacket.positionUpdateResponse: object expected");
            message.positionUpdateResponse = $root.S2CPositionUpdateResponse.fromObject(object.positionUpdateResponse);
        }
        if (object.positionUpdateNotification != null) {
            if (typeof object.positionUpdateNotification !== "object")
                throw TypeError(".GamePacket.positionUpdateNotification: object expected");
            message.positionUpdateNotification = $root.S2CPositionUpdateNotification.fromObject(object.positionUpdateNotification);
        }
        if (object.useCardRequest != null) {
            if (typeof object.useCardRequest !== "object")
                throw TypeError(".GamePacket.useCardRequest: object expected");
            message.useCardRequest = $root.C2SUseCardRequest.fromObject(object.useCardRequest);
        }
        if (object.useCardResponse != null) {
            if (typeof object.useCardResponse !== "object")
                throw TypeError(".GamePacket.useCardResponse: object expected");
            message.useCardResponse = $root.S2CUseCardResponse.fromObject(object.useCardResponse);
        }
        if (object.useCardNotification != null) {
            if (typeof object.useCardNotification !== "object")
                throw TypeError(".GamePacket.useCardNotification: object expected");
            message.useCardNotification = $root.S2CUseCardNotification.fromObject(object.useCardNotification);
        }
        if (object.equipCardNotification != null) {
            if (typeof object.equipCardNotification !== "object")
                throw TypeError(".GamePacket.equipCardNotification: object expected");
            message.equipCardNotification = $root.S2CEquipCardNotification.fromObject(object.equipCardNotification);
        }
        if (object.cardEffectNotification != null) {
            if (typeof object.cardEffectNotification !== "object")
                throw TypeError(".GamePacket.cardEffectNotification: object expected");
            message.cardEffectNotification = $root.S2CCardEffectNotification.fromObject(object.cardEffectNotification);
        }
        if (object.fleaMarketNotification != null) {
            if (typeof object.fleaMarketNotification !== "object")
                throw TypeError(".GamePacket.fleaMarketNotification: object expected");
            message.fleaMarketNotification = $root.S2CFleaMarketNotification.fromObject(object.fleaMarketNotification);
        }
        if (object.fleaMarketPickRequest != null) {
            if (typeof object.fleaMarketPickRequest !== "object")
                throw TypeError(".GamePacket.fleaMarketPickRequest: object expected");
            message.fleaMarketPickRequest = $root.C2SFleaMarketPickRequest.fromObject(object.fleaMarketPickRequest);
        }
        if (object.fleaMarketPickResponse != null) {
            if (typeof object.fleaMarketPickResponse !== "object")
                throw TypeError(".GamePacket.fleaMarketPickResponse: object expected");
            message.fleaMarketPickResponse = $root.S2CFleaMarketPickResponse.fromObject(object.fleaMarketPickResponse);
        }
        if (object.userUpdateNotification != null) {
            if (typeof object.userUpdateNotification !== "object")
                throw TypeError(".GamePacket.userUpdateNotification: object expected");
            message.userUpdateNotification = $root.S2CUserUpdateNotification.fromObject(object.userUpdateNotification);
        }
        if (object.phaseUpdateNotification != null) {
            if (typeof object.phaseUpdateNotification !== "object")
                throw TypeError(".GamePacket.phaseUpdateNotification: object expected");
            message.phaseUpdateNotification = $root.S2CPhaseUpdateNotification.fromObject(object.phaseUpdateNotification);
        }
        if (object.reactionRequest != null) {
            if (typeof object.reactionRequest !== "object")
                throw TypeError(".GamePacket.reactionRequest: object expected");
            message.reactionRequest = $root.C2SReactionRequest.fromObject(object.reactionRequest);
        }
        if (object.reactionResponse != null) {
            if (typeof object.reactionResponse !== "object")
                throw TypeError(".GamePacket.reactionResponse: object expected");
            message.reactionResponse = $root.S2CReactionResponse.fromObject(object.reactionResponse);
        }
        if (object.destroyCardRequest != null) {
            if (typeof object.destroyCardRequest !== "object")
                throw TypeError(".GamePacket.destroyCardRequest: object expected");
            message.destroyCardRequest = $root.C2SDestroyCardRequest.fromObject(object.destroyCardRequest);
        }
        if (object.destroyCardResponse != null) {
            if (typeof object.destroyCardResponse !== "object")
                throw TypeError(".GamePacket.destroyCardResponse: object expected");
            message.destroyCardResponse = $root.S2CDestroyCardResponse.fromObject(object.destroyCardResponse);
        }
        if (object.gameEndNotification != null) {
            if (typeof object.gameEndNotification !== "object")
                throw TypeError(".GamePacket.gameEndNotification: object expected");
            message.gameEndNotification = $root.S2CGameEndNotification.fromObject(object.gameEndNotification);
        }
        if (object.cardSelectRequest != null) {
            if (typeof object.cardSelectRequest !== "object")
                throw TypeError(".GamePacket.cardSelectRequest: object expected");
            message.cardSelectRequest = $root.C2SCardSelectRequest.fromObject(object.cardSelectRequest);
        }
        if (object.cardSelectResponse != null) {
            if (typeof object.cardSelectResponse !== "object")
                throw TypeError(".GamePacket.cardSelectResponse: object expected");
            message.cardSelectResponse = $root.S2CCardSelectResponse.fromObject(object.cardSelectResponse);
        }
        if (object.passDebuffRequest != null) {
            if (typeof object.passDebuffRequest !== "object")
                throw TypeError(".GamePacket.passDebuffRequest: object expected");
            message.passDebuffRequest = $root.C2SPassDebuffRequest.fromObject(object.passDebuffRequest);
        }
        if (object.passDebuffResponse != null) {
            if (typeof object.passDebuffResponse !== "object")
                throw TypeError(".GamePacket.passDebuffResponse: object expected");
            message.passDebuffResponse = $root.S2CPassDebuffResponse.fromObject(object.passDebuffResponse);
        }
        if (object.warningNotification != null) {
            if (typeof object.warningNotification !== "object")
                throw TypeError(".GamePacket.warningNotification: object expected");
            message.warningNotification = $root.S2CWarningNotification.fromObject(object.warningNotification);
        }
        if (object.animationNotification != null) {
            if (typeof object.animationNotification !== "object")
                throw TypeError(".GamePacket.animationNotification: object expected");
            message.animationNotification = $root.S2CAnimationNotification.fromObject(object.animationNotification);
        }
        return message;
    };

    /**
     * Creates a plain object from a GamePacket message. Also converts values to other types if specified.
     * @function toObject
     * @memberof GamePacket
     * @static
     * @param {GamePacket} message GamePacket
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    GamePacket.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        var object = {};
        if (message.registerRequest != null && message.hasOwnProperty("registerRequest")) {
            object.registerRequest = $root.C2SRegisterRequest.toObject(message.registerRequest, options);
            if (options.oneofs)
                object.payload = "registerRequest";
        }
        if (message.registerResponse != null && message.hasOwnProperty("registerResponse")) {
            object.registerResponse = $root.S2CRegisterResponse.toObject(message.registerResponse, options);
            if (options.oneofs)
                object.payload = "registerResponse";
        }
        if (message.loginRequest != null && message.hasOwnProperty("loginRequest")) {
            object.loginRequest = $root.C2SLoginRequest.toObject(message.loginRequest, options);
            if (options.oneofs)
                object.payload = "loginRequest";
        }
        if (message.loginResponse != null && message.hasOwnProperty("loginResponse")) {
            object.loginResponse = $root.S2CLoginResponse.toObject(message.loginResponse, options);
            if (options.oneofs)
                object.payload = "loginResponse";
        }
        if (message.createRoomRequest != null && message.hasOwnProperty("createRoomRequest")) {
            object.createRoomRequest = $root.C2SCreateRoomRequest.toObject(message.createRoomRequest, options);
            if (options.oneofs)
                object.payload = "createRoomRequest";
        }
        if (message.createRoomResponse != null && message.hasOwnProperty("createRoomResponse")) {
            object.createRoomResponse = $root.S2CCreateRoomResponse.toObject(message.createRoomResponse, options);
            if (options.oneofs)
                object.payload = "createRoomResponse";
        }
        if (message.getRoomListRequest != null && message.hasOwnProperty("getRoomListRequest")) {
            object.getRoomListRequest = $root.C2SGetRoomListRequest.toObject(message.getRoomListRequest, options);
            if (options.oneofs)
                object.payload = "getRoomListRequest";
        }
        if (message.getRoomListResponse != null && message.hasOwnProperty("getRoomListResponse")) {
            object.getRoomListResponse = $root.S2CGetRoomListResponse.toObject(message.getRoomListResponse, options);
            if (options.oneofs)
                object.payload = "getRoomListResponse";
        }
        if (message.joinRoomRequest != null && message.hasOwnProperty("joinRoomRequest")) {
            object.joinRoomRequest = $root.C2SJoinRoomRequest.toObject(message.joinRoomRequest, options);
            if (options.oneofs)
                object.payload = "joinRoomRequest";
        }
        if (message.joinRoomResponse != null && message.hasOwnProperty("joinRoomResponse")) {
            object.joinRoomResponse = $root.S2CJoinRoomResponse.toObject(message.joinRoomResponse, options);
            if (options.oneofs)
                object.payload = "joinRoomResponse";
        }
        if (message.joinRandomRoomRequest != null && message.hasOwnProperty("joinRandomRoomRequest")) {
            object.joinRandomRoomRequest = $root.C2SJoinRandomRoomRequest.toObject(message.joinRandomRoomRequest, options);
            if (options.oneofs)
                object.payload = "joinRandomRoomRequest";
        }
        if (message.joinRandomRoomResponse != null && message.hasOwnProperty("joinRandomRoomResponse")) {
            object.joinRandomRoomResponse = $root.S2CJoinRandomRoomResponse.toObject(message.joinRandomRoomResponse, options);
            if (options.oneofs)
                object.payload = "joinRandomRoomResponse";
        }
        if (message.joinRoomNotification != null && message.hasOwnProperty("joinRoomNotification")) {
            object.joinRoomNotification = $root.S2CJoinRoomNotification.toObject(message.joinRoomNotification, options);
            if (options.oneofs)
                object.payload = "joinRoomNotification";
        }
        if (message.leaveRoomRequest != null && message.hasOwnProperty("leaveRoomRequest")) {
            object.leaveRoomRequest = $root.C2SLeaveRoomRequest.toObject(message.leaveRoomRequest, options);
            if (options.oneofs)
                object.payload = "leaveRoomRequest";
        }
        if (message.leaveRoomResponse != null && message.hasOwnProperty("leaveRoomResponse")) {
            object.leaveRoomResponse = $root.S2CLeaveRoomResponse.toObject(message.leaveRoomResponse, options);
            if (options.oneofs)
                object.payload = "leaveRoomResponse";
        }
        if (message.leaveRoomNotification != null && message.hasOwnProperty("leaveRoomNotification")) {
            object.leaveRoomNotification = $root.S2CLeaveRoomNotification.toObject(message.leaveRoomNotification, options);
            if (options.oneofs)
                object.payload = "leaveRoomNotification";
        }
        if (message.gamePrepareRequest != null && message.hasOwnProperty("gamePrepareRequest")) {
            object.gamePrepareRequest = $root.C2SGamePrepareRequest.toObject(message.gamePrepareRequest, options);
            if (options.oneofs)
                object.payload = "gamePrepareRequest";
        }
        if (message.gamePrepareResponse != null && message.hasOwnProperty("gamePrepareResponse")) {
            object.gamePrepareResponse = $root.S2CGamePrepareResponse.toObject(message.gamePrepareResponse, options);
            if (options.oneofs)
                object.payload = "gamePrepareResponse";
        }
        if (message.gamePrepareNotification != null && message.hasOwnProperty("gamePrepareNotification")) {
            object.gamePrepareNotification = $root.S2CGamePrepareNotification.toObject(message.gamePrepareNotification, options);
            if (options.oneofs)
                object.payload = "gamePrepareNotification";
        }
        if (message.gameStartRequest != null && message.hasOwnProperty("gameStartRequest")) {
            object.gameStartRequest = $root.C2SGameStartRequest.toObject(message.gameStartRequest, options);
            if (options.oneofs)
                object.payload = "gameStartRequest";
        }
        if (message.gameStartResponse != null && message.hasOwnProperty("gameStartResponse")) {
            object.gameStartResponse = $root.S2CGameStartResponse.toObject(message.gameStartResponse, options);
            if (options.oneofs)
                object.payload = "gameStartResponse";
        }
        if (message.gameStartNotification != null && message.hasOwnProperty("gameStartNotification")) {
            object.gameStartNotification = $root.S2CGameStartNotification.toObject(message.gameStartNotification, options);
            if (options.oneofs)
                object.payload = "gameStartNotification";
        }
        if (message.positionUpdateRequest != null && message.hasOwnProperty("positionUpdateRequest")) {
            object.positionUpdateRequest = $root.C2SPositionUpdateRequest.toObject(message.positionUpdateRequest, options);
            if (options.oneofs)
                object.payload = "positionUpdateRequest";
        }
        if (message.positionUpdateResponse != null && message.hasOwnProperty("positionUpdateResponse")) {
            object.positionUpdateResponse = $root.S2CPositionUpdateResponse.toObject(message.positionUpdateResponse, options);
            if (options.oneofs)
                object.payload = "positionUpdateResponse";
        }
        if (message.positionUpdateNotification != null && message.hasOwnProperty("positionUpdateNotification")) {
            object.positionUpdateNotification = $root.S2CPositionUpdateNotification.toObject(message.positionUpdateNotification, options);
            if (options.oneofs)
                object.payload = "positionUpdateNotification";
        }
        if (message.useCardRequest != null && message.hasOwnProperty("useCardRequest")) {
            object.useCardRequest = $root.C2SUseCardRequest.toObject(message.useCardRequest, options);
            if (options.oneofs)
                object.payload = "useCardRequest";
        }
        if (message.useCardResponse != null && message.hasOwnProperty("useCardResponse")) {
            object.useCardResponse = $root.S2CUseCardResponse.toObject(message.useCardResponse, options);
            if (options.oneofs)
                object.payload = "useCardResponse";
        }
        if (message.useCardNotification != null && message.hasOwnProperty("useCardNotification")) {
            object.useCardNotification = $root.S2CUseCardNotification.toObject(message.useCardNotification, options);
            if (options.oneofs)
                object.payload = "useCardNotification";
        }
        if (message.equipCardNotification != null && message.hasOwnProperty("equipCardNotification")) {
            object.equipCardNotification = $root.S2CEquipCardNotification.toObject(message.equipCardNotification, options);
            if (options.oneofs)
                object.payload = "equipCardNotification";
        }
        if (message.cardEffectNotification != null && message.hasOwnProperty("cardEffectNotification")) {
            object.cardEffectNotification = $root.S2CCardEffectNotification.toObject(message.cardEffectNotification, options);
            if (options.oneofs)
                object.payload = "cardEffectNotification";
        }
        if (message.fleaMarketNotification != null && message.hasOwnProperty("fleaMarketNotification")) {
            object.fleaMarketNotification = $root.S2CFleaMarketNotification.toObject(message.fleaMarketNotification, options);
            if (options.oneofs)
                object.payload = "fleaMarketNotification";
        }
        if (message.fleaMarketPickRequest != null && message.hasOwnProperty("fleaMarketPickRequest")) {
            object.fleaMarketPickRequest = $root.C2SFleaMarketPickRequest.toObject(message.fleaMarketPickRequest, options);
            if (options.oneofs)
                object.payload = "fleaMarketPickRequest";
        }
        if (message.fleaMarketPickResponse != null && message.hasOwnProperty("fleaMarketPickResponse")) {
            object.fleaMarketPickResponse = $root.S2CFleaMarketPickResponse.toObject(message.fleaMarketPickResponse, options);
            if (options.oneofs)
                object.payload = "fleaMarketPickResponse";
        }
        if (message.userUpdateNotification != null && message.hasOwnProperty("userUpdateNotification")) {
            object.userUpdateNotification = $root.S2CUserUpdateNotification.toObject(message.userUpdateNotification, options);
            if (options.oneofs)
                object.payload = "userUpdateNotification";
        }
        if (message.phaseUpdateNotification != null && message.hasOwnProperty("phaseUpdateNotification")) {
            object.phaseUpdateNotification = $root.S2CPhaseUpdateNotification.toObject(message.phaseUpdateNotification, options);
            if (options.oneofs)
                object.payload = "phaseUpdateNotification";
        }
        if (message.reactionRequest != null && message.hasOwnProperty("reactionRequest")) {
            object.reactionRequest = $root.C2SReactionRequest.toObject(message.reactionRequest, options);
            if (options.oneofs)
                object.payload = "reactionRequest";
        }
        if (message.reactionResponse != null && message.hasOwnProperty("reactionResponse")) {
            object.reactionResponse = $root.S2CReactionResponse.toObject(message.reactionResponse, options);
            if (options.oneofs)
                object.payload = "reactionResponse";
        }
        if (message.destroyCardRequest != null && message.hasOwnProperty("destroyCardRequest")) {
            object.destroyCardRequest = $root.C2SDestroyCardRequest.toObject(message.destroyCardRequest, options);
            if (options.oneofs)
                object.payload = "destroyCardRequest";
        }
        if (message.destroyCardResponse != null && message.hasOwnProperty("destroyCardResponse")) {
            object.destroyCardResponse = $root.S2CDestroyCardResponse.toObject(message.destroyCardResponse, options);
            if (options.oneofs)
                object.payload = "destroyCardResponse";
        }
        if (message.gameEndNotification != null && message.hasOwnProperty("gameEndNotification")) {
            object.gameEndNotification = $root.S2CGameEndNotification.toObject(message.gameEndNotification, options);
            if (options.oneofs)
                object.payload = "gameEndNotification";
        }
        if (message.cardSelectRequest != null && message.hasOwnProperty("cardSelectRequest")) {
            object.cardSelectRequest = $root.C2SCardSelectRequest.toObject(message.cardSelectRequest, options);
            if (options.oneofs)
                object.payload = "cardSelectRequest";
        }
        if (message.cardSelectResponse != null && message.hasOwnProperty("cardSelectResponse")) {
            object.cardSelectResponse = $root.S2CCardSelectResponse.toObject(message.cardSelectResponse, options);
            if (options.oneofs)
                object.payload = "cardSelectResponse";
        }
        if (message.passDebuffRequest != null && message.hasOwnProperty("passDebuffRequest")) {
            object.passDebuffRequest = $root.C2SPassDebuffRequest.toObject(message.passDebuffRequest, options);
            if (options.oneofs)
                object.payload = "passDebuffRequest";
        }
        if (message.passDebuffResponse != null && message.hasOwnProperty("passDebuffResponse")) {
            object.passDebuffResponse = $root.S2CPassDebuffResponse.toObject(message.passDebuffResponse, options);
            if (options.oneofs)
                object.payload = "passDebuffResponse";
        }
        if (message.warningNotification != null && message.hasOwnProperty("warningNotification")) {
            object.warningNotification = $root.S2CWarningNotification.toObject(message.warningNotification, options);
            if (options.oneofs)
                object.payload = "warningNotification";
        }
        if (message.animationNotification != null && message.hasOwnProperty("animationNotification")) {
            object.animationNotification = $root.S2CAnimationNotification.toObject(message.animationNotification, options);
            if (options.oneofs)
                object.payload = "animationNotification";
        }
        return object;
    };

    /**
     * Converts this GamePacket to JSON.
     * @function toJSON
     * @memberof GamePacket
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    GamePacket.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for GamePacket
     * @function getTypeUrl
     * @memberof GamePacket
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    GamePacket.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/GamePacket";
    };

    return GamePacket;
})();

/**
 * GlobalFailCode enum.
 * @exports GlobalFailCode
 * @enum {number}
 * @property {number} NONE_FAILCODE=0 NONE_FAILCODE value
 * @property {number} UNKNOWN_ERROR=1 UNKNOWN_ERROR value
 * @property {number} INVALID_REQUEST=2 INVALID_REQUEST value
 * @property {number} AUTHENTICATION_FAILED=3 AUTHENTICATION_FAILED value
 * @property {number} CREATE_ROOM_FAILED=4 CREATE_ROOM_FAILED value
 * @property {number} JOIN_ROOM_FAILED=5 JOIN_ROOM_FAILED value
 * @property {number} LEAVE_ROOM_FAILED=6 LEAVE_ROOM_FAILED value
 * @property {number} REGISTER_FAILED=7 REGISTER_FAILED value
 * @property {number} ROOM_NOT_FOUND=8 ROOM_NOT_FOUND value
 * @property {number} CHARACTER_NOT_FOUND=9 CHARACTER_NOT_FOUND value
 * @property {number} CHARACTER_STATE_ERROR=10 CHARACTER_STATE_ERROR value
 * @property {number} CHARACTER_NO_CARD=11 CHARACTER_NO_CARD value
 * @property {number} INVALID_ROOM_STATE=12 INVALID_ROOM_STATE value
 * @property {number} NOT_ROOM_OWNER=13 NOT_ROOM_OWNER value
 * @property {number} ALREADY_USED_BBANG=14 ALREADY_USED_BBANG value
 * @property {number} INVALID_PHASE=15 INVALID_PHASE value
 * @property {number} CHARACTER_CONTAINED=16 CHARACTER_CONTAINED value
 */
$root.GlobalFailCode = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "NONE_FAILCODE"] = 0;
    values[valuesById[1] = "UNKNOWN_ERROR"] = 1;
    values[valuesById[2] = "INVALID_REQUEST"] = 2;
    values[valuesById[3] = "AUTHENTICATION_FAILED"] = 3;
    values[valuesById[4] = "CREATE_ROOM_FAILED"] = 4;
    values[valuesById[5] = "JOIN_ROOM_FAILED"] = 5;
    values[valuesById[6] = "LEAVE_ROOM_FAILED"] = 6;
    values[valuesById[7] = "REGISTER_FAILED"] = 7;
    values[valuesById[8] = "ROOM_NOT_FOUND"] = 8;
    values[valuesById[9] = "CHARACTER_NOT_FOUND"] = 9;
    values[valuesById[10] = "CHARACTER_STATE_ERROR"] = 10;
    values[valuesById[11] = "CHARACTER_NO_CARD"] = 11;
    values[valuesById[12] = "INVALID_ROOM_STATE"] = 12;
    values[valuesById[13] = "NOT_ROOM_OWNER"] = 13;
    values[valuesById[14] = "ALREADY_USED_BBANG"] = 14;
    values[valuesById[15] = "INVALID_PHASE"] = 15;
    values[valuesById[16] = "CHARACTER_CONTAINED"] = 16;
    return values;
})();

/**
 * WarningType enum.
 * @exports WarningType
 * @enum {number}
 * @property {number} NO_WARNING=0 NO_WARNING value
 * @property {number} BOMB_WANING=1 BOMB_WANING value
 */
$root.WarningType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "NO_WARNING"] = 0;
    values[valuesById[1] = "BOMB_WANING"] = 1;
    return values;
})();

/**
 * WinType enum.
 * @exports WinType
 * @enum {number}
 * @property {number} TARGET_AND_BODYGUARD_WIN=0 TARGET_AND_BODYGUARD_WIN value
 * @property {number} HITMAN_WIN=1 HITMAN_WIN value
 * @property {number} PSYCHOPATH_WIN=2 PSYCHOPATH_WIN value
 */
$root.WinType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "TARGET_AND_BODYGUARD_WIN"] = 0;
    values[valuesById[1] = "HITMAN_WIN"] = 1;
    values[valuesById[2] = "PSYCHOPATH_WIN"] = 2;
    return values;
})();

/**
 * CharacterType enum.
 * @exports CharacterType
 * @enum {number}
 * @property {number} NONE_CHARACTER=0 NONE_CHARACTER value
 * @property {number} RED=1 RED value
 * @property {number} BLUE=2 BLUE value
 * @property {number} SHARK=3 SHARK value
 * @property {number} KNIGHT=4 KNIGHT value
 * @property {number} MALANG=5 MALANG value
 * @property {number} DINO=6 DINO value
 * @property {number} FROGGY=7 FROGGY value
 * @property {number} PINK=8 PINK value
 * @property {number} SWIM_GLASSES=9 SWIM_GLASSES value
 * @property {number} MASK=10 MASK value
 * @property {number} SLIME=11 SLIME value
 * @property {number} DINOSAUR=12 DINOSAUR value
 * @property {number} PINK_SLIME=13 PINK_SLIME value
 */
$root.CharacterType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "NONE_CHARACTER"] = 0;
    values[valuesById[1] = "RED"] = 1;
    values[valuesById[2] = "BLUE"] = 2;
    values[valuesById[3] = "SHARK"] = 3;
    values[valuesById[4] = "KNIGHT"] = 4;
    values[valuesById[5] = "MALANG"] = 5;
    values[valuesById[6] = "DINO"] = 6;
    values[valuesById[7] = "FROGGY"] = 7;
    values[valuesById[8] = "PINK"] = 8;
    values[valuesById[9] = "SWIM_GLASSES"] = 9;
    values[valuesById[10] = "MASK"] = 10;
    values[valuesById[11] = "SLIME"] = 11;
    values[valuesById[12] = "DINOSAUR"] = 12;
    values[valuesById[13] = "PINK_SLIME"] = 13;
    return values;
})();

/**
 * CharacterStateType enum.
 * @exports CharacterStateType
 * @enum {number}
 * @property {number} NONE_CHARACTER_STATE=0 NONE_CHARACTER_STATE value
 * @property {number} BBANG_SHOOTER=1 BBANG_SHOOTER value
 * @property {number} BBANG_TARGET=2 BBANG_TARGET value
 * @property {number} DEATH_MATCH_STATE=3 DEATH_MATCH_STATE value
 * @property {number} DEATH_MATCH_TURN_STATE=4 DEATH_MATCH_TURN_STATE value
 * @property {number} FLEA_MARKET_TURN=5 FLEA_MARKET_TURN value
 * @property {number} FLEA_MARKET_WAIT=6 FLEA_MARKET_WAIT value
 * @property {number} GUERRILLA_SHOOTER=7 GUERRILLA_SHOOTER value
 * @property {number} GUERRILLA_TARGET=8 GUERRILLA_TARGET value
 * @property {number} BIG_BBANG_SHOOTER=9 BIG_BBANG_SHOOTER value
 * @property {number} BIG_BBANG_TARGET=10 BIG_BBANG_TARGET value
 * @property {number} ABSORBING=11 ABSORBING value
 * @property {number} ABSORB_TARGET=12 ABSORB_TARGET value
 * @property {number} HALLUCINATING=13 HALLUCINATING value
 * @property {number} HALLUCINATION_TARGET=14 HALLUCINATION_TARGET value
 * @property {number} CONTAINED=15 CONTAINED value
 */
$root.CharacterStateType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "NONE_CHARACTER_STATE"] = 0;
    values[valuesById[1] = "BBANG_SHOOTER"] = 1;
    values[valuesById[2] = "BBANG_TARGET"] = 2;
    values[valuesById[3] = "DEATH_MATCH_STATE"] = 3;
    values[valuesById[4] = "DEATH_MATCH_TURN_STATE"] = 4;
    values[valuesById[5] = "FLEA_MARKET_TURN"] = 5;
    values[valuesById[6] = "FLEA_MARKET_WAIT"] = 6;
    values[valuesById[7] = "GUERRILLA_SHOOTER"] = 7;
    values[valuesById[8] = "GUERRILLA_TARGET"] = 8;
    values[valuesById[9] = "BIG_BBANG_SHOOTER"] = 9;
    values[valuesById[10] = "BIG_BBANG_TARGET"] = 10;
    values[valuesById[11] = "ABSORBING"] = 11;
    values[valuesById[12] = "ABSORB_TARGET"] = 12;
    values[valuesById[13] = "HALLUCINATING"] = 13;
    values[valuesById[14] = "HALLUCINATION_TARGET"] = 14;
    values[valuesById[15] = "CONTAINED"] = 15;
    return values;
})();

/**
 * CardType enum.
 * @exports CardType
 * @enum {number}
 * @property {number} NONE=0 NONE value
 * @property {number} BBANG=1 BBANG value
 * @property {number} BIG_BBANG=2 BIG_BBANG value
 * @property {number} SHIELD=3 SHIELD value
 * @property {number} VACCINE=4 VACCINE value
 * @property {number} CALL_119=5 CALL_119 value
 * @property {number} DEATH_MATCH=6 DEATH_MATCH value
 * @property {number} GUERRILLA=7 GUERRILLA value
 * @property {number} ABSORB=8 ABSORB value
 * @property {number} HALLUCINATION=9 HALLUCINATION value
 * @property {number} FLEA_MARKET=10 FLEA_MARKET value
 * @property {number} MATURED_SAVINGS=11 MATURED_SAVINGS value
 * @property {number} WIN_LOTTERY=12 WIN_LOTTERY value
 * @property {number} SNIPER_GUN=13 SNIPER_GUN value
 * @property {number} HAND_GUN=14 HAND_GUN value
 * @property {number} DESERT_EAGLE=15 DESERT_EAGLE value
 * @property {number} AUTO_RIFLE=16 AUTO_RIFLE value
 * @property {number} LASER_POINTER=17 LASER_POINTER value
 * @property {number} RADAR=18 RADAR value
 * @property {number} AUTO_SHIELD=19 AUTO_SHIELD value
 * @property {number} STEALTH_SUIT=20 STEALTH_SUIT value
 * @property {number} CONTAINMENT_UNIT=21 CONTAINMENT_UNIT value
 * @property {number} SATELLITE_TARGET=22 SATELLITE_TARGET value
 * @property {number} BOMB=23 BOMB value
 */
$root.CardType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "NONE"] = 0;
    values[valuesById[1] = "BBANG"] = 1;
    values[valuesById[2] = "BIG_BBANG"] = 2;
    values[valuesById[3] = "SHIELD"] = 3;
    values[valuesById[4] = "VACCINE"] = 4;
    values[valuesById[5] = "CALL_119"] = 5;
    values[valuesById[6] = "DEATH_MATCH"] = 6;
    values[valuesById[7] = "GUERRILLA"] = 7;
    values[valuesById[8] = "ABSORB"] = 8;
    values[valuesById[9] = "HALLUCINATION"] = 9;
    values[valuesById[10] = "FLEA_MARKET"] = 10;
    values[valuesById[11] = "MATURED_SAVINGS"] = 11;
    values[valuesById[12] = "WIN_LOTTERY"] = 12;
    values[valuesById[13] = "SNIPER_GUN"] = 13;
    values[valuesById[14] = "HAND_GUN"] = 14;
    values[valuesById[15] = "DESERT_EAGLE"] = 15;
    values[valuesById[16] = "AUTO_RIFLE"] = 16;
    values[valuesById[17] = "LASER_POINTER"] = 17;
    values[valuesById[18] = "RADAR"] = 18;
    values[valuesById[19] = "AUTO_SHIELD"] = 19;
    values[valuesById[20] = "STEALTH_SUIT"] = 20;
    values[valuesById[21] = "CONTAINMENT_UNIT"] = 21;
    values[valuesById[22] = "SATELLITE_TARGET"] = 22;
    values[valuesById[23] = "BOMB"] = 23;
    return values;
})();

/**
 * RoleType enum.
 * @exports RoleType
 * @enum {number}
 * @property {number} NONE_ROLE=0 NONE_ROLE value
 * @property {number} TARGET=1 TARGET value
 * @property {number} BODYGUARD=2 BODYGUARD value
 * @property {number} HITMAN=3 HITMAN value
 * @property {number} PSYCHOPATH=4 PSYCHOPATH value
 */
$root.RoleType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "NONE_ROLE"] = 0;
    values[valuesById[1] = "TARGET"] = 1;
    values[valuesById[2] = "BODYGUARD"] = 2;
    values[valuesById[3] = "HITMAN"] = 3;
    values[valuesById[4] = "PSYCHOPATH"] = 4;
    return values;
})();

/**
 * RoomStateType enum.
 * @exports RoomStateType
 * @enum {number}
 * @property {number} WAIT=0 WAIT value
 * @property {number} PREPARE=1 PREPARE value
 * @property {number} INGAME=2 INGAME value
 */
$root.RoomStateType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "WAIT"] = 0;
    values[valuesById[1] = "PREPARE"] = 1;
    values[valuesById[2] = "INGAME"] = 2;
    return values;
})();

/**
 * PhaseType enum.
 * @exports PhaseType
 * @enum {number}
 * @property {number} NONE_PHASE=0 NONE_PHASE value
 * @property {number} DAY=1 DAY value
 * @property {number} EVENING=2 EVENING value
 * @property {number} END=3 END value
 */
$root.PhaseType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "NONE_PHASE"] = 0;
    values[valuesById[1] = "DAY"] = 1;
    values[valuesById[2] = "EVENING"] = 2;
    values[valuesById[3] = "END"] = 3;
    return values;
})();

/**
 * ReactionType enum.
 * @exports ReactionType
 * @enum {number}
 * @property {number} NONE_REACTION=0 NONE_REACTION value
 * @property {number} NOT_USE_CARD=1 NOT_USE_CARD value
 */
$root.ReactionType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "NONE_REACTION"] = 0;
    values[valuesById[1] = "NOT_USE_CARD"] = 1;
    return values;
})();

/**
 * SelectCardType enum.
 * @exports SelectCardType
 * @enum {number}
 * @property {number} HAND=0 HAND value
 * @property {number} EQUIP=1 EQUIP value
 * @property {number} WEAPON=2 WEAPON value
 * @property {number} DEBUFF=3 DEBUFF value
 */
$root.SelectCardType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "HAND"] = 0;
    values[valuesById[1] = "EQUIP"] = 1;
    values[valuesById[2] = "WEAPON"] = 2;
    values[valuesById[3] = "DEBUFF"] = 3;
    return values;
})();

/**
 * AnimationType enum.
 * @exports AnimationType
 * @enum {number}
 * @property {number} NO_ANIMATION=0 NO_ANIMATION value
 * @property {number} SATELLITE_TARGET_ANIMATION=1 SATELLITE_TARGET_ANIMATION value
 * @property {number} BOMB_ANIMATION=2 BOMB_ANIMATION value
 */
$root.AnimationType = (function() {
    var valuesById = {}, values = Object.create(valuesById);
    values[valuesById[0] = "NO_ANIMATION"] = 0;
    values[valuesById[1] = "SATELLITE_TARGET_ANIMATION"] = 1;
    values[valuesById[2] = "BOMB_ANIMATION"] = 2;
    return values;
})();

module.exports = $root;
