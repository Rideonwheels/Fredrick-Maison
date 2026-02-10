import React, { useState, useEffect } from 'react';
import { Post } from '../types';
import { generateFeedPost } from '../geminiService';
import { MessageSquare, Heart, Share2, Send, Sparkles } from 'lucide-react';

const Feed: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [newPostContent, setNewPostContent] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const initialPosts: Post[] = [
    {
      id: '1',
      author: {
        id: 'u1',
        name: 'Etse Edem',
        title: 'CEO',
        company: 'Vertex AI',
        avatarUrl: 'https://picsum.photos/100/100?random=1'
      },
      content: "Just closed our Series B! The biggest learning? Don't undervalue your operational due diligence. It's not just about the product, it's about the machine that builds it.",
      timestamp: '2h ago',
      likes: 124,
      comments: 18,
      tags: ['Fundraising', 'ScaleUp']
    },
    {
      id: '2',
      author: {
        id: 'u2',
        name: 'Kobi Opoku',
        title: 'Managing Partner',
        company: 'Thorne Capital',
        avatarUrl: 'https://picsum.photos/100/100?random=2'
      },
      content: "Dining at the Club last night reminds me why in-person relationships matter. A 10-minute casual chat unlocked a partnership we've been chasing for months.",
      timestamp: '4h ago',
      likes: 89,
      comments: 42,
      tags: ['Networking', 'ClubLife']
    }
  ];

  useEffect(() => {
    setPosts(initialPosts);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCreatePost = () => {
    if (!newPostContent.trim()) return;
    const newPost: Post = {
      id: Date.now().toString(),
      author: {
        id: 'me',
        name: 'Fredrick Maison',
        title: 'Founding Member',
        company: 'The Executive',
        avatarUrl: 'https://picsum.photos/100/100'
      },
      content: newPostContent,
      timestamp: 'Just now',
      likes: 0,
      comments: 0,
      tags: ['General']
    };
    setPosts([newPost, ...posts]);
    setNewPostContent('');
  };

  const handleAIAssist = async () => {
    setIsGenerating(true);
    const content = await generateFeedPost();
    setNewPostContent(content);
    setIsGenerating(false);
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] py-8 font-sans text-[#0F172A]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-serif font-bold text-[#0F172A]">Club Life Feed</h1>
          <p className="text-slate-500 text-sm mt-1">Updates from the community</p>
        </div>

        {/* Create Post Widget */}
        <div className="bg-white shadow-lg border-t-4 border-[#C5A059] p-6 mb-8">
          <div className="flex space-x-4">
            <img 
              className="h-12 w-12 rounded-full object-cover border border-slate-200" 
              src="https://picsum.photos/100/100" 
              alt="Current User" 
            />
            <div className="flex-1">
              <textarea
                className="w-full border-none focus:ring-0 text-lg resize-none placeholder-slate-400 font-serif bg-transparent"
                rows={3}
                placeholder="Share a thought with the club..."
                value={newPostContent}
                onChange={(e) => setNewPostContent(e.target.value)}
              />
              <div className="mt-2 flex items-center justify-between border-t border-slate-100 pt-4">
                <button 
                  onClick={handleAIAssist}
                  disabled={isGenerating}
                  className="flex items-center text-[#C5A059] hover:text-[#b08d4b] text-xs font-bold uppercase tracking-wider transition-colors"
                >
                  <Sparkles className="w-4 h-4 mr-1.5" />
                  {isGenerating ? 'Drafting...' : 'AI Assist'}
                </button>
                <button 
                  onClick={handleCreatePost}
                  className="bg-[#0F172A] text-white px-8 py-2 text-xs font-bold uppercase tracking-wider hover:bg-[#C5A059] transition-colors flex items-center"
                >
                  <Send className="w-4 h-4 mr-2" /> Post
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Feed Items */}
        <div className="space-y-6">
          {posts.map((post) => (
            <div key={post.id} className="bg-white shadow-sm border border-slate-100">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img className="h-12 w-12 rounded-full border border-slate-100 object-cover" src={post.author.avatarUrl} alt={post.author.name} />
                  <div className="ml-4">
                    <h3 className="text-base font-bold text-[#0F172A]">{post.author.name}</h3>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#C5A059]">{post.author.title} @ {post.author.company}</p>
                  </div>
                  <span className="ml-auto text-xs text-slate-400 font-medium uppercase tracking-wide">{post.timestamp}</span>
                </div>
                
                <p className="text-slate-800 text-lg leading-relaxed whitespace-pre-wrap font-serif">
                  {post.content}
                </p>
                
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <span key={tag} className="inline-flex items-center px-2 py-1 bg-slate-50 text-[#0F172A] text-[10px] font-bold uppercase tracking-wider border border-slate-200">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="bg-[#fafafa] px-6 py-3 border-t border-slate-100 flex items-center justify-between text-slate-500">
                <button className="flex items-center space-x-2 hover:text-[#C5A059] transition-colors group">
                  <Heart className="w-5 h-5 group-hover:fill-current" />
                  <span className="text-xs font-bold uppercase tracking-wider">{post.likes} Likes</span>
                </button>
                <button className="flex items-center space-x-2 hover:text-[#0F172A] transition-colors">
                  <MessageSquare className="w-5 h-5" />
                  <span className="text-xs font-bold uppercase tracking-wider">{post.comments} Comments</span>
                </button>
                <button className="flex items-center space-x-2 hover:text-[#0F172A] transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feed;