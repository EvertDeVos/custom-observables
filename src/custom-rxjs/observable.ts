export class EzSubscription {
  unsubscribe(): void {}
}

export class EzObservable<T> {
  constructor() {}

  public subscribe(): EzSubscription {
    return new EzSubscription();
  }
}
