export default async function GET(req:any) {
    const url = new URL(req.url);
    const searchParams = url.searchParams;
    const queryParam = searchParams.get('queryParamName');
    // Use the queryParam value as needed
    return queryParam;
  }