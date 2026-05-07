'use server'

export async function createRouteAssignment(formData: FormData) {
  // Simulate a delay to show loading state
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const folio = formData.get('folio');
  console.log('Mock: Creating route assignment with folio:', folio);
  
  // Return success for the mock presentation
  return { success: true };
}

export async function updateRoute(id: string, formData: FormData) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Mock: Updating route:', id, Object.fromEntries(formData));
    return { success: true };
}

export async function deleteRouteAssignment(id: string) {
    await new Promise(resolve => setTimeout(resolve, 500));
    console.log('Mock: Deleting assignment:', id);
    return { success: true };
}
