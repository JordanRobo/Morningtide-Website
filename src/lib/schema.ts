import * as v from "valibot";

export const subscribeSchema = v.object({
	form_id: v.string(),
	name: v.optional(v.pipe(v.string(), v.nonEmpty("Please enter your name"), v.maxLength(100))),
	email: v.pipe(v.string(), v.nonEmpty("Please enter your email address"), v.email("Please enter a valid email address")),
});

export type SubscribeSchema = typeof subscribeSchema;

export const enquirySchema = v.object({
	form_id: v.string(),
	name: v.pipe(v.string(), v.nonEmpty("Please enter your name"), v.maxLength(100), v.regex(/^[\p{L}\p{M}\s\-'\.]+$/u, "Please enter a valid name")),
	email: v.pipe(v.string(), v.nonEmpty("Please enter your email address"), v.email("Please enter a valid email address")),
	mobile: v.pipe(v.string(), v.nonEmpty("Please enter your mobile number"), v.regex(/^[\+]?[\d\s\-\(\)]{10,20}$/, "Please enter a valid mobile number")),
	enquiry_service: v.pipe(v.string(), v.nonEmpty("Please select a service")),
	enquiry_referrer: v.optional(v.pipe(v.string(), v.maxLength(100), v.regex(/^[\p{L}\p{M}\s\-'\.]*$/u))),
	enquiry_message: v.optional(v.pipe(v.string(), v.minLength(10), v.maxLength(1000))),
});

export type EnquirySchema = typeof enquirySchema;
