import { site } from "@/lib/site";

const logoUrl = "https://www.kilohanapreschool.com/assets/logo-email.png";

export type TourDetails = {
  parentName: string;
  email: string;
  phone: string;
  childAge: string;
  notes: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function shell(bodyHtml: string) {
  return `<!DOCTYPE html>
<html lang="en">
  <body style="margin:0;padding:0;background:#fbfaf6;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#fbfaf6;padding:24px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border:1px solid #e3e0d6;">
            <tr>
              <td align="center" style="padding:28px 24px 8px;">
                <img src="${logoUrl}" width="220" alt="Kilohana Preschool" style="display:block;width:220px;max-width:100%;height:auto;border:0;" />
              </td>
            </tr>
            <tr>
              <td style="padding:8px 32px 32px;font-family:Arial, Helvetica, sans-serif;color:#1e2f42;font-size:16px;line-height:1.55;">
                ${bodyHtml}
              </td>
            </tr>
            <tr>
              <td style="padding:16px 32px 24px;border-top:3px solid #4f7737;font-family:Arial, Helvetica, sans-serif;color:#435264;font-size:13px;line-height:1.5;">
                ${escapeHtml(site.name)}<br />
                ${escapeHtml(site.addressLines[0])}<br />
                ${escapeHtml(site.addressLines[1])}<br />
                <a href="tel:${site.phoneTel}" style="color:#4f7737;text-decoration:none;">${escapeHtml(site.phoneDisplay)}</a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export function officeTourEmail(details: TourDetails) {
  const notes = details.notes || "(no additional notes)";
  const rows = [
    ["Parent", details.parentName],
    ["Email", details.email],
    ["Phone", details.phone],
    ["Child's age", details.childAge],
    ["Note", notes],
  ];

  const body = `
    <p style="margin:0 0 16px;font-family:Arial, Helvetica, sans-serif;font-size:13px;letter-spacing:0.12em;text-transform:uppercase;color:#4f7737;">New tour request</p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
      ${rows
        .map(
          ([label, value]) => `<tr>
            <td style="padding:8px 0;border-bottom:1px solid #e3e0d6;font-family:Arial, Helvetica, sans-serif;font-size:13px;color:#435264;width:110px;vertical-align:top;">${escapeHtml(label)}</td>
            <td style="padding:8px 0;border-bottom:1px solid #e3e0d6;font-family:Arial, Helvetica, sans-serif;font-size:16px;color:#1e2f42;">${escapeHtml(value).replaceAll("\n", "<br />")}</td>
          </tr>`,
        )
        .join("")}
    </table>
    <p style="margin:20px 0 0;font-family:Arial, Helvetica, sans-serif;font-size:14px;color:#435264;">Reply to this message to write to the parent.</p>`;

  const text = [
    "New tour request",
    "",
    `Parent: ${details.parentName}`,
    `Email: ${details.email}`,
    `Phone: ${details.phone}`,
    `Child's age: ${details.childAge}`,
    "",
    notes,
    "",
    "Reply to this message to write to the parent.",
  ].join("\n");

  return {
    subject: `Tour request from ${details.parentName.replaceAll(/[\r\n]+/g, " ")}`,
    html: shell(body),
    text,
  };
}

export function parentTourEmail(parentName: string) {
  const body = `
    <p style="margin:0 0 12px;">Hello ${escapeHtml(parentName)},</p>
    <p style="margin:0 0 12px;">Your tour request was sent to Kilohana Preschool. The office will call you to set a time.</p>
    <p style="margin:0;">If you need us sooner, call <a href="tel:${site.phoneTel}" style="color:#df5026;text-decoration:none;">${escapeHtml(site.phoneDisplay)}</a>. The office is open Monday through Friday, 7:45am to 5:00pm.</p>`;

  const text = [
    `Hello ${parentName},`,
    "",
    "Your tour request was sent to Kilohana Preschool. The office will call you to set a time.",
    "",
    `If you need us sooner, call ${site.phoneDisplay}. The office is open Monday through Friday, 7:45am to 5:00pm.`,
    "",
    site.name,
    site.addressLines[0],
    site.addressLines[1],
  ].join("\n");

  return {
    subject: "We received your tour request",
    html: shell(body),
    text,
  };
}
