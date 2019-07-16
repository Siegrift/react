const rules = {
  createHTML: (input) => input,
  createScript: (input) => input,
}

let trustedTypesPolicy = rules
if (typeof TrustedTypes !== 'undefined' && TrustedTypes.createPolicy) {
  trustedTypesPolicy = TrustedTypes.createPolicy('react', rules)
} else {
  console.warn('Trusted types are not available!')
}

export default trustedTypesPolicy