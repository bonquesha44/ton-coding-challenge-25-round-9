export function main(ctx: TolkBuilder) {
  const count = ctx.uint("count", 0n);

  ctx.external("Add", (msg) => {
    count.set(count.get() + msg.body.uint(32));
  });

  ctx.external("Dec", (msg) => {
    count.set(count.get() - msg.body.uint(32));
  });

  ctx.getter("Get", () => {
    return count.get();
  });
}
