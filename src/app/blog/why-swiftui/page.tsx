export default function Page() {
    return (
        <>
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold">Why should use SwiftUI in 2024</h1>
            </div>
            <div className="text-pretty text-sm font-mono text-muted-foreground">
                <p className="pt-3">
                    SwiftUI, since its introduction in 2019, has made a significant impact on the iOS development ecosystem. As we look forward to 2024, there are several reasons why SwiftUI is the future of iOS development:
                </p>
                <ul className="pt-3">
                    <li className="pt-3"><strong>Declarative Syntax:</strong> SwiftUI's declarative syntax makes it easier to read and write UI code. It allows developers to write what they want to achieve, and SwiftUI takes care of the rest.</li>
                    <li className="pt-3"><strong>Live Preview:</strong> SwiftUI provides a live preview of your UI as you code. This feature significantly speeds up the development process as you can see the changes in real-time.</li>
                    <li className="pt-3"><strong>Less Code:</strong> With SwiftUI, developers can achieve the same functionality with less code compared to UIKit. This makes the code cleaner and easier to maintain.</li>
                    <li className="pt-3"><strong>Consistency Across Apple Devices:</strong> SwiftUI allows developers to create UIs that work across all Apple devices including iPhone, iPad, Mac, Apple Watch, and Apple TV. This makes it a great choice for multi-platform development.</li>
                    <li className="pt-3"><strong>Integration with Swift:</strong> SwiftUI is built with Swift, which is a powerful and easy-to-learn language. This makes it easier for developers to pick up SwiftUI if they are already familiar with Swift.</li>
                </ul>
                <p className="pt-3">
                    In conclusion, SwiftUI is a powerful framework that simplifies the process of developing beautiful and efficient user interfaces on Apple platforms. As Apple continues to invest and improve SwiftUI, it's a great time to start learning and using SwiftUI for your iOS development needs.
                </p>
            </div>
        </>
    )
}