
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model ShiftAssignment
 * 
 */
export type ShiftAssignment = $Result.DefaultSelection<Prisma.$ShiftAssignmentPayload>
/**
 * Model Shift
 * 
 */
export type Shift = $Result.DefaultSelection<Prisma.$ShiftPayload>
/**
 * Model Availability
 * 
 */
export type Availability = $Result.DefaultSelection<Prisma.$AvailabilityPayload>
/**
 * Model ShiftSwapRequest
 * 
 */
export type ShiftSwapRequest = $Result.DefaultSelection<Prisma.$ShiftSwapRequestPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.shiftAssignment`: Exposes CRUD operations for the **ShiftAssignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShiftAssignments
    * const shiftAssignments = await prisma.shiftAssignment.findMany()
    * ```
    */
  get shiftAssignment(): Prisma.ShiftAssignmentDelegate<ExtArgs>;

  /**
   * `prisma.shift`: Exposes CRUD operations for the **Shift** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shifts
    * const shifts = await prisma.shift.findMany()
    * ```
    */
  get shift(): Prisma.ShiftDelegate<ExtArgs>;

  /**
   * `prisma.availability`: Exposes CRUD operations for the **Availability** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Availabilities
    * const availabilities = await prisma.availability.findMany()
    * ```
    */
  get availability(): Prisma.AvailabilityDelegate<ExtArgs>;

  /**
   * `prisma.shiftSwapRequest`: Exposes CRUD operations for the **ShiftSwapRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ShiftSwapRequests
    * const shiftSwapRequests = await prisma.shiftSwapRequest.findMany()
    * ```
    */
  get shiftSwapRequest(): Prisma.ShiftSwapRequestDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.11.0
   * Query Engine version: efd2449663b3d73d637ea1fd226bafbcf45b3102
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    ShiftAssignment: 'ShiftAssignment',
    Shift: 'Shift',
    Availability: 'Availability',
    ShiftSwapRequest: 'ShiftSwapRequest'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'shiftAssignment' | 'shift' | 'availability' | 'shiftSwapRequest'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      ShiftAssignment: {
        payload: Prisma.$ShiftAssignmentPayload<ExtArgs>
        fields: Prisma.ShiftAssignmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShiftAssignmentFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShiftAssignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShiftAssignmentFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShiftAssignmentPayload>
          }
          findFirst: {
            args: Prisma.ShiftAssignmentFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShiftAssignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShiftAssignmentFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShiftAssignmentPayload>
          }
          findMany: {
            args: Prisma.ShiftAssignmentFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShiftAssignmentPayload>[]
          }
          create: {
            args: Prisma.ShiftAssignmentCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShiftAssignmentPayload>
          }
          delete: {
            args: Prisma.ShiftAssignmentDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShiftAssignmentPayload>
          }
          update: {
            args: Prisma.ShiftAssignmentUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShiftAssignmentPayload>
          }
          deleteMany: {
            args: Prisma.ShiftAssignmentDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ShiftAssignmentUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ShiftAssignmentUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShiftAssignmentPayload>
          }
          aggregate: {
            args: Prisma.ShiftAssignmentAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateShiftAssignment>
          }
          groupBy: {
            args: Prisma.ShiftAssignmentGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ShiftAssignmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShiftAssignmentCountArgs<ExtArgs>,
            result: $Utils.Optional<ShiftAssignmentCountAggregateOutputType> | number
          }
        }
      }
      Shift: {
        payload: Prisma.$ShiftPayload<ExtArgs>
        fields: Prisma.ShiftFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShiftFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShiftFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload>
          }
          findFirst: {
            args: Prisma.ShiftFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShiftFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload>
          }
          findMany: {
            args: Prisma.ShiftFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload>[]
          }
          create: {
            args: Prisma.ShiftCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload>
          }
          delete: {
            args: Prisma.ShiftDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload>
          }
          update: {
            args: Prisma.ShiftUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload>
          }
          deleteMany: {
            args: Prisma.ShiftDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ShiftUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ShiftUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShiftPayload>
          }
          aggregate: {
            args: Prisma.ShiftAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateShift>
          }
          groupBy: {
            args: Prisma.ShiftGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ShiftGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShiftCountArgs<ExtArgs>,
            result: $Utils.Optional<ShiftCountAggregateOutputType> | number
          }
        }
      }
      Availability: {
        payload: Prisma.$AvailabilityPayload<ExtArgs>
        fields: Prisma.AvailabilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AvailabilityFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AvailabilityFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          findFirst: {
            args: Prisma.AvailabilityFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AvailabilityFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          findMany: {
            args: Prisma.AvailabilityFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>[]
          }
          create: {
            args: Prisma.AvailabilityCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          delete: {
            args: Prisma.AvailabilityDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          update: {
            args: Prisma.AvailabilityUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          deleteMany: {
            args: Prisma.AvailabilityDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AvailabilityUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AvailabilityUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AvailabilityPayload>
          }
          aggregate: {
            args: Prisma.AvailabilityAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAvailability>
          }
          groupBy: {
            args: Prisma.AvailabilityGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AvailabilityGroupByOutputType>[]
          }
          count: {
            args: Prisma.AvailabilityCountArgs<ExtArgs>,
            result: $Utils.Optional<AvailabilityCountAggregateOutputType> | number
          }
        }
      }
      ShiftSwapRequest: {
        payload: Prisma.$ShiftSwapRequestPayload<ExtArgs>
        fields: Prisma.ShiftSwapRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShiftSwapRequestFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShiftSwapRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShiftSwapRequestFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShiftSwapRequestPayload>
          }
          findFirst: {
            args: Prisma.ShiftSwapRequestFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShiftSwapRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShiftSwapRequestFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShiftSwapRequestPayload>
          }
          findMany: {
            args: Prisma.ShiftSwapRequestFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShiftSwapRequestPayload>[]
          }
          create: {
            args: Prisma.ShiftSwapRequestCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShiftSwapRequestPayload>
          }
          delete: {
            args: Prisma.ShiftSwapRequestDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShiftSwapRequestPayload>
          }
          update: {
            args: Prisma.ShiftSwapRequestUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShiftSwapRequestPayload>
          }
          deleteMany: {
            args: Prisma.ShiftSwapRequestDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ShiftSwapRequestUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ShiftSwapRequestUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ShiftSwapRequestPayload>
          }
          aggregate: {
            args: Prisma.ShiftSwapRequestAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateShiftSwapRequest>
          }
          groupBy: {
            args: Prisma.ShiftSwapRequestGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ShiftSwapRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShiftSwapRequestCountArgs<ExtArgs>,
            result: $Utils.Optional<ShiftSwapRequestCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    assignedShifts: number
    availability: number
    initiatedSwaps: number
    createdShifts: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignedShifts?: boolean | UserCountOutputTypeCountAssignedShiftsArgs
    availability?: boolean | UserCountOutputTypeCountAvailabilityArgs
    initiatedSwaps?: boolean | UserCountOutputTypeCountInitiatedSwapsArgs
    createdShifts?: boolean | UserCountOutputTypeCountCreatedShiftsArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAssignedShiftsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShiftAssignmentWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAvailabilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvailabilityWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInitiatedSwapsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShiftSwapRequestWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedShiftsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShiftWhereInput
  }



  /**
   * Count Type ShiftAssignmentCountOutputType
   */

  export type ShiftAssignmentCountOutputType = {
    swapRequestCurrents: number
    swapRequestWanteds: number
  }

  export type ShiftAssignmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    swapRequestCurrents?: boolean | ShiftAssignmentCountOutputTypeCountSwapRequestCurrentsArgs
    swapRequestWanteds?: boolean | ShiftAssignmentCountOutputTypeCountSwapRequestWantedsArgs
  }

  // Custom InputTypes

  /**
   * ShiftAssignmentCountOutputType without action
   */
  export type ShiftAssignmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftAssignmentCountOutputType
     */
    select?: ShiftAssignmentCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ShiftAssignmentCountOutputType without action
   */
  export type ShiftAssignmentCountOutputTypeCountSwapRequestCurrentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShiftSwapRequestWhereInput
  }


  /**
   * ShiftAssignmentCountOutputType without action
   */
  export type ShiftAssignmentCountOutputTypeCountSwapRequestWantedsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShiftSwapRequestWhereInput
  }



  /**
   * Count Type ShiftCountOutputType
   */

  export type ShiftCountOutputType = {
    assignedTo: number
  }

  export type ShiftCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignedTo?: boolean | ShiftCountOutputTypeCountAssignedToArgs
  }

  // Custom InputTypes

  /**
   * ShiftCountOutputType without action
   */
  export type ShiftCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftCountOutputType
     */
    select?: ShiftCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ShiftCountOutputType without action
   */
  export type ShiftCountOutputTypeCountAssignedToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShiftAssignmentWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    role: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    role: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    role: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    role?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    role?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    role?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    role: string
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    role?: boolean
    assignedShifts?: boolean | User$assignedShiftsArgs<ExtArgs>
    availability?: boolean | User$availabilityArgs<ExtArgs>
    initiatedSwaps?: boolean | User$initiatedSwapsArgs<ExtArgs>
    createdShifts?: boolean | User$createdShiftsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    role?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignedShifts?: boolean | User$assignedShiftsArgs<ExtArgs>
    availability?: boolean | User$availabilityArgs<ExtArgs>
    initiatedSwaps?: boolean | User$initiatedSwapsArgs<ExtArgs>
    createdShifts?: boolean | User$createdShiftsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      assignedShifts: Prisma.$ShiftAssignmentPayload<ExtArgs>[]
      availability: Prisma.$AvailabilityPayload<ExtArgs>[]
      initiatedSwaps: Prisma.$ShiftSwapRequestPayload<ExtArgs>[]
      createdShifts: Prisma.$ShiftPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      role: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    assignedShifts<T extends User$assignedShiftsArgs<ExtArgs> = {}>(args?: Subset<T, User$assignedShiftsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftAssignmentPayload<ExtArgs>, T, 'findMany'> | Null>;

    availability<T extends User$availabilityArgs<ExtArgs> = {}>(args?: Subset<T, User$availabilityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, 'findMany'> | Null>;

    initiatedSwaps<T extends User$initiatedSwapsArgs<ExtArgs> = {}>(args?: Subset<T, User$initiatedSwapsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftSwapRequestPayload<ExtArgs>, T, 'findMany'> | Null>;

    createdShifts<T extends User$createdShiftsArgs<ExtArgs> = {}>(args?: Subset<T, User$createdShiftsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.assignedShifts
   */
  export type User$assignedShiftsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftAssignment
     */
    select?: ShiftAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShiftAssignmentInclude<ExtArgs> | null
    where?: ShiftAssignmentWhereInput
    orderBy?: ShiftAssignmentOrderByWithRelationInput | ShiftAssignmentOrderByWithRelationInput[]
    cursor?: ShiftAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShiftAssignmentScalarFieldEnum | ShiftAssignmentScalarFieldEnum[]
  }


  /**
   * User.availability
   */
  export type User$availabilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AvailabilityInclude<ExtArgs> | null
    where?: AvailabilityWhereInput
    orderBy?: AvailabilityOrderByWithRelationInput | AvailabilityOrderByWithRelationInput[]
    cursor?: AvailabilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AvailabilityScalarFieldEnum | AvailabilityScalarFieldEnum[]
  }


  /**
   * User.initiatedSwaps
   */
  export type User$initiatedSwapsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftSwapRequest
     */
    select?: ShiftSwapRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShiftSwapRequestInclude<ExtArgs> | null
    where?: ShiftSwapRequestWhereInput
    orderBy?: ShiftSwapRequestOrderByWithRelationInput | ShiftSwapRequestOrderByWithRelationInput[]
    cursor?: ShiftSwapRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShiftSwapRequestScalarFieldEnum | ShiftSwapRequestScalarFieldEnum[]
  }


  /**
   * User.createdShifts
   */
  export type User$createdShiftsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShiftInclude<ExtArgs> | null
    where?: ShiftWhereInput
    orderBy?: ShiftOrderByWithRelationInput | ShiftOrderByWithRelationInput[]
    cursor?: ShiftWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShiftScalarFieldEnum | ShiftScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model ShiftAssignment
   */

  export type AggregateShiftAssignment = {
    _count: ShiftAssignmentCountAggregateOutputType | null
    _min: ShiftAssignmentMinAggregateOutputType | null
    _max: ShiftAssignmentMaxAggregateOutputType | null
  }

  export type ShiftAssignmentMinAggregateOutputType = {
    userId: string | null
    shiftId: string | null
    createdAt: Date | null
  }

  export type ShiftAssignmentMaxAggregateOutputType = {
    userId: string | null
    shiftId: string | null
    createdAt: Date | null
  }

  export type ShiftAssignmentCountAggregateOutputType = {
    userId: number
    shiftId: number
    createdAt: number
    _all: number
  }


  export type ShiftAssignmentMinAggregateInputType = {
    userId?: true
    shiftId?: true
    createdAt?: true
  }

  export type ShiftAssignmentMaxAggregateInputType = {
    userId?: true
    shiftId?: true
    createdAt?: true
  }

  export type ShiftAssignmentCountAggregateInputType = {
    userId?: true
    shiftId?: true
    createdAt?: true
    _all?: true
  }

  export type ShiftAssignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShiftAssignment to aggregate.
     */
    where?: ShiftAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShiftAssignments to fetch.
     */
    orderBy?: ShiftAssignmentOrderByWithRelationInput | ShiftAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShiftAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShiftAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShiftAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShiftAssignments
    **/
    _count?: true | ShiftAssignmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShiftAssignmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShiftAssignmentMaxAggregateInputType
  }

  export type GetShiftAssignmentAggregateType<T extends ShiftAssignmentAggregateArgs> = {
        [P in keyof T & keyof AggregateShiftAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShiftAssignment[P]>
      : GetScalarType<T[P], AggregateShiftAssignment[P]>
  }




  export type ShiftAssignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShiftAssignmentWhereInput
    orderBy?: ShiftAssignmentOrderByWithAggregationInput | ShiftAssignmentOrderByWithAggregationInput[]
    by: ShiftAssignmentScalarFieldEnum[] | ShiftAssignmentScalarFieldEnum
    having?: ShiftAssignmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShiftAssignmentCountAggregateInputType | true
    _min?: ShiftAssignmentMinAggregateInputType
    _max?: ShiftAssignmentMaxAggregateInputType
  }

  export type ShiftAssignmentGroupByOutputType = {
    userId: string
    shiftId: string
    createdAt: Date
    _count: ShiftAssignmentCountAggregateOutputType | null
    _min: ShiftAssignmentMinAggregateOutputType | null
    _max: ShiftAssignmentMaxAggregateOutputType | null
  }

  type GetShiftAssignmentGroupByPayload<T extends ShiftAssignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShiftAssignmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShiftAssignmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShiftAssignmentGroupByOutputType[P]>
            : GetScalarType<T[P], ShiftAssignmentGroupByOutputType[P]>
        }
      >
    >


  export type ShiftAssignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    shiftId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    shift?: boolean | ShiftDefaultArgs<ExtArgs>
    swapRequestCurrents?: boolean | ShiftAssignment$swapRequestCurrentsArgs<ExtArgs>
    swapRequestWanteds?: boolean | ShiftAssignment$swapRequestWantedsArgs<ExtArgs>
    _count?: boolean | ShiftAssignmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shiftAssignment"]>

  export type ShiftAssignmentSelectScalar = {
    userId?: boolean
    shiftId?: boolean
    createdAt?: boolean
  }

  export type ShiftAssignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    shift?: boolean | ShiftDefaultArgs<ExtArgs>
    swapRequestCurrents?: boolean | ShiftAssignment$swapRequestCurrentsArgs<ExtArgs>
    swapRequestWanteds?: boolean | ShiftAssignment$swapRequestWantedsArgs<ExtArgs>
    _count?: boolean | ShiftAssignmentCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ShiftAssignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShiftAssignment"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      shift: Prisma.$ShiftPayload<ExtArgs>
      swapRequestCurrents: Prisma.$ShiftSwapRequestPayload<ExtArgs>[]
      swapRequestWanteds: Prisma.$ShiftSwapRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      shiftId: string
      createdAt: Date
    }, ExtArgs["result"]["shiftAssignment"]>
    composites: {}
  }


  type ShiftAssignmentGetPayload<S extends boolean | null | undefined | ShiftAssignmentDefaultArgs> = $Result.GetResult<Prisma.$ShiftAssignmentPayload, S>

  type ShiftAssignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ShiftAssignmentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ShiftAssignmentCountAggregateInputType | true
    }

  export interface ShiftAssignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShiftAssignment'], meta: { name: 'ShiftAssignment' } }
    /**
     * Find zero or one ShiftAssignment that matches the filter.
     * @param {ShiftAssignmentFindUniqueArgs} args - Arguments to find a ShiftAssignment
     * @example
     * // Get one ShiftAssignment
     * const shiftAssignment = await prisma.shiftAssignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ShiftAssignmentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ShiftAssignmentFindUniqueArgs<ExtArgs>>
    ): Prisma__ShiftAssignmentClient<$Result.GetResult<Prisma.$ShiftAssignmentPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ShiftAssignment that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ShiftAssignmentFindUniqueOrThrowArgs} args - Arguments to find a ShiftAssignment
     * @example
     * // Get one ShiftAssignment
     * const shiftAssignment = await prisma.shiftAssignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ShiftAssignmentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ShiftAssignmentFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ShiftAssignmentClient<$Result.GetResult<Prisma.$ShiftAssignmentPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ShiftAssignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftAssignmentFindFirstArgs} args - Arguments to find a ShiftAssignment
     * @example
     * // Get one ShiftAssignment
     * const shiftAssignment = await prisma.shiftAssignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ShiftAssignmentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ShiftAssignmentFindFirstArgs<ExtArgs>>
    ): Prisma__ShiftAssignmentClient<$Result.GetResult<Prisma.$ShiftAssignmentPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ShiftAssignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftAssignmentFindFirstOrThrowArgs} args - Arguments to find a ShiftAssignment
     * @example
     * // Get one ShiftAssignment
     * const shiftAssignment = await prisma.shiftAssignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ShiftAssignmentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ShiftAssignmentFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ShiftAssignmentClient<$Result.GetResult<Prisma.$ShiftAssignmentPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ShiftAssignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftAssignmentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShiftAssignments
     * const shiftAssignments = await prisma.shiftAssignment.findMany()
     * 
     * // Get first 10 ShiftAssignments
     * const shiftAssignments = await prisma.shiftAssignment.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const shiftAssignmentWithUserIdOnly = await prisma.shiftAssignment.findMany({ select: { userId: true } })
     * 
    **/
    findMany<T extends ShiftAssignmentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ShiftAssignmentFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftAssignmentPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ShiftAssignment.
     * @param {ShiftAssignmentCreateArgs} args - Arguments to create a ShiftAssignment.
     * @example
     * // Create one ShiftAssignment
     * const ShiftAssignment = await prisma.shiftAssignment.create({
     *   data: {
     *     // ... data to create a ShiftAssignment
     *   }
     * })
     * 
    **/
    create<T extends ShiftAssignmentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ShiftAssignmentCreateArgs<ExtArgs>>
    ): Prisma__ShiftAssignmentClient<$Result.GetResult<Prisma.$ShiftAssignmentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a ShiftAssignment.
     * @param {ShiftAssignmentDeleteArgs} args - Arguments to delete one ShiftAssignment.
     * @example
     * // Delete one ShiftAssignment
     * const ShiftAssignment = await prisma.shiftAssignment.delete({
     *   where: {
     *     // ... filter to delete one ShiftAssignment
     *   }
     * })
     * 
    **/
    delete<T extends ShiftAssignmentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ShiftAssignmentDeleteArgs<ExtArgs>>
    ): Prisma__ShiftAssignmentClient<$Result.GetResult<Prisma.$ShiftAssignmentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ShiftAssignment.
     * @param {ShiftAssignmentUpdateArgs} args - Arguments to update one ShiftAssignment.
     * @example
     * // Update one ShiftAssignment
     * const shiftAssignment = await prisma.shiftAssignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ShiftAssignmentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ShiftAssignmentUpdateArgs<ExtArgs>>
    ): Prisma__ShiftAssignmentClient<$Result.GetResult<Prisma.$ShiftAssignmentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ShiftAssignments.
     * @param {ShiftAssignmentDeleteManyArgs} args - Arguments to filter ShiftAssignments to delete.
     * @example
     * // Delete a few ShiftAssignments
     * const { count } = await prisma.shiftAssignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ShiftAssignmentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ShiftAssignmentDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShiftAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftAssignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShiftAssignments
     * const shiftAssignment = await prisma.shiftAssignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ShiftAssignmentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ShiftAssignmentUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ShiftAssignment.
     * @param {ShiftAssignmentUpsertArgs} args - Arguments to update or create a ShiftAssignment.
     * @example
     * // Update or create a ShiftAssignment
     * const shiftAssignment = await prisma.shiftAssignment.upsert({
     *   create: {
     *     // ... data to create a ShiftAssignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShiftAssignment we want to update
     *   }
     * })
    **/
    upsert<T extends ShiftAssignmentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ShiftAssignmentUpsertArgs<ExtArgs>>
    ): Prisma__ShiftAssignmentClient<$Result.GetResult<Prisma.$ShiftAssignmentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ShiftAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftAssignmentCountArgs} args - Arguments to filter ShiftAssignments to count.
     * @example
     * // Count the number of ShiftAssignments
     * const count = await prisma.shiftAssignment.count({
     *   where: {
     *     // ... the filter for the ShiftAssignments we want to count
     *   }
     * })
    **/
    count<T extends ShiftAssignmentCountArgs>(
      args?: Subset<T, ShiftAssignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShiftAssignmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShiftAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftAssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShiftAssignmentAggregateArgs>(args: Subset<T, ShiftAssignmentAggregateArgs>): Prisma.PrismaPromise<GetShiftAssignmentAggregateType<T>>

    /**
     * Group by ShiftAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftAssignmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShiftAssignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShiftAssignmentGroupByArgs['orderBy'] }
        : { orderBy?: ShiftAssignmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShiftAssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShiftAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShiftAssignment model
   */
  readonly fields: ShiftAssignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShiftAssignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShiftAssignmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    shift<T extends ShiftDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShiftDefaultArgs<ExtArgs>>): Prisma__ShiftClient<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    swapRequestCurrents<T extends ShiftAssignment$swapRequestCurrentsArgs<ExtArgs> = {}>(args?: Subset<T, ShiftAssignment$swapRequestCurrentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftSwapRequestPayload<ExtArgs>, T, 'findMany'> | Null>;

    swapRequestWanteds<T extends ShiftAssignment$swapRequestWantedsArgs<ExtArgs> = {}>(args?: Subset<T, ShiftAssignment$swapRequestWantedsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftSwapRequestPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ShiftAssignment model
   */ 
  interface ShiftAssignmentFieldRefs {
    readonly userId: FieldRef<"ShiftAssignment", 'String'>
    readonly shiftId: FieldRef<"ShiftAssignment", 'String'>
    readonly createdAt: FieldRef<"ShiftAssignment", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * ShiftAssignment findUnique
   */
  export type ShiftAssignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftAssignment
     */
    select?: ShiftAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShiftAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which ShiftAssignment to fetch.
     */
    where: ShiftAssignmentWhereUniqueInput
  }


  /**
   * ShiftAssignment findUniqueOrThrow
   */
  export type ShiftAssignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftAssignment
     */
    select?: ShiftAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShiftAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which ShiftAssignment to fetch.
     */
    where: ShiftAssignmentWhereUniqueInput
  }


  /**
   * ShiftAssignment findFirst
   */
  export type ShiftAssignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftAssignment
     */
    select?: ShiftAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShiftAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which ShiftAssignment to fetch.
     */
    where?: ShiftAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShiftAssignments to fetch.
     */
    orderBy?: ShiftAssignmentOrderByWithRelationInput | ShiftAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShiftAssignments.
     */
    cursor?: ShiftAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShiftAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShiftAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShiftAssignments.
     */
    distinct?: ShiftAssignmentScalarFieldEnum | ShiftAssignmentScalarFieldEnum[]
  }


  /**
   * ShiftAssignment findFirstOrThrow
   */
  export type ShiftAssignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftAssignment
     */
    select?: ShiftAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShiftAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which ShiftAssignment to fetch.
     */
    where?: ShiftAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShiftAssignments to fetch.
     */
    orderBy?: ShiftAssignmentOrderByWithRelationInput | ShiftAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShiftAssignments.
     */
    cursor?: ShiftAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShiftAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShiftAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShiftAssignments.
     */
    distinct?: ShiftAssignmentScalarFieldEnum | ShiftAssignmentScalarFieldEnum[]
  }


  /**
   * ShiftAssignment findMany
   */
  export type ShiftAssignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftAssignment
     */
    select?: ShiftAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShiftAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which ShiftAssignments to fetch.
     */
    where?: ShiftAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShiftAssignments to fetch.
     */
    orderBy?: ShiftAssignmentOrderByWithRelationInput | ShiftAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShiftAssignments.
     */
    cursor?: ShiftAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShiftAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShiftAssignments.
     */
    skip?: number
    distinct?: ShiftAssignmentScalarFieldEnum | ShiftAssignmentScalarFieldEnum[]
  }


  /**
   * ShiftAssignment create
   */
  export type ShiftAssignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftAssignment
     */
    select?: ShiftAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShiftAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to create a ShiftAssignment.
     */
    data: XOR<ShiftAssignmentCreateInput, ShiftAssignmentUncheckedCreateInput>
  }


  /**
   * ShiftAssignment update
   */
  export type ShiftAssignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftAssignment
     */
    select?: ShiftAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShiftAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to update a ShiftAssignment.
     */
    data: XOR<ShiftAssignmentUpdateInput, ShiftAssignmentUncheckedUpdateInput>
    /**
     * Choose, which ShiftAssignment to update.
     */
    where: ShiftAssignmentWhereUniqueInput
  }


  /**
   * ShiftAssignment updateMany
   */
  export type ShiftAssignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShiftAssignments.
     */
    data: XOR<ShiftAssignmentUpdateManyMutationInput, ShiftAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which ShiftAssignments to update
     */
    where?: ShiftAssignmentWhereInput
  }


  /**
   * ShiftAssignment upsert
   */
  export type ShiftAssignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftAssignment
     */
    select?: ShiftAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShiftAssignmentInclude<ExtArgs> | null
    /**
     * The filter to search for the ShiftAssignment to update in case it exists.
     */
    where: ShiftAssignmentWhereUniqueInput
    /**
     * In case the ShiftAssignment found by the `where` argument doesn't exist, create a new ShiftAssignment with this data.
     */
    create: XOR<ShiftAssignmentCreateInput, ShiftAssignmentUncheckedCreateInput>
    /**
     * In case the ShiftAssignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShiftAssignmentUpdateInput, ShiftAssignmentUncheckedUpdateInput>
  }


  /**
   * ShiftAssignment delete
   */
  export type ShiftAssignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftAssignment
     */
    select?: ShiftAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShiftAssignmentInclude<ExtArgs> | null
    /**
     * Filter which ShiftAssignment to delete.
     */
    where: ShiftAssignmentWhereUniqueInput
  }


  /**
   * ShiftAssignment deleteMany
   */
  export type ShiftAssignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShiftAssignments to delete
     */
    where?: ShiftAssignmentWhereInput
  }


  /**
   * ShiftAssignment.swapRequestCurrents
   */
  export type ShiftAssignment$swapRequestCurrentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftSwapRequest
     */
    select?: ShiftSwapRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShiftSwapRequestInclude<ExtArgs> | null
    where?: ShiftSwapRequestWhereInput
    orderBy?: ShiftSwapRequestOrderByWithRelationInput | ShiftSwapRequestOrderByWithRelationInput[]
    cursor?: ShiftSwapRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShiftSwapRequestScalarFieldEnum | ShiftSwapRequestScalarFieldEnum[]
  }


  /**
   * ShiftAssignment.swapRequestWanteds
   */
  export type ShiftAssignment$swapRequestWantedsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftSwapRequest
     */
    select?: ShiftSwapRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShiftSwapRequestInclude<ExtArgs> | null
    where?: ShiftSwapRequestWhereInput
    orderBy?: ShiftSwapRequestOrderByWithRelationInput | ShiftSwapRequestOrderByWithRelationInput[]
    cursor?: ShiftSwapRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShiftSwapRequestScalarFieldEnum | ShiftSwapRequestScalarFieldEnum[]
  }


  /**
   * ShiftAssignment without action
   */
  export type ShiftAssignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftAssignment
     */
    select?: ShiftAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShiftAssignmentInclude<ExtArgs> | null
  }



  /**
   * Model Shift
   */

  export type AggregateShift = {
    _count: ShiftCountAggregateOutputType | null
    _min: ShiftMinAggregateOutputType | null
    _max: ShiftMaxAggregateOutputType | null
  }

  export type ShiftMinAggregateOutputType = {
    id: string | null
    start: Date | null
    end: Date | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShiftMaxAggregateOutputType = {
    id: string | null
    start: Date | null
    end: Date | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShiftCountAggregateOutputType = {
    id: number
    start: number
    end: number
    createdById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ShiftMinAggregateInputType = {
    id?: true
    start?: true
    end?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShiftMaxAggregateInputType = {
    id?: true
    start?: true
    end?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShiftCountAggregateInputType = {
    id?: true
    start?: true
    end?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ShiftAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shift to aggregate.
     */
    where?: ShiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shifts to fetch.
     */
    orderBy?: ShiftOrderByWithRelationInput | ShiftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shifts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Shifts
    **/
    _count?: true | ShiftCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShiftMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShiftMaxAggregateInputType
  }

  export type GetShiftAggregateType<T extends ShiftAggregateArgs> = {
        [P in keyof T & keyof AggregateShift]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShift[P]>
      : GetScalarType<T[P], AggregateShift[P]>
  }




  export type ShiftGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShiftWhereInput
    orderBy?: ShiftOrderByWithAggregationInput | ShiftOrderByWithAggregationInput[]
    by: ShiftScalarFieldEnum[] | ShiftScalarFieldEnum
    having?: ShiftScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShiftCountAggregateInputType | true
    _min?: ShiftMinAggregateInputType
    _max?: ShiftMaxAggregateInputType
  }

  export type ShiftGroupByOutputType = {
    id: string
    start: Date
    end: Date
    createdById: string
    createdAt: Date
    updatedAt: Date
    _count: ShiftCountAggregateOutputType | null
    _min: ShiftMinAggregateOutputType | null
    _max: ShiftMaxAggregateOutputType | null
  }

  type GetShiftGroupByPayload<T extends ShiftGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShiftGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShiftGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShiftGroupByOutputType[P]>
            : GetScalarType<T[P], ShiftGroupByOutputType[P]>
        }
      >
    >


  export type ShiftSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    start?: boolean
    end?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assignedTo?: boolean | Shift$assignedToArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | ShiftCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shift"]>

  export type ShiftSelectScalar = {
    id?: boolean
    start?: boolean
    end?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ShiftInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignedTo?: boolean | Shift$assignedToArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | ShiftCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ShiftPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Shift"
    objects: {
      assignedTo: Prisma.$ShiftAssignmentPayload<ExtArgs>[]
      createdBy: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      start: Date
      end: Date
      createdById: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["shift"]>
    composites: {}
  }


  type ShiftGetPayload<S extends boolean | null | undefined | ShiftDefaultArgs> = $Result.GetResult<Prisma.$ShiftPayload, S>

  type ShiftCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ShiftFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ShiftCountAggregateInputType | true
    }

  export interface ShiftDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Shift'], meta: { name: 'Shift' } }
    /**
     * Find zero or one Shift that matches the filter.
     * @param {ShiftFindUniqueArgs} args - Arguments to find a Shift
     * @example
     * // Get one Shift
     * const shift = await prisma.shift.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ShiftFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ShiftFindUniqueArgs<ExtArgs>>
    ): Prisma__ShiftClient<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Shift that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ShiftFindUniqueOrThrowArgs} args - Arguments to find a Shift
     * @example
     * // Get one Shift
     * const shift = await prisma.shift.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ShiftFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ShiftFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ShiftClient<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Shift that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftFindFirstArgs} args - Arguments to find a Shift
     * @example
     * // Get one Shift
     * const shift = await prisma.shift.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ShiftFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ShiftFindFirstArgs<ExtArgs>>
    ): Prisma__ShiftClient<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Shift that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftFindFirstOrThrowArgs} args - Arguments to find a Shift
     * @example
     * // Get one Shift
     * const shift = await prisma.shift.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ShiftFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ShiftFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ShiftClient<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Shifts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shifts
     * const shifts = await prisma.shift.findMany()
     * 
     * // Get first 10 Shifts
     * const shifts = await prisma.shift.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shiftWithIdOnly = await prisma.shift.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ShiftFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ShiftFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Shift.
     * @param {ShiftCreateArgs} args - Arguments to create a Shift.
     * @example
     * // Create one Shift
     * const Shift = await prisma.shift.create({
     *   data: {
     *     // ... data to create a Shift
     *   }
     * })
     * 
    **/
    create<T extends ShiftCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ShiftCreateArgs<ExtArgs>>
    ): Prisma__ShiftClient<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Shift.
     * @param {ShiftDeleteArgs} args - Arguments to delete one Shift.
     * @example
     * // Delete one Shift
     * const Shift = await prisma.shift.delete({
     *   where: {
     *     // ... filter to delete one Shift
     *   }
     * })
     * 
    **/
    delete<T extends ShiftDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ShiftDeleteArgs<ExtArgs>>
    ): Prisma__ShiftClient<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Shift.
     * @param {ShiftUpdateArgs} args - Arguments to update one Shift.
     * @example
     * // Update one Shift
     * const shift = await prisma.shift.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ShiftUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ShiftUpdateArgs<ExtArgs>>
    ): Prisma__ShiftClient<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Shifts.
     * @param {ShiftDeleteManyArgs} args - Arguments to filter Shifts to delete.
     * @example
     * // Delete a few Shifts
     * const { count } = await prisma.shift.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ShiftDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ShiftDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shifts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shifts
     * const shift = await prisma.shift.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ShiftUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ShiftUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Shift.
     * @param {ShiftUpsertArgs} args - Arguments to update or create a Shift.
     * @example
     * // Update or create a Shift
     * const shift = await prisma.shift.upsert({
     *   create: {
     *     // ... data to create a Shift
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shift we want to update
     *   }
     * })
    **/
    upsert<T extends ShiftUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ShiftUpsertArgs<ExtArgs>>
    ): Prisma__ShiftClient<$Result.GetResult<Prisma.$ShiftPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Shifts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftCountArgs} args - Arguments to filter Shifts to count.
     * @example
     * // Count the number of Shifts
     * const count = await prisma.shift.count({
     *   where: {
     *     // ... the filter for the Shifts we want to count
     *   }
     * })
    **/
    count<T extends ShiftCountArgs>(
      args?: Subset<T, ShiftCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShiftCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shift.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShiftAggregateArgs>(args: Subset<T, ShiftAggregateArgs>): Prisma.PrismaPromise<GetShiftAggregateType<T>>

    /**
     * Group by Shift.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShiftGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShiftGroupByArgs['orderBy'] }
        : { orderBy?: ShiftGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShiftGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShiftGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Shift model
   */
  readonly fields: ShiftFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Shift.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShiftClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    assignedTo<T extends Shift$assignedToArgs<ExtArgs> = {}>(args?: Subset<T, Shift$assignedToArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftAssignmentPayload<ExtArgs>, T, 'findMany'> | Null>;

    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Shift model
   */ 
  interface ShiftFieldRefs {
    readonly id: FieldRef<"Shift", 'String'>
    readonly start: FieldRef<"Shift", 'DateTime'>
    readonly end: FieldRef<"Shift", 'DateTime'>
    readonly createdById: FieldRef<"Shift", 'String'>
    readonly createdAt: FieldRef<"Shift", 'DateTime'>
    readonly updatedAt: FieldRef<"Shift", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Shift findUnique
   */
  export type ShiftFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShiftInclude<ExtArgs> | null
    /**
     * Filter, which Shift to fetch.
     */
    where: ShiftWhereUniqueInput
  }


  /**
   * Shift findUniqueOrThrow
   */
  export type ShiftFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShiftInclude<ExtArgs> | null
    /**
     * Filter, which Shift to fetch.
     */
    where: ShiftWhereUniqueInput
  }


  /**
   * Shift findFirst
   */
  export type ShiftFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShiftInclude<ExtArgs> | null
    /**
     * Filter, which Shift to fetch.
     */
    where?: ShiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shifts to fetch.
     */
    orderBy?: ShiftOrderByWithRelationInput | ShiftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shifts.
     */
    cursor?: ShiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shifts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shifts.
     */
    distinct?: ShiftScalarFieldEnum | ShiftScalarFieldEnum[]
  }


  /**
   * Shift findFirstOrThrow
   */
  export type ShiftFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShiftInclude<ExtArgs> | null
    /**
     * Filter, which Shift to fetch.
     */
    where?: ShiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shifts to fetch.
     */
    orderBy?: ShiftOrderByWithRelationInput | ShiftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shifts.
     */
    cursor?: ShiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shifts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shifts.
     */
    distinct?: ShiftScalarFieldEnum | ShiftScalarFieldEnum[]
  }


  /**
   * Shift findMany
   */
  export type ShiftFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShiftInclude<ExtArgs> | null
    /**
     * Filter, which Shifts to fetch.
     */
    where?: ShiftWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shifts to fetch.
     */
    orderBy?: ShiftOrderByWithRelationInput | ShiftOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Shifts.
     */
    cursor?: ShiftWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shifts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shifts.
     */
    skip?: number
    distinct?: ShiftScalarFieldEnum | ShiftScalarFieldEnum[]
  }


  /**
   * Shift create
   */
  export type ShiftCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShiftInclude<ExtArgs> | null
    /**
     * The data needed to create a Shift.
     */
    data: XOR<ShiftCreateInput, ShiftUncheckedCreateInput>
  }


  /**
   * Shift update
   */
  export type ShiftUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShiftInclude<ExtArgs> | null
    /**
     * The data needed to update a Shift.
     */
    data: XOR<ShiftUpdateInput, ShiftUncheckedUpdateInput>
    /**
     * Choose, which Shift to update.
     */
    where: ShiftWhereUniqueInput
  }


  /**
   * Shift updateMany
   */
  export type ShiftUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Shifts.
     */
    data: XOR<ShiftUpdateManyMutationInput, ShiftUncheckedUpdateManyInput>
    /**
     * Filter which Shifts to update
     */
    where?: ShiftWhereInput
  }


  /**
   * Shift upsert
   */
  export type ShiftUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShiftInclude<ExtArgs> | null
    /**
     * The filter to search for the Shift to update in case it exists.
     */
    where: ShiftWhereUniqueInput
    /**
     * In case the Shift found by the `where` argument doesn't exist, create a new Shift with this data.
     */
    create: XOR<ShiftCreateInput, ShiftUncheckedCreateInput>
    /**
     * In case the Shift was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShiftUpdateInput, ShiftUncheckedUpdateInput>
  }


  /**
   * Shift delete
   */
  export type ShiftDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShiftInclude<ExtArgs> | null
    /**
     * Filter which Shift to delete.
     */
    where: ShiftWhereUniqueInput
  }


  /**
   * Shift deleteMany
   */
  export type ShiftDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shifts to delete
     */
    where?: ShiftWhereInput
  }


  /**
   * Shift.assignedTo
   */
  export type Shift$assignedToArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftAssignment
     */
    select?: ShiftAssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShiftAssignmentInclude<ExtArgs> | null
    where?: ShiftAssignmentWhereInput
    orderBy?: ShiftAssignmentOrderByWithRelationInput | ShiftAssignmentOrderByWithRelationInput[]
    cursor?: ShiftAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShiftAssignmentScalarFieldEnum | ShiftAssignmentScalarFieldEnum[]
  }


  /**
   * Shift without action
   */
  export type ShiftDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shift
     */
    select?: ShiftSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShiftInclude<ExtArgs> | null
  }



  /**
   * Model Availability
   */

  export type AggregateAvailability = {
    _count: AvailabilityCountAggregateOutputType | null
    _min: AvailabilityMinAggregateOutputType | null
    _max: AvailabilityMaxAggregateOutputType | null
  }

  export type AvailabilityMinAggregateOutputType = {
    id: string | null
    userId: string | null
    start: Date | null
    end: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AvailabilityMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    start: Date | null
    end: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AvailabilityCountAggregateOutputType = {
    id: number
    userId: number
    start: number
    end: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AvailabilityMinAggregateInputType = {
    id?: true
    userId?: true
    start?: true
    end?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AvailabilityMaxAggregateInputType = {
    id?: true
    userId?: true
    start?: true
    end?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AvailabilityCountAggregateInputType = {
    id?: true
    userId?: true
    start?: true
    end?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AvailabilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Availability to aggregate.
     */
    where?: AvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Availabilities to fetch.
     */
    orderBy?: AvailabilityOrderByWithRelationInput | AvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Availabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Availabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Availabilities
    **/
    _count?: true | AvailabilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AvailabilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AvailabilityMaxAggregateInputType
  }

  export type GetAvailabilityAggregateType<T extends AvailabilityAggregateArgs> = {
        [P in keyof T & keyof AggregateAvailability]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAvailability[P]>
      : GetScalarType<T[P], AggregateAvailability[P]>
  }




  export type AvailabilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AvailabilityWhereInput
    orderBy?: AvailabilityOrderByWithAggregationInput | AvailabilityOrderByWithAggregationInput[]
    by: AvailabilityScalarFieldEnum[] | AvailabilityScalarFieldEnum
    having?: AvailabilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AvailabilityCountAggregateInputType | true
    _min?: AvailabilityMinAggregateInputType
    _max?: AvailabilityMaxAggregateInputType
  }

  export type AvailabilityGroupByOutputType = {
    id: string
    userId: string
    start: Date
    end: Date
    createdAt: Date
    updatedAt: Date
    _count: AvailabilityCountAggregateOutputType | null
    _min: AvailabilityMinAggregateOutputType | null
    _max: AvailabilityMaxAggregateOutputType | null
  }

  type GetAvailabilityGroupByPayload<T extends AvailabilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AvailabilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AvailabilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AvailabilityGroupByOutputType[P]>
            : GetScalarType<T[P], AvailabilityGroupByOutputType[P]>
        }
      >
    >


  export type AvailabilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    start?: boolean
    end?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["availability"]>

  export type AvailabilitySelectScalar = {
    id?: boolean
    userId?: boolean
    start?: boolean
    end?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AvailabilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $AvailabilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Availability"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      start: Date
      end: Date
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["availability"]>
    composites: {}
  }


  type AvailabilityGetPayload<S extends boolean | null | undefined | AvailabilityDefaultArgs> = $Result.GetResult<Prisma.$AvailabilityPayload, S>

  type AvailabilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AvailabilityFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AvailabilityCountAggregateInputType | true
    }

  export interface AvailabilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Availability'], meta: { name: 'Availability' } }
    /**
     * Find zero or one Availability that matches the filter.
     * @param {AvailabilityFindUniqueArgs} args - Arguments to find a Availability
     * @example
     * // Get one Availability
     * const availability = await prisma.availability.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AvailabilityFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AvailabilityFindUniqueArgs<ExtArgs>>
    ): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Availability that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AvailabilityFindUniqueOrThrowArgs} args - Arguments to find a Availability
     * @example
     * // Get one Availability
     * const availability = await prisma.availability.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AvailabilityFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AvailabilityFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Availability that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityFindFirstArgs} args - Arguments to find a Availability
     * @example
     * // Get one Availability
     * const availability = await prisma.availability.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AvailabilityFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AvailabilityFindFirstArgs<ExtArgs>>
    ): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Availability that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityFindFirstOrThrowArgs} args - Arguments to find a Availability
     * @example
     * // Get one Availability
     * const availability = await prisma.availability.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AvailabilityFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AvailabilityFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Availabilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Availabilities
     * const availabilities = await prisma.availability.findMany()
     * 
     * // Get first 10 Availabilities
     * const availabilities = await prisma.availability.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const availabilityWithIdOnly = await prisma.availability.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AvailabilityFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AvailabilityFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Availability.
     * @param {AvailabilityCreateArgs} args - Arguments to create a Availability.
     * @example
     * // Create one Availability
     * const Availability = await prisma.availability.create({
     *   data: {
     *     // ... data to create a Availability
     *   }
     * })
     * 
    **/
    create<T extends AvailabilityCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AvailabilityCreateArgs<ExtArgs>>
    ): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a Availability.
     * @param {AvailabilityDeleteArgs} args - Arguments to delete one Availability.
     * @example
     * // Delete one Availability
     * const Availability = await prisma.availability.delete({
     *   where: {
     *     // ... filter to delete one Availability
     *   }
     * })
     * 
    **/
    delete<T extends AvailabilityDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AvailabilityDeleteArgs<ExtArgs>>
    ): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Availability.
     * @param {AvailabilityUpdateArgs} args - Arguments to update one Availability.
     * @example
     * // Update one Availability
     * const availability = await prisma.availability.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AvailabilityUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AvailabilityUpdateArgs<ExtArgs>>
    ): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Availabilities.
     * @param {AvailabilityDeleteManyArgs} args - Arguments to filter Availabilities to delete.
     * @example
     * // Delete a few Availabilities
     * const { count } = await prisma.availability.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AvailabilityDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AvailabilityDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Availabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Availabilities
     * const availability = await prisma.availability.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AvailabilityUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AvailabilityUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Availability.
     * @param {AvailabilityUpsertArgs} args - Arguments to update or create a Availability.
     * @example
     * // Update or create a Availability
     * const availability = await prisma.availability.upsert({
     *   create: {
     *     // ... data to create a Availability
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Availability we want to update
     *   }
     * })
    **/
    upsert<T extends AvailabilityUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AvailabilityUpsertArgs<ExtArgs>>
    ): Prisma__AvailabilityClient<$Result.GetResult<Prisma.$AvailabilityPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Availabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityCountArgs} args - Arguments to filter Availabilities to count.
     * @example
     * // Count the number of Availabilities
     * const count = await prisma.availability.count({
     *   where: {
     *     // ... the filter for the Availabilities we want to count
     *   }
     * })
    **/
    count<T extends AvailabilityCountArgs>(
      args?: Subset<T, AvailabilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AvailabilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Availability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AvailabilityAggregateArgs>(args: Subset<T, AvailabilityAggregateArgs>): Prisma.PrismaPromise<GetAvailabilityAggregateType<T>>

    /**
     * Group by Availability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AvailabilityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AvailabilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AvailabilityGroupByArgs['orderBy'] }
        : { orderBy?: AvailabilityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AvailabilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAvailabilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Availability model
   */
  readonly fields: AvailabilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Availability.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AvailabilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Availability model
   */ 
  interface AvailabilityFieldRefs {
    readonly id: FieldRef<"Availability", 'String'>
    readonly userId: FieldRef<"Availability", 'String'>
    readonly start: FieldRef<"Availability", 'DateTime'>
    readonly end: FieldRef<"Availability", 'DateTime'>
    readonly createdAt: FieldRef<"Availability", 'DateTime'>
    readonly updatedAt: FieldRef<"Availability", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Availability findUnique
   */
  export type AvailabilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Availability to fetch.
     */
    where: AvailabilityWhereUniqueInput
  }


  /**
   * Availability findUniqueOrThrow
   */
  export type AvailabilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Availability to fetch.
     */
    where: AvailabilityWhereUniqueInput
  }


  /**
   * Availability findFirst
   */
  export type AvailabilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Availability to fetch.
     */
    where?: AvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Availabilities to fetch.
     */
    orderBy?: AvailabilityOrderByWithRelationInput | AvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Availabilities.
     */
    cursor?: AvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Availabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Availabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Availabilities.
     */
    distinct?: AvailabilityScalarFieldEnum | AvailabilityScalarFieldEnum[]
  }


  /**
   * Availability findFirstOrThrow
   */
  export type AvailabilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Availability to fetch.
     */
    where?: AvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Availabilities to fetch.
     */
    orderBy?: AvailabilityOrderByWithRelationInput | AvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Availabilities.
     */
    cursor?: AvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Availabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Availabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Availabilities.
     */
    distinct?: AvailabilityScalarFieldEnum | AvailabilityScalarFieldEnum[]
  }


  /**
   * Availability findMany
   */
  export type AvailabilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which Availabilities to fetch.
     */
    where?: AvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Availabilities to fetch.
     */
    orderBy?: AvailabilityOrderByWithRelationInput | AvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Availabilities.
     */
    cursor?: AvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Availabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Availabilities.
     */
    skip?: number
    distinct?: AvailabilityScalarFieldEnum | AvailabilityScalarFieldEnum[]
  }


  /**
   * Availability create
   */
  export type AvailabilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * The data needed to create a Availability.
     */
    data: XOR<AvailabilityCreateInput, AvailabilityUncheckedCreateInput>
  }


  /**
   * Availability update
   */
  export type AvailabilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * The data needed to update a Availability.
     */
    data: XOR<AvailabilityUpdateInput, AvailabilityUncheckedUpdateInput>
    /**
     * Choose, which Availability to update.
     */
    where: AvailabilityWhereUniqueInput
  }


  /**
   * Availability updateMany
   */
  export type AvailabilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Availabilities.
     */
    data: XOR<AvailabilityUpdateManyMutationInput, AvailabilityUncheckedUpdateManyInput>
    /**
     * Filter which Availabilities to update
     */
    where?: AvailabilityWhereInput
  }


  /**
   * Availability upsert
   */
  export type AvailabilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * The filter to search for the Availability to update in case it exists.
     */
    where: AvailabilityWhereUniqueInput
    /**
     * In case the Availability found by the `where` argument doesn't exist, create a new Availability with this data.
     */
    create: XOR<AvailabilityCreateInput, AvailabilityUncheckedCreateInput>
    /**
     * In case the Availability was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AvailabilityUpdateInput, AvailabilityUncheckedUpdateInput>
  }


  /**
   * Availability delete
   */
  export type AvailabilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AvailabilityInclude<ExtArgs> | null
    /**
     * Filter which Availability to delete.
     */
    where: AvailabilityWhereUniqueInput
  }


  /**
   * Availability deleteMany
   */
  export type AvailabilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Availabilities to delete
     */
    where?: AvailabilityWhereInput
  }


  /**
   * Availability without action
   */
  export type AvailabilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Availability
     */
    select?: AvailabilitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AvailabilityInclude<ExtArgs> | null
  }



  /**
   * Model ShiftSwapRequest
   */

  export type AggregateShiftSwapRequest = {
    _count: ShiftSwapRequestCountAggregateOutputType | null
    _min: ShiftSwapRequestMinAggregateOutputType | null
    _max: ShiftSwapRequestMaxAggregateOutputType | null
  }

  export type ShiftSwapRequestMinAggregateOutputType = {
    id: string | null
    createdById: string | null
    currentShiftId: string | null
    currentUserId: string | null
    wantedShiftId: string | null
    wantedUserId: string | null
    status: string | null
    createdAt: Date | null
  }

  export type ShiftSwapRequestMaxAggregateOutputType = {
    id: string | null
    createdById: string | null
    currentShiftId: string | null
    currentUserId: string | null
    wantedShiftId: string | null
    wantedUserId: string | null
    status: string | null
    createdAt: Date | null
  }

  export type ShiftSwapRequestCountAggregateOutputType = {
    id: number
    createdById: number
    currentShiftId: number
    currentUserId: number
    wantedShiftId: number
    wantedUserId: number
    status: number
    createdAt: number
    _all: number
  }


  export type ShiftSwapRequestMinAggregateInputType = {
    id?: true
    createdById?: true
    currentShiftId?: true
    currentUserId?: true
    wantedShiftId?: true
    wantedUserId?: true
    status?: true
    createdAt?: true
  }

  export type ShiftSwapRequestMaxAggregateInputType = {
    id?: true
    createdById?: true
    currentShiftId?: true
    currentUserId?: true
    wantedShiftId?: true
    wantedUserId?: true
    status?: true
    createdAt?: true
  }

  export type ShiftSwapRequestCountAggregateInputType = {
    id?: true
    createdById?: true
    currentShiftId?: true
    currentUserId?: true
    wantedShiftId?: true
    wantedUserId?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type ShiftSwapRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShiftSwapRequest to aggregate.
     */
    where?: ShiftSwapRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShiftSwapRequests to fetch.
     */
    orderBy?: ShiftSwapRequestOrderByWithRelationInput | ShiftSwapRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShiftSwapRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShiftSwapRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShiftSwapRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ShiftSwapRequests
    **/
    _count?: true | ShiftSwapRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShiftSwapRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShiftSwapRequestMaxAggregateInputType
  }

  export type GetShiftSwapRequestAggregateType<T extends ShiftSwapRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateShiftSwapRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShiftSwapRequest[P]>
      : GetScalarType<T[P], AggregateShiftSwapRequest[P]>
  }




  export type ShiftSwapRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShiftSwapRequestWhereInput
    orderBy?: ShiftSwapRequestOrderByWithAggregationInput | ShiftSwapRequestOrderByWithAggregationInput[]
    by: ShiftSwapRequestScalarFieldEnum[] | ShiftSwapRequestScalarFieldEnum
    having?: ShiftSwapRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShiftSwapRequestCountAggregateInputType | true
    _min?: ShiftSwapRequestMinAggregateInputType
    _max?: ShiftSwapRequestMaxAggregateInputType
  }

  export type ShiftSwapRequestGroupByOutputType = {
    id: string
    createdById: string
    currentShiftId: string
    currentUserId: string
    wantedShiftId: string
    wantedUserId: string
    status: string
    createdAt: Date
    _count: ShiftSwapRequestCountAggregateOutputType | null
    _min: ShiftSwapRequestMinAggregateOutputType | null
    _max: ShiftSwapRequestMaxAggregateOutputType | null
  }

  type GetShiftSwapRequestGroupByPayload<T extends ShiftSwapRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShiftSwapRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShiftSwapRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShiftSwapRequestGroupByOutputType[P]>
            : GetScalarType<T[P], ShiftSwapRequestGroupByOutputType[P]>
        }
      >
    >


  export type ShiftSwapRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdById?: boolean
    currentShiftId?: boolean
    currentUserId?: boolean
    wantedShiftId?: boolean
    wantedUserId?: boolean
    status?: boolean
    createdAt?: boolean
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    currentAssignment?: boolean | ShiftAssignmentDefaultArgs<ExtArgs>
    wantedAssignment?: boolean | ShiftAssignmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shiftSwapRequest"]>

  export type ShiftSwapRequestSelectScalar = {
    id?: boolean
    createdById?: boolean
    currentShiftId?: boolean
    currentUserId?: boolean
    wantedShiftId?: boolean
    wantedUserId?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type ShiftSwapRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    currentAssignment?: boolean | ShiftAssignmentDefaultArgs<ExtArgs>
    wantedAssignment?: boolean | ShiftAssignmentDefaultArgs<ExtArgs>
  }


  export type $ShiftSwapRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ShiftSwapRequest"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs>
      currentAssignment: Prisma.$ShiftAssignmentPayload<ExtArgs>
      wantedAssignment: Prisma.$ShiftAssignmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdById: string
      currentShiftId: string
      currentUserId: string
      wantedShiftId: string
      wantedUserId: string
      status: string
      createdAt: Date
    }, ExtArgs["result"]["shiftSwapRequest"]>
    composites: {}
  }


  type ShiftSwapRequestGetPayload<S extends boolean | null | undefined | ShiftSwapRequestDefaultArgs> = $Result.GetResult<Prisma.$ShiftSwapRequestPayload, S>

  type ShiftSwapRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ShiftSwapRequestFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ShiftSwapRequestCountAggregateInputType | true
    }

  export interface ShiftSwapRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ShiftSwapRequest'], meta: { name: 'ShiftSwapRequest' } }
    /**
     * Find zero or one ShiftSwapRequest that matches the filter.
     * @param {ShiftSwapRequestFindUniqueArgs} args - Arguments to find a ShiftSwapRequest
     * @example
     * // Get one ShiftSwapRequest
     * const shiftSwapRequest = await prisma.shiftSwapRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ShiftSwapRequestFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ShiftSwapRequestFindUniqueArgs<ExtArgs>>
    ): Prisma__ShiftSwapRequestClient<$Result.GetResult<Prisma.$ShiftSwapRequestPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ShiftSwapRequest that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ShiftSwapRequestFindUniqueOrThrowArgs} args - Arguments to find a ShiftSwapRequest
     * @example
     * // Get one ShiftSwapRequest
     * const shiftSwapRequest = await prisma.shiftSwapRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ShiftSwapRequestFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ShiftSwapRequestFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ShiftSwapRequestClient<$Result.GetResult<Prisma.$ShiftSwapRequestPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ShiftSwapRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftSwapRequestFindFirstArgs} args - Arguments to find a ShiftSwapRequest
     * @example
     * // Get one ShiftSwapRequest
     * const shiftSwapRequest = await prisma.shiftSwapRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ShiftSwapRequestFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ShiftSwapRequestFindFirstArgs<ExtArgs>>
    ): Prisma__ShiftSwapRequestClient<$Result.GetResult<Prisma.$ShiftSwapRequestPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ShiftSwapRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftSwapRequestFindFirstOrThrowArgs} args - Arguments to find a ShiftSwapRequest
     * @example
     * // Get one ShiftSwapRequest
     * const shiftSwapRequest = await prisma.shiftSwapRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ShiftSwapRequestFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ShiftSwapRequestFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ShiftSwapRequestClient<$Result.GetResult<Prisma.$ShiftSwapRequestPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ShiftSwapRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftSwapRequestFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ShiftSwapRequests
     * const shiftSwapRequests = await prisma.shiftSwapRequest.findMany()
     * 
     * // Get first 10 ShiftSwapRequests
     * const shiftSwapRequests = await prisma.shiftSwapRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shiftSwapRequestWithIdOnly = await prisma.shiftSwapRequest.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ShiftSwapRequestFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ShiftSwapRequestFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShiftSwapRequestPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ShiftSwapRequest.
     * @param {ShiftSwapRequestCreateArgs} args - Arguments to create a ShiftSwapRequest.
     * @example
     * // Create one ShiftSwapRequest
     * const ShiftSwapRequest = await prisma.shiftSwapRequest.create({
     *   data: {
     *     // ... data to create a ShiftSwapRequest
     *   }
     * })
     * 
    **/
    create<T extends ShiftSwapRequestCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ShiftSwapRequestCreateArgs<ExtArgs>>
    ): Prisma__ShiftSwapRequestClient<$Result.GetResult<Prisma.$ShiftSwapRequestPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Delete a ShiftSwapRequest.
     * @param {ShiftSwapRequestDeleteArgs} args - Arguments to delete one ShiftSwapRequest.
     * @example
     * // Delete one ShiftSwapRequest
     * const ShiftSwapRequest = await prisma.shiftSwapRequest.delete({
     *   where: {
     *     // ... filter to delete one ShiftSwapRequest
     *   }
     * })
     * 
    **/
    delete<T extends ShiftSwapRequestDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ShiftSwapRequestDeleteArgs<ExtArgs>>
    ): Prisma__ShiftSwapRequestClient<$Result.GetResult<Prisma.$ShiftSwapRequestPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ShiftSwapRequest.
     * @param {ShiftSwapRequestUpdateArgs} args - Arguments to update one ShiftSwapRequest.
     * @example
     * // Update one ShiftSwapRequest
     * const shiftSwapRequest = await prisma.shiftSwapRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ShiftSwapRequestUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ShiftSwapRequestUpdateArgs<ExtArgs>>
    ): Prisma__ShiftSwapRequestClient<$Result.GetResult<Prisma.$ShiftSwapRequestPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ShiftSwapRequests.
     * @param {ShiftSwapRequestDeleteManyArgs} args - Arguments to filter ShiftSwapRequests to delete.
     * @example
     * // Delete a few ShiftSwapRequests
     * const { count } = await prisma.shiftSwapRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ShiftSwapRequestDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ShiftSwapRequestDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ShiftSwapRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftSwapRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ShiftSwapRequests
     * const shiftSwapRequest = await prisma.shiftSwapRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ShiftSwapRequestUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ShiftSwapRequestUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ShiftSwapRequest.
     * @param {ShiftSwapRequestUpsertArgs} args - Arguments to update or create a ShiftSwapRequest.
     * @example
     * // Update or create a ShiftSwapRequest
     * const shiftSwapRequest = await prisma.shiftSwapRequest.upsert({
     *   create: {
     *     // ... data to create a ShiftSwapRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ShiftSwapRequest we want to update
     *   }
     * })
    **/
    upsert<T extends ShiftSwapRequestUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ShiftSwapRequestUpsertArgs<ExtArgs>>
    ): Prisma__ShiftSwapRequestClient<$Result.GetResult<Prisma.$ShiftSwapRequestPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ShiftSwapRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftSwapRequestCountArgs} args - Arguments to filter ShiftSwapRequests to count.
     * @example
     * // Count the number of ShiftSwapRequests
     * const count = await prisma.shiftSwapRequest.count({
     *   where: {
     *     // ... the filter for the ShiftSwapRequests we want to count
     *   }
     * })
    **/
    count<T extends ShiftSwapRequestCountArgs>(
      args?: Subset<T, ShiftSwapRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShiftSwapRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ShiftSwapRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftSwapRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShiftSwapRequestAggregateArgs>(args: Subset<T, ShiftSwapRequestAggregateArgs>): Prisma.PrismaPromise<GetShiftSwapRequestAggregateType<T>>

    /**
     * Group by ShiftSwapRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShiftSwapRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShiftSwapRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShiftSwapRequestGroupByArgs['orderBy'] }
        : { orderBy?: ShiftSwapRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShiftSwapRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShiftSwapRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ShiftSwapRequest model
   */
  readonly fields: ShiftSwapRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ShiftSwapRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShiftSwapRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    currentAssignment<T extends ShiftAssignmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShiftAssignmentDefaultArgs<ExtArgs>>): Prisma__ShiftAssignmentClient<$Result.GetResult<Prisma.$ShiftAssignmentPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    wantedAssignment<T extends ShiftAssignmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShiftAssignmentDefaultArgs<ExtArgs>>): Prisma__ShiftAssignmentClient<$Result.GetResult<Prisma.$ShiftAssignmentPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ShiftSwapRequest model
   */ 
  interface ShiftSwapRequestFieldRefs {
    readonly id: FieldRef<"ShiftSwapRequest", 'String'>
    readonly createdById: FieldRef<"ShiftSwapRequest", 'String'>
    readonly currentShiftId: FieldRef<"ShiftSwapRequest", 'String'>
    readonly currentUserId: FieldRef<"ShiftSwapRequest", 'String'>
    readonly wantedShiftId: FieldRef<"ShiftSwapRequest", 'String'>
    readonly wantedUserId: FieldRef<"ShiftSwapRequest", 'String'>
    readonly status: FieldRef<"ShiftSwapRequest", 'String'>
    readonly createdAt: FieldRef<"ShiftSwapRequest", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * ShiftSwapRequest findUnique
   */
  export type ShiftSwapRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftSwapRequest
     */
    select?: ShiftSwapRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShiftSwapRequestInclude<ExtArgs> | null
    /**
     * Filter, which ShiftSwapRequest to fetch.
     */
    where: ShiftSwapRequestWhereUniqueInput
  }


  /**
   * ShiftSwapRequest findUniqueOrThrow
   */
  export type ShiftSwapRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftSwapRequest
     */
    select?: ShiftSwapRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShiftSwapRequestInclude<ExtArgs> | null
    /**
     * Filter, which ShiftSwapRequest to fetch.
     */
    where: ShiftSwapRequestWhereUniqueInput
  }


  /**
   * ShiftSwapRequest findFirst
   */
  export type ShiftSwapRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftSwapRequest
     */
    select?: ShiftSwapRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShiftSwapRequestInclude<ExtArgs> | null
    /**
     * Filter, which ShiftSwapRequest to fetch.
     */
    where?: ShiftSwapRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShiftSwapRequests to fetch.
     */
    orderBy?: ShiftSwapRequestOrderByWithRelationInput | ShiftSwapRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShiftSwapRequests.
     */
    cursor?: ShiftSwapRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShiftSwapRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShiftSwapRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShiftSwapRequests.
     */
    distinct?: ShiftSwapRequestScalarFieldEnum | ShiftSwapRequestScalarFieldEnum[]
  }


  /**
   * ShiftSwapRequest findFirstOrThrow
   */
  export type ShiftSwapRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftSwapRequest
     */
    select?: ShiftSwapRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShiftSwapRequestInclude<ExtArgs> | null
    /**
     * Filter, which ShiftSwapRequest to fetch.
     */
    where?: ShiftSwapRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShiftSwapRequests to fetch.
     */
    orderBy?: ShiftSwapRequestOrderByWithRelationInput | ShiftSwapRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ShiftSwapRequests.
     */
    cursor?: ShiftSwapRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShiftSwapRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShiftSwapRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ShiftSwapRequests.
     */
    distinct?: ShiftSwapRequestScalarFieldEnum | ShiftSwapRequestScalarFieldEnum[]
  }


  /**
   * ShiftSwapRequest findMany
   */
  export type ShiftSwapRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftSwapRequest
     */
    select?: ShiftSwapRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShiftSwapRequestInclude<ExtArgs> | null
    /**
     * Filter, which ShiftSwapRequests to fetch.
     */
    where?: ShiftSwapRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ShiftSwapRequests to fetch.
     */
    orderBy?: ShiftSwapRequestOrderByWithRelationInput | ShiftSwapRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ShiftSwapRequests.
     */
    cursor?: ShiftSwapRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ShiftSwapRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ShiftSwapRequests.
     */
    skip?: number
    distinct?: ShiftSwapRequestScalarFieldEnum | ShiftSwapRequestScalarFieldEnum[]
  }


  /**
   * ShiftSwapRequest create
   */
  export type ShiftSwapRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftSwapRequest
     */
    select?: ShiftSwapRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShiftSwapRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a ShiftSwapRequest.
     */
    data: XOR<ShiftSwapRequestCreateInput, ShiftSwapRequestUncheckedCreateInput>
  }


  /**
   * ShiftSwapRequest update
   */
  export type ShiftSwapRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftSwapRequest
     */
    select?: ShiftSwapRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShiftSwapRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a ShiftSwapRequest.
     */
    data: XOR<ShiftSwapRequestUpdateInput, ShiftSwapRequestUncheckedUpdateInput>
    /**
     * Choose, which ShiftSwapRequest to update.
     */
    where: ShiftSwapRequestWhereUniqueInput
  }


  /**
   * ShiftSwapRequest updateMany
   */
  export type ShiftSwapRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ShiftSwapRequests.
     */
    data: XOR<ShiftSwapRequestUpdateManyMutationInput, ShiftSwapRequestUncheckedUpdateManyInput>
    /**
     * Filter which ShiftSwapRequests to update
     */
    where?: ShiftSwapRequestWhereInput
  }


  /**
   * ShiftSwapRequest upsert
   */
  export type ShiftSwapRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftSwapRequest
     */
    select?: ShiftSwapRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShiftSwapRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the ShiftSwapRequest to update in case it exists.
     */
    where: ShiftSwapRequestWhereUniqueInput
    /**
     * In case the ShiftSwapRequest found by the `where` argument doesn't exist, create a new ShiftSwapRequest with this data.
     */
    create: XOR<ShiftSwapRequestCreateInput, ShiftSwapRequestUncheckedCreateInput>
    /**
     * In case the ShiftSwapRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShiftSwapRequestUpdateInput, ShiftSwapRequestUncheckedUpdateInput>
  }


  /**
   * ShiftSwapRequest delete
   */
  export type ShiftSwapRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftSwapRequest
     */
    select?: ShiftSwapRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShiftSwapRequestInclude<ExtArgs> | null
    /**
     * Filter which ShiftSwapRequest to delete.
     */
    where: ShiftSwapRequestWhereUniqueInput
  }


  /**
   * ShiftSwapRequest deleteMany
   */
  export type ShiftSwapRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ShiftSwapRequests to delete
     */
    where?: ShiftSwapRequestWhereInput
  }


  /**
   * ShiftSwapRequest without action
   */
  export type ShiftSwapRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShiftSwapRequest
     */
    select?: ShiftSwapRequestSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ShiftSwapRequestInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    role: 'role'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ShiftAssignmentScalarFieldEnum: {
    userId: 'userId',
    shiftId: 'shiftId',
    createdAt: 'createdAt'
  };

  export type ShiftAssignmentScalarFieldEnum = (typeof ShiftAssignmentScalarFieldEnum)[keyof typeof ShiftAssignmentScalarFieldEnum]


  export const ShiftScalarFieldEnum: {
    id: 'id',
    start: 'start',
    end: 'end',
    createdById: 'createdById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ShiftScalarFieldEnum = (typeof ShiftScalarFieldEnum)[keyof typeof ShiftScalarFieldEnum]


  export const AvailabilityScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    start: 'start',
    end: 'end',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AvailabilityScalarFieldEnum = (typeof AvailabilityScalarFieldEnum)[keyof typeof AvailabilityScalarFieldEnum]


  export const ShiftSwapRequestScalarFieldEnum: {
    id: 'id',
    createdById: 'createdById',
    currentShiftId: 'currentShiftId',
    currentUserId: 'currentUserId',
    wantedShiftId: 'wantedShiftId',
    wantedUserId: 'wantedUserId',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type ShiftSwapRequestScalarFieldEnum = (typeof ShiftSwapRequestScalarFieldEnum)[keyof typeof ShiftSwapRequestScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    assignedShifts?: ShiftAssignmentListRelationFilter
    availability?: AvailabilityListRelationFilter
    initiatedSwaps?: ShiftSwapRequestListRelationFilter
    createdShifts?: ShiftListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    role?: SortOrder
    assignedShifts?: ShiftAssignmentOrderByRelationAggregateInput
    availability?: AvailabilityOrderByRelationAggregateInput
    initiatedSwaps?: ShiftSwapRequestOrderByRelationAggregateInput
    createdShifts?: ShiftOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    role?: StringFilter<"User"> | string
    assignedShifts?: ShiftAssignmentListRelationFilter
    availability?: AvailabilityListRelationFilter
    initiatedSwaps?: ShiftSwapRequestListRelationFilter
    createdShifts?: ShiftListRelationFilter
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    role?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
  }

  export type ShiftAssignmentWhereInput = {
    AND?: ShiftAssignmentWhereInput | ShiftAssignmentWhereInput[]
    OR?: ShiftAssignmentWhereInput[]
    NOT?: ShiftAssignmentWhereInput | ShiftAssignmentWhereInput[]
    userId?: StringFilter<"ShiftAssignment"> | string
    shiftId?: StringFilter<"ShiftAssignment"> | string
    createdAt?: DateTimeFilter<"ShiftAssignment"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    shift?: XOR<ShiftRelationFilter, ShiftWhereInput>
    swapRequestCurrents?: ShiftSwapRequestListRelationFilter
    swapRequestWanteds?: ShiftSwapRequestListRelationFilter
  }

  export type ShiftAssignmentOrderByWithRelationInput = {
    userId?: SortOrder
    shiftId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    shift?: ShiftOrderByWithRelationInput
    swapRequestCurrents?: ShiftSwapRequestOrderByRelationAggregateInput
    swapRequestWanteds?: ShiftSwapRequestOrderByRelationAggregateInput
  }

  export type ShiftAssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: ShiftAssignmentIdCompoundUniqueInput
    AND?: ShiftAssignmentWhereInput | ShiftAssignmentWhereInput[]
    OR?: ShiftAssignmentWhereInput[]
    NOT?: ShiftAssignmentWhereInput | ShiftAssignmentWhereInput[]
    userId?: StringFilter<"ShiftAssignment"> | string
    shiftId?: StringFilter<"ShiftAssignment"> | string
    createdAt?: DateTimeFilter<"ShiftAssignment"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    shift?: XOR<ShiftRelationFilter, ShiftWhereInput>
    swapRequestCurrents?: ShiftSwapRequestListRelationFilter
    swapRequestWanteds?: ShiftSwapRequestListRelationFilter
  }, "id">

  export type ShiftAssignmentOrderByWithAggregationInput = {
    userId?: SortOrder
    shiftId?: SortOrder
    createdAt?: SortOrder
    _count?: ShiftAssignmentCountOrderByAggregateInput
    _max?: ShiftAssignmentMaxOrderByAggregateInput
    _min?: ShiftAssignmentMinOrderByAggregateInput
  }

  export type ShiftAssignmentScalarWhereWithAggregatesInput = {
    AND?: ShiftAssignmentScalarWhereWithAggregatesInput | ShiftAssignmentScalarWhereWithAggregatesInput[]
    OR?: ShiftAssignmentScalarWhereWithAggregatesInput[]
    NOT?: ShiftAssignmentScalarWhereWithAggregatesInput | ShiftAssignmentScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"ShiftAssignment"> | string
    shiftId?: StringWithAggregatesFilter<"ShiftAssignment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ShiftAssignment"> | Date | string
  }

  export type ShiftWhereInput = {
    AND?: ShiftWhereInput | ShiftWhereInput[]
    OR?: ShiftWhereInput[]
    NOT?: ShiftWhereInput | ShiftWhereInput[]
    id?: StringFilter<"Shift"> | string
    start?: DateTimeFilter<"Shift"> | Date | string
    end?: DateTimeFilter<"Shift"> | Date | string
    createdById?: StringFilter<"Shift"> | string
    createdAt?: DateTimeFilter<"Shift"> | Date | string
    updatedAt?: DateTimeFilter<"Shift"> | Date | string
    assignedTo?: ShiftAssignmentListRelationFilter
    createdBy?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ShiftOrderByWithRelationInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    assignedTo?: ShiftAssignmentOrderByRelationAggregateInput
    createdBy?: UserOrderByWithRelationInput
  }

  export type ShiftWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ShiftWhereInput | ShiftWhereInput[]
    OR?: ShiftWhereInput[]
    NOT?: ShiftWhereInput | ShiftWhereInput[]
    start?: DateTimeFilter<"Shift"> | Date | string
    end?: DateTimeFilter<"Shift"> | Date | string
    createdById?: StringFilter<"Shift"> | string
    createdAt?: DateTimeFilter<"Shift"> | Date | string
    updatedAt?: DateTimeFilter<"Shift"> | Date | string
    assignedTo?: ShiftAssignmentListRelationFilter
    createdBy?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type ShiftOrderByWithAggregationInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ShiftCountOrderByAggregateInput
    _max?: ShiftMaxOrderByAggregateInput
    _min?: ShiftMinOrderByAggregateInput
  }

  export type ShiftScalarWhereWithAggregatesInput = {
    AND?: ShiftScalarWhereWithAggregatesInput | ShiftScalarWhereWithAggregatesInput[]
    OR?: ShiftScalarWhereWithAggregatesInput[]
    NOT?: ShiftScalarWhereWithAggregatesInput | ShiftScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Shift"> | string
    start?: DateTimeWithAggregatesFilter<"Shift"> | Date | string
    end?: DateTimeWithAggregatesFilter<"Shift"> | Date | string
    createdById?: StringWithAggregatesFilter<"Shift"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Shift"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Shift"> | Date | string
  }

  export type AvailabilityWhereInput = {
    AND?: AvailabilityWhereInput | AvailabilityWhereInput[]
    OR?: AvailabilityWhereInput[]
    NOT?: AvailabilityWhereInput | AvailabilityWhereInput[]
    id?: StringFilter<"Availability"> | string
    userId?: StringFilter<"Availability"> | string
    start?: DateTimeFilter<"Availability"> | Date | string
    end?: DateTimeFilter<"Availability"> | Date | string
    createdAt?: DateTimeFilter<"Availability"> | Date | string
    updatedAt?: DateTimeFilter<"Availability"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type AvailabilityOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    start?: SortOrder
    end?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AvailabilityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AvailabilityWhereInput | AvailabilityWhereInput[]
    OR?: AvailabilityWhereInput[]
    NOT?: AvailabilityWhereInput | AvailabilityWhereInput[]
    userId?: StringFilter<"Availability"> | string
    start?: DateTimeFilter<"Availability"> | Date | string
    end?: DateTimeFilter<"Availability"> | Date | string
    createdAt?: DateTimeFilter<"Availability"> | Date | string
    updatedAt?: DateTimeFilter<"Availability"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type AvailabilityOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    start?: SortOrder
    end?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AvailabilityCountOrderByAggregateInput
    _max?: AvailabilityMaxOrderByAggregateInput
    _min?: AvailabilityMinOrderByAggregateInput
  }

  export type AvailabilityScalarWhereWithAggregatesInput = {
    AND?: AvailabilityScalarWhereWithAggregatesInput | AvailabilityScalarWhereWithAggregatesInput[]
    OR?: AvailabilityScalarWhereWithAggregatesInput[]
    NOT?: AvailabilityScalarWhereWithAggregatesInput | AvailabilityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Availability"> | string
    userId?: StringWithAggregatesFilter<"Availability"> | string
    start?: DateTimeWithAggregatesFilter<"Availability"> | Date | string
    end?: DateTimeWithAggregatesFilter<"Availability"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"Availability"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Availability"> | Date | string
  }

  export type ShiftSwapRequestWhereInput = {
    AND?: ShiftSwapRequestWhereInput | ShiftSwapRequestWhereInput[]
    OR?: ShiftSwapRequestWhereInput[]
    NOT?: ShiftSwapRequestWhereInput | ShiftSwapRequestWhereInput[]
    id?: StringFilter<"ShiftSwapRequest"> | string
    createdById?: StringFilter<"ShiftSwapRequest"> | string
    currentShiftId?: StringFilter<"ShiftSwapRequest"> | string
    currentUserId?: StringFilter<"ShiftSwapRequest"> | string
    wantedShiftId?: StringFilter<"ShiftSwapRequest"> | string
    wantedUserId?: StringFilter<"ShiftSwapRequest"> | string
    status?: StringFilter<"ShiftSwapRequest"> | string
    createdAt?: DateTimeFilter<"ShiftSwapRequest"> | Date | string
    createdBy?: XOR<UserRelationFilter, UserWhereInput>
    currentAssignment?: XOR<ShiftAssignmentRelationFilter, ShiftAssignmentWhereInput>
    wantedAssignment?: XOR<ShiftAssignmentRelationFilter, ShiftAssignmentWhereInput>
  }

  export type ShiftSwapRequestOrderByWithRelationInput = {
    id?: SortOrder
    createdById?: SortOrder
    currentShiftId?: SortOrder
    currentUserId?: SortOrder
    wantedShiftId?: SortOrder
    wantedUserId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    createdBy?: UserOrderByWithRelationInput
    currentAssignment?: ShiftAssignmentOrderByWithRelationInput
    wantedAssignment?: ShiftAssignmentOrderByWithRelationInput
  }

  export type ShiftSwapRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ShiftSwapRequestWhereInput | ShiftSwapRequestWhereInput[]
    OR?: ShiftSwapRequestWhereInput[]
    NOT?: ShiftSwapRequestWhereInput | ShiftSwapRequestWhereInput[]
    createdById?: StringFilter<"ShiftSwapRequest"> | string
    currentShiftId?: StringFilter<"ShiftSwapRequest"> | string
    currentUserId?: StringFilter<"ShiftSwapRequest"> | string
    wantedShiftId?: StringFilter<"ShiftSwapRequest"> | string
    wantedUserId?: StringFilter<"ShiftSwapRequest"> | string
    status?: StringFilter<"ShiftSwapRequest"> | string
    createdAt?: DateTimeFilter<"ShiftSwapRequest"> | Date | string
    createdBy?: XOR<UserRelationFilter, UserWhereInput>
    currentAssignment?: XOR<ShiftAssignmentRelationFilter, ShiftAssignmentWhereInput>
    wantedAssignment?: XOR<ShiftAssignmentRelationFilter, ShiftAssignmentWhereInput>
  }, "id">

  export type ShiftSwapRequestOrderByWithAggregationInput = {
    id?: SortOrder
    createdById?: SortOrder
    currentShiftId?: SortOrder
    currentUserId?: SortOrder
    wantedShiftId?: SortOrder
    wantedUserId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: ShiftSwapRequestCountOrderByAggregateInput
    _max?: ShiftSwapRequestMaxOrderByAggregateInput
    _min?: ShiftSwapRequestMinOrderByAggregateInput
  }

  export type ShiftSwapRequestScalarWhereWithAggregatesInput = {
    AND?: ShiftSwapRequestScalarWhereWithAggregatesInput | ShiftSwapRequestScalarWhereWithAggregatesInput[]
    OR?: ShiftSwapRequestScalarWhereWithAggregatesInput[]
    NOT?: ShiftSwapRequestScalarWhereWithAggregatesInput | ShiftSwapRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ShiftSwapRequest"> | string
    createdById?: StringWithAggregatesFilter<"ShiftSwapRequest"> | string
    currentShiftId?: StringWithAggregatesFilter<"ShiftSwapRequest"> | string
    currentUserId?: StringWithAggregatesFilter<"ShiftSwapRequest"> | string
    wantedShiftId?: StringWithAggregatesFilter<"ShiftSwapRequest"> | string
    wantedUserId?: StringWithAggregatesFilter<"ShiftSwapRequest"> | string
    status?: StringWithAggregatesFilter<"ShiftSwapRequest"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ShiftSwapRequest"> | Date | string
  }

  export type UserCreateInput = {
    id: string
    role?: string
    assignedShifts?: ShiftAssignmentCreateNestedManyWithoutUserInput
    availability?: AvailabilityCreateNestedManyWithoutUserInput
    initiatedSwaps?: ShiftSwapRequestCreateNestedManyWithoutCreatedByInput
    createdShifts?: ShiftCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    role?: string
    assignedShifts?: ShiftAssignmentUncheckedCreateNestedManyWithoutUserInput
    availability?: AvailabilityUncheckedCreateNestedManyWithoutUserInput
    initiatedSwaps?: ShiftSwapRequestUncheckedCreateNestedManyWithoutCreatedByInput
    createdShifts?: ShiftUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    assignedShifts?: ShiftAssignmentUpdateManyWithoutUserNestedInput
    availability?: AvailabilityUpdateManyWithoutUserNestedInput
    initiatedSwaps?: ShiftSwapRequestUpdateManyWithoutCreatedByNestedInput
    createdShifts?: ShiftUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    assignedShifts?: ShiftAssignmentUncheckedUpdateManyWithoutUserNestedInput
    availability?: AvailabilityUncheckedUpdateManyWithoutUserNestedInput
    initiatedSwaps?: ShiftSwapRequestUncheckedUpdateManyWithoutCreatedByNestedInput
    createdShifts?: ShiftUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
  }

  export type ShiftAssignmentCreateInput = {
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutAssignedShiftsInput
    shift: ShiftCreateNestedOneWithoutAssignedToInput
    swapRequestCurrents?: ShiftSwapRequestCreateNestedManyWithoutCurrentAssignmentInput
    swapRequestWanteds?: ShiftSwapRequestCreateNestedManyWithoutWantedAssignmentInput
  }

  export type ShiftAssignmentUncheckedCreateInput = {
    userId: string
    shiftId: string
    createdAt?: Date | string
    swapRequestCurrents?: ShiftSwapRequestUncheckedCreateNestedManyWithoutCurrentAssignmentInput
    swapRequestWanteds?: ShiftSwapRequestUncheckedCreateNestedManyWithoutWantedAssignmentInput
  }

  export type ShiftAssignmentUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAssignedShiftsNestedInput
    shift?: ShiftUpdateOneRequiredWithoutAssignedToNestedInput
    swapRequestCurrents?: ShiftSwapRequestUpdateManyWithoutCurrentAssignmentNestedInput
    swapRequestWanteds?: ShiftSwapRequestUpdateManyWithoutWantedAssignmentNestedInput
  }

  export type ShiftAssignmentUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    shiftId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    swapRequestCurrents?: ShiftSwapRequestUncheckedUpdateManyWithoutCurrentAssignmentNestedInput
    swapRequestWanteds?: ShiftSwapRequestUncheckedUpdateManyWithoutWantedAssignmentNestedInput
  }

  export type ShiftAssignmentUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShiftAssignmentUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    shiftId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShiftCreateInput = {
    id?: string
    start: Date | string
    end: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedTo?: ShiftAssignmentCreateNestedManyWithoutShiftInput
    createdBy: UserCreateNestedOneWithoutCreatedShiftsInput
  }

  export type ShiftUncheckedCreateInput = {
    id?: string
    start: Date | string
    end: Date | string
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedTo?: ShiftAssignmentUncheckedCreateNestedManyWithoutShiftInput
  }

  export type ShiftUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTo?: ShiftAssignmentUpdateManyWithoutShiftNestedInput
    createdBy?: UserUpdateOneRequiredWithoutCreatedShiftsNestedInput
  }

  export type ShiftUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTo?: ShiftAssignmentUncheckedUpdateManyWithoutShiftNestedInput
  }

  export type ShiftUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShiftUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilityCreateInput = {
    id?: string
    start: Date | string
    end: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAvailabilityInput
  }

  export type AvailabilityUncheckedCreateInput = {
    id?: string
    userId: string
    start: Date | string
    end: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AvailabilityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAvailabilityNestedInput
  }

  export type AvailabilityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShiftSwapRequestCreateInput = {
    id?: string
    status?: string
    createdAt?: Date | string
    createdBy: UserCreateNestedOneWithoutInitiatedSwapsInput
    currentAssignment: ShiftAssignmentCreateNestedOneWithoutSwapRequestCurrentsInput
    wantedAssignment: ShiftAssignmentCreateNestedOneWithoutSwapRequestWantedsInput
  }

  export type ShiftSwapRequestUncheckedCreateInput = {
    id?: string
    createdById: string
    currentShiftId: string
    currentUserId: string
    wantedShiftId: string
    wantedUserId: string
    status?: string
    createdAt?: Date | string
  }

  export type ShiftSwapRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutInitiatedSwapsNestedInput
    currentAssignment?: ShiftAssignmentUpdateOneRequiredWithoutSwapRequestCurrentsNestedInput
    wantedAssignment?: ShiftAssignmentUpdateOneRequiredWithoutSwapRequestWantedsNestedInput
  }

  export type ShiftSwapRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    currentShiftId?: StringFieldUpdateOperationsInput | string
    currentUserId?: StringFieldUpdateOperationsInput | string
    wantedShiftId?: StringFieldUpdateOperationsInput | string
    wantedUserId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShiftSwapRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShiftSwapRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    currentShiftId?: StringFieldUpdateOperationsInput | string
    currentUserId?: StringFieldUpdateOperationsInput | string
    wantedShiftId?: StringFieldUpdateOperationsInput | string
    wantedUserId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ShiftAssignmentListRelationFilter = {
    every?: ShiftAssignmentWhereInput
    some?: ShiftAssignmentWhereInput
    none?: ShiftAssignmentWhereInput
  }

  export type AvailabilityListRelationFilter = {
    every?: AvailabilityWhereInput
    some?: AvailabilityWhereInput
    none?: AvailabilityWhereInput
  }

  export type ShiftSwapRequestListRelationFilter = {
    every?: ShiftSwapRequestWhereInput
    some?: ShiftSwapRequestWhereInput
    none?: ShiftSwapRequestWhereInput
  }

  export type ShiftListRelationFilter = {
    every?: ShiftWhereInput
    some?: ShiftWhereInput
    none?: ShiftWhereInput
  }

  export type ShiftAssignmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AvailabilityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShiftSwapRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShiftOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    role?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ShiftRelationFilter = {
    is?: ShiftWhereInput
    isNot?: ShiftWhereInput
  }

  export type ShiftAssignmentIdCompoundUniqueInput = {
    userId: string
    shiftId: string
  }

  export type ShiftAssignmentCountOrderByAggregateInput = {
    userId?: SortOrder
    shiftId?: SortOrder
    createdAt?: SortOrder
  }

  export type ShiftAssignmentMaxOrderByAggregateInput = {
    userId?: SortOrder
    shiftId?: SortOrder
    createdAt?: SortOrder
  }

  export type ShiftAssignmentMinOrderByAggregateInput = {
    userId?: SortOrder
    shiftId?: SortOrder
    createdAt?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ShiftCountOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShiftMaxOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShiftMinOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AvailabilityCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    start?: SortOrder
    end?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AvailabilityMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    start?: SortOrder
    end?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AvailabilityMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    start?: SortOrder
    end?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShiftAssignmentRelationFilter = {
    is?: ShiftAssignmentWhereInput
    isNot?: ShiftAssignmentWhereInput
  }

  export type ShiftSwapRequestCountOrderByAggregateInput = {
    id?: SortOrder
    createdById?: SortOrder
    currentShiftId?: SortOrder
    currentUserId?: SortOrder
    wantedShiftId?: SortOrder
    wantedUserId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ShiftSwapRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    createdById?: SortOrder
    currentShiftId?: SortOrder
    currentUserId?: SortOrder
    wantedShiftId?: SortOrder
    wantedUserId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ShiftSwapRequestMinOrderByAggregateInput = {
    id?: SortOrder
    createdById?: SortOrder
    currentShiftId?: SortOrder
    currentUserId?: SortOrder
    wantedShiftId?: SortOrder
    wantedUserId?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type ShiftAssignmentCreateNestedManyWithoutUserInput = {
    create?: XOR<ShiftAssignmentCreateWithoutUserInput, ShiftAssignmentUncheckedCreateWithoutUserInput> | ShiftAssignmentCreateWithoutUserInput[] | ShiftAssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShiftAssignmentCreateOrConnectWithoutUserInput | ShiftAssignmentCreateOrConnectWithoutUserInput[]
    connect?: ShiftAssignmentWhereUniqueInput | ShiftAssignmentWhereUniqueInput[]
  }

  export type AvailabilityCreateNestedManyWithoutUserInput = {
    create?: XOR<AvailabilityCreateWithoutUserInput, AvailabilityUncheckedCreateWithoutUserInput> | AvailabilityCreateWithoutUserInput[] | AvailabilityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AvailabilityCreateOrConnectWithoutUserInput | AvailabilityCreateOrConnectWithoutUserInput[]
    connect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
  }

  export type ShiftSwapRequestCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ShiftSwapRequestCreateWithoutCreatedByInput, ShiftSwapRequestUncheckedCreateWithoutCreatedByInput> | ShiftSwapRequestCreateWithoutCreatedByInput[] | ShiftSwapRequestUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ShiftSwapRequestCreateOrConnectWithoutCreatedByInput | ShiftSwapRequestCreateOrConnectWithoutCreatedByInput[]
    connect?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
  }

  export type ShiftCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ShiftCreateWithoutCreatedByInput, ShiftUncheckedCreateWithoutCreatedByInput> | ShiftCreateWithoutCreatedByInput[] | ShiftUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ShiftCreateOrConnectWithoutCreatedByInput | ShiftCreateOrConnectWithoutCreatedByInput[]
    connect?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
  }

  export type ShiftAssignmentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ShiftAssignmentCreateWithoutUserInput, ShiftAssignmentUncheckedCreateWithoutUserInput> | ShiftAssignmentCreateWithoutUserInput[] | ShiftAssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShiftAssignmentCreateOrConnectWithoutUserInput | ShiftAssignmentCreateOrConnectWithoutUserInput[]
    connect?: ShiftAssignmentWhereUniqueInput | ShiftAssignmentWhereUniqueInput[]
  }

  export type AvailabilityUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AvailabilityCreateWithoutUserInput, AvailabilityUncheckedCreateWithoutUserInput> | AvailabilityCreateWithoutUserInput[] | AvailabilityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AvailabilityCreateOrConnectWithoutUserInput | AvailabilityCreateOrConnectWithoutUserInput[]
    connect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
  }

  export type ShiftSwapRequestUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ShiftSwapRequestCreateWithoutCreatedByInput, ShiftSwapRequestUncheckedCreateWithoutCreatedByInput> | ShiftSwapRequestCreateWithoutCreatedByInput[] | ShiftSwapRequestUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ShiftSwapRequestCreateOrConnectWithoutCreatedByInput | ShiftSwapRequestCreateOrConnectWithoutCreatedByInput[]
    connect?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
  }

  export type ShiftUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<ShiftCreateWithoutCreatedByInput, ShiftUncheckedCreateWithoutCreatedByInput> | ShiftCreateWithoutCreatedByInput[] | ShiftUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ShiftCreateOrConnectWithoutCreatedByInput | ShiftCreateOrConnectWithoutCreatedByInput[]
    connect?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ShiftAssignmentUpdateManyWithoutUserNestedInput = {
    create?: XOR<ShiftAssignmentCreateWithoutUserInput, ShiftAssignmentUncheckedCreateWithoutUserInput> | ShiftAssignmentCreateWithoutUserInput[] | ShiftAssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShiftAssignmentCreateOrConnectWithoutUserInput | ShiftAssignmentCreateOrConnectWithoutUserInput[]
    upsert?: ShiftAssignmentUpsertWithWhereUniqueWithoutUserInput | ShiftAssignmentUpsertWithWhereUniqueWithoutUserInput[]
    set?: ShiftAssignmentWhereUniqueInput | ShiftAssignmentWhereUniqueInput[]
    disconnect?: ShiftAssignmentWhereUniqueInput | ShiftAssignmentWhereUniqueInput[]
    delete?: ShiftAssignmentWhereUniqueInput | ShiftAssignmentWhereUniqueInput[]
    connect?: ShiftAssignmentWhereUniqueInput | ShiftAssignmentWhereUniqueInput[]
    update?: ShiftAssignmentUpdateWithWhereUniqueWithoutUserInput | ShiftAssignmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ShiftAssignmentUpdateManyWithWhereWithoutUserInput | ShiftAssignmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ShiftAssignmentScalarWhereInput | ShiftAssignmentScalarWhereInput[]
  }

  export type AvailabilityUpdateManyWithoutUserNestedInput = {
    create?: XOR<AvailabilityCreateWithoutUserInput, AvailabilityUncheckedCreateWithoutUserInput> | AvailabilityCreateWithoutUserInput[] | AvailabilityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AvailabilityCreateOrConnectWithoutUserInput | AvailabilityCreateOrConnectWithoutUserInput[]
    upsert?: AvailabilityUpsertWithWhereUniqueWithoutUserInput | AvailabilityUpsertWithWhereUniqueWithoutUserInput[]
    set?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    disconnect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    delete?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    connect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    update?: AvailabilityUpdateWithWhereUniqueWithoutUserInput | AvailabilityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AvailabilityUpdateManyWithWhereWithoutUserInput | AvailabilityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AvailabilityScalarWhereInput | AvailabilityScalarWhereInput[]
  }

  export type ShiftSwapRequestUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ShiftSwapRequestCreateWithoutCreatedByInput, ShiftSwapRequestUncheckedCreateWithoutCreatedByInput> | ShiftSwapRequestCreateWithoutCreatedByInput[] | ShiftSwapRequestUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ShiftSwapRequestCreateOrConnectWithoutCreatedByInput | ShiftSwapRequestCreateOrConnectWithoutCreatedByInput[]
    upsert?: ShiftSwapRequestUpsertWithWhereUniqueWithoutCreatedByInput | ShiftSwapRequestUpsertWithWhereUniqueWithoutCreatedByInput[]
    set?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
    disconnect?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
    delete?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
    connect?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
    update?: ShiftSwapRequestUpdateWithWhereUniqueWithoutCreatedByInput | ShiftSwapRequestUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ShiftSwapRequestUpdateManyWithWhereWithoutCreatedByInput | ShiftSwapRequestUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ShiftSwapRequestScalarWhereInput | ShiftSwapRequestScalarWhereInput[]
  }

  export type ShiftUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ShiftCreateWithoutCreatedByInput, ShiftUncheckedCreateWithoutCreatedByInput> | ShiftCreateWithoutCreatedByInput[] | ShiftUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ShiftCreateOrConnectWithoutCreatedByInput | ShiftCreateOrConnectWithoutCreatedByInput[]
    upsert?: ShiftUpsertWithWhereUniqueWithoutCreatedByInput | ShiftUpsertWithWhereUniqueWithoutCreatedByInput[]
    set?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
    disconnect?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
    delete?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
    connect?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
    update?: ShiftUpdateWithWhereUniqueWithoutCreatedByInput | ShiftUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ShiftUpdateManyWithWhereWithoutCreatedByInput | ShiftUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ShiftScalarWhereInput | ShiftScalarWhereInput[]
  }

  export type ShiftAssignmentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ShiftAssignmentCreateWithoutUserInput, ShiftAssignmentUncheckedCreateWithoutUserInput> | ShiftAssignmentCreateWithoutUserInput[] | ShiftAssignmentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ShiftAssignmentCreateOrConnectWithoutUserInput | ShiftAssignmentCreateOrConnectWithoutUserInput[]
    upsert?: ShiftAssignmentUpsertWithWhereUniqueWithoutUserInput | ShiftAssignmentUpsertWithWhereUniqueWithoutUserInput[]
    set?: ShiftAssignmentWhereUniqueInput | ShiftAssignmentWhereUniqueInput[]
    disconnect?: ShiftAssignmentWhereUniqueInput | ShiftAssignmentWhereUniqueInput[]
    delete?: ShiftAssignmentWhereUniqueInput | ShiftAssignmentWhereUniqueInput[]
    connect?: ShiftAssignmentWhereUniqueInput | ShiftAssignmentWhereUniqueInput[]
    update?: ShiftAssignmentUpdateWithWhereUniqueWithoutUserInput | ShiftAssignmentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ShiftAssignmentUpdateManyWithWhereWithoutUserInput | ShiftAssignmentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ShiftAssignmentScalarWhereInput | ShiftAssignmentScalarWhereInput[]
  }

  export type AvailabilityUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AvailabilityCreateWithoutUserInput, AvailabilityUncheckedCreateWithoutUserInput> | AvailabilityCreateWithoutUserInput[] | AvailabilityUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AvailabilityCreateOrConnectWithoutUserInput | AvailabilityCreateOrConnectWithoutUserInput[]
    upsert?: AvailabilityUpsertWithWhereUniqueWithoutUserInput | AvailabilityUpsertWithWhereUniqueWithoutUserInput[]
    set?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    disconnect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    delete?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    connect?: AvailabilityWhereUniqueInput | AvailabilityWhereUniqueInput[]
    update?: AvailabilityUpdateWithWhereUniqueWithoutUserInput | AvailabilityUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AvailabilityUpdateManyWithWhereWithoutUserInput | AvailabilityUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AvailabilityScalarWhereInput | AvailabilityScalarWhereInput[]
  }

  export type ShiftSwapRequestUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ShiftSwapRequestCreateWithoutCreatedByInput, ShiftSwapRequestUncheckedCreateWithoutCreatedByInput> | ShiftSwapRequestCreateWithoutCreatedByInput[] | ShiftSwapRequestUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ShiftSwapRequestCreateOrConnectWithoutCreatedByInput | ShiftSwapRequestCreateOrConnectWithoutCreatedByInput[]
    upsert?: ShiftSwapRequestUpsertWithWhereUniqueWithoutCreatedByInput | ShiftSwapRequestUpsertWithWhereUniqueWithoutCreatedByInput[]
    set?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
    disconnect?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
    delete?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
    connect?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
    update?: ShiftSwapRequestUpdateWithWhereUniqueWithoutCreatedByInput | ShiftSwapRequestUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ShiftSwapRequestUpdateManyWithWhereWithoutCreatedByInput | ShiftSwapRequestUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ShiftSwapRequestScalarWhereInput | ShiftSwapRequestScalarWhereInput[]
  }

  export type ShiftUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<ShiftCreateWithoutCreatedByInput, ShiftUncheckedCreateWithoutCreatedByInput> | ShiftCreateWithoutCreatedByInput[] | ShiftUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: ShiftCreateOrConnectWithoutCreatedByInput | ShiftCreateOrConnectWithoutCreatedByInput[]
    upsert?: ShiftUpsertWithWhereUniqueWithoutCreatedByInput | ShiftUpsertWithWhereUniqueWithoutCreatedByInput[]
    set?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
    disconnect?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
    delete?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
    connect?: ShiftWhereUniqueInput | ShiftWhereUniqueInput[]
    update?: ShiftUpdateWithWhereUniqueWithoutCreatedByInput | ShiftUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: ShiftUpdateManyWithWhereWithoutCreatedByInput | ShiftUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: ShiftScalarWhereInput | ShiftScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAssignedShiftsInput = {
    create?: XOR<UserCreateWithoutAssignedShiftsInput, UserUncheckedCreateWithoutAssignedShiftsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedShiftsInput
    connect?: UserWhereUniqueInput
  }

  export type ShiftCreateNestedOneWithoutAssignedToInput = {
    create?: XOR<ShiftCreateWithoutAssignedToInput, ShiftUncheckedCreateWithoutAssignedToInput>
    connectOrCreate?: ShiftCreateOrConnectWithoutAssignedToInput
    connect?: ShiftWhereUniqueInput
  }

  export type ShiftSwapRequestCreateNestedManyWithoutCurrentAssignmentInput = {
    create?: XOR<ShiftSwapRequestCreateWithoutCurrentAssignmentInput, ShiftSwapRequestUncheckedCreateWithoutCurrentAssignmentInput> | ShiftSwapRequestCreateWithoutCurrentAssignmentInput[] | ShiftSwapRequestUncheckedCreateWithoutCurrentAssignmentInput[]
    connectOrCreate?: ShiftSwapRequestCreateOrConnectWithoutCurrentAssignmentInput | ShiftSwapRequestCreateOrConnectWithoutCurrentAssignmentInput[]
    connect?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
  }

  export type ShiftSwapRequestCreateNestedManyWithoutWantedAssignmentInput = {
    create?: XOR<ShiftSwapRequestCreateWithoutWantedAssignmentInput, ShiftSwapRequestUncheckedCreateWithoutWantedAssignmentInput> | ShiftSwapRequestCreateWithoutWantedAssignmentInput[] | ShiftSwapRequestUncheckedCreateWithoutWantedAssignmentInput[]
    connectOrCreate?: ShiftSwapRequestCreateOrConnectWithoutWantedAssignmentInput | ShiftSwapRequestCreateOrConnectWithoutWantedAssignmentInput[]
    connect?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
  }

  export type ShiftSwapRequestUncheckedCreateNestedManyWithoutCurrentAssignmentInput = {
    create?: XOR<ShiftSwapRequestCreateWithoutCurrentAssignmentInput, ShiftSwapRequestUncheckedCreateWithoutCurrentAssignmentInput> | ShiftSwapRequestCreateWithoutCurrentAssignmentInput[] | ShiftSwapRequestUncheckedCreateWithoutCurrentAssignmentInput[]
    connectOrCreate?: ShiftSwapRequestCreateOrConnectWithoutCurrentAssignmentInput | ShiftSwapRequestCreateOrConnectWithoutCurrentAssignmentInput[]
    connect?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
  }

  export type ShiftSwapRequestUncheckedCreateNestedManyWithoutWantedAssignmentInput = {
    create?: XOR<ShiftSwapRequestCreateWithoutWantedAssignmentInput, ShiftSwapRequestUncheckedCreateWithoutWantedAssignmentInput> | ShiftSwapRequestCreateWithoutWantedAssignmentInput[] | ShiftSwapRequestUncheckedCreateWithoutWantedAssignmentInput[]
    connectOrCreate?: ShiftSwapRequestCreateOrConnectWithoutWantedAssignmentInput | ShiftSwapRequestCreateOrConnectWithoutWantedAssignmentInput[]
    connect?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutAssignedShiftsNestedInput = {
    create?: XOR<UserCreateWithoutAssignedShiftsInput, UserUncheckedCreateWithoutAssignedShiftsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedShiftsInput
    upsert?: UserUpsertWithoutAssignedShiftsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAssignedShiftsInput, UserUpdateWithoutAssignedShiftsInput>, UserUncheckedUpdateWithoutAssignedShiftsInput>
  }

  export type ShiftUpdateOneRequiredWithoutAssignedToNestedInput = {
    create?: XOR<ShiftCreateWithoutAssignedToInput, ShiftUncheckedCreateWithoutAssignedToInput>
    connectOrCreate?: ShiftCreateOrConnectWithoutAssignedToInput
    upsert?: ShiftUpsertWithoutAssignedToInput
    connect?: ShiftWhereUniqueInput
    update?: XOR<XOR<ShiftUpdateToOneWithWhereWithoutAssignedToInput, ShiftUpdateWithoutAssignedToInput>, ShiftUncheckedUpdateWithoutAssignedToInput>
  }

  export type ShiftSwapRequestUpdateManyWithoutCurrentAssignmentNestedInput = {
    create?: XOR<ShiftSwapRequestCreateWithoutCurrentAssignmentInput, ShiftSwapRequestUncheckedCreateWithoutCurrentAssignmentInput> | ShiftSwapRequestCreateWithoutCurrentAssignmentInput[] | ShiftSwapRequestUncheckedCreateWithoutCurrentAssignmentInput[]
    connectOrCreate?: ShiftSwapRequestCreateOrConnectWithoutCurrentAssignmentInput | ShiftSwapRequestCreateOrConnectWithoutCurrentAssignmentInput[]
    upsert?: ShiftSwapRequestUpsertWithWhereUniqueWithoutCurrentAssignmentInput | ShiftSwapRequestUpsertWithWhereUniqueWithoutCurrentAssignmentInput[]
    set?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
    disconnect?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
    delete?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
    connect?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
    update?: ShiftSwapRequestUpdateWithWhereUniqueWithoutCurrentAssignmentInput | ShiftSwapRequestUpdateWithWhereUniqueWithoutCurrentAssignmentInput[]
    updateMany?: ShiftSwapRequestUpdateManyWithWhereWithoutCurrentAssignmentInput | ShiftSwapRequestUpdateManyWithWhereWithoutCurrentAssignmentInput[]
    deleteMany?: ShiftSwapRequestScalarWhereInput | ShiftSwapRequestScalarWhereInput[]
  }

  export type ShiftSwapRequestUpdateManyWithoutWantedAssignmentNestedInput = {
    create?: XOR<ShiftSwapRequestCreateWithoutWantedAssignmentInput, ShiftSwapRequestUncheckedCreateWithoutWantedAssignmentInput> | ShiftSwapRequestCreateWithoutWantedAssignmentInput[] | ShiftSwapRequestUncheckedCreateWithoutWantedAssignmentInput[]
    connectOrCreate?: ShiftSwapRequestCreateOrConnectWithoutWantedAssignmentInput | ShiftSwapRequestCreateOrConnectWithoutWantedAssignmentInput[]
    upsert?: ShiftSwapRequestUpsertWithWhereUniqueWithoutWantedAssignmentInput | ShiftSwapRequestUpsertWithWhereUniqueWithoutWantedAssignmentInput[]
    set?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
    disconnect?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
    delete?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
    connect?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
    update?: ShiftSwapRequestUpdateWithWhereUniqueWithoutWantedAssignmentInput | ShiftSwapRequestUpdateWithWhereUniqueWithoutWantedAssignmentInput[]
    updateMany?: ShiftSwapRequestUpdateManyWithWhereWithoutWantedAssignmentInput | ShiftSwapRequestUpdateManyWithWhereWithoutWantedAssignmentInput[]
    deleteMany?: ShiftSwapRequestScalarWhereInput | ShiftSwapRequestScalarWhereInput[]
  }

  export type ShiftSwapRequestUncheckedUpdateManyWithoutCurrentAssignmentNestedInput = {
    create?: XOR<ShiftSwapRequestCreateWithoutCurrentAssignmentInput, ShiftSwapRequestUncheckedCreateWithoutCurrentAssignmentInput> | ShiftSwapRequestCreateWithoutCurrentAssignmentInput[] | ShiftSwapRequestUncheckedCreateWithoutCurrentAssignmentInput[]
    connectOrCreate?: ShiftSwapRequestCreateOrConnectWithoutCurrentAssignmentInput | ShiftSwapRequestCreateOrConnectWithoutCurrentAssignmentInput[]
    upsert?: ShiftSwapRequestUpsertWithWhereUniqueWithoutCurrentAssignmentInput | ShiftSwapRequestUpsertWithWhereUniqueWithoutCurrentAssignmentInput[]
    set?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
    disconnect?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
    delete?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
    connect?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
    update?: ShiftSwapRequestUpdateWithWhereUniqueWithoutCurrentAssignmentInput | ShiftSwapRequestUpdateWithWhereUniqueWithoutCurrentAssignmentInput[]
    updateMany?: ShiftSwapRequestUpdateManyWithWhereWithoutCurrentAssignmentInput | ShiftSwapRequestUpdateManyWithWhereWithoutCurrentAssignmentInput[]
    deleteMany?: ShiftSwapRequestScalarWhereInput | ShiftSwapRequestScalarWhereInput[]
  }

  export type ShiftSwapRequestUncheckedUpdateManyWithoutWantedAssignmentNestedInput = {
    create?: XOR<ShiftSwapRequestCreateWithoutWantedAssignmentInput, ShiftSwapRequestUncheckedCreateWithoutWantedAssignmentInput> | ShiftSwapRequestCreateWithoutWantedAssignmentInput[] | ShiftSwapRequestUncheckedCreateWithoutWantedAssignmentInput[]
    connectOrCreate?: ShiftSwapRequestCreateOrConnectWithoutWantedAssignmentInput | ShiftSwapRequestCreateOrConnectWithoutWantedAssignmentInput[]
    upsert?: ShiftSwapRequestUpsertWithWhereUniqueWithoutWantedAssignmentInput | ShiftSwapRequestUpsertWithWhereUniqueWithoutWantedAssignmentInput[]
    set?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
    disconnect?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
    delete?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
    connect?: ShiftSwapRequestWhereUniqueInput | ShiftSwapRequestWhereUniqueInput[]
    update?: ShiftSwapRequestUpdateWithWhereUniqueWithoutWantedAssignmentInput | ShiftSwapRequestUpdateWithWhereUniqueWithoutWantedAssignmentInput[]
    updateMany?: ShiftSwapRequestUpdateManyWithWhereWithoutWantedAssignmentInput | ShiftSwapRequestUpdateManyWithWhereWithoutWantedAssignmentInput[]
    deleteMany?: ShiftSwapRequestScalarWhereInput | ShiftSwapRequestScalarWhereInput[]
  }

  export type ShiftAssignmentCreateNestedManyWithoutShiftInput = {
    create?: XOR<ShiftAssignmentCreateWithoutShiftInput, ShiftAssignmentUncheckedCreateWithoutShiftInput> | ShiftAssignmentCreateWithoutShiftInput[] | ShiftAssignmentUncheckedCreateWithoutShiftInput[]
    connectOrCreate?: ShiftAssignmentCreateOrConnectWithoutShiftInput | ShiftAssignmentCreateOrConnectWithoutShiftInput[]
    connect?: ShiftAssignmentWhereUniqueInput | ShiftAssignmentWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutCreatedShiftsInput = {
    create?: XOR<UserCreateWithoutCreatedShiftsInput, UserUncheckedCreateWithoutCreatedShiftsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedShiftsInput
    connect?: UserWhereUniqueInput
  }

  export type ShiftAssignmentUncheckedCreateNestedManyWithoutShiftInput = {
    create?: XOR<ShiftAssignmentCreateWithoutShiftInput, ShiftAssignmentUncheckedCreateWithoutShiftInput> | ShiftAssignmentCreateWithoutShiftInput[] | ShiftAssignmentUncheckedCreateWithoutShiftInput[]
    connectOrCreate?: ShiftAssignmentCreateOrConnectWithoutShiftInput | ShiftAssignmentCreateOrConnectWithoutShiftInput[]
    connect?: ShiftAssignmentWhereUniqueInput | ShiftAssignmentWhereUniqueInput[]
  }

  export type ShiftAssignmentUpdateManyWithoutShiftNestedInput = {
    create?: XOR<ShiftAssignmentCreateWithoutShiftInput, ShiftAssignmentUncheckedCreateWithoutShiftInput> | ShiftAssignmentCreateWithoutShiftInput[] | ShiftAssignmentUncheckedCreateWithoutShiftInput[]
    connectOrCreate?: ShiftAssignmentCreateOrConnectWithoutShiftInput | ShiftAssignmentCreateOrConnectWithoutShiftInput[]
    upsert?: ShiftAssignmentUpsertWithWhereUniqueWithoutShiftInput | ShiftAssignmentUpsertWithWhereUniqueWithoutShiftInput[]
    set?: ShiftAssignmentWhereUniqueInput | ShiftAssignmentWhereUniqueInput[]
    disconnect?: ShiftAssignmentWhereUniqueInput | ShiftAssignmentWhereUniqueInput[]
    delete?: ShiftAssignmentWhereUniqueInput | ShiftAssignmentWhereUniqueInput[]
    connect?: ShiftAssignmentWhereUniqueInput | ShiftAssignmentWhereUniqueInput[]
    update?: ShiftAssignmentUpdateWithWhereUniqueWithoutShiftInput | ShiftAssignmentUpdateWithWhereUniqueWithoutShiftInput[]
    updateMany?: ShiftAssignmentUpdateManyWithWhereWithoutShiftInput | ShiftAssignmentUpdateManyWithWhereWithoutShiftInput[]
    deleteMany?: ShiftAssignmentScalarWhereInput | ShiftAssignmentScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutCreatedShiftsNestedInput = {
    create?: XOR<UserCreateWithoutCreatedShiftsInput, UserUncheckedCreateWithoutCreatedShiftsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedShiftsInput
    upsert?: UserUpsertWithoutCreatedShiftsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedShiftsInput, UserUpdateWithoutCreatedShiftsInput>, UserUncheckedUpdateWithoutCreatedShiftsInput>
  }

  export type ShiftAssignmentUncheckedUpdateManyWithoutShiftNestedInput = {
    create?: XOR<ShiftAssignmentCreateWithoutShiftInput, ShiftAssignmentUncheckedCreateWithoutShiftInput> | ShiftAssignmentCreateWithoutShiftInput[] | ShiftAssignmentUncheckedCreateWithoutShiftInput[]
    connectOrCreate?: ShiftAssignmentCreateOrConnectWithoutShiftInput | ShiftAssignmentCreateOrConnectWithoutShiftInput[]
    upsert?: ShiftAssignmentUpsertWithWhereUniqueWithoutShiftInput | ShiftAssignmentUpsertWithWhereUniqueWithoutShiftInput[]
    set?: ShiftAssignmentWhereUniqueInput | ShiftAssignmentWhereUniqueInput[]
    disconnect?: ShiftAssignmentWhereUniqueInput | ShiftAssignmentWhereUniqueInput[]
    delete?: ShiftAssignmentWhereUniqueInput | ShiftAssignmentWhereUniqueInput[]
    connect?: ShiftAssignmentWhereUniqueInput | ShiftAssignmentWhereUniqueInput[]
    update?: ShiftAssignmentUpdateWithWhereUniqueWithoutShiftInput | ShiftAssignmentUpdateWithWhereUniqueWithoutShiftInput[]
    updateMany?: ShiftAssignmentUpdateManyWithWhereWithoutShiftInput | ShiftAssignmentUpdateManyWithWhereWithoutShiftInput[]
    deleteMany?: ShiftAssignmentScalarWhereInput | ShiftAssignmentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAvailabilityInput = {
    create?: XOR<UserCreateWithoutAvailabilityInput, UserUncheckedCreateWithoutAvailabilityInput>
    connectOrCreate?: UserCreateOrConnectWithoutAvailabilityInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAvailabilityNestedInput = {
    create?: XOR<UserCreateWithoutAvailabilityInput, UserUncheckedCreateWithoutAvailabilityInput>
    connectOrCreate?: UserCreateOrConnectWithoutAvailabilityInput
    upsert?: UserUpsertWithoutAvailabilityInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAvailabilityInput, UserUpdateWithoutAvailabilityInput>, UserUncheckedUpdateWithoutAvailabilityInput>
  }

  export type UserCreateNestedOneWithoutInitiatedSwapsInput = {
    create?: XOR<UserCreateWithoutInitiatedSwapsInput, UserUncheckedCreateWithoutInitiatedSwapsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInitiatedSwapsInput
    connect?: UserWhereUniqueInput
  }

  export type ShiftAssignmentCreateNestedOneWithoutSwapRequestCurrentsInput = {
    create?: XOR<ShiftAssignmentCreateWithoutSwapRequestCurrentsInput, ShiftAssignmentUncheckedCreateWithoutSwapRequestCurrentsInput>
    connectOrCreate?: ShiftAssignmentCreateOrConnectWithoutSwapRequestCurrentsInput
    connect?: ShiftAssignmentWhereUniqueInput
  }

  export type ShiftAssignmentCreateNestedOneWithoutSwapRequestWantedsInput = {
    create?: XOR<ShiftAssignmentCreateWithoutSwapRequestWantedsInput, ShiftAssignmentUncheckedCreateWithoutSwapRequestWantedsInput>
    connectOrCreate?: ShiftAssignmentCreateOrConnectWithoutSwapRequestWantedsInput
    connect?: ShiftAssignmentWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutInitiatedSwapsNestedInput = {
    create?: XOR<UserCreateWithoutInitiatedSwapsInput, UserUncheckedCreateWithoutInitiatedSwapsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInitiatedSwapsInput
    upsert?: UserUpsertWithoutInitiatedSwapsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInitiatedSwapsInput, UserUpdateWithoutInitiatedSwapsInput>, UserUncheckedUpdateWithoutInitiatedSwapsInput>
  }

  export type ShiftAssignmentUpdateOneRequiredWithoutSwapRequestCurrentsNestedInput = {
    create?: XOR<ShiftAssignmentCreateWithoutSwapRequestCurrentsInput, ShiftAssignmentUncheckedCreateWithoutSwapRequestCurrentsInput>
    connectOrCreate?: ShiftAssignmentCreateOrConnectWithoutSwapRequestCurrentsInput
    upsert?: ShiftAssignmentUpsertWithoutSwapRequestCurrentsInput
    connect?: ShiftAssignmentWhereUniqueInput
    update?: XOR<XOR<ShiftAssignmentUpdateToOneWithWhereWithoutSwapRequestCurrentsInput, ShiftAssignmentUpdateWithoutSwapRequestCurrentsInput>, ShiftAssignmentUncheckedUpdateWithoutSwapRequestCurrentsInput>
  }

  export type ShiftAssignmentUpdateOneRequiredWithoutSwapRequestWantedsNestedInput = {
    create?: XOR<ShiftAssignmentCreateWithoutSwapRequestWantedsInput, ShiftAssignmentUncheckedCreateWithoutSwapRequestWantedsInput>
    connectOrCreate?: ShiftAssignmentCreateOrConnectWithoutSwapRequestWantedsInput
    upsert?: ShiftAssignmentUpsertWithoutSwapRequestWantedsInput
    connect?: ShiftAssignmentWhereUniqueInput
    update?: XOR<XOR<ShiftAssignmentUpdateToOneWithWhereWithoutSwapRequestWantedsInput, ShiftAssignmentUpdateWithoutSwapRequestWantedsInput>, ShiftAssignmentUncheckedUpdateWithoutSwapRequestWantedsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ShiftAssignmentCreateWithoutUserInput = {
    createdAt?: Date | string
    shift: ShiftCreateNestedOneWithoutAssignedToInput
    swapRequestCurrents?: ShiftSwapRequestCreateNestedManyWithoutCurrentAssignmentInput
    swapRequestWanteds?: ShiftSwapRequestCreateNestedManyWithoutWantedAssignmentInput
  }

  export type ShiftAssignmentUncheckedCreateWithoutUserInput = {
    shiftId: string
    createdAt?: Date | string
    swapRequestCurrents?: ShiftSwapRequestUncheckedCreateNestedManyWithoutCurrentAssignmentInput
    swapRequestWanteds?: ShiftSwapRequestUncheckedCreateNestedManyWithoutWantedAssignmentInput
  }

  export type ShiftAssignmentCreateOrConnectWithoutUserInput = {
    where: ShiftAssignmentWhereUniqueInput
    create: XOR<ShiftAssignmentCreateWithoutUserInput, ShiftAssignmentUncheckedCreateWithoutUserInput>
  }

  export type AvailabilityCreateWithoutUserInput = {
    id?: string
    start: Date | string
    end: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AvailabilityUncheckedCreateWithoutUserInput = {
    id?: string
    start: Date | string
    end: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AvailabilityCreateOrConnectWithoutUserInput = {
    where: AvailabilityWhereUniqueInput
    create: XOR<AvailabilityCreateWithoutUserInput, AvailabilityUncheckedCreateWithoutUserInput>
  }

  export type ShiftSwapRequestCreateWithoutCreatedByInput = {
    id?: string
    status?: string
    createdAt?: Date | string
    currentAssignment: ShiftAssignmentCreateNestedOneWithoutSwapRequestCurrentsInput
    wantedAssignment: ShiftAssignmentCreateNestedOneWithoutSwapRequestWantedsInput
  }

  export type ShiftSwapRequestUncheckedCreateWithoutCreatedByInput = {
    id?: string
    currentShiftId: string
    currentUserId: string
    wantedShiftId: string
    wantedUserId: string
    status?: string
    createdAt?: Date | string
  }

  export type ShiftSwapRequestCreateOrConnectWithoutCreatedByInput = {
    where: ShiftSwapRequestWhereUniqueInput
    create: XOR<ShiftSwapRequestCreateWithoutCreatedByInput, ShiftSwapRequestUncheckedCreateWithoutCreatedByInput>
  }

  export type ShiftCreateWithoutCreatedByInput = {
    id?: string
    start: Date | string
    end: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedTo?: ShiftAssignmentCreateNestedManyWithoutShiftInput
  }

  export type ShiftUncheckedCreateWithoutCreatedByInput = {
    id?: string
    start: Date | string
    end: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    assignedTo?: ShiftAssignmentUncheckedCreateNestedManyWithoutShiftInput
  }

  export type ShiftCreateOrConnectWithoutCreatedByInput = {
    where: ShiftWhereUniqueInput
    create: XOR<ShiftCreateWithoutCreatedByInput, ShiftUncheckedCreateWithoutCreatedByInput>
  }

  export type ShiftAssignmentUpsertWithWhereUniqueWithoutUserInput = {
    where: ShiftAssignmentWhereUniqueInput
    update: XOR<ShiftAssignmentUpdateWithoutUserInput, ShiftAssignmentUncheckedUpdateWithoutUserInput>
    create: XOR<ShiftAssignmentCreateWithoutUserInput, ShiftAssignmentUncheckedCreateWithoutUserInput>
  }

  export type ShiftAssignmentUpdateWithWhereUniqueWithoutUserInput = {
    where: ShiftAssignmentWhereUniqueInput
    data: XOR<ShiftAssignmentUpdateWithoutUserInput, ShiftAssignmentUncheckedUpdateWithoutUserInput>
  }

  export type ShiftAssignmentUpdateManyWithWhereWithoutUserInput = {
    where: ShiftAssignmentScalarWhereInput
    data: XOR<ShiftAssignmentUpdateManyMutationInput, ShiftAssignmentUncheckedUpdateManyWithoutUserInput>
  }

  export type ShiftAssignmentScalarWhereInput = {
    AND?: ShiftAssignmentScalarWhereInput | ShiftAssignmentScalarWhereInput[]
    OR?: ShiftAssignmentScalarWhereInput[]
    NOT?: ShiftAssignmentScalarWhereInput | ShiftAssignmentScalarWhereInput[]
    userId?: StringFilter<"ShiftAssignment"> | string
    shiftId?: StringFilter<"ShiftAssignment"> | string
    createdAt?: DateTimeFilter<"ShiftAssignment"> | Date | string
  }

  export type AvailabilityUpsertWithWhereUniqueWithoutUserInput = {
    where: AvailabilityWhereUniqueInput
    update: XOR<AvailabilityUpdateWithoutUserInput, AvailabilityUncheckedUpdateWithoutUserInput>
    create: XOR<AvailabilityCreateWithoutUserInput, AvailabilityUncheckedCreateWithoutUserInput>
  }

  export type AvailabilityUpdateWithWhereUniqueWithoutUserInput = {
    where: AvailabilityWhereUniqueInput
    data: XOR<AvailabilityUpdateWithoutUserInput, AvailabilityUncheckedUpdateWithoutUserInput>
  }

  export type AvailabilityUpdateManyWithWhereWithoutUserInput = {
    where: AvailabilityScalarWhereInput
    data: XOR<AvailabilityUpdateManyMutationInput, AvailabilityUncheckedUpdateManyWithoutUserInput>
  }

  export type AvailabilityScalarWhereInput = {
    AND?: AvailabilityScalarWhereInput | AvailabilityScalarWhereInput[]
    OR?: AvailabilityScalarWhereInput[]
    NOT?: AvailabilityScalarWhereInput | AvailabilityScalarWhereInput[]
    id?: StringFilter<"Availability"> | string
    userId?: StringFilter<"Availability"> | string
    start?: DateTimeFilter<"Availability"> | Date | string
    end?: DateTimeFilter<"Availability"> | Date | string
    createdAt?: DateTimeFilter<"Availability"> | Date | string
    updatedAt?: DateTimeFilter<"Availability"> | Date | string
  }

  export type ShiftSwapRequestUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: ShiftSwapRequestWhereUniqueInput
    update: XOR<ShiftSwapRequestUpdateWithoutCreatedByInput, ShiftSwapRequestUncheckedUpdateWithoutCreatedByInput>
    create: XOR<ShiftSwapRequestCreateWithoutCreatedByInput, ShiftSwapRequestUncheckedCreateWithoutCreatedByInput>
  }

  export type ShiftSwapRequestUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: ShiftSwapRequestWhereUniqueInput
    data: XOR<ShiftSwapRequestUpdateWithoutCreatedByInput, ShiftSwapRequestUncheckedUpdateWithoutCreatedByInput>
  }

  export type ShiftSwapRequestUpdateManyWithWhereWithoutCreatedByInput = {
    where: ShiftSwapRequestScalarWhereInput
    data: XOR<ShiftSwapRequestUpdateManyMutationInput, ShiftSwapRequestUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type ShiftSwapRequestScalarWhereInput = {
    AND?: ShiftSwapRequestScalarWhereInput | ShiftSwapRequestScalarWhereInput[]
    OR?: ShiftSwapRequestScalarWhereInput[]
    NOT?: ShiftSwapRequestScalarWhereInput | ShiftSwapRequestScalarWhereInput[]
    id?: StringFilter<"ShiftSwapRequest"> | string
    createdById?: StringFilter<"ShiftSwapRequest"> | string
    currentShiftId?: StringFilter<"ShiftSwapRequest"> | string
    currentUserId?: StringFilter<"ShiftSwapRequest"> | string
    wantedShiftId?: StringFilter<"ShiftSwapRequest"> | string
    wantedUserId?: StringFilter<"ShiftSwapRequest"> | string
    status?: StringFilter<"ShiftSwapRequest"> | string
    createdAt?: DateTimeFilter<"ShiftSwapRequest"> | Date | string
  }

  export type ShiftUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: ShiftWhereUniqueInput
    update: XOR<ShiftUpdateWithoutCreatedByInput, ShiftUncheckedUpdateWithoutCreatedByInput>
    create: XOR<ShiftCreateWithoutCreatedByInput, ShiftUncheckedCreateWithoutCreatedByInput>
  }

  export type ShiftUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: ShiftWhereUniqueInput
    data: XOR<ShiftUpdateWithoutCreatedByInput, ShiftUncheckedUpdateWithoutCreatedByInput>
  }

  export type ShiftUpdateManyWithWhereWithoutCreatedByInput = {
    where: ShiftScalarWhereInput
    data: XOR<ShiftUpdateManyMutationInput, ShiftUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type ShiftScalarWhereInput = {
    AND?: ShiftScalarWhereInput | ShiftScalarWhereInput[]
    OR?: ShiftScalarWhereInput[]
    NOT?: ShiftScalarWhereInput | ShiftScalarWhereInput[]
    id?: StringFilter<"Shift"> | string
    start?: DateTimeFilter<"Shift"> | Date | string
    end?: DateTimeFilter<"Shift"> | Date | string
    createdById?: StringFilter<"Shift"> | string
    createdAt?: DateTimeFilter<"Shift"> | Date | string
    updatedAt?: DateTimeFilter<"Shift"> | Date | string
  }

  export type UserCreateWithoutAssignedShiftsInput = {
    id: string
    role?: string
    availability?: AvailabilityCreateNestedManyWithoutUserInput
    initiatedSwaps?: ShiftSwapRequestCreateNestedManyWithoutCreatedByInput
    createdShifts?: ShiftCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutAssignedShiftsInput = {
    id: string
    role?: string
    availability?: AvailabilityUncheckedCreateNestedManyWithoutUserInput
    initiatedSwaps?: ShiftSwapRequestUncheckedCreateNestedManyWithoutCreatedByInput
    createdShifts?: ShiftUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutAssignedShiftsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssignedShiftsInput, UserUncheckedCreateWithoutAssignedShiftsInput>
  }

  export type ShiftCreateWithoutAssignedToInput = {
    id?: string
    start: Date | string
    end: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    createdBy: UserCreateNestedOneWithoutCreatedShiftsInput
  }

  export type ShiftUncheckedCreateWithoutAssignedToInput = {
    id?: string
    start: Date | string
    end: Date | string
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShiftCreateOrConnectWithoutAssignedToInput = {
    where: ShiftWhereUniqueInput
    create: XOR<ShiftCreateWithoutAssignedToInput, ShiftUncheckedCreateWithoutAssignedToInput>
  }

  export type ShiftSwapRequestCreateWithoutCurrentAssignmentInput = {
    id?: string
    status?: string
    createdAt?: Date | string
    createdBy: UserCreateNestedOneWithoutInitiatedSwapsInput
    wantedAssignment: ShiftAssignmentCreateNestedOneWithoutSwapRequestWantedsInput
  }

  export type ShiftSwapRequestUncheckedCreateWithoutCurrentAssignmentInput = {
    id?: string
    createdById: string
    wantedShiftId: string
    wantedUserId: string
    status?: string
    createdAt?: Date | string
  }

  export type ShiftSwapRequestCreateOrConnectWithoutCurrentAssignmentInput = {
    where: ShiftSwapRequestWhereUniqueInput
    create: XOR<ShiftSwapRequestCreateWithoutCurrentAssignmentInput, ShiftSwapRequestUncheckedCreateWithoutCurrentAssignmentInput>
  }

  export type ShiftSwapRequestCreateWithoutWantedAssignmentInput = {
    id?: string
    status?: string
    createdAt?: Date | string
    createdBy: UserCreateNestedOneWithoutInitiatedSwapsInput
    currentAssignment: ShiftAssignmentCreateNestedOneWithoutSwapRequestCurrentsInput
  }

  export type ShiftSwapRequestUncheckedCreateWithoutWantedAssignmentInput = {
    id?: string
    createdById: string
    currentShiftId: string
    currentUserId: string
    status?: string
    createdAt?: Date | string
  }

  export type ShiftSwapRequestCreateOrConnectWithoutWantedAssignmentInput = {
    where: ShiftSwapRequestWhereUniqueInput
    create: XOR<ShiftSwapRequestCreateWithoutWantedAssignmentInput, ShiftSwapRequestUncheckedCreateWithoutWantedAssignmentInput>
  }

  export type UserUpsertWithoutAssignedShiftsInput = {
    update: XOR<UserUpdateWithoutAssignedShiftsInput, UserUncheckedUpdateWithoutAssignedShiftsInput>
    create: XOR<UserCreateWithoutAssignedShiftsInput, UserUncheckedCreateWithoutAssignedShiftsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAssignedShiftsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAssignedShiftsInput, UserUncheckedUpdateWithoutAssignedShiftsInput>
  }

  export type UserUpdateWithoutAssignedShiftsInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    availability?: AvailabilityUpdateManyWithoutUserNestedInput
    initiatedSwaps?: ShiftSwapRequestUpdateManyWithoutCreatedByNestedInput
    createdShifts?: ShiftUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutAssignedShiftsInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    availability?: AvailabilityUncheckedUpdateManyWithoutUserNestedInput
    initiatedSwaps?: ShiftSwapRequestUncheckedUpdateManyWithoutCreatedByNestedInput
    createdShifts?: ShiftUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type ShiftUpsertWithoutAssignedToInput = {
    update: XOR<ShiftUpdateWithoutAssignedToInput, ShiftUncheckedUpdateWithoutAssignedToInput>
    create: XOR<ShiftCreateWithoutAssignedToInput, ShiftUncheckedCreateWithoutAssignedToInput>
    where?: ShiftWhereInput
  }

  export type ShiftUpdateToOneWithWhereWithoutAssignedToInput = {
    where?: ShiftWhereInput
    data: XOR<ShiftUpdateWithoutAssignedToInput, ShiftUncheckedUpdateWithoutAssignedToInput>
  }

  export type ShiftUpdateWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutCreatedShiftsNestedInput
  }

  export type ShiftUncheckedUpdateWithoutAssignedToInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShiftSwapRequestUpsertWithWhereUniqueWithoutCurrentAssignmentInput = {
    where: ShiftSwapRequestWhereUniqueInput
    update: XOR<ShiftSwapRequestUpdateWithoutCurrentAssignmentInput, ShiftSwapRequestUncheckedUpdateWithoutCurrentAssignmentInput>
    create: XOR<ShiftSwapRequestCreateWithoutCurrentAssignmentInput, ShiftSwapRequestUncheckedCreateWithoutCurrentAssignmentInput>
  }

  export type ShiftSwapRequestUpdateWithWhereUniqueWithoutCurrentAssignmentInput = {
    where: ShiftSwapRequestWhereUniqueInput
    data: XOR<ShiftSwapRequestUpdateWithoutCurrentAssignmentInput, ShiftSwapRequestUncheckedUpdateWithoutCurrentAssignmentInput>
  }

  export type ShiftSwapRequestUpdateManyWithWhereWithoutCurrentAssignmentInput = {
    where: ShiftSwapRequestScalarWhereInput
    data: XOR<ShiftSwapRequestUpdateManyMutationInput, ShiftSwapRequestUncheckedUpdateManyWithoutCurrentAssignmentInput>
  }

  export type ShiftSwapRequestUpsertWithWhereUniqueWithoutWantedAssignmentInput = {
    where: ShiftSwapRequestWhereUniqueInput
    update: XOR<ShiftSwapRequestUpdateWithoutWantedAssignmentInput, ShiftSwapRequestUncheckedUpdateWithoutWantedAssignmentInput>
    create: XOR<ShiftSwapRequestCreateWithoutWantedAssignmentInput, ShiftSwapRequestUncheckedCreateWithoutWantedAssignmentInput>
  }

  export type ShiftSwapRequestUpdateWithWhereUniqueWithoutWantedAssignmentInput = {
    where: ShiftSwapRequestWhereUniqueInput
    data: XOR<ShiftSwapRequestUpdateWithoutWantedAssignmentInput, ShiftSwapRequestUncheckedUpdateWithoutWantedAssignmentInput>
  }

  export type ShiftSwapRequestUpdateManyWithWhereWithoutWantedAssignmentInput = {
    where: ShiftSwapRequestScalarWhereInput
    data: XOR<ShiftSwapRequestUpdateManyMutationInput, ShiftSwapRequestUncheckedUpdateManyWithoutWantedAssignmentInput>
  }

  export type ShiftAssignmentCreateWithoutShiftInput = {
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutAssignedShiftsInput
    swapRequestCurrents?: ShiftSwapRequestCreateNestedManyWithoutCurrentAssignmentInput
    swapRequestWanteds?: ShiftSwapRequestCreateNestedManyWithoutWantedAssignmentInput
  }

  export type ShiftAssignmentUncheckedCreateWithoutShiftInput = {
    userId: string
    createdAt?: Date | string
    swapRequestCurrents?: ShiftSwapRequestUncheckedCreateNestedManyWithoutCurrentAssignmentInput
    swapRequestWanteds?: ShiftSwapRequestUncheckedCreateNestedManyWithoutWantedAssignmentInput
  }

  export type ShiftAssignmentCreateOrConnectWithoutShiftInput = {
    where: ShiftAssignmentWhereUniqueInput
    create: XOR<ShiftAssignmentCreateWithoutShiftInput, ShiftAssignmentUncheckedCreateWithoutShiftInput>
  }

  export type UserCreateWithoutCreatedShiftsInput = {
    id: string
    role?: string
    assignedShifts?: ShiftAssignmentCreateNestedManyWithoutUserInput
    availability?: AvailabilityCreateNestedManyWithoutUserInput
    initiatedSwaps?: ShiftSwapRequestCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutCreatedShiftsInput = {
    id: string
    role?: string
    assignedShifts?: ShiftAssignmentUncheckedCreateNestedManyWithoutUserInput
    availability?: AvailabilityUncheckedCreateNestedManyWithoutUserInput
    initiatedSwaps?: ShiftSwapRequestUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutCreatedShiftsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedShiftsInput, UserUncheckedCreateWithoutCreatedShiftsInput>
  }

  export type ShiftAssignmentUpsertWithWhereUniqueWithoutShiftInput = {
    where: ShiftAssignmentWhereUniqueInput
    update: XOR<ShiftAssignmentUpdateWithoutShiftInput, ShiftAssignmentUncheckedUpdateWithoutShiftInput>
    create: XOR<ShiftAssignmentCreateWithoutShiftInput, ShiftAssignmentUncheckedCreateWithoutShiftInput>
  }

  export type ShiftAssignmentUpdateWithWhereUniqueWithoutShiftInput = {
    where: ShiftAssignmentWhereUniqueInput
    data: XOR<ShiftAssignmentUpdateWithoutShiftInput, ShiftAssignmentUncheckedUpdateWithoutShiftInput>
  }

  export type ShiftAssignmentUpdateManyWithWhereWithoutShiftInput = {
    where: ShiftAssignmentScalarWhereInput
    data: XOR<ShiftAssignmentUpdateManyMutationInput, ShiftAssignmentUncheckedUpdateManyWithoutShiftInput>
  }

  export type UserUpsertWithoutCreatedShiftsInput = {
    update: XOR<UserUpdateWithoutCreatedShiftsInput, UserUncheckedUpdateWithoutCreatedShiftsInput>
    create: XOR<UserCreateWithoutCreatedShiftsInput, UserUncheckedCreateWithoutCreatedShiftsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedShiftsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedShiftsInput, UserUncheckedUpdateWithoutCreatedShiftsInput>
  }

  export type UserUpdateWithoutCreatedShiftsInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    assignedShifts?: ShiftAssignmentUpdateManyWithoutUserNestedInput
    availability?: AvailabilityUpdateManyWithoutUserNestedInput
    initiatedSwaps?: ShiftSwapRequestUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedShiftsInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    assignedShifts?: ShiftAssignmentUncheckedUpdateManyWithoutUserNestedInput
    availability?: AvailabilityUncheckedUpdateManyWithoutUserNestedInput
    initiatedSwaps?: ShiftSwapRequestUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateWithoutAvailabilityInput = {
    id: string
    role?: string
    assignedShifts?: ShiftAssignmentCreateNestedManyWithoutUserInput
    initiatedSwaps?: ShiftSwapRequestCreateNestedManyWithoutCreatedByInput
    createdShifts?: ShiftCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutAvailabilityInput = {
    id: string
    role?: string
    assignedShifts?: ShiftAssignmentUncheckedCreateNestedManyWithoutUserInput
    initiatedSwaps?: ShiftSwapRequestUncheckedCreateNestedManyWithoutCreatedByInput
    createdShifts?: ShiftUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutAvailabilityInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAvailabilityInput, UserUncheckedCreateWithoutAvailabilityInput>
  }

  export type UserUpsertWithoutAvailabilityInput = {
    update: XOR<UserUpdateWithoutAvailabilityInput, UserUncheckedUpdateWithoutAvailabilityInput>
    create: XOR<UserCreateWithoutAvailabilityInput, UserUncheckedCreateWithoutAvailabilityInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAvailabilityInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAvailabilityInput, UserUncheckedUpdateWithoutAvailabilityInput>
  }

  export type UserUpdateWithoutAvailabilityInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    assignedShifts?: ShiftAssignmentUpdateManyWithoutUserNestedInput
    initiatedSwaps?: ShiftSwapRequestUpdateManyWithoutCreatedByNestedInput
    createdShifts?: ShiftUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutAvailabilityInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    assignedShifts?: ShiftAssignmentUncheckedUpdateManyWithoutUserNestedInput
    initiatedSwaps?: ShiftSwapRequestUncheckedUpdateManyWithoutCreatedByNestedInput
    createdShifts?: ShiftUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateWithoutInitiatedSwapsInput = {
    id: string
    role?: string
    assignedShifts?: ShiftAssignmentCreateNestedManyWithoutUserInput
    availability?: AvailabilityCreateNestedManyWithoutUserInput
    createdShifts?: ShiftCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateWithoutInitiatedSwapsInput = {
    id: string
    role?: string
    assignedShifts?: ShiftAssignmentUncheckedCreateNestedManyWithoutUserInput
    availability?: AvailabilityUncheckedCreateNestedManyWithoutUserInput
    createdShifts?: ShiftUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutInitiatedSwapsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInitiatedSwapsInput, UserUncheckedCreateWithoutInitiatedSwapsInput>
  }

  export type ShiftAssignmentCreateWithoutSwapRequestCurrentsInput = {
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutAssignedShiftsInput
    shift: ShiftCreateNestedOneWithoutAssignedToInput
    swapRequestWanteds?: ShiftSwapRequestCreateNestedManyWithoutWantedAssignmentInput
  }

  export type ShiftAssignmentUncheckedCreateWithoutSwapRequestCurrentsInput = {
    userId: string
    shiftId: string
    createdAt?: Date | string
    swapRequestWanteds?: ShiftSwapRequestUncheckedCreateNestedManyWithoutWantedAssignmentInput
  }

  export type ShiftAssignmentCreateOrConnectWithoutSwapRequestCurrentsInput = {
    where: ShiftAssignmentWhereUniqueInput
    create: XOR<ShiftAssignmentCreateWithoutSwapRequestCurrentsInput, ShiftAssignmentUncheckedCreateWithoutSwapRequestCurrentsInput>
  }

  export type ShiftAssignmentCreateWithoutSwapRequestWantedsInput = {
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutAssignedShiftsInput
    shift: ShiftCreateNestedOneWithoutAssignedToInput
    swapRequestCurrents?: ShiftSwapRequestCreateNestedManyWithoutCurrentAssignmentInput
  }

  export type ShiftAssignmentUncheckedCreateWithoutSwapRequestWantedsInput = {
    userId: string
    shiftId: string
    createdAt?: Date | string
    swapRequestCurrents?: ShiftSwapRequestUncheckedCreateNestedManyWithoutCurrentAssignmentInput
  }

  export type ShiftAssignmentCreateOrConnectWithoutSwapRequestWantedsInput = {
    where: ShiftAssignmentWhereUniqueInput
    create: XOR<ShiftAssignmentCreateWithoutSwapRequestWantedsInput, ShiftAssignmentUncheckedCreateWithoutSwapRequestWantedsInput>
  }

  export type UserUpsertWithoutInitiatedSwapsInput = {
    update: XOR<UserUpdateWithoutInitiatedSwapsInput, UserUncheckedUpdateWithoutInitiatedSwapsInput>
    create: XOR<UserCreateWithoutInitiatedSwapsInput, UserUncheckedCreateWithoutInitiatedSwapsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInitiatedSwapsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInitiatedSwapsInput, UserUncheckedUpdateWithoutInitiatedSwapsInput>
  }

  export type UserUpdateWithoutInitiatedSwapsInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    assignedShifts?: ShiftAssignmentUpdateManyWithoutUserNestedInput
    availability?: AvailabilityUpdateManyWithoutUserNestedInput
    createdShifts?: ShiftUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutInitiatedSwapsInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    assignedShifts?: ShiftAssignmentUncheckedUpdateManyWithoutUserNestedInput
    availability?: AvailabilityUncheckedUpdateManyWithoutUserNestedInput
    createdShifts?: ShiftUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type ShiftAssignmentUpsertWithoutSwapRequestCurrentsInput = {
    update: XOR<ShiftAssignmentUpdateWithoutSwapRequestCurrentsInput, ShiftAssignmentUncheckedUpdateWithoutSwapRequestCurrentsInput>
    create: XOR<ShiftAssignmentCreateWithoutSwapRequestCurrentsInput, ShiftAssignmentUncheckedCreateWithoutSwapRequestCurrentsInput>
    where?: ShiftAssignmentWhereInput
  }

  export type ShiftAssignmentUpdateToOneWithWhereWithoutSwapRequestCurrentsInput = {
    where?: ShiftAssignmentWhereInput
    data: XOR<ShiftAssignmentUpdateWithoutSwapRequestCurrentsInput, ShiftAssignmentUncheckedUpdateWithoutSwapRequestCurrentsInput>
  }

  export type ShiftAssignmentUpdateWithoutSwapRequestCurrentsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAssignedShiftsNestedInput
    shift?: ShiftUpdateOneRequiredWithoutAssignedToNestedInput
    swapRequestWanteds?: ShiftSwapRequestUpdateManyWithoutWantedAssignmentNestedInput
  }

  export type ShiftAssignmentUncheckedUpdateWithoutSwapRequestCurrentsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    shiftId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    swapRequestWanteds?: ShiftSwapRequestUncheckedUpdateManyWithoutWantedAssignmentNestedInput
  }

  export type ShiftAssignmentUpsertWithoutSwapRequestWantedsInput = {
    update: XOR<ShiftAssignmentUpdateWithoutSwapRequestWantedsInput, ShiftAssignmentUncheckedUpdateWithoutSwapRequestWantedsInput>
    create: XOR<ShiftAssignmentCreateWithoutSwapRequestWantedsInput, ShiftAssignmentUncheckedCreateWithoutSwapRequestWantedsInput>
    where?: ShiftAssignmentWhereInput
  }

  export type ShiftAssignmentUpdateToOneWithWhereWithoutSwapRequestWantedsInput = {
    where?: ShiftAssignmentWhereInput
    data: XOR<ShiftAssignmentUpdateWithoutSwapRequestWantedsInput, ShiftAssignmentUncheckedUpdateWithoutSwapRequestWantedsInput>
  }

  export type ShiftAssignmentUpdateWithoutSwapRequestWantedsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAssignedShiftsNestedInput
    shift?: ShiftUpdateOneRequiredWithoutAssignedToNestedInput
    swapRequestCurrents?: ShiftSwapRequestUpdateManyWithoutCurrentAssignmentNestedInput
  }

  export type ShiftAssignmentUncheckedUpdateWithoutSwapRequestWantedsInput = {
    userId?: StringFieldUpdateOperationsInput | string
    shiftId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    swapRequestCurrents?: ShiftSwapRequestUncheckedUpdateManyWithoutCurrentAssignmentNestedInput
  }

  export type ShiftAssignmentUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shift?: ShiftUpdateOneRequiredWithoutAssignedToNestedInput
    swapRequestCurrents?: ShiftSwapRequestUpdateManyWithoutCurrentAssignmentNestedInput
    swapRequestWanteds?: ShiftSwapRequestUpdateManyWithoutWantedAssignmentNestedInput
  }

  export type ShiftAssignmentUncheckedUpdateWithoutUserInput = {
    shiftId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    swapRequestCurrents?: ShiftSwapRequestUncheckedUpdateManyWithoutCurrentAssignmentNestedInput
    swapRequestWanteds?: ShiftSwapRequestUncheckedUpdateManyWithoutWantedAssignmentNestedInput
  }

  export type ShiftAssignmentUncheckedUpdateManyWithoutUserInput = {
    shiftId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilityUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilityUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AvailabilityUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShiftSwapRequestUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    currentAssignment?: ShiftAssignmentUpdateOneRequiredWithoutSwapRequestCurrentsNestedInput
    wantedAssignment?: ShiftAssignmentUpdateOneRequiredWithoutSwapRequestWantedsNestedInput
  }

  export type ShiftSwapRequestUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentShiftId?: StringFieldUpdateOperationsInput | string
    currentUserId?: StringFieldUpdateOperationsInput | string
    wantedShiftId?: StringFieldUpdateOperationsInput | string
    wantedUserId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShiftSwapRequestUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    currentShiftId?: StringFieldUpdateOperationsInput | string
    currentUserId?: StringFieldUpdateOperationsInput | string
    wantedShiftId?: StringFieldUpdateOperationsInput | string
    wantedUserId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShiftUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTo?: ShiftAssignmentUpdateManyWithoutShiftNestedInput
  }

  export type ShiftUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignedTo?: ShiftAssignmentUncheckedUpdateManyWithoutShiftNestedInput
  }

  export type ShiftUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShiftSwapRequestUpdateWithoutCurrentAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutInitiatedSwapsNestedInput
    wantedAssignment?: ShiftAssignmentUpdateOneRequiredWithoutSwapRequestWantedsNestedInput
  }

  export type ShiftSwapRequestUncheckedUpdateWithoutCurrentAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    wantedShiftId?: StringFieldUpdateOperationsInput | string
    wantedUserId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShiftSwapRequestUncheckedUpdateManyWithoutCurrentAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    wantedShiftId?: StringFieldUpdateOperationsInput | string
    wantedUserId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShiftSwapRequestUpdateWithoutWantedAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneRequiredWithoutInitiatedSwapsNestedInput
    currentAssignment?: ShiftAssignmentUpdateOneRequiredWithoutSwapRequestCurrentsNestedInput
  }

  export type ShiftSwapRequestUncheckedUpdateWithoutWantedAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    currentShiftId?: StringFieldUpdateOperationsInput | string
    currentUserId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShiftSwapRequestUncheckedUpdateManyWithoutWantedAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    currentShiftId?: StringFieldUpdateOperationsInput | string
    currentUserId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShiftAssignmentUpdateWithoutShiftInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAssignedShiftsNestedInput
    swapRequestCurrents?: ShiftSwapRequestUpdateManyWithoutCurrentAssignmentNestedInput
    swapRequestWanteds?: ShiftSwapRequestUpdateManyWithoutWantedAssignmentNestedInput
  }

  export type ShiftAssignmentUncheckedUpdateWithoutShiftInput = {
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    swapRequestCurrents?: ShiftSwapRequestUncheckedUpdateManyWithoutCurrentAssignmentNestedInput
    swapRequestWanteds?: ShiftSwapRequestUncheckedUpdateManyWithoutWantedAssignmentNestedInput
  }

  export type ShiftAssignmentUncheckedUpdateManyWithoutShiftInput = {
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ShiftAssignmentCountOutputTypeDefaultArgs instead
     */
    export type ShiftAssignmentCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ShiftAssignmentCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ShiftCountOutputTypeDefaultArgs instead
     */
    export type ShiftCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ShiftCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ShiftAssignmentDefaultArgs instead
     */
    export type ShiftAssignmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ShiftAssignmentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ShiftDefaultArgs instead
     */
    export type ShiftArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ShiftDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AvailabilityDefaultArgs instead
     */
    export type AvailabilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AvailabilityDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ShiftSwapRequestDefaultArgs instead
     */
    export type ShiftSwapRequestArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ShiftSwapRequestDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}