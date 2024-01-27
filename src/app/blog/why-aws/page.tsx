export default function Page() {
    return (
        <>
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Why I am learning AWS?</h1>
            </div>
            <div className="text-pretty text-sm font-mono text-muted-foreground">
                <p className="pt-3">
                    As an iOS developer, you might wonder why I learn AWS (Amazon Web Services). Here are some compelling reasons:
                </p>
                <ul className="pt-3">
                    <li className="pt-3"><strong>Scalability:</strong> AWS provides a range of services that help you scale your applications easily. As your user base grows, AWS can handle the increased load, ensuring a smooth experience for your users.</li>
                    <li className="pt-3"><strong>Cost-Effective:</strong> With AWS, you only pay for what you use. This makes it a cost-effective solution for startups and businesses of all sizes.</li>
                    <li className="pt-3"><strong>Security:</strong> AWS provides robust security features that help protect your data and applications from threats.</li>
                    <li className="pt-3"><strong>Easy Integration:</strong> AWS provides SDKs for various languages including Swift, which makes it easy to integrate AWS services into your iOS applications.</li>
                    <li className="pt-3"><strong>Wide Range of Services:</strong> AWS provides a wide range of services including computing power, storage options, and databases. This allows you to choose the best options for your specific needs.</li>
                </ul>
                <p className="pt-3">
                    In conclusion, learning AWS can open up new opportunities for you as an iOS developer. It can help you build scalable, secure, and cost-effective applications, and can make you a more versatile developer.
                </p>
            </div>
        </>
    )
}