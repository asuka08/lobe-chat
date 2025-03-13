'use client';

import { Result, Spin } from 'antd';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const CustomChatPage = () => {
  const searchParams = useSearchParams();
  const url = searchParams.get('url');
  const [iframeUrl, setIframeUrl] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    // console.log('原始 URL:', url);
    setLoading(true);
    setError('');

    if (!url) {
      setLoading(false);
      setError('未提供URL参数');
      return;
    }

    try {
      const decodedUrl = decodeURIComponent(url);
      // console.log('解码后的 URL:', decodedUrl);
      setIframeUrl(decodedUrl);
    } catch (error) {
      console.error('URL解析错误:', error);
      setError('URL解析错误');
    } finally {
      setLoading(false);
    }
  }, [url]);

  return (
    <div style={{ height: '100%', position: 'absolute', top: 0, width: '100%', zIndex: 100 }}>
      {loading ? (
        <div
          style={{
            alignItems: 'center',
            backgroundColor: '#fff',
            display: 'flex',
            height: '100%',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <Spin size="large" />
        </div>
      ) : error ? (
        <div
          style={{
            alignItems: 'center',
            backgroundColor: '#fff',
            display: 'flex',
            height: '100%',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <Result status="error" subTitle={error} title="加载失败" />
        </div>
      ) : (
        <iframe
          allowFullScreen
          onLoad={() => setLoading(false)}
          sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
          src={iframeUrl}
          style={{
            backgroundColor: '#fff',
            border: 'none',
            height: '100%',
            width: '100%',
          }}
          title="外部内容"
        />
      )}
    </div>
  );
};

export default CustomChatPage;
