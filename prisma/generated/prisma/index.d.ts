
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
 * Model autor
 * 
 */
export type autor = $Result.DefaultSelection<Prisma.$autorPayload>
/**
 * Model livro
 * 
 */
export type livro = $Result.DefaultSelection<Prisma.$livroPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Autors
 * const autors = await prisma.autor.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Autors
   * const autors = await prisma.autor.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.autor`: Exposes CRUD operations for the **autor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Autors
    * const autors = await prisma.autor.findMany()
    * ```
    */
  get autor(): Prisma.autorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.livro`: Exposes CRUD operations for the **livro** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Livros
    * const livros = await prisma.livro.findMany()
    * ```
    */
  get livro(): Prisma.livroDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    autor: 'autor',
    livro: 'livro'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "autor" | "livro"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      autor: {
        payload: Prisma.$autorPayload<ExtArgs>
        fields: Prisma.autorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.autorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$autorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.autorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$autorPayload>
          }
          findFirst: {
            args: Prisma.autorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$autorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.autorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$autorPayload>
          }
          findMany: {
            args: Prisma.autorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$autorPayload>[]
          }
          create: {
            args: Prisma.autorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$autorPayload>
          }
          createMany: {
            args: Prisma.autorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.autorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$autorPayload>[]
          }
          delete: {
            args: Prisma.autorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$autorPayload>
          }
          update: {
            args: Prisma.autorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$autorPayload>
          }
          deleteMany: {
            args: Prisma.autorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.autorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.autorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$autorPayload>[]
          }
          upsert: {
            args: Prisma.autorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$autorPayload>
          }
          aggregate: {
            args: Prisma.AutorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAutor>
          }
          groupBy: {
            args: Prisma.autorGroupByArgs<ExtArgs>
            result: $Utils.Optional<AutorGroupByOutputType>[]
          }
          count: {
            args: Prisma.autorCountArgs<ExtArgs>
            result: $Utils.Optional<AutorCountAggregateOutputType> | number
          }
        }
      }
      livro: {
        payload: Prisma.$livroPayload<ExtArgs>
        fields: Prisma.livroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.livroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$livroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.livroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$livroPayload>
          }
          findFirst: {
            args: Prisma.livroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$livroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.livroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$livroPayload>
          }
          findMany: {
            args: Prisma.livroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$livroPayload>[]
          }
          create: {
            args: Prisma.livroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$livroPayload>
          }
          createMany: {
            args: Prisma.livroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.livroCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$livroPayload>[]
          }
          delete: {
            args: Prisma.livroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$livroPayload>
          }
          update: {
            args: Prisma.livroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$livroPayload>
          }
          deleteMany: {
            args: Prisma.livroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.livroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.livroUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$livroPayload>[]
          }
          upsert: {
            args: Prisma.livroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$livroPayload>
          }
          aggregate: {
            args: Prisma.LivroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLivro>
          }
          groupBy: {
            args: Prisma.livroGroupByArgs<ExtArgs>
            result: $Utils.Optional<LivroGroupByOutputType>[]
          }
          count: {
            args: Prisma.livroCountArgs<ExtArgs>
            result: $Utils.Optional<LivroCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    autor?: autorOmit
    livro?: livroOmit
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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type AutorCountOutputType
   */

  export type AutorCountOutputType = {
    livro: number
  }

  export type AutorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    livro?: boolean | AutorCountOutputTypeCountLivroArgs
  }

  // Custom InputTypes
  /**
   * AutorCountOutputType without action
   */
  export type AutorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AutorCountOutputType
     */
    select?: AutorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AutorCountOutputType without action
   */
  export type AutorCountOutputTypeCountLivroArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: livroWhereInput
  }


  /**
   * Models
   */

  /**
   * Model autor
   */

  export type AggregateAutor = {
    _count: AutorCountAggregateOutputType | null
    _avg: AutorAvgAggregateOutputType | null
    _sum: AutorSumAggregateOutputType | null
    _min: AutorMinAggregateOutputType | null
    _max: AutorMaxAggregateOutputType | null
  }

  export type AutorAvgAggregateOutputType = {
    idautor: number | null
  }

  export type AutorSumAggregateOutputType = {
    idautor: number | null
  }

  export type AutorMinAggregateOutputType = {
    idautor: number | null
    nome: string | null
  }

  export type AutorMaxAggregateOutputType = {
    idautor: number | null
    nome: string | null
  }

  export type AutorCountAggregateOutputType = {
    idautor: number
    nome: number
    _all: number
  }


  export type AutorAvgAggregateInputType = {
    idautor?: true
  }

  export type AutorSumAggregateInputType = {
    idautor?: true
  }

  export type AutorMinAggregateInputType = {
    idautor?: true
    nome?: true
  }

  export type AutorMaxAggregateInputType = {
    idautor?: true
    nome?: true
  }

  export type AutorCountAggregateInputType = {
    idautor?: true
    nome?: true
    _all?: true
  }

  export type AutorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which autor to aggregate.
     */
    where?: autorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of autors to fetch.
     */
    orderBy?: autorOrderByWithRelationInput | autorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: autorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` autors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` autors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned autors
    **/
    _count?: true | AutorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AutorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AutorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AutorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AutorMaxAggregateInputType
  }

  export type GetAutorAggregateType<T extends AutorAggregateArgs> = {
        [P in keyof T & keyof AggregateAutor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAutor[P]>
      : GetScalarType<T[P], AggregateAutor[P]>
  }




  export type autorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: autorWhereInput
    orderBy?: autorOrderByWithAggregationInput | autorOrderByWithAggregationInput[]
    by: AutorScalarFieldEnum[] | AutorScalarFieldEnum
    having?: autorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AutorCountAggregateInputType | true
    _avg?: AutorAvgAggregateInputType
    _sum?: AutorSumAggregateInputType
    _min?: AutorMinAggregateInputType
    _max?: AutorMaxAggregateInputType
  }

  export type AutorGroupByOutputType = {
    idautor: number
    nome: string | null
    _count: AutorCountAggregateOutputType | null
    _avg: AutorAvgAggregateOutputType | null
    _sum: AutorSumAggregateOutputType | null
    _min: AutorMinAggregateOutputType | null
    _max: AutorMaxAggregateOutputType | null
  }

  type GetAutorGroupByPayload<T extends autorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AutorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AutorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AutorGroupByOutputType[P]>
            : GetScalarType<T[P], AutorGroupByOutputType[P]>
        }
      >
    >


  export type autorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idautor?: boolean
    nome?: boolean
    livro?: boolean | autor$livroArgs<ExtArgs>
    _count?: boolean | AutorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["autor"]>

  export type autorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idautor?: boolean
    nome?: boolean
  }, ExtArgs["result"]["autor"]>

  export type autorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idautor?: boolean
    nome?: boolean
  }, ExtArgs["result"]["autor"]>

  export type autorSelectScalar = {
    idautor?: boolean
    nome?: boolean
  }

  export type autorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idautor" | "nome", ExtArgs["result"]["autor"]>
  export type autorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    livro?: boolean | autor$livroArgs<ExtArgs>
    _count?: boolean | AutorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type autorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type autorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $autorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "autor"
    objects: {
      livro: Prisma.$livroPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      idautor: number
      nome: string | null
    }, ExtArgs["result"]["autor"]>
    composites: {}
  }

  type autorGetPayload<S extends boolean | null | undefined | autorDefaultArgs> = $Result.GetResult<Prisma.$autorPayload, S>

  type autorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<autorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AutorCountAggregateInputType | true
    }

  export interface autorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['autor'], meta: { name: 'autor' } }
    /**
     * Find zero or one Autor that matches the filter.
     * @param {autorFindUniqueArgs} args - Arguments to find a Autor
     * @example
     * // Get one Autor
     * const autor = await prisma.autor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends autorFindUniqueArgs>(args: SelectSubset<T, autorFindUniqueArgs<ExtArgs>>): Prisma__autorClient<$Result.GetResult<Prisma.$autorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Autor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {autorFindUniqueOrThrowArgs} args - Arguments to find a Autor
     * @example
     * // Get one Autor
     * const autor = await prisma.autor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends autorFindUniqueOrThrowArgs>(args: SelectSubset<T, autorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__autorClient<$Result.GetResult<Prisma.$autorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Autor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {autorFindFirstArgs} args - Arguments to find a Autor
     * @example
     * // Get one Autor
     * const autor = await prisma.autor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends autorFindFirstArgs>(args?: SelectSubset<T, autorFindFirstArgs<ExtArgs>>): Prisma__autorClient<$Result.GetResult<Prisma.$autorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Autor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {autorFindFirstOrThrowArgs} args - Arguments to find a Autor
     * @example
     * // Get one Autor
     * const autor = await prisma.autor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends autorFindFirstOrThrowArgs>(args?: SelectSubset<T, autorFindFirstOrThrowArgs<ExtArgs>>): Prisma__autorClient<$Result.GetResult<Prisma.$autorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Autors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {autorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Autors
     * const autors = await prisma.autor.findMany()
     * 
     * // Get first 10 Autors
     * const autors = await prisma.autor.findMany({ take: 10 })
     * 
     * // Only select the `idautor`
     * const autorWithIdautorOnly = await prisma.autor.findMany({ select: { idautor: true } })
     * 
     */
    findMany<T extends autorFindManyArgs>(args?: SelectSubset<T, autorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$autorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Autor.
     * @param {autorCreateArgs} args - Arguments to create a Autor.
     * @example
     * // Create one Autor
     * const Autor = await prisma.autor.create({
     *   data: {
     *     // ... data to create a Autor
     *   }
     * })
     * 
     */
    create<T extends autorCreateArgs>(args: SelectSubset<T, autorCreateArgs<ExtArgs>>): Prisma__autorClient<$Result.GetResult<Prisma.$autorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Autors.
     * @param {autorCreateManyArgs} args - Arguments to create many Autors.
     * @example
     * // Create many Autors
     * const autor = await prisma.autor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends autorCreateManyArgs>(args?: SelectSubset<T, autorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Autors and returns the data saved in the database.
     * @param {autorCreateManyAndReturnArgs} args - Arguments to create many Autors.
     * @example
     * // Create many Autors
     * const autor = await prisma.autor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Autors and only return the `idautor`
     * const autorWithIdautorOnly = await prisma.autor.createManyAndReturn({
     *   select: { idautor: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends autorCreateManyAndReturnArgs>(args?: SelectSubset<T, autorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$autorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Autor.
     * @param {autorDeleteArgs} args - Arguments to delete one Autor.
     * @example
     * // Delete one Autor
     * const Autor = await prisma.autor.delete({
     *   where: {
     *     // ... filter to delete one Autor
     *   }
     * })
     * 
     */
    delete<T extends autorDeleteArgs>(args: SelectSubset<T, autorDeleteArgs<ExtArgs>>): Prisma__autorClient<$Result.GetResult<Prisma.$autorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Autor.
     * @param {autorUpdateArgs} args - Arguments to update one Autor.
     * @example
     * // Update one Autor
     * const autor = await prisma.autor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends autorUpdateArgs>(args: SelectSubset<T, autorUpdateArgs<ExtArgs>>): Prisma__autorClient<$Result.GetResult<Prisma.$autorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Autors.
     * @param {autorDeleteManyArgs} args - Arguments to filter Autors to delete.
     * @example
     * // Delete a few Autors
     * const { count } = await prisma.autor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends autorDeleteManyArgs>(args?: SelectSubset<T, autorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Autors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {autorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Autors
     * const autor = await prisma.autor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends autorUpdateManyArgs>(args: SelectSubset<T, autorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Autors and returns the data updated in the database.
     * @param {autorUpdateManyAndReturnArgs} args - Arguments to update many Autors.
     * @example
     * // Update many Autors
     * const autor = await prisma.autor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Autors and only return the `idautor`
     * const autorWithIdautorOnly = await prisma.autor.updateManyAndReturn({
     *   select: { idautor: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends autorUpdateManyAndReturnArgs>(args: SelectSubset<T, autorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$autorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Autor.
     * @param {autorUpsertArgs} args - Arguments to update or create a Autor.
     * @example
     * // Update or create a Autor
     * const autor = await prisma.autor.upsert({
     *   create: {
     *     // ... data to create a Autor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Autor we want to update
     *   }
     * })
     */
    upsert<T extends autorUpsertArgs>(args: SelectSubset<T, autorUpsertArgs<ExtArgs>>): Prisma__autorClient<$Result.GetResult<Prisma.$autorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Autors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {autorCountArgs} args - Arguments to filter Autors to count.
     * @example
     * // Count the number of Autors
     * const count = await prisma.autor.count({
     *   where: {
     *     // ... the filter for the Autors we want to count
     *   }
     * })
    **/
    count<T extends autorCountArgs>(
      args?: Subset<T, autorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AutorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Autor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AutorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AutorAggregateArgs>(args: Subset<T, AutorAggregateArgs>): Prisma.PrismaPromise<GetAutorAggregateType<T>>

    /**
     * Group by Autor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {autorGroupByArgs} args - Group by arguments.
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
      T extends autorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: autorGroupByArgs['orderBy'] }
        : { orderBy?: autorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, autorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAutorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the autor model
   */
  readonly fields: autorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for autor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__autorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    livro<T extends autor$livroArgs<ExtArgs> = {}>(args?: Subset<T, autor$livroArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$livroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the autor model
   */
  interface autorFieldRefs {
    readonly idautor: FieldRef<"autor", 'Int'>
    readonly nome: FieldRef<"autor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * autor findUnique
   */
  export type autorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the autor
     */
    select?: autorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the autor
     */
    omit?: autorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: autorInclude<ExtArgs> | null
    /**
     * Filter, which autor to fetch.
     */
    where: autorWhereUniqueInput
  }

  /**
   * autor findUniqueOrThrow
   */
  export type autorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the autor
     */
    select?: autorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the autor
     */
    omit?: autorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: autorInclude<ExtArgs> | null
    /**
     * Filter, which autor to fetch.
     */
    where: autorWhereUniqueInput
  }

  /**
   * autor findFirst
   */
  export type autorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the autor
     */
    select?: autorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the autor
     */
    omit?: autorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: autorInclude<ExtArgs> | null
    /**
     * Filter, which autor to fetch.
     */
    where?: autorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of autors to fetch.
     */
    orderBy?: autorOrderByWithRelationInput | autorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for autors.
     */
    cursor?: autorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` autors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` autors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of autors.
     */
    distinct?: AutorScalarFieldEnum | AutorScalarFieldEnum[]
  }

  /**
   * autor findFirstOrThrow
   */
  export type autorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the autor
     */
    select?: autorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the autor
     */
    omit?: autorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: autorInclude<ExtArgs> | null
    /**
     * Filter, which autor to fetch.
     */
    where?: autorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of autors to fetch.
     */
    orderBy?: autorOrderByWithRelationInput | autorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for autors.
     */
    cursor?: autorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` autors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` autors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of autors.
     */
    distinct?: AutorScalarFieldEnum | AutorScalarFieldEnum[]
  }

  /**
   * autor findMany
   */
  export type autorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the autor
     */
    select?: autorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the autor
     */
    omit?: autorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: autorInclude<ExtArgs> | null
    /**
     * Filter, which autors to fetch.
     */
    where?: autorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of autors to fetch.
     */
    orderBy?: autorOrderByWithRelationInput | autorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing autors.
     */
    cursor?: autorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` autors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` autors.
     */
    skip?: number
    distinct?: AutorScalarFieldEnum | AutorScalarFieldEnum[]
  }

  /**
   * autor create
   */
  export type autorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the autor
     */
    select?: autorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the autor
     */
    omit?: autorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: autorInclude<ExtArgs> | null
    /**
     * The data needed to create a autor.
     */
    data?: XOR<autorCreateInput, autorUncheckedCreateInput>
  }

  /**
   * autor createMany
   */
  export type autorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many autors.
     */
    data: autorCreateManyInput | autorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * autor createManyAndReturn
   */
  export type autorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the autor
     */
    select?: autorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the autor
     */
    omit?: autorOmit<ExtArgs> | null
    /**
     * The data used to create many autors.
     */
    data: autorCreateManyInput | autorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * autor update
   */
  export type autorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the autor
     */
    select?: autorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the autor
     */
    omit?: autorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: autorInclude<ExtArgs> | null
    /**
     * The data needed to update a autor.
     */
    data: XOR<autorUpdateInput, autorUncheckedUpdateInput>
    /**
     * Choose, which autor to update.
     */
    where: autorWhereUniqueInput
  }

  /**
   * autor updateMany
   */
  export type autorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update autors.
     */
    data: XOR<autorUpdateManyMutationInput, autorUncheckedUpdateManyInput>
    /**
     * Filter which autors to update
     */
    where?: autorWhereInput
    /**
     * Limit how many autors to update.
     */
    limit?: number
  }

  /**
   * autor updateManyAndReturn
   */
  export type autorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the autor
     */
    select?: autorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the autor
     */
    omit?: autorOmit<ExtArgs> | null
    /**
     * The data used to update autors.
     */
    data: XOR<autorUpdateManyMutationInput, autorUncheckedUpdateManyInput>
    /**
     * Filter which autors to update
     */
    where?: autorWhereInput
    /**
     * Limit how many autors to update.
     */
    limit?: number
  }

  /**
   * autor upsert
   */
  export type autorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the autor
     */
    select?: autorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the autor
     */
    omit?: autorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: autorInclude<ExtArgs> | null
    /**
     * The filter to search for the autor to update in case it exists.
     */
    where: autorWhereUniqueInput
    /**
     * In case the autor found by the `where` argument doesn't exist, create a new autor with this data.
     */
    create: XOR<autorCreateInput, autorUncheckedCreateInput>
    /**
     * In case the autor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<autorUpdateInput, autorUncheckedUpdateInput>
  }

  /**
   * autor delete
   */
  export type autorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the autor
     */
    select?: autorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the autor
     */
    omit?: autorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: autorInclude<ExtArgs> | null
    /**
     * Filter which autor to delete.
     */
    where: autorWhereUniqueInput
  }

  /**
   * autor deleteMany
   */
  export type autorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which autors to delete
     */
    where?: autorWhereInput
    /**
     * Limit how many autors to delete.
     */
    limit?: number
  }

  /**
   * autor.livro
   */
  export type autor$livroArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the livro
     */
    select?: livroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the livro
     */
    omit?: livroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: livroInclude<ExtArgs> | null
    where?: livroWhereInput
    orderBy?: livroOrderByWithRelationInput | livroOrderByWithRelationInput[]
    cursor?: livroWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LivroScalarFieldEnum | LivroScalarFieldEnum[]
  }

  /**
   * autor without action
   */
  export type autorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the autor
     */
    select?: autorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the autor
     */
    omit?: autorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: autorInclude<ExtArgs> | null
  }


  /**
   * Model livro
   */

  export type AggregateLivro = {
    _count: LivroCountAggregateOutputType | null
    _avg: LivroAvgAggregateOutputType | null
    _sum: LivroSumAggregateOutputType | null
    _min: LivroMinAggregateOutputType | null
    _max: LivroMaxAggregateOutputType | null
  }

  export type LivroAvgAggregateOutputType = {
    idlivro: number | null
    idautor: number | null
  }

  export type LivroSumAggregateOutputType = {
    idlivro: number | null
    idautor: number | null
  }

  export type LivroMinAggregateOutputType = {
    idlivro: number | null
    idautor: number | null
    titulo: string | null
  }

  export type LivroMaxAggregateOutputType = {
    idlivro: number | null
    idautor: number | null
    titulo: string | null
  }

  export type LivroCountAggregateOutputType = {
    idlivro: number
    idautor: number
    titulo: number
    _all: number
  }


  export type LivroAvgAggregateInputType = {
    idlivro?: true
    idautor?: true
  }

  export type LivroSumAggregateInputType = {
    idlivro?: true
    idautor?: true
  }

  export type LivroMinAggregateInputType = {
    idlivro?: true
    idautor?: true
    titulo?: true
  }

  export type LivroMaxAggregateInputType = {
    idlivro?: true
    idautor?: true
    titulo?: true
  }

  export type LivroCountAggregateInputType = {
    idlivro?: true
    idautor?: true
    titulo?: true
    _all?: true
  }

  export type LivroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which livro to aggregate.
     */
    where?: livroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of livros to fetch.
     */
    orderBy?: livroOrderByWithRelationInput | livroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: livroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` livros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` livros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned livros
    **/
    _count?: true | LivroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LivroAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LivroSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LivroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LivroMaxAggregateInputType
  }

  export type GetLivroAggregateType<T extends LivroAggregateArgs> = {
        [P in keyof T & keyof AggregateLivro]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLivro[P]>
      : GetScalarType<T[P], AggregateLivro[P]>
  }




  export type livroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: livroWhereInput
    orderBy?: livroOrderByWithAggregationInput | livroOrderByWithAggregationInput[]
    by: LivroScalarFieldEnum[] | LivroScalarFieldEnum
    having?: livroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LivroCountAggregateInputType | true
    _avg?: LivroAvgAggregateInputType
    _sum?: LivroSumAggregateInputType
    _min?: LivroMinAggregateInputType
    _max?: LivroMaxAggregateInputType
  }

  export type LivroGroupByOutputType = {
    idlivro: number
    idautor: number
    titulo: string | null
    _count: LivroCountAggregateOutputType | null
    _avg: LivroAvgAggregateOutputType | null
    _sum: LivroSumAggregateOutputType | null
    _min: LivroMinAggregateOutputType | null
    _max: LivroMaxAggregateOutputType | null
  }

  type GetLivroGroupByPayload<T extends livroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LivroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LivroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LivroGroupByOutputType[P]>
            : GetScalarType<T[P], LivroGroupByOutputType[P]>
        }
      >
    >


  export type livroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idlivro?: boolean
    idautor?: boolean
    titulo?: boolean
    autor?: boolean | autorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["livro"]>

  export type livroSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idlivro?: boolean
    idautor?: boolean
    titulo?: boolean
    autor?: boolean | autorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["livro"]>

  export type livroSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    idlivro?: boolean
    idautor?: boolean
    titulo?: boolean
    autor?: boolean | autorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["livro"]>

  export type livroSelectScalar = {
    idlivro?: boolean
    idautor?: boolean
    titulo?: boolean
  }

  export type livroOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"idlivro" | "idautor" | "titulo", ExtArgs["result"]["livro"]>
  export type livroInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    autor?: boolean | autorDefaultArgs<ExtArgs>
  }
  export type livroIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    autor?: boolean | autorDefaultArgs<ExtArgs>
  }
  export type livroIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    autor?: boolean | autorDefaultArgs<ExtArgs>
  }

  export type $livroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "livro"
    objects: {
      autor: Prisma.$autorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      idlivro: number
      idautor: number
      titulo: string | null
    }, ExtArgs["result"]["livro"]>
    composites: {}
  }

  type livroGetPayload<S extends boolean | null | undefined | livroDefaultArgs> = $Result.GetResult<Prisma.$livroPayload, S>

  type livroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<livroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LivroCountAggregateInputType | true
    }

  export interface livroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['livro'], meta: { name: 'livro' } }
    /**
     * Find zero or one Livro that matches the filter.
     * @param {livroFindUniqueArgs} args - Arguments to find a Livro
     * @example
     * // Get one Livro
     * const livro = await prisma.livro.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends livroFindUniqueArgs>(args: SelectSubset<T, livroFindUniqueArgs<ExtArgs>>): Prisma__livroClient<$Result.GetResult<Prisma.$livroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Livro that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {livroFindUniqueOrThrowArgs} args - Arguments to find a Livro
     * @example
     * // Get one Livro
     * const livro = await prisma.livro.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends livroFindUniqueOrThrowArgs>(args: SelectSubset<T, livroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__livroClient<$Result.GetResult<Prisma.$livroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Livro that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {livroFindFirstArgs} args - Arguments to find a Livro
     * @example
     * // Get one Livro
     * const livro = await prisma.livro.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends livroFindFirstArgs>(args?: SelectSubset<T, livroFindFirstArgs<ExtArgs>>): Prisma__livroClient<$Result.GetResult<Prisma.$livroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Livro that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {livroFindFirstOrThrowArgs} args - Arguments to find a Livro
     * @example
     * // Get one Livro
     * const livro = await prisma.livro.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends livroFindFirstOrThrowArgs>(args?: SelectSubset<T, livroFindFirstOrThrowArgs<ExtArgs>>): Prisma__livroClient<$Result.GetResult<Prisma.$livroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Livros that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {livroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Livros
     * const livros = await prisma.livro.findMany()
     * 
     * // Get first 10 Livros
     * const livros = await prisma.livro.findMany({ take: 10 })
     * 
     * // Only select the `idlivro`
     * const livroWithIdlivroOnly = await prisma.livro.findMany({ select: { idlivro: true } })
     * 
     */
    findMany<T extends livroFindManyArgs>(args?: SelectSubset<T, livroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$livroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Livro.
     * @param {livroCreateArgs} args - Arguments to create a Livro.
     * @example
     * // Create one Livro
     * const Livro = await prisma.livro.create({
     *   data: {
     *     // ... data to create a Livro
     *   }
     * })
     * 
     */
    create<T extends livroCreateArgs>(args: SelectSubset<T, livroCreateArgs<ExtArgs>>): Prisma__livroClient<$Result.GetResult<Prisma.$livroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Livros.
     * @param {livroCreateManyArgs} args - Arguments to create many Livros.
     * @example
     * // Create many Livros
     * const livro = await prisma.livro.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends livroCreateManyArgs>(args?: SelectSubset<T, livroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Livros and returns the data saved in the database.
     * @param {livroCreateManyAndReturnArgs} args - Arguments to create many Livros.
     * @example
     * // Create many Livros
     * const livro = await prisma.livro.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Livros and only return the `idlivro`
     * const livroWithIdlivroOnly = await prisma.livro.createManyAndReturn({
     *   select: { idlivro: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends livroCreateManyAndReturnArgs>(args?: SelectSubset<T, livroCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$livroPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Livro.
     * @param {livroDeleteArgs} args - Arguments to delete one Livro.
     * @example
     * // Delete one Livro
     * const Livro = await prisma.livro.delete({
     *   where: {
     *     // ... filter to delete one Livro
     *   }
     * })
     * 
     */
    delete<T extends livroDeleteArgs>(args: SelectSubset<T, livroDeleteArgs<ExtArgs>>): Prisma__livroClient<$Result.GetResult<Prisma.$livroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Livro.
     * @param {livroUpdateArgs} args - Arguments to update one Livro.
     * @example
     * // Update one Livro
     * const livro = await prisma.livro.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends livroUpdateArgs>(args: SelectSubset<T, livroUpdateArgs<ExtArgs>>): Prisma__livroClient<$Result.GetResult<Prisma.$livroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Livros.
     * @param {livroDeleteManyArgs} args - Arguments to filter Livros to delete.
     * @example
     * // Delete a few Livros
     * const { count } = await prisma.livro.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends livroDeleteManyArgs>(args?: SelectSubset<T, livroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Livros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {livroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Livros
     * const livro = await prisma.livro.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends livroUpdateManyArgs>(args: SelectSubset<T, livroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Livros and returns the data updated in the database.
     * @param {livroUpdateManyAndReturnArgs} args - Arguments to update many Livros.
     * @example
     * // Update many Livros
     * const livro = await prisma.livro.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Livros and only return the `idlivro`
     * const livroWithIdlivroOnly = await prisma.livro.updateManyAndReturn({
     *   select: { idlivro: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends livroUpdateManyAndReturnArgs>(args: SelectSubset<T, livroUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$livroPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Livro.
     * @param {livroUpsertArgs} args - Arguments to update or create a Livro.
     * @example
     * // Update or create a Livro
     * const livro = await prisma.livro.upsert({
     *   create: {
     *     // ... data to create a Livro
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Livro we want to update
     *   }
     * })
     */
    upsert<T extends livroUpsertArgs>(args: SelectSubset<T, livroUpsertArgs<ExtArgs>>): Prisma__livroClient<$Result.GetResult<Prisma.$livroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Livros.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {livroCountArgs} args - Arguments to filter Livros to count.
     * @example
     * // Count the number of Livros
     * const count = await prisma.livro.count({
     *   where: {
     *     // ... the filter for the Livros we want to count
     *   }
     * })
    **/
    count<T extends livroCountArgs>(
      args?: Subset<T, livroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LivroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Livro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LivroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LivroAggregateArgs>(args: Subset<T, LivroAggregateArgs>): Prisma.PrismaPromise<GetLivroAggregateType<T>>

    /**
     * Group by Livro.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {livroGroupByArgs} args - Group by arguments.
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
      T extends livroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: livroGroupByArgs['orderBy'] }
        : { orderBy?: livroGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, livroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLivroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the livro model
   */
  readonly fields: livroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for livro.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__livroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    autor<T extends autorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, autorDefaultArgs<ExtArgs>>): Prisma__autorClient<$Result.GetResult<Prisma.$autorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the livro model
   */
  interface livroFieldRefs {
    readonly idlivro: FieldRef<"livro", 'Int'>
    readonly idautor: FieldRef<"livro", 'Int'>
    readonly titulo: FieldRef<"livro", 'String'>
  }
    

  // Custom InputTypes
  /**
   * livro findUnique
   */
  export type livroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the livro
     */
    select?: livroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the livro
     */
    omit?: livroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: livroInclude<ExtArgs> | null
    /**
     * Filter, which livro to fetch.
     */
    where: livroWhereUniqueInput
  }

  /**
   * livro findUniqueOrThrow
   */
  export type livroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the livro
     */
    select?: livroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the livro
     */
    omit?: livroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: livroInclude<ExtArgs> | null
    /**
     * Filter, which livro to fetch.
     */
    where: livroWhereUniqueInput
  }

  /**
   * livro findFirst
   */
  export type livroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the livro
     */
    select?: livroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the livro
     */
    omit?: livroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: livroInclude<ExtArgs> | null
    /**
     * Filter, which livro to fetch.
     */
    where?: livroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of livros to fetch.
     */
    orderBy?: livroOrderByWithRelationInput | livroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for livros.
     */
    cursor?: livroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` livros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` livros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of livros.
     */
    distinct?: LivroScalarFieldEnum | LivroScalarFieldEnum[]
  }

  /**
   * livro findFirstOrThrow
   */
  export type livroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the livro
     */
    select?: livroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the livro
     */
    omit?: livroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: livroInclude<ExtArgs> | null
    /**
     * Filter, which livro to fetch.
     */
    where?: livroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of livros to fetch.
     */
    orderBy?: livroOrderByWithRelationInput | livroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for livros.
     */
    cursor?: livroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` livros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` livros.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of livros.
     */
    distinct?: LivroScalarFieldEnum | LivroScalarFieldEnum[]
  }

  /**
   * livro findMany
   */
  export type livroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the livro
     */
    select?: livroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the livro
     */
    omit?: livroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: livroInclude<ExtArgs> | null
    /**
     * Filter, which livros to fetch.
     */
    where?: livroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of livros to fetch.
     */
    orderBy?: livroOrderByWithRelationInput | livroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing livros.
     */
    cursor?: livroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` livros from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` livros.
     */
    skip?: number
    distinct?: LivroScalarFieldEnum | LivroScalarFieldEnum[]
  }

  /**
   * livro create
   */
  export type livroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the livro
     */
    select?: livroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the livro
     */
    omit?: livroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: livroInclude<ExtArgs> | null
    /**
     * The data needed to create a livro.
     */
    data: XOR<livroCreateInput, livroUncheckedCreateInput>
  }

  /**
   * livro createMany
   */
  export type livroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many livros.
     */
    data: livroCreateManyInput | livroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * livro createManyAndReturn
   */
  export type livroCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the livro
     */
    select?: livroSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the livro
     */
    omit?: livroOmit<ExtArgs> | null
    /**
     * The data used to create many livros.
     */
    data: livroCreateManyInput | livroCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: livroIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * livro update
   */
  export type livroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the livro
     */
    select?: livroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the livro
     */
    omit?: livroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: livroInclude<ExtArgs> | null
    /**
     * The data needed to update a livro.
     */
    data: XOR<livroUpdateInput, livroUncheckedUpdateInput>
    /**
     * Choose, which livro to update.
     */
    where: livroWhereUniqueInput
  }

  /**
   * livro updateMany
   */
  export type livroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update livros.
     */
    data: XOR<livroUpdateManyMutationInput, livroUncheckedUpdateManyInput>
    /**
     * Filter which livros to update
     */
    where?: livroWhereInput
    /**
     * Limit how many livros to update.
     */
    limit?: number
  }

  /**
   * livro updateManyAndReturn
   */
  export type livroUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the livro
     */
    select?: livroSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the livro
     */
    omit?: livroOmit<ExtArgs> | null
    /**
     * The data used to update livros.
     */
    data: XOR<livroUpdateManyMutationInput, livroUncheckedUpdateManyInput>
    /**
     * Filter which livros to update
     */
    where?: livroWhereInput
    /**
     * Limit how many livros to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: livroIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * livro upsert
   */
  export type livroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the livro
     */
    select?: livroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the livro
     */
    omit?: livroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: livroInclude<ExtArgs> | null
    /**
     * The filter to search for the livro to update in case it exists.
     */
    where: livroWhereUniqueInput
    /**
     * In case the livro found by the `where` argument doesn't exist, create a new livro with this data.
     */
    create: XOR<livroCreateInput, livroUncheckedCreateInput>
    /**
     * In case the livro was found with the provided `where` argument, update it with this data.
     */
    update: XOR<livroUpdateInput, livroUncheckedUpdateInput>
  }

  /**
   * livro delete
   */
  export type livroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the livro
     */
    select?: livroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the livro
     */
    omit?: livroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: livroInclude<ExtArgs> | null
    /**
     * Filter which livro to delete.
     */
    where: livroWhereUniqueInput
  }

  /**
   * livro deleteMany
   */
  export type livroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which livros to delete
     */
    where?: livroWhereInput
    /**
     * Limit how many livros to delete.
     */
    limit?: number
  }

  /**
   * livro without action
   */
  export type livroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the livro
     */
    select?: livroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the livro
     */
    omit?: livroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: livroInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AutorScalarFieldEnum: {
    idautor: 'idautor',
    nome: 'nome'
  };

  export type AutorScalarFieldEnum = (typeof AutorScalarFieldEnum)[keyof typeof AutorScalarFieldEnum]


  export const LivroScalarFieldEnum: {
    idlivro: 'idlivro',
    idautor: 'idautor',
    titulo: 'titulo'
  };

  export type LivroScalarFieldEnum = (typeof LivroScalarFieldEnum)[keyof typeof LivroScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type autorWhereInput = {
    AND?: autorWhereInput | autorWhereInput[]
    OR?: autorWhereInput[]
    NOT?: autorWhereInput | autorWhereInput[]
    idautor?: IntFilter<"autor"> | number
    nome?: StringNullableFilter<"autor"> | string | null
    livro?: LivroListRelationFilter
  }

  export type autorOrderByWithRelationInput = {
    idautor?: SortOrder
    nome?: SortOrderInput | SortOrder
    livro?: livroOrderByRelationAggregateInput
  }

  export type autorWhereUniqueInput = Prisma.AtLeast<{
    idautor?: number
    AND?: autorWhereInput | autorWhereInput[]
    OR?: autorWhereInput[]
    NOT?: autorWhereInput | autorWhereInput[]
    nome?: StringNullableFilter<"autor"> | string | null
    livro?: LivroListRelationFilter
  }, "idautor">

  export type autorOrderByWithAggregationInput = {
    idautor?: SortOrder
    nome?: SortOrderInput | SortOrder
    _count?: autorCountOrderByAggregateInput
    _avg?: autorAvgOrderByAggregateInput
    _max?: autorMaxOrderByAggregateInput
    _min?: autorMinOrderByAggregateInput
    _sum?: autorSumOrderByAggregateInput
  }

  export type autorScalarWhereWithAggregatesInput = {
    AND?: autorScalarWhereWithAggregatesInput | autorScalarWhereWithAggregatesInput[]
    OR?: autorScalarWhereWithAggregatesInput[]
    NOT?: autorScalarWhereWithAggregatesInput | autorScalarWhereWithAggregatesInput[]
    idautor?: IntWithAggregatesFilter<"autor"> | number
    nome?: StringNullableWithAggregatesFilter<"autor"> | string | null
  }

  export type livroWhereInput = {
    AND?: livroWhereInput | livroWhereInput[]
    OR?: livroWhereInput[]
    NOT?: livroWhereInput | livroWhereInput[]
    idlivro?: IntFilter<"livro"> | number
    idautor?: IntFilter<"livro"> | number
    titulo?: StringNullableFilter<"livro"> | string | null
    autor?: XOR<AutorScalarRelationFilter, autorWhereInput>
  }

  export type livroOrderByWithRelationInput = {
    idlivro?: SortOrder
    idautor?: SortOrder
    titulo?: SortOrderInput | SortOrder
    autor?: autorOrderByWithRelationInput
  }

  export type livroWhereUniqueInput = Prisma.AtLeast<{
    idlivro?: number
    AND?: livroWhereInput | livroWhereInput[]
    OR?: livroWhereInput[]
    NOT?: livroWhereInput | livroWhereInput[]
    idautor?: IntFilter<"livro"> | number
    titulo?: StringNullableFilter<"livro"> | string | null
    autor?: XOR<AutorScalarRelationFilter, autorWhereInput>
  }, "idlivro">

  export type livroOrderByWithAggregationInput = {
    idlivro?: SortOrder
    idautor?: SortOrder
    titulo?: SortOrderInput | SortOrder
    _count?: livroCountOrderByAggregateInput
    _avg?: livroAvgOrderByAggregateInput
    _max?: livroMaxOrderByAggregateInput
    _min?: livroMinOrderByAggregateInput
    _sum?: livroSumOrderByAggregateInput
  }

  export type livroScalarWhereWithAggregatesInput = {
    AND?: livroScalarWhereWithAggregatesInput | livroScalarWhereWithAggregatesInput[]
    OR?: livroScalarWhereWithAggregatesInput[]
    NOT?: livroScalarWhereWithAggregatesInput | livroScalarWhereWithAggregatesInput[]
    idlivro?: IntWithAggregatesFilter<"livro"> | number
    idautor?: IntWithAggregatesFilter<"livro"> | number
    titulo?: StringNullableWithAggregatesFilter<"livro"> | string | null
  }

  export type autorCreateInput = {
    nome?: string | null
    livro?: livroCreateNestedManyWithoutAutorInput
  }

  export type autorUncheckedCreateInput = {
    idautor?: number
    nome?: string | null
    livro?: livroUncheckedCreateNestedManyWithoutAutorInput
  }

  export type autorUpdateInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    livro?: livroUpdateManyWithoutAutorNestedInput
  }

  export type autorUncheckedUpdateInput = {
    idautor?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
    livro?: livroUncheckedUpdateManyWithoutAutorNestedInput
  }

  export type autorCreateManyInput = {
    idautor?: number
    nome?: string | null
  }

  export type autorUpdateManyMutationInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type autorUncheckedUpdateManyInput = {
    idautor?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type livroCreateInput = {
    titulo?: string | null
    autor: autorCreateNestedOneWithoutLivroInput
  }

  export type livroUncheckedCreateInput = {
    idlivro?: number
    idautor: number
    titulo?: string | null
  }

  export type livroUpdateInput = {
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
    autor?: autorUpdateOneRequiredWithoutLivroNestedInput
  }

  export type livroUncheckedUpdateInput = {
    idlivro?: IntFieldUpdateOperationsInput | number
    idautor?: IntFieldUpdateOperationsInput | number
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type livroCreateManyInput = {
    idlivro?: number
    idautor: number
    titulo?: string | null
  }

  export type livroUpdateManyMutationInput = {
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type livroUncheckedUpdateManyInput = {
    idlivro?: IntFieldUpdateOperationsInput | number
    idautor?: IntFieldUpdateOperationsInput | number
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type LivroListRelationFilter = {
    every?: livroWhereInput
    some?: livroWhereInput
    none?: livroWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type livroOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type autorCountOrderByAggregateInput = {
    idautor?: SortOrder
    nome?: SortOrder
  }

  export type autorAvgOrderByAggregateInput = {
    idautor?: SortOrder
  }

  export type autorMaxOrderByAggregateInput = {
    idautor?: SortOrder
    nome?: SortOrder
  }

  export type autorMinOrderByAggregateInput = {
    idautor?: SortOrder
    nome?: SortOrder
  }

  export type autorSumOrderByAggregateInput = {
    idautor?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type AutorScalarRelationFilter = {
    is?: autorWhereInput
    isNot?: autorWhereInput
  }

  export type livroCountOrderByAggregateInput = {
    idlivro?: SortOrder
    idautor?: SortOrder
    titulo?: SortOrder
  }

  export type livroAvgOrderByAggregateInput = {
    idlivro?: SortOrder
    idautor?: SortOrder
  }

  export type livroMaxOrderByAggregateInput = {
    idlivro?: SortOrder
    idautor?: SortOrder
    titulo?: SortOrder
  }

  export type livroMinOrderByAggregateInput = {
    idlivro?: SortOrder
    idautor?: SortOrder
    titulo?: SortOrder
  }

  export type livroSumOrderByAggregateInput = {
    idlivro?: SortOrder
    idautor?: SortOrder
  }

  export type livroCreateNestedManyWithoutAutorInput = {
    create?: XOR<livroCreateWithoutAutorInput, livroUncheckedCreateWithoutAutorInput> | livroCreateWithoutAutorInput[] | livroUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: livroCreateOrConnectWithoutAutorInput | livroCreateOrConnectWithoutAutorInput[]
    createMany?: livroCreateManyAutorInputEnvelope
    connect?: livroWhereUniqueInput | livroWhereUniqueInput[]
  }

  export type livroUncheckedCreateNestedManyWithoutAutorInput = {
    create?: XOR<livroCreateWithoutAutorInput, livroUncheckedCreateWithoutAutorInput> | livroCreateWithoutAutorInput[] | livroUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: livroCreateOrConnectWithoutAutorInput | livroCreateOrConnectWithoutAutorInput[]
    createMany?: livroCreateManyAutorInputEnvelope
    connect?: livroWhereUniqueInput | livroWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type livroUpdateManyWithoutAutorNestedInput = {
    create?: XOR<livroCreateWithoutAutorInput, livroUncheckedCreateWithoutAutorInput> | livroCreateWithoutAutorInput[] | livroUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: livroCreateOrConnectWithoutAutorInput | livroCreateOrConnectWithoutAutorInput[]
    upsert?: livroUpsertWithWhereUniqueWithoutAutorInput | livroUpsertWithWhereUniqueWithoutAutorInput[]
    createMany?: livroCreateManyAutorInputEnvelope
    set?: livroWhereUniqueInput | livroWhereUniqueInput[]
    disconnect?: livroWhereUniqueInput | livroWhereUniqueInput[]
    delete?: livroWhereUniqueInput | livroWhereUniqueInput[]
    connect?: livroWhereUniqueInput | livroWhereUniqueInput[]
    update?: livroUpdateWithWhereUniqueWithoutAutorInput | livroUpdateWithWhereUniqueWithoutAutorInput[]
    updateMany?: livroUpdateManyWithWhereWithoutAutorInput | livroUpdateManyWithWhereWithoutAutorInput[]
    deleteMany?: livroScalarWhereInput | livroScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type livroUncheckedUpdateManyWithoutAutorNestedInput = {
    create?: XOR<livroCreateWithoutAutorInput, livroUncheckedCreateWithoutAutorInput> | livroCreateWithoutAutorInput[] | livroUncheckedCreateWithoutAutorInput[]
    connectOrCreate?: livroCreateOrConnectWithoutAutorInput | livroCreateOrConnectWithoutAutorInput[]
    upsert?: livroUpsertWithWhereUniqueWithoutAutorInput | livroUpsertWithWhereUniqueWithoutAutorInput[]
    createMany?: livroCreateManyAutorInputEnvelope
    set?: livroWhereUniqueInput | livroWhereUniqueInput[]
    disconnect?: livroWhereUniqueInput | livroWhereUniqueInput[]
    delete?: livroWhereUniqueInput | livroWhereUniqueInput[]
    connect?: livroWhereUniqueInput | livroWhereUniqueInput[]
    update?: livroUpdateWithWhereUniqueWithoutAutorInput | livroUpdateWithWhereUniqueWithoutAutorInput[]
    updateMany?: livroUpdateManyWithWhereWithoutAutorInput | livroUpdateManyWithWhereWithoutAutorInput[]
    deleteMany?: livroScalarWhereInput | livroScalarWhereInput[]
  }

  export type autorCreateNestedOneWithoutLivroInput = {
    create?: XOR<autorCreateWithoutLivroInput, autorUncheckedCreateWithoutLivroInput>
    connectOrCreate?: autorCreateOrConnectWithoutLivroInput
    connect?: autorWhereUniqueInput
  }

  export type autorUpdateOneRequiredWithoutLivroNestedInput = {
    create?: XOR<autorCreateWithoutLivroInput, autorUncheckedCreateWithoutLivroInput>
    connectOrCreate?: autorCreateOrConnectWithoutLivroInput
    upsert?: autorUpsertWithoutLivroInput
    connect?: autorWhereUniqueInput
    update?: XOR<XOR<autorUpdateToOneWithWhereWithoutLivroInput, autorUpdateWithoutLivroInput>, autorUncheckedUpdateWithoutLivroInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type livroCreateWithoutAutorInput = {
    titulo?: string | null
  }

  export type livroUncheckedCreateWithoutAutorInput = {
    idlivro?: number
    titulo?: string | null
  }

  export type livroCreateOrConnectWithoutAutorInput = {
    where: livroWhereUniqueInput
    create: XOR<livroCreateWithoutAutorInput, livroUncheckedCreateWithoutAutorInput>
  }

  export type livroCreateManyAutorInputEnvelope = {
    data: livroCreateManyAutorInput | livroCreateManyAutorInput[]
    skipDuplicates?: boolean
  }

  export type livroUpsertWithWhereUniqueWithoutAutorInput = {
    where: livroWhereUniqueInput
    update: XOR<livroUpdateWithoutAutorInput, livroUncheckedUpdateWithoutAutorInput>
    create: XOR<livroCreateWithoutAutorInput, livroUncheckedCreateWithoutAutorInput>
  }

  export type livroUpdateWithWhereUniqueWithoutAutorInput = {
    where: livroWhereUniqueInput
    data: XOR<livroUpdateWithoutAutorInput, livroUncheckedUpdateWithoutAutorInput>
  }

  export type livroUpdateManyWithWhereWithoutAutorInput = {
    where: livroScalarWhereInput
    data: XOR<livroUpdateManyMutationInput, livroUncheckedUpdateManyWithoutAutorInput>
  }

  export type livroScalarWhereInput = {
    AND?: livroScalarWhereInput | livroScalarWhereInput[]
    OR?: livroScalarWhereInput[]
    NOT?: livroScalarWhereInput | livroScalarWhereInput[]
    idlivro?: IntFilter<"livro"> | number
    idautor?: IntFilter<"livro"> | number
    titulo?: StringNullableFilter<"livro"> | string | null
  }

  export type autorCreateWithoutLivroInput = {
    nome?: string | null
  }

  export type autorUncheckedCreateWithoutLivroInput = {
    idautor?: number
    nome?: string | null
  }

  export type autorCreateOrConnectWithoutLivroInput = {
    where: autorWhereUniqueInput
    create: XOR<autorCreateWithoutLivroInput, autorUncheckedCreateWithoutLivroInput>
  }

  export type autorUpsertWithoutLivroInput = {
    update: XOR<autorUpdateWithoutLivroInput, autorUncheckedUpdateWithoutLivroInput>
    create: XOR<autorCreateWithoutLivroInput, autorUncheckedCreateWithoutLivroInput>
    where?: autorWhereInput
  }

  export type autorUpdateToOneWithWhereWithoutLivroInput = {
    where?: autorWhereInput
    data: XOR<autorUpdateWithoutLivroInput, autorUncheckedUpdateWithoutLivroInput>
  }

  export type autorUpdateWithoutLivroInput = {
    nome?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type autorUncheckedUpdateWithoutLivroInput = {
    idautor?: IntFieldUpdateOperationsInput | number
    nome?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type livroCreateManyAutorInput = {
    idlivro?: number
    titulo?: string | null
  }

  export type livroUpdateWithoutAutorInput = {
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type livroUncheckedUpdateWithoutAutorInput = {
    idlivro?: IntFieldUpdateOperationsInput | number
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type livroUncheckedUpdateManyWithoutAutorInput = {
    idlivro?: IntFieldUpdateOperationsInput | number
    titulo?: NullableStringFieldUpdateOperationsInput | string | null
  }



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