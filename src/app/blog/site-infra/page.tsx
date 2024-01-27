
export default function Page() {

    const codeString = `
const nextConfig = {
  output: "export",
};

module.exports = nextConfig;
    `
    return (

   <>
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Infrasture of Current Static Site</h1>
        </div>
        <div className="text-pretty text-sm font-mono text-muted-foreground">
          For this website, it's hosted on the AWS. We are using
          <ul className="list-disc list-inside pt-3">
            <li>Route53</li>
            <li>CloudFront</li>
            <li>S3</li>
            <li>ACM</li>
            <li>CodePipeline</li>
            <li>API Gateway</li>
            <li>Lambda</li>
            <li>Dynamo DB</li>
            <li>SES</li>
          </ul>

          <p className="pt-3">
            For the hosting, we are using Github. For the frontend tool using the Next.js. But we are not running NextJS on s3. 
            NextJS support the static website. We only need to configure in <span className="bg-slate-100 italic font-semibold">next.config.js</span>. 
          </p>

          <pre className="bg-gray-800 text-white p-4 rounded-md overflow-auto mt-4 mb-4">
{codeString}
          </pre>
          <p className="pt-3">
            After that we can run <span className="bg-slate-100 italic font-semibold">npm run build</span>. We can found the <span className="bg-slate-100 italic font-semibold">out</span> folder. This website and blog are using static folder from that.
          </p>
          <img src="/systemdesign.png" alt="system design" className="w-full mt-10" />
        </div>
      </>
    )
  }