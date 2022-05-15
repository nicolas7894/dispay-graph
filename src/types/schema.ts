// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Deposit extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("user", Value.fromString(""));
    this.set("quantity", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("token", Value.fromBytes(Bytes.empty()));
    this.set("time", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Deposit entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Deposit must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Deposit", id.toString(), this);
    }
  }

  static load(id: string): Deposit | null {
    return changetype<Deposit | null>(store.get("Deposit", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get user(): string {
    let value = this.get("user");
    return value!.toString();
  }

  set user(value: string) {
    this.set("user", Value.fromString(value));
  }

  get quantity(): BigDecimal {
    let value = this.get("quantity");
    return value!.toBigDecimal();
  }

  set quantity(value: BigDecimal) {
    this.set("quantity", Value.fromBigDecimal(value));
  }

  get token(): Bytes {
    let value = this.get("token");
    return value!.toBytes();
  }

  set token(value: Bytes) {
    this.set("token", Value.fromBytes(value));
  }

  get time(): BigInt {
    let value = this.get("time");
    return value!.toBigInt();
  }

  set time(value: BigInt) {
    this.set("time", Value.fromBigInt(value));
  }
}

export class User extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("address", Value.fromBytes(Bytes.empty()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save User entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type User must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("User", id.toString(), this);
    }
  }

  static load(id: string): User | null {
    return changetype<User | null>(store.get("User", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value!.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get groups(): Array<string> | null {
    let value = this.get("groups");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toStringArray();
    }
  }

  set groups(value: Array<string> | null) {
    if (!value) {
      this.unset("groups");
    } else {
      this.set("groups", Value.fromStringArray(<Array<string>>value));
    }
  }
}

export class UserGroup extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("user", Value.fromString(""));
    this.set("group", Value.fromString(""));
    this.set("deposits", Value.fromStringArray(new Array(0)));
    this.set("totalDeposited", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("totalMinted", Value.fromBigDecimal(BigDecimal.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save UserGroup entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type UserGroup must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("UserGroup", id.toString(), this);
    }
  }

  static load(id: string): UserGroup | null {
    return changetype<UserGroup | null>(store.get("UserGroup", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get user(): string {
    let value = this.get("user");
    return value!.toString();
  }

  set user(value: string) {
    this.set("user", Value.fromString(value));
  }

  get group(): string {
    let value = this.get("group");
    return value!.toString();
  }

  set group(value: string) {
    this.set("group", Value.fromString(value));
  }

  get deposits(): Array<string> {
    let value = this.get("deposits");
    return value!.toStringArray();
  }

  set deposits(value: Array<string>) {
    this.set("deposits", Value.fromStringArray(value));
  }

  get totalDeposited(): BigDecimal {
    let value = this.get("totalDeposited");
    return value!.toBigDecimal();
  }

  set totalDeposited(value: BigDecimal) {
    this.set("totalDeposited", Value.fromBigDecimal(value));
  }

  get totalMinted(): BigDecimal {
    let value = this.get("totalMinted");
    return value!.toBigDecimal();
  }

  set totalMinted(value: BigDecimal) {
    this.set("totalMinted", Value.fromBigDecimal(value));
  }
}

export class Group extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("createdAt", Value.fromBigInt(BigInt.zero()));
    this.set("refId", Value.fromString(""));
    this.set("address", Value.fromBytes(Bytes.empty()));
    this.set("owner", Value.fromBytes(Bytes.empty()));
    this.set("groupName", Value.fromString(""));
    this.set("groupSymbol", Value.fromString(""));
    this.set("depositToken", Value.fromBytes(Bytes.empty()));
    this.set("depositEndDate", Value.fromBigInt(BigInt.zero()));
    this.set("depositLimit", Value.fromBigInt(BigInt.zero()));
    this.set("treasureAddress", Value.fromBytes(Bytes.empty()));
    this.set("totalDeposited", Value.fromBigDecimal(BigDecimal.zero()));
    this.set("totalMinted", Value.fromBigDecimal(BigDecimal.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Group entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Group must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Group", id.toString(), this);
    }
  }

  static load(id: string): Group | null {
    return changetype<Group | null>(store.get("Group", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get createdAt(): BigInt {
    let value = this.get("createdAt");
    return value!.toBigInt();
  }

  set createdAt(value: BigInt) {
    this.set("createdAt", Value.fromBigInt(value));
  }

  get refId(): string {
    let value = this.get("refId");
    return value!.toString();
  }

  set refId(value: string) {
    this.set("refId", Value.fromString(value));
  }

  get address(): Bytes {
    let value = this.get("address");
    return value!.toBytes();
  }

  set address(value: Bytes) {
    this.set("address", Value.fromBytes(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value!.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get groupName(): string {
    let value = this.get("groupName");
    return value!.toString();
  }

  set groupName(value: string) {
    this.set("groupName", Value.fromString(value));
  }

  get groupSymbol(): string {
    let value = this.get("groupSymbol");
    return value!.toString();
  }

  set groupSymbol(value: string) {
    this.set("groupSymbol", Value.fromString(value));
  }

  get depositToken(): Bytes {
    let value = this.get("depositToken");
    return value!.toBytes();
  }

  set depositToken(value: Bytes) {
    this.set("depositToken", Value.fromBytes(value));
  }

  get depositEndDate(): BigInt {
    let value = this.get("depositEndDate");
    return value!.toBigInt();
  }

  set depositEndDate(value: BigInt) {
    this.set("depositEndDate", Value.fromBigInt(value));
  }

  get depositLimit(): BigInt {
    let value = this.get("depositLimit");
    return value!.toBigInt();
  }

  set depositLimit(value: BigInt) {
    this.set("depositLimit", Value.fromBigInt(value));
  }

  get treasureAddress(): Bytes {
    let value = this.get("treasureAddress");
    return value!.toBytes();
  }

  set treasureAddress(value: Bytes) {
    this.set("treasureAddress", Value.fromBytes(value));
  }

  get totalDeposited(): BigDecimal {
    let value = this.get("totalDeposited");
    return value!.toBigDecimal();
  }

  set totalDeposited(value: BigDecimal) {
    this.set("totalDeposited", Value.fromBigDecimal(value));
  }

  get totalMinted(): BigDecimal {
    let value = this.get("totalMinted");
    return value!.toBigDecimal();
  }

  set totalMinted(value: BigDecimal) {
    this.set("totalMinted", Value.fromBigDecimal(value));
  }

  get members(): Array<string> {
    let value = this.get("members");
    return value!.toStringArray();
  }

  set members(value: Array<string>) {
    this.set("members", Value.fromStringArray(value));
  }
}
