// TODO: body data validation

export default function validateRequest(request) {
  const errors = [];

  request = request.body;

  // Validate section schema
  if (!request.section || typeof request.section !== "object") {
  } else {
    if (!request.section.data || typeof request.section.data !== "object") {
      if (!request.section.data.title || typeof request.section.data.title !== "string") {
        errors.push("Invalid section data title");
      }
      if (!request.section.data.subtitle || typeof request.section.data.subtitle !== "string") {
        errors.push("Invalid section data subtitle");
      }
    }
    if (!request.section.metadata || typeof request.section.metadata !== "object") {
      if (!request.section.metadata.href || typeof request.section.metadata.href !== "string") {
        errors.push("Invalid section metadata href");
      }
    }
  }
  // Validate post schema
  if (!request.post || typeof request.post !== "object") {
  } else {
    if (!request.post.metadata || typeof request.post.metadata !== "object") {
      if (!request.post.metadata.slug || typeof request.post.metadata.slug !== "string") {
        errors.push("Invalid post metadata slug");
      }
      if (!request.post.metadata.date || typeof request.post.metadata.date !== "string") {
        errors.push("Invalid post metadata date");
      }
    }
    if (!request.post.header || typeof request.post.header !== "object") {
      if (!request.post.header.title || typeof request.post.header.title !== "string") {
        errors.push("Invalid post header title");
      }
      if (!request.post.header.description || typeof request.post.header.description !== "string") {
        errors.push("Invalid post header description");
      }
    }
    if (!request.post.body || typeof request.post.body !== "object") {
      // TODO: some validation on this object of arbitrary structure
    }
  }

  return errors;
}
