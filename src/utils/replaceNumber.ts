export const p2e = (s: any) =>
    s.toString().replace(/[۰-۹]/g, (d: string) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d));
  