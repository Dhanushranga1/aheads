import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = "rajasekar.gopisetty@aheads.in";
// Once you verify aheads.in in Resend → change to: "Ahead Services <noreply@aheads.in>"
const FROM_EMAIL = "Ahead Services <onboarding@resend.dev>";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, company, service, message } = body;

        // Validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Name, email, and message are required fields" },
                { status: 400 }
            );
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: "Invalid email address" },
                { status: 400 }
            );
        }

        const serviceLabel: Record<string, string> = {
            sales: "Sales / Consultation",
            technical: "Technical Support",
            partnerships: "Partnerships",
            "iso-consulting": "ISO Certification Consulting",
            other: "Other",
        };

        const { error } = await resend.emails.send({
            from: FROM_EMAIL,
            to: TO_EMAIL,
            replyTo: email,
            subject: `New enquiry from ${name}${company ? ` – ${company}` : ""}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1e293b;">
                    <div style="background: #0f172a; padding: 28px 32px; border-radius: 8px 8px 0 0;">
                        <h1 style="margin: 0; color: #f97316; font-size: 20px;">New Contact Form Submission</h1>
                        <p style="margin: 6px 0 0; color: #94a3b8; font-size: 13px;">
                            Received ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST
                        </p>
                    </div>

                    <div style="background: #f8fafc; padding: 28px 32px; border: 1px solid #e2e8f0; border-top: none;">
                        <table style="width: 100%; border-collapse: collapse;">
                            <tr>
                                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; width: 140px;">
                                    <strong style="color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Name</strong>
                                </td>
                                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-size: 15px;">
                                    ${name}
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">
                                    <strong style="color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Email</strong>
                                </td>
                                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-size: 15px;">
                                    <a href="mailto:${email}" style="color: #f97316;">${email}</a>
                                </td>
                            </tr>
                            ${phone ? `
                            <tr>
                                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">
                                    <strong style="color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Phone</strong>
                                </td>
                                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-size: 15px;">
                                    <a href="tel:${phone}" style="color: #f97316;">${phone}</a>
                                </td>
                            </tr>
                            ` : ""}
                            ${company ? `
                            <tr>
                                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">
                                    <strong style="color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Company</strong>
                                </td>
                                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-size: 15px;">
                                    ${company}
                                </td>
                            </tr>
                            ` : ""}
                            ${service ? `
                            <tr>
                                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0;">
                                    <strong style="color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Enquiry Type</strong>
                                </td>
                                <td style="padding: 10px 0; border-bottom: 1px solid #e2e8f0; color: #1e293b; font-size: 15px;">
                                    ${serviceLabel[service] ?? service}
                                </td>
                            </tr>
                            ` : ""}
                        </table>

                        <div style="margin-top: 24px;">
                            <strong style="color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">Message</strong>
                            <div style="margin-top: 10px; padding: 16px; background: #fff; border: 1px solid #e2e8f0; border-radius: 6px; font-size: 15px; line-height: 1.6; color: #1e293b; white-space: pre-wrap;">
                                ${message}
                            </div>
                        </div>
                    </div>

                    <div style="background: #f1f5f9; padding: 16px 32px; border-radius: 0 0 8px 8px; border: 1px solid #e2e8f0; border-top: none;">
                        <p style="margin: 0; font-size: 12px; color: #94a3b8;">
                            Sent via aheads.in contact form · Reply directly to this email to respond to ${name}
                        </p>
                    </div>
                </div>
            `,
        });

        if (error) {
            console.error("Resend error:", error);
            return NextResponse.json(
                { error: "Failed to send email. Please try again or contact us directly." },
                { status: 500 }
            );
        }

        return NextResponse.json(
            {
                success: true,
                message: "Message sent. We'll be in touch within 24 hours.",
            },
            { status: 200 }
        );
    } catch (error) {
        console.error("Contact form error:", error);
        return NextResponse.json(
            { error: "Something went wrong. Please try again." },
            { status: 500 }
        );
    }
}
