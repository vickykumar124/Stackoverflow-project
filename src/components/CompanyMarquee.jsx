export default function CompanyMarquee() {
  return (
    <div className="bg-white py-8">
      <div className="marquee">
        <div className="marquee__content">
          <span>Google</span>
          <span>OpenAI</span>
          <span>Microsoft</span>
          <span>Philips</span>
          <span>Indeed</span>
          <span>Expensify</span>
          <span>Slack</span>

          {/* duplicate */}
          <span>Google</span>
          <span>OpenAI</span>
          <span>Microsoft</span>
          <span>Philips</span>
          <span>Indeed</span>
          <span>Expensify</span>
          <span>Slack</span>
        </div>
      </div>
    </div>
  );
}
