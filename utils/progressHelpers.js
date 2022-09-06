/**
 * Calculates the adjusted progress according to the specified
 * start and finish progress points.
 *
 * Adjusted progress won't start counting until the actual progress reaches
 * the specified starting point and it will continue counting until the
 * actual progress reaches the specified point.
 *
 * @param {Number} start The starting point of the adjusted progress (0 - 1)
 * @param {Number} finish The ending point of the adjusted progress (0 - 1)
 * @param {Number} progress
 * @returns
 */
const adjustProgress = (start, finish, progress) => {
  if (start > finish) throw new Error("Start shoulb be greater than finish");

  if (start < 0 || start > 1)
    throw new RangeError("Start should be between 0 and 1");

  if (finish < 0 || finish > 1)
    throw new RangeError("Finish should be between 0 and 1");

  if (progress < start) return 0;

  if (progress > finish) return 1;

  return (progress - start) / (finish - start);
};

export { adjustProgress };
