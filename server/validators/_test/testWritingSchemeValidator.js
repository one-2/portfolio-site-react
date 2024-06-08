
// Example usage
const request = {
  tags: ["tag1", "tag2"],
  metadata: {
    slug: "example-slug",
    date: "2022-01-01",
    tags: ["tag1", "tag2"]
  },
  data: {
    title: "Example Title",
    subtitle: "Example Subtitle"
  },
  header: {
    title: "Example Header",
    description: "Example Description"
  },
  body: {
    text: "Example Body Text"
  },
  section: {
    data: {
      // section data properties
    },
    metadata: {
      // section metadata properties
    }
  },
  post: {
    metadata: {
      // post metadata properties
    },
    header: {
      // post header properties
    },
    body: {
      // post body properties
    }
  }
};

const validationErrors = validateRequest(request);
if (validationErrors.length > 0) {
  console.log("Validation errors:", validationErrors);
} else {
  console.log("Request is valid");
}
